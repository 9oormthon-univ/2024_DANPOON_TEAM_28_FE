import { Button, Modal, Stack, Typography } from '@mui/material';
import Logo from './Logo';
import * as styles from './AlertModal.style';

export interface IAlertModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    handlePositiveClick: () => void;
    handleNegativeClick: () => void;
}

export const ModalContent = ({
    handlePositiveClick,
    handleNegativeClick,
    children,
}: Pick<
    IAlertModalProps,
    'children' | 'handlePositiveClick' | 'handleNegativeClick'
>) => {
    return (
        <Stack
            sx={styles.modalContentStyle}
            direction={'column'}
            alignItems={'center'}
            spacing={2}
        >
            <Logo
                size={'small'}
                showName={false}
                style={{
                    height: '4.125rem',
                }}
            />
            {children}
            <Stack
                direction={'row'}
                justifyContent={'center'}
                spacing={1}
                sx={{
                    width: '100%',
                }}
            >
                <Button
                    variant={'outlined'}
                    sx={{
                        ...styles.buttonStyle,
                        color: '#999',
                        border: '2px solid #999',
                    }}
                    onClick={() => {
                        handleNegativeClick();
                    }}
                >
                    <Typography variant={'body3SemiBold'} color={'#999'}>
                        {'아니오'}
                    </Typography>
                </Button>
                <Button
                    variant={'outlined'}
                    sx={{
                        ...styles.buttonStyle,
                        color: 'livelyPrimary.2',
                        border: '2px solid',
                        borderColor: 'livelyPrimary.2',
                    }}
                    onClick={() => {
                        handlePositiveClick();
                    }}
                >
                    <Typography variant={'body3SemiBold'} color={'#000'}>
                        {'예'}
                    </Typography>
                </Button>
            </Stack>
        </Stack>
    );
};

const AlertModal = ({
    open,
    onClose,
    children,
    handlePositiveClick,
    handleNegativeClick,
}: IAlertModalProps) => {
    return (
        <Modal open={open} onClose={onClose}>
            <ModalContent
                handlePositiveClick={handlePositiveClick}
                handleNegativeClick={handleNegativeClick}
            >
                {children}
            </ModalContent>
        </Modal>
    );
};

export default AlertModal;
