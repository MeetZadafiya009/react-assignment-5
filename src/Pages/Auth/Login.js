import { Link, useNavigate } from 'react-router-dom';
import { password_verify } from '../../functions/auth';
import { useFormik } from 'formik';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './../../style/bootstrap.css';
import './../../style/style.css';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
const Login = () => {
    const navigate = useNavigate();
    const [type, setType] = useState(true);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            let data = password_verify(values.email, values.password);
            if (data.status) {
                localStorage.setItem('login', JSON.stringify(data.user));
                navigate('/');
            } else {
                toast.error("please enter correct credinitials");
            }
        },
        validate: (values) => {
            let errors = {}
            if (!values.email) {
                errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+\@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(values.email)) {
                errors.email = "invalid email format";
            }
            if (!values.password) {
                errors.password = "Required";
            } else if (!values.password.match(/[A-Z]/)) {
                errors.password = "password must contain uppercase";
            } else if (!values.password.match(/[a-z]/)) {
                errors.password = "password must contain lowercase";
            } else if (!values.password.match(/[0-9]/)) {
                errors.password = "password must contain number";
            } else if (!values.password.match(/[@#!%$&^()_|{}<>?+=]/)) {
                errors.password = "password must contain special characater";
            }
            return errors;
        }
    });
    return (
        <section className='login-section'>
            <div className='container'>
                <div className='row pt-5 justify-content-center'>
                    <form className='login col-lg-6 col-md-9 col-10 mt-5 px-5 py-5' onSubmit={formik.handleSubmit}>
                        <div className='row'>
                            <div className='col-12 pb-5'>
                                <h3 className='text-center'>
                                    LOGIN
                                </h3>
                            </div>
                        </div>
                        <div className='row gx-5'>
                            <div className='col-md-12 pb-4'>
                                <div className='form-group'>
                                    <input id='email' style={{ width: "93%" }} type='text' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} name='email' className='form-input' placeholder='Email' />
                                    {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span> : ""}
                                </div>
                            </div>
                            <div className=' col-md-12'>
                                <div className='form-group'>
                                    <div className='d-flex align-items-center'>
                                        <input id='password' type={type ? "password" : "text"} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name='password' className='form-input me-3' placeholder='password' />
                                        <VisibilityIcon style={{ color: type ? "black" : "blue" }} className='password-toggle' onClick={() => setType(!type)} />
                                    </div>
                                    {formik.errors.password && formik.touched.password ? <span className='text-danger'>{formik.errors.password}</span> : ""}
                                </div>
                            </div>
                        </div>
                        <div className='row py-5 '>
                            <div className='col-12 d-flex justify-content-center'>
                                <button id='login' type='submit' className='btn px-5 py-2 btn-success'>LOGIN</button>
                            </div>
                            <div className='col-12 pt-4 d-flex justify-content-center'>
                                <div>Don't have account ? <Link to='/signup' >Signup</Link></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Login;