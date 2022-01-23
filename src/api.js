import axios from "axios";

export const getProducts = async () => {
    try {
        const product = await axios.get(
            "https://dnc0cmt2n557n.cloudfront.net/products.json"
        );
        return product.data.products;
    } catch (err) {
        console.log("err", err);
    }
};
