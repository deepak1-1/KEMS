"use client";

import { useEffect, useState, useRef } from "react";
import {
    PlusOutlined,
    CloudUploadOutlined,
    TableOutlined,
    LineChartOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import { Drawer } from "antd";
import { toast } from "react-toastify";

import { AntdButton, AntdTab, AntdRangePicker } from "@/components";
import { LoadingUnloadingExpenses } from "@/section";

import styles from "./page.module.css";

const LoadingUnloading = () => {
    const [selectedExpenses, setSelectedExpenses] = useState({
        rowKeys: [],
        rows: [],
    });
    const [payableDrawerVisible, setPayableDrawerVisible] = useState(false);
    const [netPayableAmount, setNetPayableAmount] = useState(0);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleUploadFileClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        console.log({ files: event.target.files });
        setSelectedFiles((prev) => [...prev, ...event.target.files]);
    };

    const calculatePriceThroughQuantity = (quantity = "0 ton") => {
        const numberFromQuantity = +(quantity?.split(" ")?.[0] || 0);
        if (quantity?.includes("bags")) {
            return numberFromQuantity * 2;
        }

        return numberFromQuantity * 50;
    };

    useEffect(() => {
        const totalSumToPay = selectedExpenses?.rows?.reduce(
            (totalSum, curr) => {
                if (curr?.status !== "UNPAID") return 0;
                return totalSum + calculatePriceThroughQuantity(curr?.quantity);
            },
            0
        );
        setNetPayableAmount(totalSumToPay);
    }, [selectedExpenses]);

    const handleNetPayableAmountClick = () => {
        // setLoadUnloadData((prev) => {
        //     const updatedPrev = prev.map((eachData) => {
        //         if (selectedExpenses?.rowKeys?.includes(eachData?.id)) {
        //             return {
        //                 ...eachData,
        //                 status: "PENDING VERIFICATION",
        //             };
        //         }
        //         return eachData;
        //     });
        //     return updatedPrev;
        // });
        // setSelectedRows({ rowKeys: [], rows: [] });

        // toast.success("Marked as Paid");
        setPayableDrawerVisible(true);
    };

    const onChange = (key) => {
        console.log(key);
    };

    const payableDrawerClose = () => {
        setSelectedFiles([]);
        setPayableDrawerVisible(false);
    };

    const tabItems = [
        {
            key: "1",
            label: `Expenses`,
            children: (
                <LoadingUnloadingExpenses
                    {...{
                        selectedExpenses,
                        setSelectedExpenses,
                        calculatePriceThroughQuantity,
                        styles,
                        renderStatusColor,
                        setPayableDrawerVisible,
                        setNetPayableAmount,
                    }}
                />
            ),
        },
        {
            key: "2",
            label: "Transactions",
            children: "Development in progress",
        },
    ];

    return (
        <>
            <div className="flex-row-between header-margin">
                <div className="flex-row-start gap-30">
                    <div className="heading-text">Loading / Unloading</div>
                    <div className="flex-row-between gap-10">
                        <span className={styles[""]}>
                            <TableOutlined
                                style={{
                                    fontSize: "20px",
                                }}
                            />
                        </span>
                        <span className={styles[""]}>
                            <LineChartOutlined
                                style={{
                                    fontSize: "20px",
                                }}
                            />
                        </span>
                    </div>
                </div>
                <div>
                    {selectedExpenses?.rowKeys?.length === 0 && (
                        <AntdButton type="primary" icon={<UploadOutlined />}>
                            Fetch data
                        </AntdButton>
                    )}
                    {selectedExpenses?.rowKeys?.length > 0 && (
                        <AntdButton
                            type="primary"
                            onClick={handleNetPayableAmountClick}
                            style={{ marginLeft: "20px" }}
                        >
                            Mark all as paid - ₹ {netPayableAmount}
                        </AntdButton>
                    )}
                </div>
            </div>

            <AntdTab
                items={tabItems}
                onChange={onChange}
                tabBarExtraContent={<AntdRangePicker />}
            />
            <Drawer
                open={payableDrawerVisible}
                destroyOnClose={true}
                styles={{
                    header: { fontWeight: 900, fontSize: "20px !important" },
                }}
                onClose={payableDrawerClose}
                className="antd-drawer-css"
                extra={
                    <AntdButton
                        type="primary"
                        onClick={() => {
                            toast.warning("Development in progress");
                        }}
                    >
                        Confirm
                    </AntdButton>
                }
                title={"Mark as Paid"}
                width={450}
            >
                <div className={styles["drawer_payable-text"]}>
                    Payable Amount
                </div>
                <div className={styles["drawer_payable-amount"]}>
                    ₹ {netPayableAmount}
                </div>
                <div className={styles["drawer_payable-text"]}>
                    Upload Proof
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                    accept=".pdf,.png,.jpg"
                    multiple
                />
                {selectedFiles.length > 0 && (
                    <>
                        <ul>
                            {selectedFiles.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <AntdButton
                                type="link"
                                icon={<PlusOutlined />}
                                onClick={handleUploadFileClick}
                            >
                                more files
                            </AntdButton>
                        </div>
                    </>
                )}
                {selectedFiles?.length === 0 && (
                    <div className={styles["drawer_upload-button-container"]}>
                        <CloudUploadOutlined
                            style={{ fontSize: "90px", color: "#28318b" }}
                            onClick={handleUploadFileClick}
                        />
                        <AntdButton
                            size="large"
                            onClick={handleUploadFileClick}
                        >
                            Upload file
                        </AntdButton>
                        <div>JPG, PNG, PDF file are supported</div>
                    </div>
                )}
            </Drawer>
        </>
    );
};

export default LoadingUnloading;

const renderStatusColor = (status) => {
    switch (status) {
        case "UNPAID":
            return "#DFBD0A";
        case "PAID":
            return "#1E653F";
        case "PENDING VERIFICATION":
            return "#11D16A";
        case "UNDER VERIFICATION":
            return "#651E5E";
        case "LOADING":
            return "#4394DF";
        case "UN-LOADING":
            return "#1E653F";
    }
};
