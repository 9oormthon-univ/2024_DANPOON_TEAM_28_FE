import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import DifficultyRadio, {
    IDifficultyRadioProps,
} from '@/pages/mission/mission-complete/DifficultyRadio';
import { IMissionCompleteForm } from '@/types/IMissionCompleteForm';

const meta: Meta<IDifficultyRadioProps> = {
    title: 'mission-complete/DifficultyRadio',
    component: DifficultyRadio,
    argTypes: {
        onChange: { action: 'changed' }, // Storybook의 액션 로깅 설정
    },
};

export default meta;

type Story = StoryObj<IDifficultyRadioProps>;

export const Default: Story = {
    render: (args) => {
        const { control } = useForm<IMissionCompleteForm>({
            defaultValues: {
                difficulty: undefined,
            },
        });

        return <DifficultyRadio {...args} control={control} />;
    },
};

// 사용자 지정 예제
export const CustomOptions: Story = {
    render: (args) => {
        const { control } = useForm<IMissionCompleteForm>({
            defaultValues: {
                difficulty: undefined,
            },
        });

        return <DifficultyRadio {...args} control={control} />;
    },
};
