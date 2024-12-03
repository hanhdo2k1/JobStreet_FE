import { useNavigate } from "react-router-dom"
import "../../_style/pages/register.scss"
import "../../_style/pages/payment.scss"
import React, { useState } from "react"
import { postUser, getUser, getCompany, postCompany } from "../../api/api"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Form, Input, Button, Select } from "antd"

export const Register = () => {
    const navigate = useNavigate()

    const [userLogin, setUserLogin] = useState([])
    useEffect(() => {
        const getAllUser = async () => {
            const values = await getUser()
            setUserLogin(values.data)
            console.log(values.data)
        }
        getAllUser()
    }, [])

    const checkEmailExists = (rule, value) => {
        const emailExists = userLogin.some((user) => user.email === value);

        if (emailExists) {
            return Promise.reject("Tài khoản đã tồn tại");
        }
        return Promise.resolve();
    };
    const handelSubmit = async (e) => {
        postUser(e);
        navigate("/loginUser")

    }
    return (
        <div className="background-image">
            <div className="container--body">
                <div className='container--register'>
                    <div className="register--title">
                        <h2>Tạo tài khoản của bạn</h2>
                    </div> <br /><br />
                  
                    <Form onFinish={handelSubmit} action="" method="post">
                        <div className="form--register">
                            <div className="left--for">
                                <Form.Item
                                    name="username"
                                    rules={[{
                                        required: true,
                                        message: 'Vui lòng nhập tên'
                                    },
                                    {
                                        min: 8,
                                        message: 'Tên phải trên 8 ký tự'
                                    }]}
                                    hasFeedback
                                >

                                    <Input className='form--name' placeholder='Nhập họ tên của bạn' />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    hasFeedback
                                    rules={[{
                                        required: true,
                                        message: 'Vui lòng nhập email'
                                    },
                                    {
                                        type: "email",
                                        message: 'Email không hợp lệ'
                                    }, {
                                        validator: checkEmailExists
                                    }
                                    ]}


                                >

                                    <Input className='form--name' placeholder='Nhập Email của bạn' />

                                </Form.Item>

                                <Form.Item
                                    name="number_phone"

                                    rules={[{
                                        required: true,
                                        message: 'Vui lòng nhập số điện thoại'
                                    },
                                    {
                                        pattern: /^\d+$/,
                                        message: 'Vui lòng chỉ nhập số',
                                    },
                                    {
                                        len: 10,
                                        message: 'Số điện thoại phải có đúng 10 chữ số',
                                    },]}
                                    hasFeedback
                                >
                                    <Input className='form--name' placeholder='Nhập số điện thoại của bạn' />
                                </Form.Item>
                            </div>
                            <div className="right--form">
                                <Form.Item
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập địa chỉ"
                                        }
                                    ]}
                                    hasFeedback
                                >
                                    <Input className='form--name' placeholder='Địa chỉ của bạn' />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập mật khẩu ",

                                        },
                                        {
                                            min: 8,
                                            message: "Vui lòng nhập lớn hơn 8 ký tự",

                                        }]}
                                    hasFeedback
                                >
                                    <Input.Password className='form--name' placeholder='Nhập mật khẩu của bạn' />
                                </Form.Item>
                                <Form.Item
                                    name="confirmPass"
                                    // type={showPass ? "text" : "password"}
                                    dependencies={["password"]}
                                    hasFeedback
                                    rules={[
                                        {

                                            required: true,
                                            message: "Vui lòng nhập mật khẩu",
                                        },
                                        {
                                            min: 8,
                                            message: "Vui lòng nhập trên 8 ký tự"
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue("password") === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject("Xác thực không đúng");
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password className="form--name" placeholder="Xác thực mật khẩu" />
                                </Form.Item>

                            </div>
                        </div>
                        <Form.Item>
                            <Button htmlType="submit" className="register"><h5>Đăng ký</h5> </Button>
                        </Form.Item>
                    </Form>
                    <div className="login">
                        <p>Bạn đã có tài khoản <Link className="link--to" to={"/loginUser"}>Đăng nhập</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const RegisterEmployee = () => {
    const navigate = useNavigate()

    const [userLogin, setUserLogin] = useState([])
    useEffect(() => {
        const getAllUser = async () => {
            const values = await getCompany()
            setUserLogin(values.data)
            console.log(values.data)
        }
        getAllUser()
    }, [])
    const checkEmailExists = (rule, value) => {
        const emailExists = userLogin.some((user) => user.email === value);

        if (emailExists) {
            return Promise.reject("Tài khoản đã tồn tại");
        }
        return Promise.resolve();
    };

    const checkCompanyExists = (rule, value) => {
        const companyExists = userLogin.some((item) => item.company_name === value);
        if (companyExists) {
            return Promise.reject("Tên công ty đã tồn tại")
        }
        return Promise.resolve();
    }

    const validateWebsite = (_, value) => {
        if (value && !/^https?:\/\/\w+(\.\w+)+.*$/.test(value)) {
            return Promise.reject('Website không hợp lệ');
        }
        return Promise.resolve();
    }

    const handelSubmit = async (e) => {
        localStorage.setItem("company", JSON.stringify(e))
        navigate("/employerPayment")
        console.log(e)

    }
    return (
        <div className="background-image">
            <div className="container--body">
                <div className='container--register'>
                    <div className="register--title">
                        <h3>Tạo tài khoản của bạn</h3>
                    </div> <br /> 
                    <Form onFinish={handelSubmit} action="" method="post">
                        <div className="form--register">
                            <div className="left--for">
                                <Form.Item
                                    name="company_name"
                                    rules={[{
                                        required: true,
                                        message: 'Vui lòng nhập tên công ty'
                                    },
                                    {
                                        validator: checkCompanyExists
                                    }
                                    ]}
                                    hasFeedback
                                >

                                    <Input className='form--name' placeholder='Nhập họ tên công ty' />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    hasFeedback
                                    rules={[{
                                        required: true,
                                        message: 'Vui lòng nhập email'
                                    },
                                    {
                                        type: "email",
                                        message: 'Email không hợp lệ'
                                    }, {
                                        validator: checkEmailExists
                                    }
                                    ]}


                                >

                                    <Input className='form--name' placeholder='Nhập Email của bạn' />

                                </Form.Item>

                                <Form.Item
                                    name="number_phone"

                                    rules={[{
                                        required: true,
                                        message: 'Vui lòng nhập số điện thoại'
                                    },
                                    {
                                        pattern: /^\d+$/,
                                        message: 'Vui lòng chỉ nhập số',
                                    },
                                    {
                                        len: 10,
                                        message: 'Số điện thoại phải có đúng 10 chữ số',
                                    },]}
                                    hasFeedback
                                >
                                    <Input className='form--name' placeholder='Nhập số điện thoại của bạn' />
                                </Form.Item>
                                <Form.Item
                                    name="website"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Không được bỏ trống'
                                        }, {
                                            validator: validateWebsite
                                        }]}
                                    hasFeedback>
                                    <Input className="form--name" placeholder="Website của công ty" />
                                </Form.Item>
                            </div>
                            <div className="right--form">
                                <Form.Item
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập địa chỉ"
                                        }
                                    ]}
                                    hasFeedback
                                >
                                    <Select className='form--name form-select-address' placeholder='Địa chỉ của bạn' >
                                        <Option value="Đã Nẵng">Đà Nẵng</Option>
                                        <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                                        <Option value="Hà Nội">Hà Nội</Option>
                                        <Option value="Quy Nhơn">Quy Nhơn</Option>
                                        <Option value="Huế">Huế</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="scale"
                                    rules={[{
                                        required: true,
                                        message: "Số lượn nhân viên công ty"
                                    }]}
                                    hasFeedback
                                >
                                    <Select placeholder="Số lượng nhân viên" className='form--name'>
                                        <Option value="20-30">20-30</Option>
                                        <Option value="30-40">30-40</Option>
                                        <Option value="40-100">40-100</Option>
                                        <Option value="60-120">60-120</Option>
                                        <Option value="120-150">120-150</Option>
                                        <Option value="Trên 200">Trên 200</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập mật khẩu ",

                                        },
                                        {
                                            min: 8,
                                            message: "Vui lòng nhập lớn hơn 8 ký tự",

                                        }]}
                                    hasFeedback
                                >
                                    <Input.Password className='form--name' placeholder='Nhập mật khẩu của bạn' />
                                </Form.Item>
                                <Form.Item
                                    name="confirmPass"
                                    dependencies={["password"]}
                                    hasFeedback
                                    rules={[
                                        {

                                            required: true,
                                            message: "Vui lòng nhập mật khẩu",
                                        },
                                        {
                                            min: 8,
                                            message: "Vui lòng nhập trên 8 ký tự"
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue("password") === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject("Xác thực không đúng");
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password className="form--name" placeholder="Xác thực mật khẩu" />
                                </Form.Item>

                            </div>
                        </div>
                        <div className="text--area">
                            <Form.Item
                                name="description"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập nội dung"
                                    }
                                ]}
                                hasFeedback
                            >
                                <Input.TextArea rows={4} className='form--area' placeholder='Nội dung của bạn' />
                            </Form.Item>
                            <Form.Item
                                name="logo"
                                initialValue="logo.png"
                            >
                                <Input type="hidden"></Input>
                            </Form.Item>
                        </div>
                        <Form.Item>
                            <Button htmlType="submit" className="register"><b>Đăng ký</b> </Button>
                        </Form.Item>
                    </Form>
                    <div className="login">
                        <p>Bạn đã có tài khoản <Link className="link--to" to={"/loginEmployee"}>Đăng nhập</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const EmployeePayment = () => {
    const naviage=useNavigate()
    const employers = JSON.parse(localStorage.getItem("company"))
    const [numberCart, setNumberCart] = useState({
        number: ""
    }
    )
    const [error, setError] = useState({})

    const [employer, setEmployer] = useState({
        company_name: employers.company_name,
        logo: employers.logo,
        scale: employers.scale,
        description: employers.description,
        website: employers.website,
        email: employers.email,
        password: employers.password,
        address: employers.address,
        number_phone: employers.number_phone
    })
    const addNewCompany = async () => {
        postCompany(employer)
    }
    const handelPayment = (e) => {
        e.preventDefault()
        let error = {}
        if (numberCart.number.length > 13 || numberCart.number.length < 13) {
            error.number = "Số tài khoản không chính xác"
        } else {
            addNewCompany()
           naviage("/loginEmployee")
        }
        setError(error)

    }

    return (
        <div className="background-image">
            <div className='container--payment--body'>
                <div className="conatiner--payment">
                    <div className="payment--information"> <br />
                        <div className="infor--title">
                            <h1>Thông tin</h1>
                        </div> <br />
                        <div className="infor--company">
                            <div className="company--left">
                                <div>
                                    <label htmlFor=""><b>Tên công ty</b></label> <br />
                                    <input type="text" value={employer.company_name} readOnly /><br />
                                </div>
                                <div>
                                    <label htmlFor=""><b>Số điện thoại</b></label> <br />
                                    <input type="number" value={employer.number_phone} readOnly /><br />
                                </div>
                            </div>
                            <div className="company--right">
                                <div>
                                    <label htmlFor=""><b>Email </b></label> <br />
                                    <input type="text" value={employer.email} readOnly /><br />
                                </div>
                                <div>
                                    <label htmlFor=""><b>Địa chỉ</b></label> <br />
                                    <input type="text" value={employer.address} readOnly /> <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment--confirm"><br />
                        <div className="payment--title">
                            <h1>Thanh Toán</h1><br />
                            <p>Vui lòng thanh toán trước khi trở thành nhà tuyển dụng</p>
                        </div> <br />
                        <div className="payment--price">
                            <b>1.500.000 VND</b>
                        </div>
                        <div className="payment--number--cart">
                            <label htmlFor=""><b>Nhập số thẻ:</b></label> <br /> <br />
                            <input type="number" onChange={(e) => setNumberCart({ number: e.target.value })} />

                        </div>
                        <span style={{ color: "red", marginLeft: 30 }}>{error.number}</span>
                        <div className="payment--select--bank">
                            <label htmlFor="" className="pay"><b>Trả bằng thẻ </b></label> <br /><br />
                            <select name="" id="">
                                <option value="1">Chọn ngân hàng</option>
                                <option value="1">Vietcombank</option>
                                <option value="2">Agribank</option>
                                <option value="3">Techcombank</option>
                                <option value="4">VietinBank</option>
                                <option value="5">Sacombank</option>
                            </select>
                        </div> <br />
                        <div className="payment--button">
                            <button className='success' onClick={handelPayment}>Xác nhận</button>
                            <button className='cancel'>Từ chối</button>
                        </div>
                    </div>
                </div>

                {/* <button onClick={handelPayment} style={{ background:"red" }}>Thanh Toán</button> */}

            </div>
        </div>
    )
}


