import { FaCheckCircle } from "react-icons/fa"; // Importing an icon library
import { useNavigate,Link } from "react-router-dom";

export function Payment() {
    const nav=useNavigate()


    function navigg(){
        nav("/index")
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "#f1f5f9",
            textAlign: "center",
            padding: "20px"
        }}>
            <div style={{
                backgroundColor: "#4caf50",
                color: "#fff",
                borderRadius: "50%",
                padding: "20px",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                marginBottom: "20px"
            }}>
                <FaCheckCircle size={60} />
            </div>
            <h1 style={{
                fontSize: "2.5rem",
                color: "#333",
                marginBottom: "10px",
                fontWeight: "bold",
            }}>
                Payment Successful!
            </h1>
            <p style={{
                fontSize: "1.2rem",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
            }}>
                Thank you for your payment. Your transaction has been completed, and a receipt for your purchase has been sent to your email.
            </p>
            <Link to={"/index"} style={{
                textDecoration:"none",
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "1rem",
                color: "#fff",
                backgroundColor: "#4caf50",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease"
            }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#388e3c"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#4caf50"} >
                Continue Shopping
            </Link>
        </div>
    );
}
