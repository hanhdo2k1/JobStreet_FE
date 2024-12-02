import "../../_style/pages//login.scss";
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
import { userLogin,employerLogin } from "../../api/api";

export const LoginUser = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    const exist=JSON.parse(localStorage.getItem("login"))
    if(exist) {
        navigate("/")
    }
    const handelInput = (e) => {
        const values = { ...login, [e.target.name]: e.target.value }
        setLogin(values)
    }
    const [error, setError] = useState({})
    const adminAccount = {
        email: "jobstreet@gmail.com",
        password: "123456789"
      };
      
      const adminAccountJSON = JSON.stringify(adminAccount);
      localStorage.setItem("admin", adminAccountJSON);
    const handelSubmit = async (e) => {
        e.preventDefault();
        let error = {}
        const admin = JSON.parse(localStorage.getItem("admin"));
        if (admin && login.email === admin.email && login.password === admin.password) {
            navigate("/admin");
        }
        const token = await userLogin(login)
        switch (token.data.status) {
            case "empty_email":
                error.email = token.data.message
                break
            case "empty_password":
                error.password = token.data.message
               break
            case 404:
                error.email = token.data.message
                break;
            case 200:
                localStorage.setItem("login", JSON.stringify({ token: token.data.token}))
                localStorage.setItem('userType', JSON.stringify("candidate"));
                navigate("/")
            default:
                break;
        }
        setError(error)



    }
    return (
        
        <div className="background-image">
            <div className='container--login'>
                <form onSubmit={handelSubmit} action="" method="post" className='margin--top'>
                    <div className="content--login">
                        <h2>Đăng nhập</h2>
                    </div><br />

                    <div className="form--login--email">
                        <input name="email" type="email" className='login--email' placeholder="Nhập Email để đăng nhâp" onChange={handelInput} /> <br />
                        <p className="login--error">{error.email}</p>

                    </div>
                    <div className="form--login--password">
                        <input name="password" type="password" className='login--password' placeholder="Nhâp mật khẩu" onChange={handelInput} /> <br />
                        <p className="login--error">{error.password}</p>
                    </div>
                    <div className="forgot--pass">
                        <Link to={"/userForgot"}><p> Bạn quên mật khẩu ?</p></Link>
                    </div>

                    <button type="submit" className='button--login'><h5>Đăng nhập</h5></button>


                </form> <br />

                <div className="another--relevent">
                    <p>Bạn chưa có tài khoản ? <Link to={"/registerUser"}><h7>Nhấn vào đây</h7></Link> để dễ dàng tạo tài khoản</p>
                    <p>Nếu bạn là nhà tuyển dụng, hãy <Link to={"/loginEmployee"}> <h7>Nhấn vào đây</h7></Link></p>

                </div>
            </div>
        </div>
    )
}

export const LoginEmployee = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    const handelInput = (e) => {
        const values = { ...login, [e.target.name]: e.target.value }
        setLogin(values)
    }
    const [error, setError] = useState({})

    const handelSubmit = async (e) => {
        e.preventDefault();
        let error = {}
        const exist=JSON.parse(localStorage.getItem("login"))
        if(exist) {
        navigate("/")
    }
        const token = await employerLogin(login)
        switch (token.data.status) {
            case "empty_email":
                error.email = token.data.message
                break
            case "empty_password":
                error.password = token.data.message
               break
            case 404:
                error.email = token.data.message
                break;
            case 200:
                localStorage.setItem("login", JSON.stringify({token: token.data.token}))
                localStorage.setItem('userType', JSON.stringify("company"));
                navigate("/")
            default:
                break;
        }
        setError(error)
    }
 
    return (
        
        <div className="background-image">
        <div className='container--login'>
            <form onSubmit={handelSubmit} action="" method="post" className='margin--top'>
                <div className="content--login">
                    <h2>Đăng nhập</h2>
                    </div><br />
                <div className="form--login--email">
                    <input name="email" type="email" className='login--email' placeholder="Nhập Email để đăng nhâp" onChange={handelInput} /> <br />
                    <p className="login--error">{error.email}</p>
                </div>
                <div className="form--login--password">
                <input name="password" type="password" className='login--password' placeholder="Nhâp mật khẩu" onChange={handelInput} /> <br />
                    <p className="login--error">{error.password}</p>
                </div>
                <div className="forgot--pass">
                    <Link to={"/employeeForgot"}><p> Bạn quên mật khẩu ?</p></Link>
                </div>

                <button type="submit" className='button--login'><h5>Đăng nhập</h5></button>


            </form>

            <div className="another--relevent">
                    <p>Bạn chưa có tài khoản ? <Link to={"/registerEmployee"}><h7>Nhấn vào đây</h7></Link> để dễ dàng tạo tài khoản</p>
            </div>
        </div>
        </div>
    )
}
