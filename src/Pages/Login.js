import { useNavigate } from 'react-router-dom';
import { password_verify } from '../functions/auth';
import { useFormik } from 'formik';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './../style/bootstrap.css';
import './../style/style.css';
import { useState } from 'react';
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
                alert("please enter correct credinitials");
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
        <section>
            <div className='container'>
                <div className='row justify-content-center'>
                    <form className='login col-6 mt-5 px-5 py-5' onSubmit={formik.handleSubmit}>
                        <div className='row'>
                            <div className='col-12'>
                                <h3 className='text-center'>
                                    LOGIN
                                </h3>
                            </div>
                        </div>
                        <div className='row gx-5'>
                            <div className='col-md-12 pb-4'>
                                <div className='form-group'>
                                    <label className='form-label mb-2'>Email :</label>
                                    <input style={{width:"93%"}} type='text' onChange={formik.handleChange} value={formik.values.name} name='email' className='form-control' placeholder='Email' />
                                    {formik.errors.email ? <span className='text-danger'>{formik.errors.email}</span> : ""}
                                </div>
                            </div>
                            <div className=' col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label mb-2'>password :</label>
                                    <div className='d-flex align-items-center'>
                                        <input type={type ? "password" : "text"} onChange={formik.handleChange} value={formik.values.password} name='password' className='form-control me-3' placeholder='password' />
                                        <VisibilityIcon style={{color:type?"black":"blue"}} className='password-toggle' onClick={() => setType(!type)} />
                                    </div>
                                    {formik.errors.password ? <span className='text-danger'>{formik.errors.password}</span> : ""}
                                </div>
                            </div>
                        </div>
                        <div className='row py-5 '>
                            <div className='col-12 d-flex justify-content-center'>
                                <button type='submit' className='btn btn-success'>LOGIN</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Login;