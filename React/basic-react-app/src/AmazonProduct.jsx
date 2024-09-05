export default function AmazonProduct({productName, features, actualPrice, discountedPrice}) {
    return (
        <div className="amazon-product" style={{color: "black", border: "1px solid black", borderRadius: "16px", marginRight: "10px", overflow: "hidden"}}>
            <h4 style={{ padding:"4px"}}>{productName}</h4>
            <p style={{ padding:"4px"}}>{features.a}</p>
            <p style={{ padding:"4px"}}>{features.b}</p>
            <p style={{backgroundColor: "yellow", padding:"4px", marginBottom: "0px"}}> <b> {discountedPrice? <span> <span style={{textDecoration:"line-through"}}>{actualPrice}</span> <span>{discountedPrice}</span> </span> : <span>{actualPrice}</span>} </b> </p>
        </div>
    );
}