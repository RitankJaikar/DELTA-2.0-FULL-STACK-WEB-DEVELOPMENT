import "./Product.css"

function Product({title, price=5000, features1, features2}) {
    // if(price > 15000) {
    //     return (
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <p>Price- Rs. {price}</p>
    //             <p>{features1}</p>
    //             <p>{features1.map(feature => <li>{feature}</li>)}</p>
    //             <p>Discount : 5%</p>
    //         </div>
    //     );
    // }
    // else {
    //     return (
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <p>Price- Rs. {price}</p>
    //             <p>{features1}</p>
    //             <p>{features1.map(feature => <li>{feature}</li>)}</p>
    //         </div>
    //     );
    // }

    //or better

    return (
        <div className="Product" style={{backgroundColor: price>15000 && "blue"}}>
            <h3>{title}</h3>
            <p>Price- Rs. {price}</p>
            <p>{features1}</p>
            <p>{features1.map(feature => <li>{feature}</li>)}</p>
            {/* <p>{price > 15000 ? <li>Discount : 5%</li> : null}</p> */}
            {/* {price > 15000 ? <p>Discount : 5%</p> : null} */}
            {price > 15000 && <p>Discount : 5%</p>}
        </div>
    );
}

export default Product;