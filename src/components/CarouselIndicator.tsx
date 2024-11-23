import { createSvgIcon } from "@mui/material";


export const CarouselIndicator = createSvgIcon(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 8"
        fill="none"
        width="8px"
        height="8px"
    >
        <circle cx="4" cy="4" r="1" stroke="#8FC966" strokeWidth={0.3} />
    </svg>,
    'CarouselIndicator'
);

export default CarouselIndicator;