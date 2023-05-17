import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { login } = useContext(AuthContext);
    
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log('Current User: ', loggedUser)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error: ' ,error.message)
                if(error.message === 'Firebase: Error (auth/user-not-found).'){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.message}`,
                    })
                }
            })
    }

    return (
        <div className="hero min-h-screen bg-neutral md:rounded-xl p-7">
            <div className="hero-content flex flex-col lg:flex-row gap-7">
                <div className="w-full lg:w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-full lg:w-1/2">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-5 mt-3">Login</h1>
                        <form onSubmit={handleLogin}>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-warning btn-outline">Login</button>
                            </div>
                        </form>
                        <p className='text-center my-4'><small>New to Car Doctor? <Link className='text-accent font-bold' to='/register'>Register!</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;