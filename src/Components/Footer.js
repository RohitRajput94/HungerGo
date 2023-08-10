import React from 'react'

export default function Footer() {
  return (
    <div>
    
    <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>ABOUT HUNGERG0</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Who we are</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Blog</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Work with us</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Report Fraud</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Contact us</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>HUNGERVERSE</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">HungerGo</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Feeding India</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Our locations</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Donation</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Hunger Hub</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>LEARN MORE </h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Search Food</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Privacy</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Security</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Terms</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Articles</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3 ">
        <form>
          <h5>Subscribe for Food Updates</h5>
          <p>Order and taste delicious food in just one click.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className ="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p> By continuing past this page , you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies.All trademarks are properties of their respective owners. 2023 © HungerGo Ltd. All rights reserved</p>
     
    </div>
  </footer>

    </div>
  )
}
