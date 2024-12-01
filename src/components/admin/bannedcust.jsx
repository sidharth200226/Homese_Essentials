import { useContext } from "react"
import { myContext } from "../context"

export function Bannedcust(){
const{user,Setuser}=useContext(myContext)


    const banneduser=user.find((data)=>data.banned)

    console.log("banned",banneduser);
    
    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor: "#f0e4d7",minHeight:"100vh",flexWrap:"wrap"}}>
        {
         banneduser && banneduser.name?(
            <div style={{width:"100px",width: "187px",
                border:" 2px solid #8e8e8e",
                height: "168px",
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                padding: "32px",boxShadow:"2px 12px 14px 2px;"}}>
            <p >
                <strong> name:</strong>{banneduser.name}</p>
            <p >
                <strong> Email:</strong>{banneduser.email}</p>
                <p >
                <strong> password:</strong>{banneduser.password}</p>
            </div>
           ): <p style={{fontWeight:"bold",fontSize:"15px"}}>No Banned users Found</p>
        }
        </div>
    )
}