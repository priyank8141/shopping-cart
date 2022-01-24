import { useEffect, useState } from "react";
import { getProducts } from "../api";

import "./product.css";

export default function Product({ addCart, removeCart }) {
    const image = "../shared/images"
    const [productList, setProuctList] = useState();
    useEffect(() => {
        async function fetchData() {
            const products = await getProducts();
            setProuctList(products);
        }
        fetchData();
    }, []);

    return (
        <div className="product">
            <div className="productList">
                {productList &&
                    productList.map((p) => {
                        return (
                            <>
                                <div className="productcard">
                                    <img className="img" src={require(`../shared/images${p.image}`)} alt="demo" height="90" width="90" />
                                    <div className="titleDescrption">
                                        <h3>{p.title}</h3>
                                        <p>{p.desc}</p>
                                    </div>
                                    <div className="counter">
                                        <button onClick={() => removeCart(p)}>-</button>
                                        <p>{JSON.parse(localStorage.getItem('cart')).map((c) => {
                                            if (c.id === p.id) {
                                                return c.quantity
                                            }
                                        })}</p>

                                        <button onClick={() => addCart(p)}>+</button>
                                    </div>
                                    <div className="price">
                                        <p>
                                            {p.currency} {p.price}
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
