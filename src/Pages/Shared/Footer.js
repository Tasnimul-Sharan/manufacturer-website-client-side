import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-10 mt-10">
      <div class="footer p-10">
        <div>
          <span class="footer-title">Services</span>
          <Link to="/go" class="link link-hover">
            Branding
          </Link>
          <Link to="/go" class="link link-hover">
            Design
          </Link>
          <Link to="/go" class="link link-hover">
            Marketing
          </Link>
          <Link to="/go" class="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <Link to="/go" class="link link-hover">
            About us
          </Link>
          <Link to="/go" class="link link-hover">
            Contact
          </Link>
          <Link to="/go" class="link link-hover">
            Jobs
          </Link>
          <Link to="/go" class="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <Link to="/go" class="link link-hover">
            Terms of use
          </Link>
          <Link to="/go" class="link link-hover">
            Privacy policy
          </Link>
          <Link to="/go" class="link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
      <div className="">
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
