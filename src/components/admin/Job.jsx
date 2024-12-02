import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faEnvelopeOpenText, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { Table, Button } from "antd";

function Browse() {
  const [job, setJob] = useState([]);
  const [endUser, setEndUser] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;

  useEffect(() => {
    getData();
    getEndUser()
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/get-status-job");
      setJob(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8000/api/deletejob/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        result.json().then((data) => {
          Swal.fire("Thành công", "Từ chối thành công", "success");
          console.warn(data);
          getData();
        });
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };
  const getEndUser = async () => {
    const data = await axios.get("http://127.0.0.1:8000/api/count");
    setEndUser(data.data)
  }

  const handleUpdate = (id) => {
    fetch(`http://127.0.0.1:8000/api/update-status/${id}`, {
      method: "PUT",
    })
      .then((result) => {
        result.json().then((data) => {
          Swal.fire("Thành công", "Duyệt thành công", "success");
          console.warn(data);
          getData();
        });
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const columns = [
    {
      title: "Vị trí",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Công ty",
      dataIndex: "company_name",
      key: "company_name",
    },
    {
      title: "Lương",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Loại",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Hành động",
      key: "action",
      render: (text, record) => (
        <span>
          <Button
            onClick={() => handleUpdate(record.id)}
            type="primary"
            className="mr-2"
          >
            Duyệt
          </Button>
          <Button
            onClick={() => handleDelete(record.id)}
            type="warning"
            danger
          >
            Từ chối
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div className="content-delete">
      <div className="card">
        <div className="card-user">
          <div className="icon-container">
            <span><FontAwesomeIcon icon={faCoffee} /></span>
          </div>
          <p> Ứng tuyển viên</p>
          <span className="card-text">{endUser.company}</span>
        </div>
        <div className="card-company">
          <div className="icon-container">
            <span> <FontAwesomeIcon icon={faUser} /></span>
          </div>
          <p> Nhà tuyển dụng</p>
          <span className="card-text">{endUser.user}</span>
        </div>
        <div className="card-apply">
          <div className="icon-container">
            <span><FontAwesomeIcon icon={faEnvelopeOpenText} /></span>
          </div>
          <p> Đơn ứng tuyển</p>
          <span className="card-text">{endUser.application}</span>
        </div>
        <div className="card-candidate">
          <div className="icon-container">
            <span>  <FontAwesomeIcon icon={faClipboardList} /></span>
          </div>
          <p> Công việc</p>
          <span className="card-text">{endUser.job}</span>
        </div>
      </div> <br /><br />
      <div>
        <Table className="card-table"
          columns={columns}
          dataSource={job}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: job.length,
            onChange: handlePageChange,
          }}
        />
     </div>
    </div>
  );
}

export default Browse;
