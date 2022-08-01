import React from 'react';
import {useSelector} from "react-redux";


function Checkout() {

    const state = useSelector((state) => state.addItem);

    let total = 0;

    const itemList = (item) => {

        total = total + item.price;

        return (
            <li className="list-group-item d-flex justify-content-between 1h-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        )
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-dark">Your Cart</span>
                            <span className="badge bg-dark rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map((itemList))}

                            <li className="list-group-item d-flex justify-content-between 1h-sm">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>
                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code"/>
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3 text-center">Billing address</h4>
                        <hr/>
                        <form className="needs-validation" noValidate="">
                            <div className="row g-3">
                                <label htmlFor="email" className="form-label">Email (Optional)</label>
                                <div className="col-12">
                                    <input type="email" className="form-control" id="email"
                                           placeholder="you@example.com"/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <label htmlFor="cc-name" className="form-label">Card Information</label>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" id="cc-name" placeholder="Card Name" required/>
                                    <div className="invalid-feedback">
                                        Name on card is required.
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" id="cc-name" placeholder="Card Number"
                                           required=""/>
                                    <div className="invalid-feedback">
                                        Credit card number is required.
                                    </div>
                                </div>
                                <label htmlFor="country" className="form-label">Country or region</label>
                                <div className="col-md-5">
                                    <select className="form-select" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" id="zip" placeholder="ZIP" required=""/>
                                    <div className="invalid-feedback">
                                        Zip code required
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <button className="w-100 btn btn-dark btn-lg" type="submit">Pay ${total}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;