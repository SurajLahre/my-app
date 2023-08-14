import React from 'react';

const VarHome = () => {
    return (
        <>
            <section className="section dashboard d-flex">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <div className="card-body p-3">
                                        <h2>Welcome to Code With Srj</h2>
                                        <p>Learn Web Development</p>
                                        <p className="card-text">Confused on which course to take? I have got you covered. Browse courses and
                                            find out the best course for
                                            you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people
                                            in short
                                            time which took me ages to learn.</p>
                                        <button className="btn btn-sm btn-dark">View Courses</button>
                                        <button className="btn btn-sm btn-outline-dark">Explore Blog</button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src="assets/img/gg2.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="col-lg-4">
                    </div>

                </div>
                <hr />
                <hr />
            </section>

            <section>
                <h1 className="text-center p-5">Recommended Courses</h1>
                <div className="container text-center m-auto">
                    <div className="row">
                        <div className="col">
                            <div className="card shadow" width="width: 18rem;">
                                <img src="assets/img/Leonardo_Diffusion_Create_a_web_developer_themed_logo_Creative_2.jpg"
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Learn HTML5</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's
                                        content.</p>
                                    <a href="/" className="btn btn-dark btn-sm">Start Watching</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow" width="width: 18rem;">
                                <img src="assets/img/Leonardo_Diffusion_Create_a_web_developer_themed_logo_Creative_2.jpg"
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Web Development</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's
                                        content.</p>
                                    <a href="/" className="btn btn-dark btn-sm">Start Watching</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow" width="width: 18rem;">
                                <img src="assets/img/Leonardo_Diffusion_Create_a_web_developer_themed_logo_Creative_2.jpg"
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">MERN Stack Development</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's
                                        content.</p>
                                    <a href="/" className="btn btn-dark btn-sm">Start Watching</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default VarHome;
