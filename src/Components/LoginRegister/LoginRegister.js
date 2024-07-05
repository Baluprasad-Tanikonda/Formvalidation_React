import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './LoginRegister.css';


const LoginRegister = () => {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        conformpassword: ''
    })

    const [formError, setFormerror] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [action, setAction] = useState("Registration");

    // const [showPassword, setShowPassword] = useState(false);
    const { username, email, password, conformpassword } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        setFormerror(validate(data));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log("Form submitted successfully", data);
            alert("Form successfully submitted")
            setData({
                username: '',
                email: '',
                password: '',
                conformpassword: ''
            });
            setIsSubmit(false);
        }
    }, [formError])


    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^[A-Z][a-z]*\d{4,8}.*[^a-zA-Z0-9\s]$/;

        if (!values.username) {
            errors.username = "username is required";
        } else if (values.username.length < 5) {
            errors.username = "username contain atleast 5 characters"
        }


        if (!values.email) {
            errors.email = "email is required";
        } else if (!values.email.includes('@')) {
            errors.email = "email must contain '@' symbol";
        }
        else if (!regex.test(values.email)) {
            errors.email = "this is not a valid email format";
        }


        if (!values.password) {
            errors.password = "password required";
        } else if (!passwordRegex.test(values.password)) {
            errors.password = " password Must contain * first letter capital *contain atlast 4 numerical characters *Last an special character";
        } else if (values.password.length < 8) {
            errors.password = "password must contain atleast 8 characters";
        }


        if (!values.conformpassword) {
            errors.conformpassword = "Confirm password is required";
        } else if (values.conformpassword !== values.password) {
            errors.conformpassword = "Passwords do not match";
        }

        return errors;
    }

    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // }




    return (

        <div>

            <div className='img'>
                <img src="https://wallpaperboat.com/wp-content/uploads/2019/10/cool-website-background-01.jpg" alt="" />
            </div>

            <div class="container">
                <form onSubmit={submitHandler} >
                    <h1 className='header'>{action}</h1>

                    <div className='inputs'>
                        {action === "Login" ? (
                            <>
                                <div class="col">
                                    <label>Email ID</label>
                                    <input class="form-control" type="text" name='email' value={email} onChange={changeHandler} />
                                </div>
                                <p className='warning'>{formError.email}</p>

                                <div class="col">
                                    <label>Enter Password</label>
                                    <input class="form-control" type="password" name='password' value={password} onChange={changeHandler} />
                                </div>
                                <p className='warning'>{formError.password}</p>

                            </>) : (
                            <>

                                <div class="col">
                                    <label>Username</label>
                                    <input class="form-control" type="text" name='username' value={username} onChange={changeHandler} />
                                </div>
                                <p className='warning'>{formError.username}</p>

                                <div class="col">
                                    <label>Email ID</label>
                                    <input class="form-control" type="text" name='email' value={email} onChange={changeHandler} />
                                </div>
                                <p className='warning'>{formError.email}</p>

                                <div class="col">
                                    <label>Enter Password</label>
                                    <input class="form-control" type="password" name='password' value={password} onChange={changeHandler} />
                                </div>
                                <p className='warning'>{formError.password}</p>

                                <div class="col">
                                    <label>Conform Password</label>
                                    <input class="form-control" type="password" name='conformpassword' value={conformpassword} onChange={changeHandler} />
                                </div>
                                <p className='warning' >{formError.conformpassword}</p>

                            </>)}

                        <div className='btn'>
                            <button>Submit</button>
                        </div>
                    </div>


                    {/* <div className=' register-link'>
                        <p className="link" onClick={() => { setAction(action === "Login" ? <></> : "Login")}}>Already have an account? <a href="#"> Log in</a></p>
                    </div>

                    <div className='log-in link'>
                        <p className="link" onClick={() => { setAction(action === "Registration" ? <></> : "Registration") }}>Don't have an account? <a href="#"> Register</a></p>
                    </div> */}

                    <div className='register-link'>
                        <p className="link" onClick={() => setAction(action === "Login" ? "Registration" : "Login")}>
                            {action === "Login" ? "Don't have an account? Register" : "Already have an account?Log-in"}
                        </p>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default LoginRegister;