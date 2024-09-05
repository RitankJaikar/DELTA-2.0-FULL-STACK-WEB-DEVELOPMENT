import Product from "./Product";

function ProductTab() {
    return (
        <>
            {/* <Product title="Phone" price={10000} features1={[ <li>"durable"</li>,<li>"LightWeight"</li>]} features2={{a:"durable", b:"LightWeight"}}/> */}
            <Product title="Phone" price={10000} features1={[ "durable","LightWeight" ]} features2={{a:"durable", b:"LightWeight"}}/>
            <Product title="Tablet" price={20000} features1={[ "durable","LightWeight" ]} features2={{a:"durable", b:"LightWeight"}}/>
            <Product title="Laptop" price={40000} features1={[ "durable","LightWeight" ]} features2={{a:"durable", b:"LightWeight"}}/>
        </>
    );
}

export default ProductTab