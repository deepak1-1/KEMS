"use client";
import { Table } from "antd";
import { useState } from "react";

import { AntdButton } from "@/components";

const DUMMY_DATA = [
    {
        id: 1,
        tokenNo: "KHSSTOK-23\\1199",
        type: "LOADING",
        item: "MILKOMORE (SUPREME) PP 50 KG",
        party: "CHAND & COMPANY (TANAKPUR)",
        quantity: "50 ton",
        actionDate: "30/11/2023",
        status: "UNPAID",
        contractor: "Amod",
    },
    {
        id: 2,
        tokenNo: "KHSSTOK-23\\1199",
        type: "LOADING",
        item: "MILKOMORE (SUPREME) PP 50 KG",
        party: "CHAND & COMPANY (TANAKPUR)",
        quantity: "100 bags",
        actionDate: "30/11/2023",
        status: "UNPAID",
        contractor: "Amod",
    },
    {
        id: 3,
        tokenNo: "KHSSTOK-23\\1199",
        type: "LOADING",
        item: "MILKOMORE (SUPREME) PP 50 KG",
        party: "CHAND & COMPANY (TANAKPUR)",
        quantity: "55 ton",
        actionDate: "30/11/2023",
        status: "PAID",
        contractor: "Outside",
    },
    {
        id: 4,
        tokenNo: "KTOK-23\\12",
        type: "UN-LOADING",
        item: "S.E.R.B.Oil",
        party: "Grl Edibles Pvt.Ltd.",
        quantity: "200 bags",
        actionDate: "01/12/2023",
        status: "UNPAID",
        contractor: "Plant labour",
    },
    {
        id: 5,
        tokenNo: "KTOK-23\\12",
        type: "UN-LOADING",
        item: "S.E.R.B.Oil",
        party: "Grl Edibles Pvt.Ltd.",
        quantity: "220 bags",
        actionDate: "01/12/2023",
        status: "UNDER VERIFICATION",
        contractor: "Plant labour",
    },
    {
        id: 6,
        tokenNo: "KTOK-23\\12",
        type: "UN-LOADING",
        item: "Oil",
        party: "Grl Edibles Pvt.Ltd.",
        quantity: "240 bags",
        actionDate: "01/12/2023",
        status: "UNPAID",
        contractor: "Amod",
    },
    {
        id: 7,
        tokenNo: "KTOK-23\\12",
        type: "LOADING",
        item: "Oil",
        party: "Grl Edibles Pvt.Ltd.",
        quantity: "200 ton",
        actionDate: "01/12/2023",
        status: "UNPAID",
        contractor: "Plant labour",
    },
    {
        id: 8,
        tokenNo: "KTOK-23\\12",
        type: "LOADING",
        item: "Oil",
        party: "Grl Edibles Pvt.Ltd.",
        quantity: "200 ton",
        actionDate: "01/12/2023",
        status: "UNPAID",
        contractor: "Plant labour",
    },
    {
        id: 9,
        tokenNo: "KTOK-23\\12",
        type: "LOADING",
        item: "Oil",
        party: "Grl Edibles Pvt.Ltd.",
        quantity: "200 ton",
        actionDate: "01/12/2023",
        status: "UNPAID",
        contractor: "Plant labour",
    },
    {
        id: 10,
        tokenNo: "KTOK-23\\12",
        type: "LOADING",
        item: "Oil",
        party: "Grl Edibles Pvt.Ltd.",
        quantity: "200 ton",
        actionDate: "01/12/2023",
        status: "UNPAID",
        contractor: "Plant labour",
    },
    {
        id: 11,
        tokenNo: "KTOK-23\\12",
        type: "LOADING",
        item: "Oil",
        party: "Grl Edibles Pvt.Ltd.",
        quantity: "200 ton",
        actionDate: "01/12/2023",
        status: "UNPAID",
        contractor: "Plant labour",
    },
    {
        id: 12,
        tokenNo: "KTOK-23\\12",
        type: "LOADING",
        item: "Oil",
        party: "Grl Edibles Pvt.Ltd.",
        quantity: "200 ton",
        actionDate: "01/12/2023",
        status: "UNPAID",
        contractor: "Plant labour",
    },
    {
        id: 13,
        tokenNo: "KTOK-23\\12",
        type: "LOADING",
        item: "Oil",
        party: "Grl Edibles Pvt.Ltd.",
        quantity: "200 ton",
        actionDate: "01/12/2023",
        status: "UNPAID",
        contractor: "Plant labour",
    },
    {
        id: 14,
        tokenNo: "KTOK-23\\12",
        type: "LOADING",
        item: "Oil",
        party: "Grl Edibles Pvt.Ltd.",
        quantity: "200 ton",
        actionDate: "01/12/2023",
        status: "UNPAID",
        contractor: "Plant labour",
    },
    {
        id: 15,
        tokenNo: "KTOK-23\\12",
        type: "LOADING",
        item: "Oil",
        party: "Grl Edibles Pvt.Ltd.",
        quantity: "200 ton",
        actionDate: "01/12/2023",
        status: "UNPAID",
        contractor: "Plant labour",
    },
];

export const LoadingUnloadingExpenses = ({
    selectedExpenses,
    setSelectedExpenses,
    calculatePriceThroughQuantity,
    styles,
    renderStatusColor,
    setPayableDrawerVisible,
    setNetPayableAmount
}) => {
    const [expenses, setExpenses] = useState(DUMMY_DATA);
    const [payableDrawerData, setPayableDrawerData] = useState([]);

    const markAsPaidHandle = (record) => {
        // setExpenses((prev) => {
        //     const foundLoadData = prev.find(
        //         (eachRecord) => eachRecord.id === record.id
        //     );
        //     const othersArray = prev.filter(
        //         (eachRecord) => eachRecord.id !== record.id
        //     );

        //     foundLoadData.status = "PENDING VERIFICATION";

        //     return [foundLoadData, ...othersArray];
        // });
        // toast.success("Marked as Paid");
        // setSelectedExpenses(prev => ({...prev, rows: [record]}))
        setNetPayableAmount(calculatePriceThroughQuantity(record?.quantity));
        setPayableDrawerVisible(true);
    };

    const columns = [
        {
            title: "Thekedar",
            dataIndex: "contractor",
            fixed: "left",
        },
        {
            title: "Payable",
            render: (value, record) => {
                if (record.status !== "UNPAID") return <>₹ 0</>;
                return <>₹ {calculatePriceThroughQuantity(record.quantity)}</>;
            },
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
        },
        {
            title: "Type",
            dataIndex: "type",
            render: (value, record) => {
                return (
                    <span
                        className={styles["status"]}
                        style={{
                            color: renderStatusColor(value),
                            background: `${renderStatusColor(value)}25`,
                        }}
                    >
                        {value}
                    </span>
                );
            },
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (value, record) => {
                return (
                    <span
                        className={styles["status"]}
                        style={{
                            color: renderStatusColor(value),
                            background: `${renderStatusColor(value)}25`,
                        }}
                    >
                        {value}
                    </span>
                );
            },
        },
        {
            title: "Token No.",
            dataIndex: "tokenNo",
        },
        {
            title: "Item",
            dataIndex: "item",
        },
        {
            title: "Party",
            dataIndex: "party",
        },
        {
            title: "Load/Unload date",
            dataIndex: "actionDate",
        },
        {
            title: "Action",
            render: (value, record) => {
                switch (record.status) {
                    case "UNPAID":
                        return (
                            <AntdButton
                                type="primary"
                                onClick={() => markAsPaidHandle(record)}
                            >
                                Mark as paid
                            </AntdButton>
                        );
                    default:
                        <></>;
                }
            },
            fixed: "right",
            width: 180,
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) =>
            setSelectedExpenses({
                rowKeys: selectedRowKeys,
                rows: selectedRows,
            }),
        getCheckboxProps: (record) => ({
            disabled:
                record.status === "PAID" ||
                record.status === "PENDING VERIFICATION" ||
                record.status === "UNDER VERIFICATION",
        }),
    };

    return (
        <>
            <Table
                columns={columns}
                rowKey={(record) => record.id}
                dataSource={expenses || []}
                rowSelection={{
                    type: "checkbox",
                    selectedRowKeys: selectedExpenses?.rowKeys,
                    ...rowSelection,
                }}
                pagination={false}
                scroll={{
                    x: "2400px",
                }}
            />
        </>
    );
};
