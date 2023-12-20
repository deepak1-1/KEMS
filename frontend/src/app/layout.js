"use client";

import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";

import { NavbarLayout, StyledComponentsRegistry } from "@/components";
import { UserProvider } from "@/context";

import "./global.css";
import "react-toastify/dist/ReactToastify.css";

const unprotectedPaths = ["/login"];

const RootLayout = ({ children }) => {
    const pathname = usePathname();

    return (
        <html lang="en">
            <body style={{ margin: 0, background: "#f5f5f5" }}>
                <UserProvider unprotectedPaths={unprotectedPaths}>
                    <StyledComponentsRegistry>
                        <ToastContainer position="top-center" />
                        {unprotectedPaths.includes(pathname) ? (
                            <>{children}</>
                        ) : (
                            <NavbarLayout unprotectedPaths={unprotectedPaths}>
                                {children}
                            </NavbarLayout>
                        )}
                    </StyledComponentsRegistry>
                </UserProvider>
            </body>
        </html>
    );
};

export default RootLayout;
