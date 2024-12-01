import { useContext, useState } from "react"
import { myContext } from "./context"
import { useNavigate } from "react-router-dom"

export function Register() {
    const { user, Setuser } = useContext(myContext)
    const [name, Setname] = useState('')
    const [email, Setemail] = useState("")
    const [password, Setpassword] = useState('')
    const [passworderror, Setpassworderror] = useState("")
    const [emailerror, Setemailerror] = useState("")

    const nav = useNavigate()
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    const validatepass = (password) => {
        return password.length >= 6;
    }
    const isUserAlreadyRegistered = () => {
        return user.find((data) => data.email === email)
    }






    function registerbutton() {
        if (!validateEmail(email)) {
            Setemailerror("please enter a valid email")
            return
        }
        else {
            Setemailerror('')
        }

        //   password validation

        if (!validatepass(password)) {
            Setpassworderror("enter a strong password")
            return
        }
        else {
            Setpassworderror("")
        }
        if (isUserAlreadyRegistered()) {
            alert("User already registered. Please use a different email.");
            return
        }
        const userdata = { name, email, password }
        Setuser([...user, userdata])

        nav("/login")
        console.log("registered user",userdata)
    }



    return (
        <div>
            <div class="form-bg"  >
                <div class="container" >
                    <div class="row">
                        <div class="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6" style={{width:"380px",height:"54rem",marginLeft:"29rem",marginTop:"130px"}}>
                            <div class="form-container">
                                <h3 class="title">My Account</h3>
                                <form class="form-horizontal">
                                    <div class="form-icon">
                                        <i class="fa fa-user-circle"></i>
                                    </div>
                                    <div class="form-group">
                                        <span class="input-icon"><i class="fa fa-user"></i></span>
                                        <input type="name" class="form-control" placeholder="Name" fdprocessedid="obqybd"
                                            onChange={(e) => {
                                                Setname(e.target.value)
                                            }} />
                                    </div>



                                    <div class="form-group">
                                        <span class="input-icon"><i class="fa fa-lock"></i></span>
                                        <input type="email" class="form-control" placeholder="email" fdprocessedid="mqqymj"
                                            onChange={(e) => {
                                                Setemail(e.target.value)
                                                Setemailerror("")
                                            }} />
                                        {emailerror && <p style={{ color: "red" }}>{emailerror}</p>}



                                    </div>



                                    <div class="form-group">
                                        <span class="input-icon"><i class="fa fa-lock"></i></span>
                                        <input type="password" class="form-control" placeholder="Password" fdprocessedid="mqqymj"
                                            onChange={(e) => {
                                                Setpassword(e.target.value)
                                                Setpassworderror("")
                                            }} />
                                        {passworderror && <p style={{ color: "red" }}>{passworderror}</p>}

                                    </div>
                                    <button class="btn signin" fdprocessedid="k0rlrf" onClick={()=>registerbutton()}>Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}