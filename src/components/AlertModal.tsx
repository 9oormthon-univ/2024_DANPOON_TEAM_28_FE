import { Button, Modal, Stack, Typography } from '@mui/material';
import Logo from './Logo';

export interface IAlertModalProps {
    open: boolean;
    closeModal: () => void;
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
            sx={{
                width: 'calc(100vw - 2rem)',
                boxSizing: 'border-box',
                maxWidth: '20.5rem',
                padding: '1.5rem',
                pb: '1.375rem',
                borderRadius: '1.25rem',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'background.paper',
            }}
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
                        borderRadius: '0.625rem',
                        color: '#999',
                        width: '100%',
                        height: '3rem',
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
                        borderRadius: '0.625rem',
                        color: 'livelyPrimary.2',
                        width: '100%',
                        height: '3rem',
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
    closeModal,
    children,
    handlePositiveClick,
    handleNegativeClick,
}: IAlertModalProps) => {
    return (
        <Modal open={open} onClose={closeModal}>
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
