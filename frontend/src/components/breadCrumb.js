"use client";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BreadCrumb = () => {
    const pathname = usePathname();
    const crumbs = pathname.split("/").filter((part) => part.length > 0);

    let path = "";
    const items = [
        {
            title: (
                <Link
                    style={{
                        color: !crumbs.length ? "#28318B" : "#22222299",
                    }}
                    href="/"
                >
                    Home
                </Link>
            ),
        },
        ...crumbs.map((crumb, index) => {
            path += `/${crumb}`;
            const updatedCrumb = crumb
                .replace("_", " ")
                .split(" ")
                .map((each) => each[0]?.toUpperCase() + each.slice(1));
            let title = "";
            updatedCrumb.map((crumb) => (title += crumb + " "));
            const isLast = crumbs.length - 1 === index;
            return {
                title: (
                    <Link
                        style={{
                            color: isLast ? "#28318B" : "#22222299",
                        }}
                        href={path}
                    >
                        {title}
                    </Link>
                ),
            };
        }),
    ];

    return (
        <Breadcrumb
            separator=">>"
            items={items}
            style={{ marginBottom: "10px" }}
        />
    );
};

export { BreadCrumb };
