"use client";
import { Layout, Dropdown, Button } from "antd";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

import { BreadCrumb } from "../breadCrumb";
import { useUser } from "@/context";
import { KapilaLogo } from "@/assets/icons";

import styles from "./NavbarLayout.module.css";
import classNames from "classnames";

const { Header, Content } = Layout;
const EXCLUDE_PATHS = ["/login"];

const NavbarLayout = ({ children }) => {
    const { isAuthenticated, logout } = useUser();
    const router = useRouter();
    const pathname = usePathname();

    const manageDataItems = [
        {
            key: "1",
            label: () => <Link href="nothing">Factories</Link>,
        },
        {
            key: "2",
            label: () => <Link href="nothing">Thekedars</Link>,
        },
        {
            key: "3",
            label: () => <Link href="nothing">Labor</Link>,
        },
        {
            key: "4",
            label: () => <Link href="nothing">Raw Materials</Link>,
        },
    ];

    if (!isAuthenticated && EXCLUDE_PATHS.includes(pathname)) {
        return <>{children}</>;
    }

    return (
        <Layout
            style={{
                background: "#f5f5f5",
            }}
        >
            <div
                className={classNames({
                    [styles["navbar_header_container"]]: true,
                    "background-primary": true,
                })}
            >
                <div className="flex-row-between">
                    <KapilaLogo size="35" />
                    <div style={{ marginLeft: "10px" }}>Kapila</div>
                </div>
                <div className="header_search_input_div">Search Input</div>
                <div style={{ gap: "20px" }} className="flex-row-between">
                    {/* <Dropdown menu={{ items: manageDataItems }}>
                        Manage data
                    </Dropdown> */}
                    <Button onClick={logout}>Logout</Button>
                </div>
            </div>

            <Content
                style={{
                    margin: "0 15px",
                    padding: "20px",
                    background: "#f5f5f5",
                    fontFamily: "Inter, sans-serif",
                    fontStyle: "normal",
                    fontWeight: "500",
                    color: "#22222",
                }}
            >
                <BreadCrumb />
                {children}
            </Content>
        </Layout>
    );
};

export { NavbarLayout };
