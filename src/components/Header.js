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

                <button
                    onClick={() => {
                        setIsCartOpen(!iscartOpen);
                    }}
                >
                    <p>$ {totalAmount}</p>
                    <p>{totalItems} Items</p>
                </button>
            </div>
        </div>
    );
}
