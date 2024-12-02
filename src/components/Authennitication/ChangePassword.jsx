import React, { useState } from 'react'
import "../../_style/pages/changepassword.scss"
import { useNavigate, Link } from 'react-router-dom'
import { resetPassword, resetPasswordEmployer } from '../../api/api'
import { Form, Input, Button } from "antd"
export const UserChangePassword = () => {
    const [password,setPassword] =useState({
        password:"",
    })
    const [confirm_pass,setConfirm_pass] =useState({
        confirm_pass:""
    })
    const [error,setError]=useState({})
    const navigate = useNavigate()
    const email = JSON.parse(localStorage.getItem("user"));

    const handelSubmit = async (e) => {
        e.preventDefault()
        let status=1
        let error={}
        if (password.password==="") {
            error.password="Vui lòng nhập mật khẩu mới"
            status=0
        }else if(password.password.length<8){
            error.password="Mật khẩu phải lớn hơn 8 ký tự"
            status=0
        }
        if(confirm_pass.confirm_pass!=password.password){
            error.confirm_pass="Xác thực không chính xác"
            status=0
        }
        if(status==1){
            const Log = await resetPassword(email,password)
            localStorage.removeItem("user")
            navigate("/")
        }
        setError(error)
    }
    return (
        <div className='backgroud__image'>
            <div className="container__form__pass">
            <form onSubmit={handelSubmit} action="" method="post">
                <div className="title__form__pass">
                    <h3>Lấy lại mật khẩu</h3>
                </div>
                <div className="value__button__password">
                    <input name='password' type='password' className='data__button' placeholder='Nhâp mật khẩu mới'  onChange={(e)=>setPassword({password:e.target.value})}/> <br />
                    <p className='password__error'>{error && error.password}</p> 
                </div>
                <div className="value__button__confirm">
                    <input name='confirm_pass' type='password' className='data__button' placeholder='Xác thực mật khẩu' onChange={(e)=>setConfirm_pass({confirm_pass:e.target.value})}/>  
                    <p className='password__error'>{error && error.confirm_pass}</p>
                </div>
                <button className='data__button confirm_' htmlType="submit">Xác thực</button>
               
            </form>
            <div className="link__back">
                <p>Tôi muốn <Link className="color" to={"/"}>quay về</Link></p>
            </div>

        </div>
        </div>
    )
}

export const EmployeeChangePassword = () => {
    const [password,setPassword] =useState({
        password:"",
    })
    const [confirm_pass,setConfirm_pass] =useState({
        confirm_pass:""
    })
    const [error,setError]=useState({})
    const navigate = useNavigate()
    const email = JSON.parse(localStorage.getItem("user"));

    const handelSubmit = async (e) => {
        e.preventDefault()
        let status=1
        let error={}
        if (password.password==="") {
            error.password="Vui lòng nhập mật khẩu mới"
            status=0
        }else if(password.password.length<8){
            error.password="Mật khẩu phải lớn hơn 8 ký tự"
            status=0
        }
        if(confirm_pass.confirm_pass!=password.password){
            error.confirm_pass="Xác thực không chính xác"
            status=0
        }
        if(status==1){
            const log = await resetPasswordEmployer(email,password)
            localStorage.removeItem("user")
            navigate("/")
        }
        setError(error)
    }
    return (
        <div className='backgroud__image'>
        <div className="container__form__pass">
        <form onSubmit={handelSubmit} action="" method="post">
            <div className="title__form__pass">
                <h3>Lấy lại mật khẩu</h3>
            </div>
            <div className="value__button__password">
                <input name='password' type='password' className='data__button' placeholder='Nhâp mật khẩu mới'  onChange={(e)=>setPassword({password:e.target.value})}/> <br />
                <p className='password__error'>{error && error.password}</p> 
            </div>
            <div className="value__button__confirm">
                <input name='confirm_pass' type='password' className='data__button' placeholder='Xác thực mật khẩu' onChange={(e)=>setConfirm_pass({confirm_pass:e.target.value})}/>  
                <p className='password__error'>{error && error.confirm_pass}</p>
            </div>
            <button className='data__button confirm_' htmlType="submit">Xác thực</button>
           
        </form>
        <div className="link__back">
            <p>Tôi muốn <Link className="color" to={"/"}>quay về</Link></p>
        </div>

    </div>
    </div>
    )
}