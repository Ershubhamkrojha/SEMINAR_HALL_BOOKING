import React from 'react'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.png'



import './coordinator_main.css'
import { Link, useNavigate } from "react-router-dom";

const Codinator_main = () => {
    return (



        <div className=''>
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    p     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner main_img">
                    <div className="carousel-item active ">
                        <img src={img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..." />
                    </div>
                    <>


                        <div className="mainBox">
                            <div className="boxx">

                                {/* <form autoComplete='off' onSubmit={handleSubmit}> */}
                                <form autoComplete='off' className='myform'>

                                    <span className="logo"><u>WeLcOmE</u></span>
                                    <div className="links">
                                    <a href=''>
                                         <Link className="logbtn" to={'/con_user'}>Contact</Link>
                                    </a>
                                    <a href='' >
                                        <Link className="logbtn" to={'/ca'}>  Aproval</Link>  
                                    </a>
                                    </div>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="links">
                                    <a href='' >
                                        <Link className="logbtn" to={'/co'}>  CoordinatorHome</Link>  
                                    </a>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Codinator_main