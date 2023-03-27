import { useFormik } from "formik"
import { password_verify, encryptData } from "../functions/auth";

const Password = () => {
    let login = JSON.parse(localStorage.getItem('login'));
    const formik = useFormik({
        initialValues: {
            cpassword: '',
            npassword: '',
            rpassword: ''
        },
        onSubmit: (values) => {
            let check=password_verify(login.email, values.cpassword);
            if (check.status) {
                let auth = JSON.parse(localStorage.getItem('users'));
                auth.filter((user) => user.id == check.user.id).forEach((user)=>user.password=encryptData(values.npassword));
                let new_data = auth.filter((user) => user.id == check.user.id);
                localStorage.setItem('login', JSON.stringify(new_data[0]));
                localStorage.setItem('users', JSON.stringify(auth));
                alert("password change successfully");
            } else {
                alert('current password is not correct');
            }
        },
        validate: (values) => {
            const errors = {};
            if (!values.cpassword) {
                errors.cpassword = "Required";
            } else if (!values.cpassword.match(/[A-Z]/)) {
                errors.cpassword = "password must contain uppercase";
            } else if (!values.cpassword.match(/[a-z]/)) {
                errors.cpassword = "password must contain lowercase";
            } else if (!values.cpassword.match(/[0-9]/)) {
                errors.cpassword = "password must contain number";
            } else if (!values.cpassword.match(/[@#!%$&^()_|{}<>?+=]/)) {
                errors.cpassword = "password must contain special characater";
            }
            if (!values.npassword) {
                errors.npassword = "Required";
            } else if (!values.npassword.match(/[A-Z]/)) {
                errors.npassword = "password must contain uppercase";
            } else if (!values.npassword.match(/[a-z]/)) {
                errors.npassword = "password must contain lowercase";
            } else if (!values.npassword.match(/[0-9]/)) {
                errors.npassword = "password must contain number";
            } else if (!values.npassword.match(/[@#!%$&^()_|{}<>?+=]/)) {
                errors.npassword = "password must contain special characater";
            }
            if (!values.rpassword) {
                errors.rpassword = "Required";
            } else if (values.npassword.localeCompare(values.rpassword)) {
                errors.rpassword = "both password are not same";
            }
            return errors;
        }
    })

    return (
        <section>
            <div className='container'>
                <div className='row justify-content-center'>
                    <form className='login col-6 mt-5 px-5 py-5' onSubmit={formik.handleSubmit}>
                        <div className='row pb-4'>
                            <div className='col-12'>
                                <h3 className='text-center'>
                                    Change Password
                                </h3>
                            </div>
                        </div>
                        <div className='row gx-5'>
                            <div className='col-md-12 pb-4'>
                                <div className='form-group'>
                                    <label className='form-label mb-2'>current passowrd :</label>
                                    <input type='password' onChange={formik.handleChange} name='cpassword' className='form-control' placeholder='Current Password' />
                                    {formik.errors.cpassword ? <span className='text-danger'>{formik.errors.cpassword}</span> : ""}
                                </div>
                            </div>
                            <div className=' col-md-12 pb-4'>
                                <div className='form-group'>
                                    <label className='form-label mb-2'>new password :</label>
                                    <input type='password' onChange={formik.handleChange} name='npassword' className='form-control' placeholder='New password' />
                                    {formik.errors.npassword ? <span className='text-danger'>{formik.errors.npassword}</span> : ""}
                                </div>
                            </div>
                            <div className=' col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label mb-2'>confirm password :</label>
                                    <input type='password' onChange={formik.handleChange} name='rpassword' className='form-control' placeholder='Confirm password' />
                                    {formik.errors.rpassword ? <span className='text-danger'>{formik.errors.rpassword}</span> : ""}
                                </div>
                            </div>
                        </div>
                        <div className='row pt-5'>
                            <div className='col-12 d-flex justify-content-center'>
                                <button type='submit' className='btn btn-success'>SAVE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Password;