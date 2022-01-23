import { useEffect, useState } from "react";
import "./cart.css";

export default function Cart({ setAmountItems }) {
    const [cart, setCart] = useState([])
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')))
    }, [])
    const removeFromCart = (p) => {
        cart.map((item, i) => {
            if (item.id === p.id) {
                const finalItem = JSON.parse(localStorage.getItem('cart')).filter((_, x) => x !== i);
                localStorage.setItem('cart', JSON.stringify(finalItem));
            }
        });
        setAmountItems(p.quantity, p.price)
    }

    return (
        <div className="product">
            <div className="cartList">
                {JSON.parse(localStorage.getItem('cart')).map((p) => {
                    return (
                        <>
                            <div className="cartCard">
                                <button onClick={() => { removeFromCart(p) }}>x</button>
                                <div className="titleDescrption">
                                    <h3>{p.title}</h3>
                                    <p>{p.currency} {p.price}</p>
                                </div>
                                <div className="price">
                                    <p>
                                        Qty {p.quantity}
                                    </p>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}
