import { Button, SxProps } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

const ImageUploadButton = ({
    children,
    accept = 'image/jpeg, image/jpg, image/png',
    id,
    setPreviewImage,
    onChange,
    register,
    disabled,
    sx,
}: {
    children?: React.ReactNode;
    accept?: string;
    id?: string;
    setPreviewImage: (imageUrl: string) => void;
    onChange?: () => void;
    register?: UseFormRegisterReturn;
    disabled?: boolean;
    sx?: SxProps;
}) => {
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        // 파일이 선택되었고, 그 크기가 4MB를 초과하면 경고 메시지를 보여주고 함수를 빠져나갑니다.
        if (file && file.size > 4 * 1024 * 1024) {
            alert('파일 크기가 4MB를 초과하였습니다.');
            return;
        }

        if (e.target.files && e.target.files?.length && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target?.result as string);
                onChange && onChange();
            };
            if (file) reader.readAsDataURL(file);
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
