import { Button, SxProps } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';
import watermarkImageSrc from '@/assets/mission/stamp.png';

const ImageUploadButton = ({
    children,
    accept = 'image/jpeg, image/jpg, image/png',
    id,
    setPreviewImage,
    onChange,
    register,
    disabled,
    sx,
    setValue,
}: {
    children?: React.ReactNode;
    accept?: string;
    id?: string;
    setPreviewImage: (imageUrl: string) => void;
    onChange?: () => void;
    register?: UseFormRegisterReturn;
    disabled?: boolean;
    sx?: SxProps;
    setValue: (image: File) => void;
}) => {
    const addWatermark = async (file: File): Promise<File> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target?.result as string;

                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        reject(new Error('Canvas context not available'));
                        return;
                    }

                    // 원본 이미지 크기 설정
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);

                    // 워터마크 로드
                    const watermark = new Image();
                    watermark.src = watermarkImageSrc;

                    watermark.onload = () => {
                        // 워터마크 크기를 기준 이미지의 짧은 쪽에 맞춤
                        const scale =
                            Math.min(img.width, img.height) / watermark.width;
                        const wmWidth = watermark.width * scale;
                        const wmHeight = watermark.height * scale;

                        // 워터마크를 캔버스 중앙에 배치
                        const wmX = (canvas.width - wmWidth) / 2;
                        const wmY = (canvas.height - wmHeight) / 2;

                        ctx.drawImage(watermark, wmX, wmY, wmWidth, wmHeight);

                        // 캔버스를 Blob으로 변환
                        canvas.toBlob((blob) => {
                            if (blob) {
                                resolve(
                                    new File([blob], file.name, {
                                        type: file.type,
                                    })
                                );
                            } else {
                                reject(
                                    new Error(
                                        'Failed to create blob from canvas'
                                    )
                                );
                            }
                        }, file.type);
                    };

                    watermark.onerror = () =>
                        reject(new Error('Failed to load watermark image'));
                };

                img.onerror = () => reject(new Error('Failed to load image'));
            };

            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsDataURL(file);
        });
    };

    const handleImageChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files && e.target.files[0];

        if (file) {
            try {
                const watermarkedFile = await addWatermark(file);

                if (watermarkedFile) {
                    // 미리보기 이미지 설정
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        console.log('Preview URL:', e.target?.result); // 디버깅용 로그
                        setPreviewImage(e.target?.result as string); // 미리보기 이미지 설정
                    };
                    reader.readAsDataURL(watermarkedFile as Blob);

                    // React Hook Form에 값 설정
                    console.log('Watermarked File:', watermarkedFile); // 디버깅용 로그
                    setValue(watermarkedFile as unknown as File);
                    onChange && onChange();
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <Button component='label' sx={sx} disabled={disabled}>
            {children}
            <input
                type='file'
                accept={accept}
                style={{ display: 'none' }}
                id={id}
                name={id}
                {...register}
                onChange={handleImageChange}
            />
        </Button>
    );
};

export default ImageUploadButton;
