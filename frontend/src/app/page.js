"use client";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import styles from "./page.module.css";

const Home = () => {
    const router = useRouter();
    return (
        <>
            <div className="heading-text header-margin">Expense Categories</div>
            <div className={styles["main_cards-container"]}>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => router.push("/loading-unloading")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Loading/Unloading
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Production
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Civil work maintenance
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Palti Shifting (Only gadi palti)
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Fuel n Travel
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Freight Payment
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Cow and Mandir
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Misc. Out
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Staff salary advance
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Rent
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Bardana Bandhaai
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Stationery and IT expense
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Canteen Expense
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Vehicle maintenance
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Employee care and welfare
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div
                    className={styles["main_card-container"]}
                    onClick={() => toast.warning("In Progress")}
                >
                    <div className={styles["main_card-heading-container"]}>
                        <div className={styles["main_card-heading-text"]}>
                            Unloading of misc items
                        </div>
                    </div>
                    <div className={styles["main_card-content-container"]}>
                        <div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Total expense :
                                </div>
                                ₹1000
                            </div>
                            <div
                                className={
                                    styles["main_card-content-key-value"]
                                }
                            >
                                <div
                                    className={styles["main_card-content-key"]}
                                >
                                    Unpaid :
                                </div>
                                8
                            </div>
                        </div>
                        <div
                            className={styles["main_card-content-view-button"]}
                        >
                            View <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
