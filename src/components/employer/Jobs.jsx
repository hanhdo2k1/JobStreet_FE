import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Table, Modal, Select } from 'antd';
import Swal from 'sweetalert2';
import { getJobsCompany, addJob, updateJob, deleteJob } from '../../api/api';
import "../../_style/pages/employer.scss"

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [add, setAdd] = useState(false);

    const [selectedJob, setSelectedJob] = useState(null);
    const [form] = Form.useForm();
    const token = JSON.parse(localStorage.getItem('login'));
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await getJobsCompany(token.token);
        setJobs(response.data);
      };
      fetchData();
    }, [token.token,add]);
    console.log(jobs)
    const columns = [
      {
        title: 'Vị trí',
        dataIndex: 'position',
        key: 'position',
      },
      {
        title: 'Mô tả công việc',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Loại',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Lương',
        dataIndex: 'salary',
        key: 'salary',
      },
      {
        title: 'Ngày đóng',
        dataIndex: 'close_day',
        key: 'close_day',
      },
      {
        title: 'Category',
        dataIndex: 'cat_id',
        key: 'cat_id',
      },


      {
        title: 'Hành động',
        dataIndex: '',
        key: 'action',
        render: (text, record) => (
          <div>
            <Button type="primary" onClick={() => handleEdit(record)}>Sửa</Button>
            <Button type="primary" onClick={() => handleDelete(record)}>Xóa</Button>
          </div>
        ),
      },
    ];
  
    const handleAdd = async (values) => {
      // console.log(values)
      const Values={
        token:token.token,
        position:values.position,
        cat_id:values.cat_id,
        description:values.description,
        salary:values.salary,
        type:values.type,
        close_day:values.close_day
      }
        try {
          
          const response = await addJob(Values);
          if (response.data) {
          
            form.resetFields();
            const updatedJobs = [...jobs, response.data.job];
            setJobs(updatedJobs);
            setModalVisible(false);
            setAdd(!add)
          }
          Swal.fire({
            icon: 'success',
            title: 'Thành công',
            text: 'Hãy chờ admin duyệt!',
          });
        } catch (error) {
          // Xử lý lỗi khi thêm công việc
          console.error(error);
        // }
      };
    }
  
    const handleEdit = (job) => {
      setSelectedJob(job);
      setModalVisible(true);
    };
  
    const handleUpdate = async (values) => {
      try {
        const response = await updateJob(token.token, selectedJob.id, values);
        
          // Cập nhật công việc thành công
         
          form.resetFields();
          // Cập nhật danh sách công việc
          const updatedJobs = jobs.map((job) => {
            if (job.id === selectedJob.id) {
              return { ...job, ...response.data };
            }
            return job;
          });
           setJobs(updatedJobs);
          Swal.fire({
            icon: 'success',
            title: 'Thành công',
            text: 'Công việc đã được cập nhật!',
          });
          setModalVisible(false);
        
      } catch (error) {
        // Xử lý lỗi khi cập nhật công việc
        console.error(error);
      }
    };
  
    const handleDelete = async (job) => {
      try {
        const response = await deleteJob(token.token, job.id);

          const updatedJobs = jobs.filter((item) => item.id !== job.id);
          setJobs(updatedJobs);
          Swal.fire({
            icon: 'success',
            title: 'Thành công',
            text: 'Công việc đã được xóa!',
          });
      } catch (error) {
        // Xử lý lỗi khi xóa công việc
        console.error(error);
      }
    };
  
    return (
      <div className="content-delete">
        <div className="user--title">
          <h2>Công việc đã đăng</h2> <br/>
        </div>
        <div className="user--content">
          <Button type="primary" onClick={() => setModalVisible(true)}>Thêm công việc</Button>
          <Table dataSource={jobs} columns={columns}  className='card-table'/>
  
          <Modal
            title={selectedJob ? 'Sửa công việc' : 'Thêm công việc'}
            visible={modalVisible}
            onCancel={() => {
              setModalVisible(false);
              form.resetFields();
            }}
            onOk={() => form.submit()}
          >
            <Form
              form={form}
              onFinish={selectedJob ? handleUpdate : handleAdd}
              initialValues={selectedJob ? selectedJob : null}
            >
              <Form.Item
                label="Vị trí"
                name="position"
                rules={[{ required: true, message: 'Vui lòng nhập vị trí' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mô tả công việc"
                name="description"
                rules={[{ required: true, message: 'Vui lòng nhập mô tả công việc' }]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                label="Loại"
                name="type"
                rules={[{ required: true, message: 'Vui lòng nhập loại công việc' }]}
              >
                <Select>
             <Select.Option value="Part-time">Part-time</Select.Option>
             <Select.Option value="Full-time">Full-time</Select.Option>
             </Select>
              </Form.Item>
               
              <Form.Item
                label="Category"
                name="cat_id"
                rules={[{ required: true, message: 'Vui lòng nhập loại công việc' }]}
              >
                <Select>
             <Select.Option value="1">Thực tập</Select.Option>
             <Select.Option value="2">Việc làm</Select.Option>
             </Select>
              </Form.Item>
              <Form.Item
                label="Lương"
                name="salary"
                rules={[{ required: true, message: 'Vui lòng nhập mức lương' }]}
              >
                <Input />
              </Form.Item>
              
              <Form.Item
                label="Ngày đóng"
                name="close_day"
                rules={[{ required: true, message: 'Vui lòng nhập ngày đóng' }]}
              >
                <Input type='date'></Input>
             
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    );
  };

  export default Jobs;