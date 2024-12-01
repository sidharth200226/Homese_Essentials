import { useContext } from "react"
import { myContext } from "./context"
import { useNavigate, Link } from "react-router-dom"

export default function Cart() {
    const { cart, Setcart, buynow, quantity, SetBuynow, Setquantity } = useContext(myContext)
    const nav = useNavigate()


    function handleremove(items) {
        Setcart(cart.filter(item => item !== items))
    }

    function confirmremove(item) {
        handleremove(item)
    }


    //  quantity adding
    const handleQuantity = (id) => {
        const newquantity = cart.map((item) => item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } :
            item)
        Setcart(newquantity)
        console.log("quantity", newquantity)

    }

    function removequantity(id) {

        const newquantity2 = cart.map((item) => item.id === id ? { ...item, quantity: (item.quantity || 1) - 1 } : item)
        Setcart(newquantity2)
        console.log("newqty", newquantity2);

    }





    // single product total kanan
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
    };
    const amount = calculateTotal()
    console.log("total", amount)


    // more than one product total kanan








    return (
        // navbar
        <div >
            <div class="nav" style={{ gap: "10px", }}>
                <div class="home-essentials-container" style={{ marginRight: "53rem" }}>
                    <i class="fa-solid fa-house"></i>
                    <h1 class="h1" style={{
                        color: "white",
                        margin: "0",
                        fontSize: "24px",
                        fontWeight: "bold",
                        paddingLeft: "10px"
                    }}>HomeEssentials</h1>
                </div>
                {/* <Link to={"/cart"} style={{ marginLeft: "-60px", textDecoration: "none", color: "white", fontWeight: "bold" }}>cart</Link> */}
                {/* <Link to={"/wishlist"} style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>wishlist</Link>
                <Link to={"/signin"} style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>Sign in</Link>
                <Link to={"/login"} style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>Login</Link> */}
            </div>


            {/* card */}
            <div className="cart" style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginTop: "10px", height: "65rem" }}>
                {

                    cart.map((data) =>
                        <div
                            className="card"
                            style={{
                                width: "19rem",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.3s ease",
                                height: "396px",


                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        >
                            <img
                                className="card-img-top"
                                src={data.image}
                                alt="Card image cap"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <h5 className="card-title" style={{ color: "#00796b", fontWeight: "bold", marginLeft: "8px" }}>
                                {data.brand}
                            </h5>
                            <p className="card-text" style={{ color: "#004d40", fontSize: "18px", display: "flex", marginLeft: "5px" }}>
                                ₹{data.price * (data.quantity || 1)}
                            </p>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "10px 0" }}>
                                <h3 style={{ marginRight: "10px", fontSize: "18px" }}>Quantity: {data.quantity || 1}</h3>


                                {/* addremoovebtn */}
                                <div>
                                    <button type="button" className="btn btn-dark" style={{ padding: "4px 13px", fontSize: "18px" }}
                                        onClick={() => handleQuantity(data.id)}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = "rgb(36 41 47)"}>
                                        +
                                    </button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-dark" style={{ padding: "4px 13px", fontSize: "18px" }}
                                        onClick={() => removequantity(data.id)}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = "rgb(36 41 47)"}>
                                        -
                                    </button>
                                </div>

                                <br />

                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "19px" }}>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    onClick={() => confirmremove(data)}
                                    style={{
                                        backgroundColor: "#00796b",
                                        border: "none",
                                        padding: "6px 2px",
                                        borderRadius: "8px",
                                        fontSize: "16px",
                                        color: "white",
                                        textDecoration: "none",
                                        display: "flex",
                                        justifyContent: "center", width: "83px"
                                    }}
                                >
                                    Remove
                                </a>
                            </div>

                            {/* footer */}
                        </div>
                    )

                }
            </div>

            <div style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                backgroundColor: "#00796b",
                color: "white",
                padding: "15px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "18px",
                boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.2)",
                zIndex: 1000,
                overflow: "hidden"
            }}>
                <div>
                    Total Payment: ₹{amount}
                </div>
                <Link to={"/payment"} style={{
                    backgroundColor: "#ff5722",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",textDecoration:"none"
                }}>
                    Pay Now
                </Link>
            </div>



            <div style={{ backgroundColor: "#333", color: "#fff", padding: "20px", marginTop: "20px" }}>
                <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h3>HomeEssentials</h3>
                        <p>Providing quality products for your home.</p>
                    </div>

                    <div>
                        <h4>Quick Links</h4>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link></li>
                            <li><Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About Us</Link></li>
                            <li><Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Follow Us</h4>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <a href="#" style={{ color: "#fff" }}><i class="fa-brands fa-facebook"></i></a>
                            <a href="#" style={{ color: "#fff" }}><i class="fa-brands fa-twitter"></i></a>
                            <a href="#" style={{ color: "#fff" }}><i class="fa-brands fa-instagram"></i></a>
                            <a href="#" style={{ color: "#fff" }}><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div>
                        <h4>Contact Us</h4>
                        <p>Email: support@homeessentials.com</p>
                        <p>Phone: +1 (234) 567-8901</p>
                    </div>
                </footer>
                <div style={{ textAlign: "center", marginTop: "10px", fontSize: "14px" }}>
                    <p>&copy; {new Date().getFullYear()} HomeEssentials. All rights reserved.</p>
                </div>
            </div>

        </div >
    )
}