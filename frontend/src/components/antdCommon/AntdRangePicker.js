import { DatePicker, ConfigProvider } from "antd";

const { RangePicker } = DatePicker;

export const AntdRangePicker = ({ primaryColor = "#28318B", ...props }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: primaryColor,
                },
            }}
        >
            <RangePicker {...props} />
        </ConfigProvider>
    );
};
