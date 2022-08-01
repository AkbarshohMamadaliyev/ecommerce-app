import React from 'react';

function Signup() {
    return (
        <div>
            <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal"
                    data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"/> Register
            </button>

            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Create your account</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"/>Sign up with Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"/>Sign up with Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="exampleInput" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="exampleInput"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="exampleInput" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="exampleInput"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with
                                        anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-2">Create Account</button>
                            </form>
                            <p className="signup-txt">By clicking "Continue" I agree to Toybox's Terms of Service and Privacy Policy</p>
                            <p className="signup-txt">Already have an account ?</p>
                            <p className="signup-txt text-primary">Sign in</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;