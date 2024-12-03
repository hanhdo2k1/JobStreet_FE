import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Modal,Input,Button,Form } from 'antd';
import '../../_style/components/Blog/blogform.scss';
import Swal from 'sweetalert2';


const BlogForm = ({ handleHiden,handelCancel,handelOk,visible }) => {

    const [title, setTitle] = useState('');
    const formRef = useRef(null); 
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [refresh, setRefresh] = useState(false); // Thêm state refresh
    const login=JSON.parse(localStorage.getItem('login'));
    const handleTitleChange = e => {
        setTitle(e.target.value);
    };

    const handleBodyChange = e => {
        setBody(e.target.value);
    };

    const handleImageChange = e => {
        const file = e.target.files[0];
        setImage(file);
    };
    const token=JSON.parse(localStorage.getItem("login"))    
    const handleSubmit = async (e) => {
        try {
            const formData = new FormData();
            formData.append('token',token.token );
            formData.append('title', title);
            formData.append('body', body);
            formData.append('image', image);
          const status=  await axios.post('http://127.0.0.1:8000/api/add-posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                },
          });
            if(status){
                Swal.fire("Thanh cong","Ban da dang bai thanh cong","success")
                formRef.current.resetFields();
            }
        } catch (error) {
            console.error('Error adding blog post:', error);
            // Handle error, show an error message, etc.
        }
    };

    const handelLogin=(e)=>{
        e.preventDefault();
        Swal.fire({
            title:"Đăng nhập",
            text:"Vui lòng đăng nhập trước khi bình luận",
            icon:"warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Không",
            confirmButtonText: "Đăng nhập",
        }).then((result)=>{
            if(result.isConfirmed){
            navigate("/loginUser")
            }
        })
    }
    
    return (
        <>
            {/* <div className='boder'> */}
            <Modal
            onOk={handelOk}
            onCancel={handelCancel}
            footer={null}
            visible={visible}
            >
                <Form ref={formRef} onFinish={handleSubmit}>
                    <Form.Item
                        name={"title"}
                        rules={
                            [
                                {
                                    required: true,
                                    message: "Vui lòng nhập tiêu đề"
                                }
                            ]
                        }
                    >
                    <Input type="text" placeholder="Chủ đề" value={title} onChange={handleTitleChange}/>
                    </Form.Item>
                    <Form.Item
                    name={"body"}
                    rules={
                            [
                                {
                                    required: true,
                                    message: "Vui lòng nhập nội dung"
                                }
                            ]
                        }
                    >
                        <Input.TextArea rows={6} placeholder="Nội dung" value={body} onChange={handleBodyChange}/>

                       
                    </Form.Item>
                    <Form.Item
                    name={"image"}
                    rules={
                            [
                                {
                                    required: false,
                                    message: "Vui lòn đính kèm file"
                                }
                            ]
                        }
                    >
                        <Input className="blog-post-image" type="file" onChange={handleImageChange}></Input>
                    </Form.Item>
                    {login?
                    (
                        <Form.Item>
                        <Button className='sub' htmlType="submit">Thêm bài đăng</Button>
                        </Form.Item>
                       ):
                       (
                       <Form.Item>
                       <Button className='sub' onClick={handelLogin} htmlType="buton">Thêm bài đăng</Button>
                       </Form.Item>
                     )}
                </Form>
            </Modal>
            {/* </div> */}
        </>
    );
};

export default BlogForm;
