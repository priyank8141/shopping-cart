import { useEffect, useState } from "react";
import Header from "./components/Header";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import "./style.css";

export default function App() {
  const [iscartOpen, setIsCartOpen] = useState(false);
  // const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    const lsCart = JSON.parse(localStorage.getItem('cart'))
    if (!lsCart) {
      localStorage.setItem('cart', JSON.stringify([{ 'currency': "$", 'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", 'id': "123442", 'image': "/product1.jpeg", 'price': "39", 'quantity': 1, 'title': "Product 1" }, { 'currency': "$", 'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", 'id': "123443", 'image': "/product2.jpeg", 'price': "39", 'quantity': 1, 'title': "Product 2" }]));
    }
  }, [])

  useEffect(() => {
    let items = 0
    let amount = 0
    JSON.parse(localStorage.getItem('cart')).map((i) => {
      items = items + i.quantity
      amount = amount + i.quantity * parseInt(i.price)
    })

    setTotalItems(items)
    setTotalAmount(amount)
  }, [])

  const setAmountItems = (quantity, price) => {
    setTotalAmount(totalAmount - parseInt(price))
    setTotalItems(totalItems - quantity)
  }
  const addCart = (data) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const isOld = JSON.parse(localStorage.getItem('cart')).map((item) => item.id).includes(data.id);
    if (isOld) {
      const items = JSON.parse(localStorage.getItem('cart')).map((item) => {
        if (item.id === data.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });
      // setCart([...items]);
      localStorage.setItem('cart', JSON.stringify([...items]));

    } else {
      data.quantity = 1;
      localStorage.setItem('cart', JSON.stringify([...cart, data]));
      // setCart([...cart, data]);
    }
    setTotalItems(totalItems + 1)
    setTotalAmount(totalAmount + parseInt(data.price))
  };
  const removeCart = (data) => {
    let isSingleQuant = true
    const items = JSON.parse(localStorage.getItem('cart')).map((item, i) => {
      if (item.id === data.id) {
        if (item.quantity === 1) {
          const finalItem = JSON.parse(localStorage.getItem('cart')).filter((_, x) => x !== i);
          isSingleQuant = false
          localStorage.setItem('cart', JSON.stringify(finalItem));
        } else {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        }
      }
      return item;
    });
    isSingleQuant && localStorage.setItem('cart', JSON.stringify([...items]));
    setTotalItems(totalItems - 1)
    setTotalAmount(totalAmount - parseInt(data.price))
  };

  return (
    <div className="App">
      <Header
        totalItems={totalItems}
        totalAmount={totalAmount}
        setIsCartOpen={setIsCartOpen}
        iscartOpen={iscartOpen}
      />
      {iscartOpen && (
        <>
          <Cart setAmountItems={setAmountItems} />
        </>
      )}
      <Product addCart={addCart} removeCart={removeCart} />
    </div>
  );
}
