import { useEffect, useState } from "react";
import { getTokenUser,UserChangePassword } from "../../api/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
export const ChangePassword = () => {
    const navigate=useNavigate()
    const token = JSON.parse(localStorage.getItem("login"));
    const [pass, setPass] = useState(false);
    const [error,setErorr]=useState({})
    const [id,setId]=useState({
        id:""
    });
    useEffect(() => {
        const getInfor = async () => {
            const userValue = await getTokenUser(token.token)
            setId(userValue.data.user.id)
        }
        getInfor()
    }, [])
    const [pass1,setPassword]=useState({
        password:""
    })
    const handelSubmit = async(e) => {
        e.preventDefault();
        let error={}
        if(pass1.password==""){
            error.password="Vui lòng nhập mật khẩu"
        }else{
            const status= await axios.post(`http://127.0.0.1:8000/api/candidate/compare-password/${id}`,pass1) 
            if(status.data.status==400){
                error.password=status.data.message
            }else if(status.data.status==200){
                setPass(true)
            }
        }
       setErorr(error)
    }

    const [password,setNewPass]=useState({
        password:""
    })
    const [confirm_password,setCon_Pass]=useState({
        password:""
    })


    
    const handelConfirm=async(e)=>{
        e.preventDefault();
        let error={}
        if(password.password==""){
            error.passwor="Vui lòng nhập mật khẩu"
        }else if(password.password.length<8){
            error.passwor="Mật khẩu phải có ít nhất 8 ký tự"
        }
        if(confirm_password.password!=password.password){
            error.passwo="Mật khẩu không khớp"
        }else if(confirm_password.password.length<8){
            error.passwo="Vui lòng xác nhập mật khẩu"
        }
        else{
            const status=await UserChangePassword(id,password)
            if(status.data.status==400){
                error.passwo='Không thể đổi mật khẩu'
            }else if(status.data.status==200){
               Swal.fire({
                title:"Tuyệt vời",
                text:"Đổi mật khẩu thành công",
                icon:"success"
            })
            .then(()=>{
                setPass(false)
            })
        }
            
            
        }
        setErorr(error)
    }
    return (
        <>
            {pass == false ?
                (<form onSubmit={handelSubmit} className='container--form--passwords'>
                    <label htmlFor=""><b>Nhập mật khẩu hiện tại</b></label> <br /> <br />
                        <input type='password' name='password' className='form--input' placeholder='Nhập mật khẩu' onChange={(e)=>setPassword({password:e.target.value})}/> <br />
                        <p className='password--error'>{error && error.password}</p> <br />
                    <button type='submit' className='button--form'>OK</button>
                    
                    
                </form>) :
                (
                    <form onSubmit={handelConfirm} className='container--form--passwords'>
                    <label htmlFor="">Mật khẩu mới</label> <br />
                    <input className='form--input' name='new_password' type='password' onChange={(e)=>setNewPass({password:e.target.value})}/>
                    <p className='password--error'>{error && error.passwor}</p>
                    <label htmlFor="">Xác thực mật khẩu</label><br />
                    <input className='form--input' name='confirm_password' type='password' onChange={(e)=>setCon_Pass({password:e.target.value})}/>
                    <p className='password--error'>{error && error.passwo}</p> 
                        <button type='submit' className='button--form'>Cập nhật</button>
                   
                </form>)}
        </>
    )
}