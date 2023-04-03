import './../../style/bootstrap.css';
import './../../style/style.css';
import { Button, TextField } from '@mui/material';
import { descryptData, updateEmail } from '../../functions/auth';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Profile = () => {
    let auth = JSON.parse(localStorage.getItem('login'));
    const formik = useFormik({
        initialValues: {
            id: auth.id,
            fname: auth.fname,
            lname: auth.lname,
            email: auth.email,
            phone: auth.phone,
            password: descryptData(auth.password)
        },
        onSubmit: (values) => {
            if (updateEmail(values.email)) {
                toast.error("email in already use");
            } else {
                let auth = JSON.parse(localStorage.getItem('users'));
                auth.filter((user) => user.id == values.id).forEach((item) => (
                    item.fname = values.fname,
                    item.lname = values.lname,
                    item.phone = values.phone,
                    item.email = values.email
                ));
                let login = auth.filter((user) => user.id == values.id);
                localStorage.setItem('login', JSON.stringify(login[0]));
                localStorage.setItem('users', JSON.stringify(auth));
                toast.success("user profile  updated successfully");
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
                errors.lname = "last name does not special char";
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
            return errors;
        }
    })
    return (
        <>
            <section>
                <div className="container">
                    <form onSubmit={formik.handleSubmit} className='profile mt-5 row pb-5 gx-5'>
                        <div className='col-12 py-5'>
                            <h3 className='text-center'>
                                USER PROFILE
                            </h3>
                        </div>
                        <div className='col-4 mb-5'>
                            <div className='form-group'>
                                <input type='hidden' name='id' value={formik.values.id} />
                                <TextField name='fname' id='fname' className='bg-input w-100' onChange={formik.handleChange} value={formik.values.fname} label="First Name" variant="outlined" />
                                {formik.errors.fname ? <span className='text-danger'>{formik.errors.fname}</span> : ""}
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='form-group'>
                                <TextField name='lname' id='lname' className='bg-input form-input w-100' onChange={formik.handleChange} value={formik.values.lname} label="Last Name" variant="outlined" />
                                {formik.errors.lname ? <span className='text-danger'>{formik.errors.lname}</span> : ""}
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='form-group'>
                                <TextField name='email' id='email' className='bg-input w-100' onChange={formik.handleChange} value={formik.values.email} label="Email" variant="outlined" />
                                {formik.errors.email ? <span className='text-danger'>{formik.errors.email}</span> : ""}
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='form-group'>
                                <TextField name='phone' id='phone' type='number' min='10' max='10' className='bg-input w-100' onChange={formik.handleChange} value={formik.values.phone} label="Mobile" variant="outlined" />
                                {formik.errors.phone ? <span className='text-danger'>{formik.errors.phone}</span> : ""}
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='form-group pb-1 d-flex align-items-center'>
                                <TextField type="password" id='password' label='Password' value={formik.values.password} className='bg-input w-100 me-2' variant="outlined" disabled />

                            </div>
                            <Link to='/change-password'>Change Password</Link>
                        </div>
                        <div className='col-12 py-5 d-flex justify-content-center align-items-center'>
                            <Button id='save' className='px-5 py-2' type='submit' color='secondary' variant='contained'>SAVE</Button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Profile;