import { useContext, useState } from "react";
import { myContext } from "../context";
import { useNavigate, Link } from "react-router-dom";

export function Add() {
    const { products, Setproducts } = useContext(myContext);
    const [newproducts, Setnewproducts] = useState({
        id: '',
        image: "",
        category: "",
        brand: "",
        price: "",
        desc: ""
    });

    const nav = useNavigate();

    const handlesubmit = (event) => {
        event.preventDefault();

        const updatedproducts = [...products, newproducts];
        Setproducts(updatedproducts);
        console.log("updated", updatedproducts);

        Setnewproducts({
            id: "",
            brand: "",
            image: "",
            category: "",
            price: 0,
            quantity: 1
        });
        nav("/adminproview");
    };

    function handlecancel() {
        Setnewproducts(null);
        nav("/adminproview");
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
            backgroundColor: "#f9f9f9",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)"
        }}>
            <div
                className="card"
                style={{
                    width: "18rem",
                    borderRadius: "12px",
                    overflow: "hidden",
                    padding: "20px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease",
                    backgroundColor: "#ffffff",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                {/* Form fields for adding product */}
                <div style={{ marginBottom: "15px" }}>
                    <p style={{ fontWeight: "bold", color: "#333" }}>ID</p>
                    <input
                        type="text"
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            marginBottom: "10px",
                        }}
                        value={newproducts.id}
                        onChange={(e) =>
                            Setnewproducts({ ...newproducts, id: e.target.value })
                        }
                    />
                </div>
                
                <div style={{ marginBottom: "15px" }}>
                    <p style={{ fontWeight: "bold", color: "#333" }}>Brand</p>
                    <input
                        type="text"
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            marginBottom: "10px",
                        }}
                        value={newproducts.brand}
                        onChange={(e) =>
                            Setnewproducts({ ...newproducts, brand: e.target.value })
                        }
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <p style={{ fontWeight: "bold", color: "#333" }}>Category</p>
                    <input
                        type="text"
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            marginBottom: "10px",
                        }}
                        value={newproducts.category}
                        onChange={(e) =>
                            Setnewproducts({ ...newproducts, category: e.target.value })
                        }
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <p style={{ fontWeight: "bold", color: "#333" }}>Image</p>
                    <input
                        type="text"
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            marginBottom: "10px",
                        }}
                        value={newproducts.image}
                        onChange={(e) =>
                            Setnewproducts({ ...newproducts, image: e.target.value })
                        }
                    />
                </div>

                {/* Additional form fields for Brand, Image URL, Category, Description */}
                <button
                    type="button"
                    onClick={handlesubmit}
                    className="btn btn-success"
                    style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        backgroundColor: "#4CAF50",
                        color: "#fff",
                        fontWeight: "bold",
                        border: "none",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#45a049")
                    }
                    onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#4CAF50")
                    }
                >
                    Submit
                </button>
            </div>

            <footer style={{
                width: "100%",
                backgroundColor: "#333",
                color: "#fff",
                padding: "20px",
                marginTop: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    gap: "20px"
                }}>
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
                            <a href="#" style={{ color: "#fff" }}><i className="fa-brands fa-facebook"></i></a>
                            <a href="#" style={{ color: "#fff" }}><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" style={{ color: "#fff" }}><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" style={{ color: "#fff" }}><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div>
                        <h4>Contact Us</h4>
                        <p>Email: support@homeessentials.com</p>
                        <p>Phone: +1 (234) 567-8901</p>
                    </div>
                </div>
                <div style={{
                    textAlign: "center",
                    marginTop: "10px",
                    fontSize: "14px"
                }}>
                    <p>&copy; {new Date().getFullYear()} HomeEssentials. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
