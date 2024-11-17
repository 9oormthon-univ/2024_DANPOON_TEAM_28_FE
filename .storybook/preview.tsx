import type { Preview } from "@storybook/react";
import tz from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import { locale } from "dayjs";
import "dayjs/locale/ko";

dayjs.extend(utc);
dayjs.extend(tz);
locale("ko");
dayjs.tz.setDefault("Asia/Seoul");

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
