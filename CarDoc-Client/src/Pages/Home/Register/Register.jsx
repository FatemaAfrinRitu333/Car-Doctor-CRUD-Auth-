import React from 'react';
import img from '../../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-neutral md:rounded-xl p-7">
            <div className="hero-content flex flex-col lg:flex-row gap-7">
                <div className="lg:w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-full lg:w-1/2">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-5 mt-3">Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name"
                                    name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-warning btn-outline">Register</button>
                            </div>
                        </form>
                        <p className='text-center my-4'><small>Already have an account? <Link className='text-accent font-bold' to='/login'>Login here!</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;