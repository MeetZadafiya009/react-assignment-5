import { useState } from 'react';
import './../../style/bootstrap.css';
import './../../style/style.css';
import { checkValidEmail, encryptData } from '../../functions/auth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Signup = () => {
    const navigate = useNavigate();
    const [type, setType] = useState(true);
    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            phone: "",
            password: "",
            cpassword: ""
        },
        onSubmit: (values) => {
            if (checkValidEmail(values.email)) {
                if (localStorage.getItem('users')) {
                    let users = JSON.parse(localStorage.getItem('users'));
                    let lastUser = users[users.length - 1];
                    users.push({ id: lastUser.id + 1, fname: values.fname, lname: values.lname, email: values.email, phone: values.phone, password: encryptData(values.password) });
                    localStorage.setItem('users', JSON.stringify(users));
                    navigate('/login');
                } else {
                    localStorage.setItem('users', JSON.stringify([{ id: 1, fname: values.fname, lname: values.lname, email: values.email, phone: values.phone, password: encryptData(values.password) }]));
                    navigate('/login');
                }
            }else{
                toast.error("email is already exist.please login");
            }
        },
        validate: (values) => {
            const errors = {};
            if (!values.fname) {
                errors.fname = "Required";
            } else if (values.fname.match(/[0-9]/)) {
                errors.fname = "first name does not number";
            }
            else if (values.fname.match(/[@#!*/%&^$()_|{}<>?+=]/)) {
                errors.fname = "first name does not special char";
            }
            if (!values.lname) {
                errors.lname = "Required";
            } else if (values.lname.match(/[0-9]/)) {
                errors.lname = "last name does not number";
            }
            else if (values.lname.match(/[@#!%&^$()_|{}<>?+=]/)) {
                errors.lname = "first name does not special char";
            }
            if (!values.email) {
                errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+\@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(values.email)) {
                errors.email = "invalid email format";
            }
            if (!values.phone) {
                errors.phone = "Required";
            } else if (values.phone.toString().length != 10) {
                errors.phone = "mobile must be 10 number";
            }
            if (!values.password) {
                errors.password = "Required";
            } else if (!values.password.match(/[A-Z]/)) {
                errors.password = "password must contain uppercase";
            } else if (!values.password.match(/[a-z]/)) {
                errors.password = "password must contain lowercase";
            } else if (!values.password.match(/[0-9]/)) {
                errors.password = "password must contain number";
            } else if (!values.password.match(/[@#!%&^$()_|{}<>?+=]/)) {
                errors.password = "password must contain special characater";
            }
            if (!values.cpassword) {
                errors.cpassword = "Required";
            } else if (values.password.localeCompare(values.cpassword)) {
                errors.cpassword = "passowrd are not same";
            }
            return errors;
        }
    });
    return (
        <section className='signup-section pt-5'>
            <div className='container px-5 pt-5'>
                <form className='signup  px-5 row py-5' onSubmit={formik.handleSubmit}>
                    <div className='col-12'>
                        <h3 className='text-center'>
                            Register
                        </h3>
                    </div>
                    <div className='col-12  pt-4'>
                        <div className='row gx-5'>
                            <div className='col-md-6 pb-3'>
                                <div className='form-group'>
                                    <input style={{ width: "93%" }} id='fname' onBlur={formik.handleBlur} type='text' name='fname' onChange={formik.handleChange} className='form-input' placeholder='First Name' />
                                    {formik.errors.fname && formik.touched.fname ? <span className='text-danger'>{formik.errors.fname}</span> : ""}
                                </div>
                            </div>
                            <div className='col-md-6 pb-3'>
                                <div className='form-group'>
                                    <input style={{ width: "93%" }} id='lname' onBlur={formik.handleBlur} type='text' name='lname' onChange={formik.handleChange} className='form-input' placeholder='Last Name' />
                                    {formik.errors.lname && formik.touched.lname ? <span className='text-danger'>{formik.errors.lname}</span> : ""}
                                </div>
                            </div>
                            <div className='col-md-6 pb-3'>
                                <div className='form-group'>
                                    <input style={{ width: "93%" }} id='email' onBlur={formik.handleBlur} type='text' name='email' onChange={formik.handleChange} className='form-input' placeholder='Email' />
                                    {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span> : ""}
                                </div>
                            </div>
                            <div className='col-md-6 pb-3'>
                                <div className='form-group'>
                                    <input style={{ width: "93%" }} id='phone' onBlur={formik.handleBlur} type='number' name='phone' onChange={formik.handleChange} className='form-input' placeholder='Mobile' />
                                    {formik.errors.phone && formik.touched.phone ? <span className='text-danger'>{formik.errors.phone}</span> : ""}
                                </div>
                            </div>
                            <div className=' col-md-6'>
                                <div className='form-group'>
                                    <div className='d-flex align-items-center'>
                                        <input type={type ? "password" : "text"} onBlur={formik.handleBlur} id='password' name='password' onChange={formik.handleChange} className='form-input me-3' placeholder='password' />
                                        <VisibilityIcon style={{ color: type ? "black" : "blue" }} className='password-toggle' onClick={() => setType(!type)} />
                                    </div>
                                    {formik.errors.password && formik.touched.password ? <span className='text-danger'>{formik.errors.password}</span> : ""}
                                </div>
                            </div>
                            <div className=' col-md-6'>
                                <div className='form-group'>
                                    <input style={{ width: "93%" }} id='cpassword' onBlur={formik.handleBlur} type='password' name='cpassword' onChange={formik.handleChange} className='form-input' placeholder='confirm password' />
                                    {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-danger'>{formik.errors.cpassword}</span> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 pt-5 d-flex justify-content-center'>
                        <button id='register' type='submit' className='px-5 py-2 btn btn-success'>REGISTER</button>
                    </div>
                    <div className='col-12 pt-3 d-flex justify-content-center'>
                        <div>Already have Account ?<Link to='/login' >Login</Link></div>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Signup;