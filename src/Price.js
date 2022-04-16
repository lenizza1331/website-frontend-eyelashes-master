import price from "./assets/price.bmp"

function Price (){
    return (
    <div>
        <div className="title">
            <h2>Цены</h2>
        </div>
        <div className="center">
            <img className="price" src={price} alt="price"  />
        </div>
    </div>
    )
    };
    
    export default Price;