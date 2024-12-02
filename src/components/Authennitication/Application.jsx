import React, { useRef, useState } from 'react'
import "../../_style/pages/application.scss";
import { Form, Input, Button,Modal } from "antd"
import { postApplication } from '../../api/api'
import Swal from "sweetalert2"
export const Modals = ({ closeModal,visible,handleOk,handleCancel,job }) => {
    const formRef = useRef(null);
    const initialFormValues = {
        position: job.position,
        job_id: job.id,
        name: "",
        email: "",
        cover_letter: "",
        file_cv: ""
      };
      
    const [values, setValues] = useState(initialFormValues)
    const token=JSON.parse(localStorage.getItem("login"))
    const handelInput = (e) => {
        const value = { ...values, [e.target.name]: e.target.value }
        setValues(value)
    }
    const handelFile = (e) => {
        const files = e.target.files[0]
        setValues({ ...values, file_cv: files })
    }
    const handelSubmit = async () => {
        const formData = new FormData()
        formData.append("position", values.position)
        formData.append("job_id", values.job_id)
        formData.append("name", values.name)
        formData.append("token", token.token)
        formData.append("cover_letter", values.cover_letter)
        formData.append("cv", values.file_cv)
        formData.append("status", "Đã nhận")
        const status = await postApplication(formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        if (status.data.status ===200) {
            Swal.fire("Thành Công","Nộp đơn ứng tuyển thành công","success")
            formRef.current.resetFields();
        }else if (status.data.status ===400) {
            Swal.fire("Thật tiếc","Đơn đã được nộp","warning")
            formRef.current.resetFields();
        }
        console.log(...formData)
        
    }
        
    return (

        <>
        <Modal
        title={null}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        // bodyStyle={{ backgroundColor: '#26AE61' }}
        wrapClassName="custom-modal"
        >
                    <Form ref={formRef} onFinish={handelSubmit} >
                    <h3>Ứng tuyển ngay <span>{job.position}</span> tại công ty <span>{job.company_name}</span></h3><br/>
                    <Form.Item
                            name="name"
                            rules={[{
                                required: true,
                                message: 'Vui lòng tên của bạn'
                            }]}
                            hasFeedback
                        >
                            <Input name="name" placeholder='Nhâp họ và tên viết hoa' className='form--values' onChange={handelInput} />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập email'
                                }
                            ]}
                            hasFeedback
                        >
                        <Input name="email" placeholder='Nhâp đúng email của bạn' className="form--values" onChange={handelInput} />
                        </Form.Item>
                        <Form.Item
                            name="cover_letter"
                        >
                            <Input.TextArea name="cover_letter" rows={4} placeholder='Viết thư nguyện vọng' onChange={handelInput}></Input.TextArea>
                        </Form.Item>
                        <Form.Item
                            name="file_cv"
                            rules={[{
                                required: true,
                                message: 'Vui lòng đính kèm file'
                            }]}
                        >
                            <Input type='file' name="file_cv" placeholder='Đính kèm file' className='form--values' onChange={handelFile}></Input>
                        </Form.Item>
                        <div className="form--button--application">
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="modal--submit">
                                    Nộp Ngay
                                </Button>
                                <Button onClick={() => closeModal(false)} className="modal--cancel">
                                    Hủy
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
        </Modal>


    </>


    )
}