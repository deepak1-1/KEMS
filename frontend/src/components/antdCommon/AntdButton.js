import { Button, ConfigProvider } from "antd";
import classNames from "classnames";

export const AntdButton = ({
    type = "outline",
    background = "#28318B",
    color = "#28318B",
    children,
    ...props
}) => {
    if (type === "primary")
        return (
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: background,
                        colorBgContainerDisabled: `${background}99`,
                        colorTextDisabled: "white",
                        fontSize: props?.fontSize ? props.fontSize : 14,
                    },
                }}
            >
                <Button
                    type="primary"
                    className={classNames({
                        "hover-scale-10225": true,
                        [props.className]: props?.className ? true : false,
                    })}
                    {...props}
                >
                    {children}
                </Button>
            </ConfigProvider>
        );
    if (type === "link")
        return (
            <ConfigProvider
                theme={{
                    token: {
                        colorLink: color,
                        colorTextDisabled: `${color}99`,
                        fontSize: props?.fontSize ? props.fontSize : 14,
                    },
                }}
            >
                <Button
                    type="link"
                    className={classNames({
                        "hover-scale-10225": true,
                        [props.className]: props?.className ? true : false,
                    })}
                    {...props}
                >
                    {children}
                </Button>
            </ConfigProvider>
        );

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultColor: color,
                        defaultBorderColor: color,
                    },
                },
                token: {
                    colorPrimaryHover: `${color}99`,
                    colorTextDisabled: `${color}99`,
                    fontSize: props?.fontSize ? props.fontSize : 14,
                    colorBgContainerDisabled: `${color}40`,
                },
            }}
        >
            <Button
                className={classNames({
                    "hover-scale-10225": true,
                    [props.className]: props?.className ? true : false,
                })}
                {...props}
            >
                {children}
            </Button>
        </ConfigProvider>
    );
};
