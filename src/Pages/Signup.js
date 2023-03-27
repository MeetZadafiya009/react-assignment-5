import { useState } from 'react';
import './../style/bootstrap.css';
import './../style/style.css';
import { checkValidEmail, encryptData } from '../functions/auth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
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
            } else if (!checkValidEmail(values.email)) {
                errors.email = "email already exists";
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
        <section>
            <div className='container'>
                <form className='signup mt-5 px-5 row py-5' onSubmit={formik.handleSubmit}>
                    <div className='col-12'>
                        <h3 className='text-center'>
                            Register
                        </h3>
                    </div>
                    <div className='col-12 pt-4'>
                        <div className='row gx-5'>
                            <div className='col-md-6 pb-3'>
                                <div className='form-group'>
                                    <label className='form-label mb-2'>First Name :</label>
                                    <input style={{width:"93%"}}  type='text' name='fname' onChange={formik.handleChange} className='form-control' placeholder='First Name' />
                                    {formik.errors.fname ? <span className='text-danger'>{formik.errors.fname}</span> : ""}
                                </div>
                            </div>
                            <div className='col-md-6 pb-3'>
                                <div className='form-group'>
                                    <label className='form-label mb-2'>Last Name :</label>
                                    <input style={{width:"93%"}}  type='text' name='lname' onChange={formik.handleChange} className='form-control' placeholder='Last Name' />
                                    {formik.errors.lname ? <span className='text-danger'>{formik.errors.lname}</span> : ""}
                                </div>
                            </div>
                            <div className='col-md-6 pb-3'>
                                <div className='form-group'>
                                    <label className='form-label mb-2'>Email :</label>
                                    <input style={{width:"93%"}}  type='text' name='email' onChange={formik.handleChange} className='form-control' placeholder='Email' />
                                    {formik.errors.email ? <span className='text-danger'>{formik.errors.email}</span> : ""}
                                </div>
                            </div>
                            <div className='col-md-6 pb-3'>
                                <div className='form-group'>
                                    <label className='form-label mb-2'>Mobile :</label>
                                    <input style={{width:"93%"}}  type='number' name='phone' onChange={formik.handleChange} className='form-control' placeholder='Mobile' />
                                    {formik.errors.phone ? <span className='text-danger'>{formik.errors.phone}</span> : ""}
                                </div>
                            </div>
                            <div className=' col-md-6'>
                                <div className='form-group'>
                                    <label className='form-label mb-2'>password :</label>
                                    <div className='d-flex align-items-center'>
                                        <input type={type ? "password" : "text"} name='password' onChange={formik.handleChange} className='form-control me-3' placeholder='password' />
                                        <VisibilityIcon style={{color:type?"black":"blue"}} className='password-toggle' onClick={() => setType(!type)} />
                                    </div>
                                    {formik.errors.password ? <span className='text-danger'>{formik.errors.password}</span> : ""}
                                </div>
                            </div>
                            <div className=' col-md-6'>
                                <div className='form-group'>
                                    <label className='form-label mb-2'>confirm password :</label>
                                    <input style={{width:"93%"}}  type='password' name='cpassword' onChange={formik.handleChange} className='form-control' placeholder='confirm password' />
                                    {formik.errors.cpassword ? <span className='text-danger'>{formik.errors.cpassword}</span> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 py-5 d-flex justify-content-center'>
                        <button type='submit' className='btn btn-success'>REGISTER</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Signup;