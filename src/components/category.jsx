import { useContext } from "react"
import { myContext } from "./context"
import { useNavigate, useParams, Link } from "react-router-dom"

export default function Category() {
    const { products, cart, Setcart, like, Setlike, Setlogsuccess, logsuccess, buynow, SetBuynow } = useContext(myContext)
    const { category } = useParams()

    const nav = useNavigate()

    const productsdata = products.filter(items => items.category === category)
    console.log('data', productsdata)


    function handlebuynow(datas) {

        if (buynow && buynow.id === datas.id) {
            // SetBuynow(null)
        }
        else {
            SetBuynow(datas)
        }
        nav("/buynow")
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


    function handlelike(items) {
        // if (!logsuccess) {
        //     alert("Please log in to add items to the cart.");
        //     nav("/login")
        //     return;
        // }


        if (like.includes(items)) {
            Setlike(like.filter(item => item !== items))
        }
        else {
            Setlike([...like, items])
        }
    }





    return (

        <div className="content"   >
            <div class="nav" style={{ gap: "10px" }}>
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
            <div className="container" style={{ display: "flex", gap: "30px", justifyContent: "center", marginTop: "20px" ,height:"65rem",flexWrap:"wrap"}}>
                {
                    productsdata.map((datas) =>
                        <div
                            className="card"
                            style={{
                                width: "17rem",
                                borderRadius: "12px", // Rounded corners
                                overflow: "hidden", // Prevent overflow
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                                // border: "3px solid black", // Your original black border
                                transition: "transform 0.3s ease", // Smooth hover effect
                                display: "flex",
                                height:"363px"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")} // Scale effect on hover
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Return to normal
                        >
                            <img
                                className="card-img-top"
                                src={datas.image}
                                alt="Card image cap"
                                style={{ height: "200px", objectFit: "cover" }} // Ensuring image stays within bounds
                            />
                            <div
                                className="card-body"
                                style={{
                                    //   backgroundColor: "rgb(168, 232, 232)", // Background color you specified
                                    padding: "15px",
                                    textAlign: "center", // Center-align text and button
                                }}
                            >
                                <h5 className="card-title" style={{ color: "#00796b", fontWeight: "bold" }}>
                                    {datas.brand}
                                </h5>
                                <p className="card-text" style={{ color: "#004d40", fontSize: "18px" }}>
                                    ${datas.price}
                                </p>
                                <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>

                                    <button id="btn1" onClick={() => handlebuynow(datas)} style={{
                                        borderRadius: "10px", borderRadius: "10px",
                                        color: "green",

                                        /* outline: none; */
                                        boxShadow: " 0 6px 8px rgba(0, 0, 0, 0.2)",

                                        backgroundColor: "#ff6347",
                                        border: "none",
                                        fontSize: "16px",
                                        cursor: "pointer",
                                        padding: "9px 22px"
                                    }}>buy now</button>

                                    <a
                                        href="#"
                                        onClick={() => handlelike(datas)}
                                        style={{
                                            textDecoration: "none",
                                            color: like.includes(datas) ? "red" : "#555",
                                            fontSize: "20px",
                                        }}
                                    >
                                        {like.includes(datas) ? '♥' : '♡'}
                                    </a>
                                    <a
                                        href="#"
                                        onClick={() => handlecart(datas)}
                                        style={{
                                            textDecoration: "none",
                                            color: "#00796b",
                                            fontSize: "20px",
                                        }}
                                    >
                                        {cart.includes(datas) ? '🛒 Remove' : '🛒 Add'}
                                    </a>
                                </div>

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