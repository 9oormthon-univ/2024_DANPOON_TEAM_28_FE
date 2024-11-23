import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import DifficultyRadio, {
    IDifficultyRadioProps,
} from '@/pages/mission/mission-complete/DifficultyRadio';

const meta: Meta<IDifficultyRadioProps> = {
    title: 'mission-complete/DifficultyRadio',
    component: DifficultyRadio,
    argTypes: {
        onChange: { action: 'changed' }, // Storybook의 액션 로깅 설정
    },
};

export default meta;

type Story = StoryObj<IDifficultyRadioProps>;

// 기본 예제
export const Default: Story = {
    render: (args) => {
        // React Hook Form 초기화
        const { control } = useForm({
            defaultValues: {
                difficulty: 'option1', // 초기값 설정
            },
        });

        return <DifficultyRadio {...args} control={control} />;
    },
};

// 사용자 지정 예제
export const CustomOptions: Story = {
    render: (args) => {
        const { control } = useForm({
            defaultValues: {
                difficulty: 'option2', // 초기값 설정
            },
        });

        return (
            <DifficultyRadio
                {...args}
                control={control}
                onChange={(e) => console.log('Selected:', e.target.value)}
            />
        );
    },
};
