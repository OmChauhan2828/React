import "./Product.css";

function Product({}) {
    console.log(props.title);
    return(
        <div className="product">
            <h3>{props.title}</h3>
            <h5>Product Description</h5>
            </div>
    );
}

export default Product;