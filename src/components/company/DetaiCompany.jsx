import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../_style/components/Blog/Detail.scss";
function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/get-company/${id}`
      );
      if (response.data) {
        setDetail(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* <NavBar/> */}
      <div className="container_detail">
        <div className="company_detail">
          {detail.slice(0, 1).map((detail) => (
            <>
              <div className="col-md-4 profile-img">
                <img
                  className="card-img-top-img"
                  src={`http://127.0.0.1:8000/storage/${detail.logo}`}
                />
                <h5
                  className="card-title"
                  style={{ fontSize: "38px", fontWeight: "bold" }}
                >
                  {detail.company_name}
                </h5>
              </div>
              <div className="col-md-6">
                <p className="card">
                  <span>
                    <h5>Địa điểm: </h5>
                  </span>
                  {detail?.address}
                </p>
                <p className="card">
                  <span>
                    <h5>Số điện thoại: </h5>
                  </span>
                  {detail?.number_phone}
                </p>
              </div>
              <div className="col-md-6">
                <p className="card">
                  <span>
                    <h5>Website: </h5>
                  </span>
                  <a href={detail?.website}><span>{detail?.website}</span></a>
                </p>
                <p className="card">
                  <span>
                    <h5>Quy mô:</h5>
                  </span>{" "}
                  {detail?.scale} nhân viên
                </p>
              </div>
              {/* </div> */}
            </>
          ))}
        </div>
        <div className="container">
          <div className="row">
            <div className="left">
            <div className="company-information">
          <h2>Thông tin công ty</h2>
          <div className="gioithieu">
            <h5>Giới thiệu</h5>
            <div className="row_gioithieu">
              {detail.slice(0, 1).map((detail) => (
                <div className="card-text">
                  <p className="card-texts">{detail.description}</p>
                </div>
              ))}
            </div>
          </div><hr/>
          <br />
          <div className="gioithieu">
            <h5>Địa chỉ văn phòng</h5>
          <div className="row_gioithieu">
              {detail.slice(0, 1).map((detail) => (
                <div className="card-text">
                  <p className="card-texts">{detail.address}</p>
                </div>
              ))}
            </div><hr />
          </div>
          <div className="gioithieu">
            <br />
            <h5>Việc làm</h5>
            <div className="job">
              {detail.map((detail) => (
                <div className="row-vieclam">
                  <div className="job_position">
                    {" "}
                    <Link
                      activeclassName="active"
                      to={`/job-details/${detail.job_id}`}
                    >
                      {detail.position}{" "}
                    </Link>
                  </div>
                  <p className="card-texts">{detail.address}</p>

                  <hr />
                </div>
              ))}
              
            </div>
            
          </div>
          <div className="btn btn-warning">
                <Link activeclassName="active" to={`/company`}>
                  <p className="link">Xem tất cả công ty</p>
                </Link>
              </div>
        </div>
            </div>
            <div className="right">
                <h2>Vị trí công ty</h2>
                <img src="https://www.google.com/maps/d/thumbnail?mid=1JwrFnS69sR3pVhdmBC1AnS4pibw&hl=en_US"></img>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Detail;