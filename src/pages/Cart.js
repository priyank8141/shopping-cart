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
        <div className="cart">
            <div className="cartList">
                {JSON.parse(localStorage.getItem('cart')).map((p) => {
                    return (
                        <>
                            <div className="cartCard">
                                <img className="img" src={require(`../shared/images${p.image}`)} alt="demo" height={60} width={60} />
                                <div className="titleDescrption">
                                    <h3>{p.title}</h3>
                                    <p>{p.currency} {p.price}</p>
                                </div>
                                <div className="price">
                                    <p>
                                        Qty {p.quantity}
                                    </p>
                                    <p>
                                        {p.currency} {p.quantity * p.price}
                                    </p>
                                </div>
                                <button className="closeButton" onClick={() => { removeFromCart(p) }}>x</button>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}
