import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import Difficulty from './Difficulty';
import { IMissionCompleteForm } from '@/types/IMissionCompleteForm';

export interface IDifficultyRadioProps {
    control: Control<IMissionCompleteForm, any>;
}

const DifficultyRadio = ({ control }: IDifficultyRadioProps) => {
    const difficultyOptions = [2, 1, 0];
    return (
        <Controller
            control={control}
            name={'difficulty'}
            render={({ field }) => (
                <ToggleButtonGroup
                    aria-labelledby='mission-difficulty-label'
                    value={field.value}
                    exclusive
                    onChange={(_, value) => {
                        if (value !== null) field.onChange(value);
                    }}
                    aria-label='options'
                    sx={{
                        '& .MuiToggleButton-root': {
                            border: 'none',
                        },
                        '& .Mui-selected': {
                            backgroundColor: 'transparent !important',
                        },
                        px: '0.75rem',
                    }}
                >
                    {difficultyOptions.map((option) => (
                        <ToggleButton
                            key={option}
                            value={option}
                            aria-label={`option${option}`}
                        >
                            <Difficulty level={option} selected={field.value} />
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            )}
        />
    );
};

export default DifficultyRadio;
