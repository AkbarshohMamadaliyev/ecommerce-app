import React from 'react';

function Login() {
    return (
        <div>
            <button type="button" className="btn btn-outline-dark ms-auto" data-bs-toggle="modal"
                    data-bs-target="#loginModal">
                <span className="fa fa-sign-in me-1 text-center"/> Login
            </button>

            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"/>Login with Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"/>Login with Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-0">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                    <div id="emailHelp" className="form-text text-end">Forgot Password ?</div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-5">Log in</button>
                            </form>
                            <br/>
                            <div id="emailHelp" className="form-text text-center">Don't have an account ? <span className="text-primary">Sign up</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;