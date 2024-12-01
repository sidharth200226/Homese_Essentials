import { useContext, useState } from "react"
import { myContext } from "./context"
import { useNavigate } from "react-router-dom"
import bg from "./images/bg1.jpg"

export default function Login() {

    const { loginuser, SetLoginuser, user, Setuser, Setlogsuccess, logsuccess } = useContext(myContext)
    const [email, Setemail] = useState("")
    const [password, Setpassword] = useState("")
    const [error, Seterror] = useState("")


    const nav = useNavigate()

    function Loginbutton(e) {
        e.preventDefault()

        const login = user.find((userdata) => userdata.email === email && userdata.password === password)
        if (login) {
            if(login.banned){
                return alert("User has been banned! Please contact Admin")
            }
            
            SetLoginuser([...loginuser, login])
            alert("login successfull")

            nav("/index")
            Setlogsuccess(true)
            console.log("logined user", login)
        }
        else {
            Seterror("invalid user id")
        }

        if (email === "admin" && password === "admin") {
            SetLoginuser([...loginuser,login])
            alert("login success")
            nav("/admin")
            Setlogsuccess(true)
            
        }
    }


    return (
        <div>
            <div class="form-bg">

                <div class="container">
                    <div class="row">
                        <div class="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6" style={{ width: "380px", height: "54rem", marginLeft: "29rem", marginTop: "130px" }}>
                            <div class="form-container">
                                <h3 class="title">My Account</h3>
                                <form class="form-horizontal">
                                    <div class="form-icon">
                                        <i class="fa fa-user-circle"></i>
                                    </div>
                                    <div class="form-group">
                                        <span class="input-icon"><i class="fa fa-user"></i></span>
                                        <input type="email" class="form-control" placeholder="email" fdprocessedid="obqybd" onChange={(e) => Setemail(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <span class="input-icon"><i class="fa fa-lock"></i></span>
                                        <input type="password" class="form-control" placeholder="Password" fdprocessedid="mqqymj" onChange={(e) => Setpassword(e.target.value)} />
                                        <span class="forgot"><a href="/register">Don't have an Account?</a></span>
                                        {/* <span class="forgot"><a href="/view">Admin</a></span> */}

                                    </div>
                                    <button class="btn signin" fdprocessedid="k0rlrf" onClick={(e) => Loginbutton(e)}>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}