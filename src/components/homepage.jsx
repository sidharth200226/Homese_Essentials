import { useContext, useState } from "react"
import { myContext } from "./context"
import { Link, Navigate, useNavigate } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/carousel1.jpg'
import image2 from './images/image3.png'
import image3 from './images/image2.jpg'


// import { Productsdata } from "./productsdata"

export default function Index() {
    const { like, Setlike, cart, Setcart, products, buynow, SetBuynow, logsuccess, Setlogsuccess } = useContext(myContext)
    const [searchquery, SetsearchQuery] = useState("")
    const [searchdata, SetsearchData] = useState(products)
    const nav = useNavigate()
    // console.log(products)

    function handlelike(items) {
        if (!logsuccess) {
            alert("Please log in to add items to the cart.");
            nav("/login")
            return;
        }


        if (like.includes(items)) {
            Setlike(like.filter(item => item !== items))
        }
        else {
            Setlike([...like, items])
        }
    }

    // console.log("liked",like)



    function handlecart(items) {


        if (!logsuccess) {
            alert("Please log in to add items to the cart.");
            nav("/login")
            return;
        }
        if (cart.includes(items)) {
            Setcart(cart.filter(item => item !== items))
        }
        else {
            Setcart([...cart, items])
        }
    }


    function handlebuynow(datas) {
        
        if (buynow && buynow.id === datas.id) {
            // SetBuynow(null)
        }
        else {
            SetBuynow(datas)
        }
        nav("/buynow")

    }

    console.log("bought", buynow)

    function handlesearch(e) {
        const query = e.target.value
        SetsearchQuery(query)

        const filtered = products.filter(item => {
            const { brand, category } = item
            return (
                brand.toLowerCase().includes(query.toLowerCase()) ||
                category.toLowerCase().includes(query.toLowerCase())
            )
        })
        SetsearchData(filtered)
    }
    console.log(searchdata)
    const categories = [...new Set(products.map(item => item.category))]//set use cheyyunath multiple data ondnkil one ayit edkkan



    function handlechange(e) {
        const query = e.target.value
        nav(`/homepage/${query}`)
    }

    function handlesignout() {
        Setcart([])
        Setlike([])
        nav("/login")

    }








    return (

        <div>

            <div className="nav" style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "space-between",
                padding: "10px 20px",
                backgroundColor: "#333"
            }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchquery}
                        onChange={handlesearch}
                        style={{
                            padding: "4px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            fontSize: "16px",
                            width: "200px"
                        }}
                    />

                    <select
                        onChange={handlechange}
                        style={{
                            padding: "4px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            fontSize: "16px",
                            backgroundColor: "#fff"
                        }}
                    >
                        <option value="">Select</option>
                        {categories.map(data => <option value={data} key={data}>{data}</option>)}
                    </select>
                </div>
                <div class="home-essentials-container">
                    <i class="fa-solid fa-house"></i>
                    <h1 class="h1" style={{
                        color: "white",
                        margin: "0",
                        fontSize: "24px",
                        fontWeight: "bold",
                        paddingLeft: "10px"
                    }}>HomeEssentials</h1>
                </div>


                <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                    {
                        logsuccess ? (
                            <Link to={"/login"} style={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: "bold",
                                padding: "5px 10px"
                            }} onClick={handlesignout}><i class="fa-solid fa-right-from-bracket"></i></Link>
                        ) : <Link to={"/register"} style={{
                            textDecoration: "none",
                            color: "white",
                            fontWeight: "bold",
                            padding: "5px 10px"
                        }}><i class="fa-solid fa-user"></i></Link>
                    }

                    <Link to={"/cart"} style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                        padding: "5px 10px"
                    }}><i class="fa-brands fa-shopify"></i></Link>

                    <Link to={"/wishlist"} style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                        padding: "5px 10px"
                    }}><i class="fa-solid fa-heart"></i></Link>



                    <Link to={"/login"} style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                        padding: "5px 10px"
                    }}><span class="material-symbols-outlined">
                            shield_person
                        </span></Link>
                </div>
            </div>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img src={image1} alt="First slide" style={{ width: "100%", height: "36rem" }} />
                    <Carousel.Caption>
                        {/* <p style={{color:"black",fontFamily:"fantasy",fontSize:"20px"}}>New Smart Platform Expeirence</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img src={image2} alt="First slide" style={{ width: "100%", height: "36rem" }} />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img src={image3} alt="First slide" style={{ width: "100%", height: "36rem" }} />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3> */}
                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div
                className="contents"
                style={{
                    display: "flex",
                    gap: "30px",
                    flexWrap: "wrap",
                    backgroundColor: "rgb(232 232 232)", // Light teal for a fresh background
                    padding: "20px",
                    justifyContent: "center",
                }}
            >
                {searchdata.map((data) => (
                    <div
                        className="card"
                        style={{
                            width: "18rem",
                            borderRadius: "12px", // Rounded corners
                            overflow: "hidden", // Prevent overflow
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                            transition: "transform 0.3s ease", // Smooth hover effect
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"} // Scale effect on hover
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} // Return to normal
                    >
                        <img
                            className="card-img-top"
                            src={data.image}
                            alt="Card image cap"
                            style={{ height: "200px", objectFit: "cover", }} // Ensuring image stays within bounds
                        />
                        <div className="card-body" style={{ padding: "15px", textAlign: "center" }}>
                            <h5 className="card-title" style={{ color: "#00796b", fontWeight: "bold" }}>
                                {data.brand}
                            </h5>
                            {/* <p className="card-text" style={{ color: "#004d40", fontSize: "18px" }}>
                                ₹{data.price}
                            </p> */}

                            <div style={{ display: "flex", justifyContent: "center", gap: "12px" ,marginTop:"54px"}}>

                                <button id="btn1" onClick={() => handlebuynow(data)} style={{
                                    borderRadius: "10px", borderRadius: "10px",
                                    color: "green",

                                    /* outline: none; */
                                    boxShadow: " 0 6px 8px rgba(0, 0, 0, 0.2)",

                                    backgroundColor: "#ff6347",
                                    border: "none",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    padding: "9px 22px"
                                }}>BUY NOW</button>

                                <a
                                    href="#"
                                    onClick={() => handlelike(data)}
                                    style={{
                                        textDecoration: "none",
                                        color: like.includes(data) ? "red" : "#555",
                                        fontSize: "20px",
                                    }}
                                >
                                    {like.includes(data) ? <i class="fa-solid fa-heart"></i> : <span class="material-symbols-outlined">
                                        favorite
                                    </span>}
                                </a>
                                <a
                                    href="#"
                                    onClick={() => handlecart(data)}
                                    style={{
                                        textDecoration: "none",
                                        color: "#00796b",
                                        fontSize: "20px",
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
                    </div>
                ))}
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