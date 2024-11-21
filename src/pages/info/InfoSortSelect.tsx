import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { formControlStyles, selectStyles } from './InfoSortSelect.style';

export default function InfoSortSelect() {
    // 기본값을 "최신순"으로 설정
    const [value, setValue] = React.useState('최신순');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth variant='outlined' sx={formControlStyles}>
                <Select
                    value={value}
                    onChange={handleChange}
                    inputProps={{
                        'aria-label': 'Without border',
                    }}
                    sx={selectStyles}
                >
                    {/* 두 개의 옵션만 제공 */}
                    <MenuItem value='최신순'>최신순</MenuItem>
                    <MenuItem value='인기순'>인기순</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
