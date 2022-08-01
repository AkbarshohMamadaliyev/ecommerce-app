import React from 'react';


function Contact() {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Any Question ?</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="/assets/contact.png" alt="About" height='400px' width="500px"/>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleForm" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleForm" placeholder="Akbarshoh Mamadaliev"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Email address
                                </label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="akbarshokhmamadaliev@gmail.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                    Example textarea
                                </label>
                                <textarea id="exampleFormControlTextarea1" rows="5" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-outline-dark">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;