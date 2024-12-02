import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';
import BlogForm from './BlogForm';
import { Button } from 'antd';
import { BlogComment } from './BlogComment';
import '../../_style/components/Blog/blog.scss';
import { useNavigate } from 'react-router-dom';
const Blog = () => {
    const navigate=useNavigate()
    const [blogPostsData, setBlogPostsData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [openModel, setOpenModel] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/get-posts');
                setBlogPostsData(response.data);

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    const handleShow = () => {
        setVisible(true)
    }
    const handelCancel=()=>{
        setVisible(false)
    }
    const handelOk=()=>{
        setVisible(false);
        navigate("blog")
    }
   
    return (
        <>
        <div className="container--blog">
            {visible && <BlogForm handleHiden={setVisible} handelCancel={handelCancel} handelOk={handelOk} visible={visible} handleShow={handleShow} />}
            <div className="blog">
                <h1 className="blog-title">Blog tìm việc làm</h1>
                <div className="header_post">
                    <Button className="button_post" onClick={handleShow}>Đăng bài</Button>
                </div>

                <div className="blog-posts">
                    {blogPostsData.map((post, index) => (
                        <>
                        <div key={index} className="blog-post-container">
                            <BlogPost post={post} />
                            <p className='click--comment' onClick={()=>{
                                    setOpenModel(true)
                                    setSelectedProductId(post.id)
                            }}>Bình luận</p>
                             <div className="comment-section">
                            {openModel==true && selectedProductId==post.id && <BlogComment handelHiden={setOpenModel}  post={post}/>}
                        </div>
                        </div>
                       
                    </>
                    ))}
                    
                </div>
            </div>
         </div>
        </>
    );
};

export default Blog;






