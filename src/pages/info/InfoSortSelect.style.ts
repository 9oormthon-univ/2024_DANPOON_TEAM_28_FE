import { SxProps } from '@mui/material';

// Select 컴포넌트 스타일
export const selectStyles: SxProps = {
  border: 'none',
  boxShadow: 'none',
  '.MuiOutlinedInput-notchedOutline': { border: 0 }, // 아웃라인 제거
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 0, // 호버 시 보더 제거
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 0, // 포커스 시 보더 제거
  },
  '& .MuiSelect-select': {
    padding: '8px 16px', // 선택 영역의 padding 설정
  },
};

// FormControl 컴포넌트 스타일
export const formControlStyles: SxProps = {
  border: 'none',
  boxShadow: 'none',
};
