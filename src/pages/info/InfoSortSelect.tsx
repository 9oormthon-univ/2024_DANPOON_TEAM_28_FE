import { useState } from 'react';
import { Box, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as style from './InfoSortSelect.style';
import { ChevronDownIcon } from '@/components/Icons';

interface IInfoSortSelectProps{
    sortOption: string;
    onSortChange: (option:string) => void;
}

export default function InfoSortSelect({ sortOption, onSortChange }: IInfoSortSelectProps) {
    const [open, setOpen] = useState(false);

    return (
        <Box sx={style.selectContainerStyle}>
            <FormControl variant='outlined' sx={style.formControlStyles}>
                <Select
                    value={sortOption}
                    onChange={(e) => onSortChange(e.target.value)}
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
                    <MenuItem value='latest' sx={{ typography: 'body3Medium' }}>
                        최신순
                    </MenuItem>
                    <MenuItem value='popular' sx={{ typography: 'body3Medium' }}>
                        인기순
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
