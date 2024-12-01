import { useContext } from "react"
import { myContext } from "./context"
import { useNavigate, Link } from "react-router-dom"

export function Wishlist() {

    const { like, Setlike, cart, Setcart } = useContext(myContext)

    const nav = useNavigate()


    function handleremove(item) {
        Setlike(like.filter(items => items !== item))
    }
    function confirmremove(item) {
        handleremove(item)
    }

    function handlecart(items) {


        // if (!logsuccess) {
        //     alert("Please log in to add items to the cart.");
        //     nav("/login")
        //     return;
        // }
        if (cart.includes(items)) {
            Setcart(cart.filter(item => item !== items))
        }
        else {
            Setcart([...cart, items])
        }
    }

    return (
        <div>
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
            <div className="wish" style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center",height:"65rem" }}>

                {
                    like.map((data) =>
                        <div
                            className="card"
                            style={{
                                width: "19rem",
                                borderRadius: "12px", 
                                overflow: "hidden", 
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                                // border: "3px solid black", // Your original black border
                                transition: "transform 0.3s ease", 
                                height:"363px",
                                marginTop:"10px"
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
                            <div
                                className="card-body"
                                style={{
                                    padding: "15px",
                                    textAlign: "center", 
                                }}
                            >
                                <h5 className="card-title" style={{ color: "#00796b", fontWeight: "bold" }}>
                                    {data.brand}
                                </h5>
                                <p className="card-text" style={{ color: "#004d40", fontSize: "18px" }}>
                                    ₹{data.price}
                                </p>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    onClick={() => confirmremove(data)}
                                    style={{
                                        backgroundColor: "#00796b",
                                        border: "none",
                                        padding: "10px 20px",
                                        borderRadius: "8px",
                                        fontSize: "16px",
                                    }}
                                >
                                    Remove
                                </a>
                                <a
                                    href="#"
                                    onClick={() => handlecart(data)}
                                    style={{
                                        textDecoration: "none",
                                        color: "#00796b",
                                        fontSize: "20px",
                                        marginLeft: "20px",
                                        marginTop: "14px"
                                    }}
                                >
                                    {cart.includes(data) ? <span class="material-symbols-outlined">
                                        remove_shopping_cart
                                    </span> : <span class="material-symbols-outlined">
                                        add_shopping_cart
                                    </span>}
                                </a>
                            </div>
                        </div>

                    )
                }

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

        </div>
    )
}