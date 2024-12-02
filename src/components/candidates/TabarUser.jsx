import { useEffect, useState } from "react";
import { getTokenUser } from "../../api/api";
import { Link } from "react-router-dom";
export const TabarUser = ({handelLogout}) => {
    const [user, setUser] = useState([]);
    const token = JSON.parse(localStorage.getItem("login"));
    useEffect(() => {
        const getInfor = async () => {
            const userValue = await getTokenUser(token.token)
            console.log(userValue.data)
            setUser(userValue.data.user)
        }
        getInfor()
    }, [])
    return (
        <div>
            <div className="container--tabbar">
                <div className="tabbar--image">
                    <div className="image--profile">                       
                        <img src={`http://127.0.0.1:8000/storage/${user.avatar}`} alt="" /> <br />
                        
                    </div> <br />
                   
                    <div className="user--name">
                        <p>{user.username}</p>
                    </div>
                </div>
                <div className="tabbar--drop--down">
                    <ul>
                        <li><Link className='color' to={"/"}> <b>Trang chủ</b></Link></li>
                        <li><Link className='color' to="" > <b>Nộp đơn</b></Link></li>
                        <li><Link className='color' to="Information"> <b>Thông tin</b></Link></li>
                        <li><Link className='color' to="ChangePassword"> <b>Đổi mật khẩu</b></Link></li>
                        <button className="button" onClick={handelLogout}><b>Đăng xuất</b></button>
                        

                    </ul>
                </div>
            </div>
        </div>
    )
}