import { useContext } from "react"
import { myContext } from "../context"
import { useNavigate, Link } from "react-router-dom"

export function View() {
  const { user, Setuser,  SetLoginuser, logsuccess, Setlogsuccess } = useContext(myContext)

  const nav = useNavigate()

  function handleban(userdata) {
    const userban = user.map((data) =>
      data.email === userdata.email ? { ...data, banned: !data.banned } : data)
    Setuser(userban)
    console.log("userban", userban);


    const banneduser = userban.find((data) => data.email === userdata.email)
    console.log();
    
    if (banneduser?.banned) {
      SetLoginuser(null)
      alert("user cannot login he is banned")
    }


  }
  function handleapprove() {
    alert("Approved,go to index page")
    nav('/index')
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
      }}>HomeEssentials.</h1>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to={"/cart"} style={{
          textDecoration: "none",
          color: "#F4EDE8",
          fontWeight: "bold",
          padding: "5px 15px",
          backgroundColor: "#9A8C98",
          borderRadius: "5px",
          transition: "background-color 0.3s ease"
        }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6C757D")}
           onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#9A8C98")}>
          Cart
        </Link>

        <Link to={"/wishlist"} style={{
          textDecoration: "none",
          color: "#F4EDE8",
          fontWeight: "bold",
          padding: "5px 15px",
          backgroundColor: "#9A8C98",
          borderRadius: "5px",
          transition: "background-color 0.3s ease"
        }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6C757D")}
           onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#9A8C98")}>
          Wishlist
        </Link>

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
          Admin
        </Link>
      </div>
    </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        minHeight: "100vh",
        backgroundColor: "#e8f5e9",
        padding: "20px"
      }}>
        {user.map((datas, index) => (
          <div key={index}

            style={{
              width: "280px",
              border: "2px solid #8e8e8e",
              borderRadius: "10px",
              padding: "20px",
              margin: "15px",
              backgroundColor: "#f0e4d7",
              boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              textAlign: "center",
              cursor: "pointer", height: "207px"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h2 style={{ color: "#4a4a4a", fontSize: "1.5em", marginBottom: "10px" }}>{datas.name}</h2>
            <p style={{ color: "#6b6b6b", margin: "5px 0", fontSize: "1.1em" }}>
              <strong>Email: </strong>{datas.email}
            </p>
            <p style={{ color: "#6b6b6b", margin: "5px 0", fontSize: "1.1em" }}>
              <strong>Password: </strong>{datas.password}
            </p>
            <b>Status: {datas.banned ? "Banned" : "Active"}</b>

            <br />
            <button className="btn btn-danger" style={{marginTop:"10px"}} onClick={() => handleban(datas)}> {datas.banned ? "Unban" : "Ban"}</button>
            {/* <button className="btn btn-success" style={{ marginLeft: "10px" }} onClick={handleapprove}>approve</button> */}

          </div>
        ))}
      </div>
    </div>
  );

}