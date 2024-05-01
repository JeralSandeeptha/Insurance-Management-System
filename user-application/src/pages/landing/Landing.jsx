import React from 'react'
import './Landing.css';
import logo from '../../assets/img/icon/icon-02-primary.png';
import { Link } from 'react-router-dom';

const Landing = () => {

  return (
    <>
      <div
        className="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block"
      >
        <div className="row gx-0 align-items-center">
          <div className="col-lg-7 px-5 text-start flex">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-phone-alt me-2"></small>
              <small>+012 345 6789</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-envelope-open me-2"></small>
              <small>info@insure.com</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-clock me-2"></small>
              <small>Mon - Fri : 09 AM - 09 PM</small>
            </div>
          </div>
        </div>
      </div>




      <nav
        className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5"
      >
        <a className="navbar-brand d-flex align-items-center">
          <h1 className="m-0" style={{display:'flex'}}>
            <img
              className="img-fluid me-3"
              src={logo}
              alt="log-img"
              style={{width:'50px'}}
            />Insure
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse"></div>
        <div style={{display:'flex', alignItems: 'center', gap: '10px'}}>
          <Link to='/login' className="btn btn-secondary px-3 d-none d-lg-block">Login</Link>
          <Link to='/register' className="btn btn-primary px-3 d-none d-lg-block">Register</Link>
          <Link to='/company/login' className="bg-dark btn btn-primary px-3 d-none d-lg-block">Become Insurance Company</Link>
        </div>
      </nav>

      <div className='hero-bg'>
        <div style={{maxWidth:'900px', margin:'0 auto', height: '70vh', display: 'flex', alignItems:'flex-start', flexDirection: 'column', justifyContent: 'center'}}>
          <h1 className='header'>The Best <br/> Insurance <br/>Begins Here</h1>
          <h5 className='para'>Where we safeguard your future with peace of mind. Our hero section introduces our commitment to protecting what matters most your family's security.</h5>
        </div>
      </div>



      <div className="organization container-fluid overflow-hidden my-5 px-lg-0">
        <div className="organization-inner container facts px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="organization-left col-lg-6 facts-text wow fadeIn" data-wow-delay="0.1s">
              <div className="h-100 px-4 ps-lg-0">
                <h1 style={{color:'black'}} className=" mb-4">For Individuals And Organisations</h1>
                <p style={{color:'black'}} className=" mb-5">
                Explore our comprehensive coverage options and take the first step towards securing a brighter tomorrow.
                </p>
                <a style={{marginBottom: '10px'}} className="align-self-start btn btn-secondary py-3 px-5"
                  >More Details</a
                >
              </div>
            </div>
            <div className="organization-right col-lg-6 facts-counter wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100 px-4 pe-lg-0">
                <div className="row g-5">
                  <div className="col-sm-6">
                    <h1 className="display-5" data-toggle="counter-up">+10K</h1>
                    <p style={{color: '#0C68EE'}} className="fs-5 ">Happy Clients</p>
                  </div>
                  <div className="col-sm-6">
                    <h1 className="display-5" data-toggle="counter-up">+1000</h1>
                    <p className="fs-5 text-primary">Insurance Plans</p>
                  </div>
                  <div className="col-sm-6">
                    <h1 className="display-5" data-toggle="counter-up">+100</h1>
                    <p className="fs-5 text-primary">Insurance Comapnies</p>
                  </div>
                  <div className="col-sm-6">
                    <h1 className="display-5" data-toggle="counter-up">+20</h1>
                    <p className="fs-5 text-primary">Team Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div
        className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h1 className="text-white mb-4">
                <img
                  className="img-fluid me-3"
                  src={logo}
                  style={{width: '75px'}}
                  alt=""
                />Insure
              </h1>
              <p>
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                ipsum et lorem et sit, sed stet lorem sit clita
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-square me-1" href=""
                  ><i className="fab fa-twitter"></i
                ></a>
                <a className="btn btn-square me-1" href=""
                  ><i className="fab fa-facebook-f"></i
                ></a>
                <a className="btn btn-square me-1" href=""
                  ><i className="fab fa-youtube"></i
                ></a>
                <a className="btn btn-square me-0" href=""
                  ><i className="fab fa-linkedin-in"></i
                ></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Address</h5>
              <p style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} className='text-white'>
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA
              </p>
              <p style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} className='text-white'><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
              <p style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} className='text-white'><i className="fa fa-envelope me-3"></i>info@insure.com</p>
            </div>
            <div className="col-lg-3 col-md-6" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              <h5 className="text-light mb-4">Quick Links</h5>
              <h5 style={{textDecoration: 'none'}} className="btn btn-link">About Us</h5>
              <h5 style={{textDecoration: 'none'}} className="btn btn-link">Contact Us</h5>
              <h5 style={{textDecoration: 'none'}} className="btn btn-link">Our Services</h5>
              <h5 style={{textDecoration: 'none'}} className="btn btn-link">Terms & Condition</h5>
              <h5 style={{textDecoration: 'none'}} className="btn btn-link">Support</h5>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
                <input
                  className="form-control w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                  style={{marginBottom: '50px'}}
                />
                <button
                  type="button"
                  className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing;