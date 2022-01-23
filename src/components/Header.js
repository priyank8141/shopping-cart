import { useEffect, useState } from "react";
import "./head.css";

export default function Header({
    totalItems,
    totalAmount,
    setIsCartOpen,
    iscartOpen
}) {

    return (
        <div className="head">
            <h1>Shopping Cart</h1>
            <div className="cartBox">
                <div className="total">
                    <p>$ {totalAmount}</p>
                    <p>{totalItems} Items</p>
                </div>
                <button
                    onClick={() => {
                        setIsCartOpen(!iscartOpen);
                    }}
                >
                    V
                </button>
            </div>
        </div>
    );
}
