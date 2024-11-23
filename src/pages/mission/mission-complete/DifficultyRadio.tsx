import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import Difficulty from './Difficulty';

export interface IDifficultyRadioProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    control: Control<any, any>;
}

const DifficultyRadio = ({ control, onChange }: IDifficultyRadioProps) => {
    const difficultyOptions = [2, 1, 0];
    return (
        <Controller
            control={control}
            name={'difficulty'}
            render={({ field }) => (
                <ToggleButtonGroup
                    value={field.value}
                    exclusive // 하나의 옵션만 선택 가능
                    onChange={(_, value) => {
                        // 선택 해제 방지
                        if (value !== null) field.onChange(value);
                    }}
                    aria-label='options'
                >
                    {difficultyOptions.map((option) => (
                        <ToggleButton
                            key={option}
                            value={option}
                            aria-label={`option${option}`}
                            onChange={onChange}
                        >
                            <Difficulty level={option} selected={null} />
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            )}
        />
    );
};

export default DifficultyRadio;
