import Product from "./Product.jsx";

function ProductTab() {
    return(
        <div className="product-tab">
            <Product title="Phone" price={599} />
            <Product title="laptop" price={1299} />
            <Product title="book" price={19.99} />
        </div>
    );
}