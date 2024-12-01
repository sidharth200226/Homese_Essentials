import { useContext, useState } from "react";
import { myContext } from "../context";
import { Link, useNavigate } from "react-router-dom";
// import image1 from './images/carousel1.jpg';
// import image2 from './images/image3.png';
// import image3 from './images/image2.jpg';

export default function Adminproduct() {
    const { like, Setlike, cart, Setcart, products, buynow, SetBuynow, logsuccess, Setlogsuccess, Setproducts } = useContext(myContext);
    const [searchdata, SetsearchData] = useState(products);
    const [searchquery, SetsearchQuery] = useState("");
    const [editindex, Seteditindex] = useState(null); // To track product id to edit
    const [result, Setresult] = useState({}); // Store edited data
    const nav = useNavigate();

    function handleEdit(index, value) {
        Seteditindex(index);
        Setresult(value);
    }

    function handleSaveEdit(index) {
        const editedData = [...products];
        editedData[index] = { ...editedData[index], ...result }
        Setproducts(editedData);
        Seteditindex(null);
        console.log("edited", result);

    }

    function handleDelete(index) {
        if (window.confirm("Are you sure you want to delete this product?")) {
            const deletedData = [...products];
            deletedData.splice(index, 1); // Remove the product from array
            Setproducts(deletedData);
        }
    }

    function handleCancelEdit() {
        Seteditindex(null);
        Setresult({});
    }

    function handleSearch(e) {
        const query = e.target.value;
        SetsearchQuery(query);

        const filtered = products.filter(item => {
            const { brand, category } = item;
            return (
                brand.toLowerCase().includes(query.toLowerCase()) ||
                category.toLowerCase().includes(query.toLowerCase())
            );
        });
        SetsearchData(filtered);
        console.log("search", filtered);

    }




    return (
        <div>
            <div className="nav" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 20px",
                backgroundColor: "#4A4E69",
                width: "100%",
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "1000"
            }}>
                <h1 style={{
                    color: "white",
                    margin: "0",
                    fontSize: "26px",
                    fontWeight: "bold",
                    letterSpacing: "1px"
                }}>ADMIN.</h1>

                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

                        <input
                            type="text"
                            placeholder="Search"
                            value={searchquery}
                            onChange={handleSearch}
                            style={{
                                padding: "4px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                                fontSize: "16px",
                                width: "200px"
                            }}
                        />
                    </div>
                    <Link to={"/admin"} style={{
                        textDecoration: "none",
                        color: "#F4EDE8",
                        fontWeight: "bold",
                        padding: "5px 15px",
                        backgroundColor: "#9A8C98",
                        borderRadius: "5px",
                        transition: "background-color 0.3s ease"
                    }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6C757D")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#9A8C98")}>
                        <i class="fa-solid fa-arrow-left"></i>
                    </Link>
                    <Link to={"/login"} style={{
                        textDecoration: "none",
                        color: "#F4EDE8",
                        fontWeight: "bold",
                        padding: "5px 15px",
                        backgroundColor: "#9A8C98",
                        borderRadius: "5px",
                        transition: "background-color 0.3s ease"
                    }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6C757D")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#9A8C98")}>
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </Link>




                </div>
            </div>

            <div
                className="contents"
                style={{
                    display: "flex",
                    gap: "30px",
                    flexWrap: "wrap",
                    backgroundColor: "#f1f1f1",
                    padding: "20px",
                    justifyContent: "center",
                    marginTop: "100px"
                }}
            >
                {(searchquery ? searchdata : products).map((data, index) => (
                    <div
                        className="card"
                        key={index}
                        style={{
                            width: "18rem",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease",

                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                        <img
                            className="card-img-top"
                            src={data.image}
                            alt="Card image cap"
                            style={{ height: "200px", objectFit: "cover" }}
                        />

                        {editindex === index ? (
                            <div style={{ padding: '10px' }}>
                                <label>
                                    Product Name:
                                    <input
                                        type="text"
                                        value={result.brand || ""}
                                        onChange={(e) => Setresult({ ...result, brand: e.target.value })}
                                        style={{ width: '229px', padding: '5px', marginBottom: '5px' }}
                                    />
                                </label>
                                <label>
                                    Price:
                                    <input
                                        type="text"
                                        value={result.price || ""}
                                        onChange={(e) => Setresult({ ...result, price: e.target.value })}
                                        style={{ width: "229px", padding: '5px', marginBottom: '5px' }}
                                    />
                                </label>
                                <label>
                                    Category:
                                    <input
                                        type="text"
                                        value={result.category || ""}
                                        onChange={(e) => Setresult({ ...result, category: e.target.value })}
                                        style={{ width: '229px', padding: '5px', marginBottom: '5px' }}
                                    />
                                </label>
                                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                    <button
                                        className="btns"
                                        onClick={() => handleSaveEdit(index)}
                                        style={{ borderColor: "#e9e9e9", color: "white", padding: '5px 10px', backgroundColor: "#dcc8ad", borderRadius: "8px" }}
                                    >
                                        <i class="fa-solid fa-check"></i>
                                    </button>
                                    <button
                                        className="btnc"
                                        onClick={handleCancelEdit}
                                        style={{ backgroundColor: "gray", color: "white", padding: '5px 10px', borderRadius: "8px", backgroundColor: "#f55f5f", borderColor: "#e9e9e9" }}
                                    >
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div style={{ padding: '10px' }}>
                                <p style={{ height: "50px", overflowY: "scroll" }}>
                                    <b>{data.brand}</b>
                                </p>
                                <p>Category: {data.category}</p>
                                <p>Price: ₹{data.price}</p>

                                <div style={{ display: 'flex', gap: '10px', marginTop: '10px', }}>
                                    <button className="btns" onClick={() => handleEdit(index, data)} style={{ borderRadius: "8px", borderColor: "#e9e9e9" }}>
                                        <span className="material-symbols-outlined" >
                                            edit_square
                                        </span>
                                    </button>
                                    <button className="btnc" onClick={() => handleDelete(index)} style={{ borderRadius: "8px", borderColor: "#e9e9e9" }}>
                                        <span className="material-symbols-outlined" >
                                            delete
                                        </span>
                                    </button>
                                    {/* <Link to={"/"} style={{ textDecoration: "none" }}>
                                        <button className="btnh">Home</button>
                                    </Link> */}
                                </div>
                            </div>
                        )}
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
    );
}
