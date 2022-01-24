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
                <p>$ {totalAmount}</p>
                <div onClick={() => {
                    setIsCartOpen(!iscartOpen);
                }}>
                    <img className="cartImg" src={require('../shared/images/cart.png')} alt="cart" width={50} height={50} />
                    {totalItems ? (
                        <span className="cart-count">{totalItems}</span>
                    ) : (
                        ""
                    )}</div>
            </div>
        </div>
    );
}
