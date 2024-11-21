import { useState } from 'react';
import { Box, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as style from './InfoSortSelect.style';
import { ChevronDownIcon } from '@/components/Icons';

export default function InfoSortSelect() {
    const [value, setValue] = useState('최신순');
    const [open, setOpen] = useState(false);

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    return (
        <Box sx={style.selectContainerStyle}>
            <FormControl variant='outlined' sx={style.formControlStyles}>
                <Select
                    value={value}
                    onChange={handleChange}
                    sx={{
                        ...style.selectStyles,
                        '& .MuiSelect-icon': {
                            fontSize: '1rem',
                            color: 'livelyPrimary.2',
                            transform: open
                                    ? 'rotate(180deg)'
                                    : 'rotate(0deg)',                            
                        },
                    }}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    IconComponent={ChevronDownIcon}
                >
                    <MenuItem value='최신순' sx={{ typography: 'body3Medium' }}>
                        최신순
                    </MenuItem>
                    <MenuItem value='인기순' sx={{ typography: 'body3Medium' }}>
                        인기순
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
