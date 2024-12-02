import React from 'react';
import { Link,Navigate } from 'react-router-dom';

function Menuadmin({handelCompany,handelUser,handelInformation,handelbrowse,handleLogout}) {
  // const history = useHistory();

  return (
    
    <div className='content-admin'>
        <div className='left-admin'>
            
           
            <img src="https://image.lag.vn/upload/news/20/11/17/latest_LHPC.jpg" alt="" /> <br />
        <p><h2>Admin </h2></p> 
        </div><br></br><br></br>
      <div className='leftadmin'>
        <ul className='left-content'>
          <li><Link onClick={handelbrowse}><b>Duyệt thông tin</b></Link></li>
          <li><Link onClick={handelCompany}><b>Công ty</b></Link></li>
          <li><Link onClick={handelUser}><b>Ứng viên</b></Link></li>
          <li><Link onClick={handelInformation}><b>Đơn ứng tuyển</b></Link></li>
        </ul>
      
        <button className='login-button' onClick={handleLogout}>Đăng Xuất</button>
        </div>
    </div>

  );
}

export default Menuadmin