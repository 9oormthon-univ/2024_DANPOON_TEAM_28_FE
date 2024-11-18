import React, { useState, useEffect, useCallback } from 'react';
import { Box, IconButton, InputBase } from '@mui/material';
import * as style from './SearchBar.style';
import SearchIcon from './Icons/SearchIcon';
import { debounce } from 'lodash';

type SearchBarProps = {
    page: 'infoBoard' | 'mapPage';
    onSearch?: (searchText: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ page, onSearch }) => {
    const [searchText, setSearchText] = useState('');

    // 실시간 검색 결과가 필요한 경우 사용
    const debouncedSearch = useCallback(
        debounce((text: string) => {
            if (onSearch) onSearch(text);
        }, 300),
        [onSearch] // 최신 onSearch 참조
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setSearchText(text);
        debouncedSearch(text);
    };

    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);

    const pageStyle =
        page === 'infoBoard' ? style.infoBoardStyle : style.mapPageStyle;

    return (
        <Box sx={pageStyle}>
            <InputBase
                value={searchText}
                onChange={handleChange}
                placeholder={
                    page === 'infoBoard'
                        ? '검색어를 입력하세요'
                        : '장소, 버스, 지하철, 주소 검색'
                }
                sx={{
                    ...style.inputBaseStyle,
                    color: page === 'infoBoard' ? '#FFF' : '#000',
                    '&::placeholder': {
                        color: page === 'infoBoard' ? '#FFF' : '#A3C66F',
                        opacity: 1, // placeholder 투명도 제거
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: page === 'infoBoard' ? '#FFF' : '#A3C66F',
                        opacity: 1,
                    },
                }}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter' && onSearch) {
                        onSearch(searchText);
                        // setSearchText('');
                    }
                }}
            />
            <IconButton
                sx={{
                    color: page === 'infoBoard' ? '#ffffff' : '#58883f',
                }}
                onClick={() => {
                    if (onSearch) onSearch(searchText);
                }}
            >
                <SearchIcon />
            </IconButton>
        </Box>
    );
};

export default SearchBar;
