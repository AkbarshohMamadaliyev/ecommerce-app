import React from 'react';
import {Link} from "react-router-dom";


function About() {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-dark fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ea eos est excepturi facilis,
                            illo ipsum magni molestias mollitia nostrum obcaecati quo recusandae soluta tempore unde?
                            Alias error hic ipsum iusto placeat ratione similique sint tempora! Aut consequuntur
                            dignissimos eos harum incidunt odio optio possimus! Accusantium alias atque consectetur
                            consequuntur delectus deleniti dicta dignissimos dolor dolore eaque earum eligendi enim eos
                            expedita facere incidunt labore magni maxime molestias necessitatibus nisi nulla odit omnis,
                            perspiciatis placeat praesentium quam quas quasi qui quis quos repellendus sapiente
                            similique temporibus tenetur totam velit!
                        </p>
                        <Link to="/contact" className="btn btn-outline-dark px-3">Contact Us</Link>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about.png" alt="About" height='400px' width="400px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;