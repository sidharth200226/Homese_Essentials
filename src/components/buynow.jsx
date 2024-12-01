import { useContext } from "react"
import { myContext } from "./context"
import { Link, useNavigate } from "react-router-dom"

export function Buynow() {
    const {  buynow, SetBuynow,quantity,Setquantity } = useContext(myContext)
    const nav = useNavigate()

    const handleQuantity = (id) => {
        SetBuynow((item) => {
            
            if (item.id === id) {
                return { ...item, quantity:( item.quantity||1) + 1 };
            }
            return item;
        });
    };
    
  const calculateTotal = () => {
    return buynow.price * (buynow.quantity||1)
    
  }
  const amount=calculateTotal()
console.log("total",amount)


const handledecrement=(id)=>{
    SetBuynow((data)=>{
        if(data.id===id){
            return{...data,quantity:(data.quantity||1)-1}
        }
        return data
    })
    console.log("data",quantity)
}



console.log("quantity",quantity)

console.log("bought",buynow)

    return (
        <div>
            
                
                    <div className="card" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div className="card-header">
                           Your Products
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{buynow.brand}</h5>
                            <img src={buynow.image} style={{width:"50rem"}}></img>
                            <p className="card-text" style={{fontWeight:"bold"}}>{buynow.desc}</p>
                            
                            <p className="card-text" style={{fontWeight:"bold",fontSize:"29px"}}>${amount}</p>
                            {/* Quantity display */}
                            <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                <h3 style={{ marginRight: "10px" }}>Quantity: {buynow.quantity||1}</h3>

                                {/* + button design */}
                                <button onClick={()=>handleQuantity(buynow.id)} 
                                    style={{
                                        backgroundColor: " rgb(49 60 71)", 
                                        color: "#fff", 
                                        border: "none", 
                                        padding: "5px 12px", 
                                        fontSize: "1.2rem", 
                                        borderRadius: "5px", 
                                        cursor: "pointer"
                                    }} >

                                    +
                                </button>
                                <button 
                                    onClick={()=>handledecrement(buynow.id)} 
                                    style={{
                                    marginLeft:"20px",
                                        backgroundColor: " rgb(49 60 71)", 
                                        color: "#fff", 
                                        border: "none", 
                                        padding: "5px 15px", 
                                        fontSize: "1.2rem", 
                                        borderRadius: "5px", 
                                        cursor: "pointer"
                                    }}>
                                    -
                                </button>
                            </div>

                            <Link to={"/payment"} className="btn btn-primary">Pay Now</Link>
                          
                        </div>
                        
                    </div>
                
                
            
        </div>
    )
}