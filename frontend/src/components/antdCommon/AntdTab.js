"use client";

import { ConfigProvider, Tabs } from "antd";

export const AntdTab = ({
    children,
    items,
    onChange,
    color = "#1E653F !important",
    titleFontSize = "18px",
    ...props
}) => {
    return (
        <div className="antd-tabs-css">
            <ConfigProvider
                theme={{
                    components: {
                        Tabs: {
                            cardBg: "white !important",
                            inkBarColor: color,
                            itemSelectedColor: color,
                            itemHoverColor: color,
                            titleFontSize: titleFontSize,
                        },
                    },
                }}
            >
                <Tabs
                    size="middle"
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                    {...props}
                />
            </ConfigProvider>
        </div>
    );
};
