import { useNavigate,Link } from "react-router-dom"

export function AdminDashboard() {

const nav =useNavigate()


return (
  <div className="container" style={{ fontFamily: "Roboto, sans-serif", minHeight: "100vh" }}>
    {/* Full-Width Navigation Bar */}
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
      <Link to={"/index"} style={{
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


    <div style={{ display: "flex", marginTop: "70px" }}> 

      <div className="sidebar" style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#F7F7F7",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: "60px", 
        left: "0"
      }}>
        <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#333", marginBottom: "20px" }}>Admin Dashboard</h2>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          <li className="nav-item" style={{ marginBottom: "15px" }}>
          <Link to={"/add"} style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
              padding: "10px",
              display: "block",
              transition: "background-color 0.3s ease",
              borderRadius: "5px"
            }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0e0e0")}
               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>
              Add Products
            </Link>
          </li>

          <li className="nav-item" style={{ marginBottom: "15px" }}>
            <Link to={"/adminproview"} style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
              padding: "10px",
              display: "block",
              transition: "background-color 0.3s ease",
              borderRadius: "5px"
            }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0e0e0")}
               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>
              View Products
            </Link>
          </li>

          <li className="nav-item" style={{ marginBottom: "15px" }}>
            <Link to={"/view"} style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
              padding: "10px",
              display: "block",
              transition: "background-color 0.3s ease",
              borderRadius: "5px"
            }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0e0e0")}
               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>
              View Customers
            </Link>
          </li>

          <li className="nav-item" style={{ marginBottom: "15px" }}>
            <Link to={"/banned"} style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
              padding: "10px",
              display: "block",
              transition: "background-color 0.3s ease",
              borderRadius: "5px"
            }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0e0e0")}
               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>
              Banned Customers
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="content" style={{
        marginLeft: "270px", // Adjust for sidebar width
        padding: "20px",
        width: "100%"
      }}>
        <div className="cont2" style={{
          // backgroundColor: "#fff",
          // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "20px"
        }}>
          {/* Your main content will go here */}
          <h1>Welcome to the Admin Dashboard</h1>
          <p>This is the main content area where admin functionality will be displayed.</p>
        </div>
      </div>
    </div>
  </div>
);

}
