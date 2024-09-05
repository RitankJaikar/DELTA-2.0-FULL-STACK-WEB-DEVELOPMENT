import AmazonProduct from "./AmazonProduct";

export default function AmazonProductsTab() {
    return (
        <div className="amazon-products" style={{display:"flex"}}>
            <AmazonProduct productName="Logitech MX Master" features={{a:"800 DPI", b:"5 Programmable Buttonsa"}} actualPrice={12495} discountedPrice={8999}/>
            <AmazonProduct productName="Logitech MX Master" features={{a:"800 DPI", b:"5 Programmable Buttonsa"}} actualPrice={12495} discountedPrice={8999}/>
            <AmazonProduct productName="Logitech MX Master" features={{a:"800 DPI", b:"5 Programmable Buttonsa"}} actualPrice={12495} discountedPrice={8999}/>
            <AmazonProduct productName="Logitech MX Master" features={{a:"800 DPI", b:"5 Programmable Buttonsa"}} actualPrice={12495}/>
        </div>
    );
}