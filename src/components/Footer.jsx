import React from "react";

function Footer() {
  return (
    <>
      <footer id="footer">
        <div
          id="footer-container"
          className="mx-20 mt-24 mb-6 bg-gray-950 rounded-3xl"
        >
          <div id="footer-grid" className="grid grid-cols-3 p-6">
            <div
              id="company-section"
              className="flex flex-col justify-center items-center"
            >
              <div>
                <h3
                  id="company-heading"
                  className="text-base text-gray-500 mb-5 footer-heading"
                >
                  Company
                </h3>
                <ul>
                  <li id="about-us-link" className="mb-2 text-sm">
                    <a href="#" className="text-gray-700">
                      About Us
                    </a>
                  </li>
                  <li
                    id="our-services-link"
                    className="text-gray-700 mb-2 text-sm"
                  >
                    <a href="#" className="text-gray-700">
                      Our Services
                    </a>
                  </li>
                  <li
                    id="privacy-policy-link"
                    className="text-gray-700 mb-2 text-sm"
                  >
                    <a href="#" className="text-gray-700">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="get-help-section"
              className="flex flex-col justify-center items-center"
            >
              <div>
                <h3
                  id="get-help-heading"
                  className="text-base text-gray-500 mb-5 footer-heading"
                >
                  Get Help
                </h3>
                <ul>
                  <li id="faq-link" className="mb-2 text-sm">
                    <a href="../pages/faqPage.html" className="text-gray-700">
                      FAQ
                    </a>
                  </li>
                  <li id="shipping-link" className="mb-2 text-sm">
                    <a href="#" className="text-gray-700">
                      Shipping
                    </a>
                  </li>
                  <li id="order-status-link" className="mb-2 text-sm">
                    <a href="#" className="text-gray-700">
                      Order Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="follow-us-section"
              className="flex flex-col justify-center items-center"
            >
              <h3
                id="follow-us-heading"
                className="text-base text-gray-500 mb-5 footer-heading"
              >
                Follow Us
              </h3>
              <div id="social-icons" className="flex gap-4">
                <ion-icon
                  id="facebook-icon"
                  name="logo-facebook"
                  className="text-xl text-gray-500"
                ></ion-icon>
                <ion-icon
                  id="twitter-icon"
                  name="logo-twitter"
                  className="text-xl text-gray-500"
                ></ion-icon>
                <ion-icon
                  id="instagram-icon"
                  name="logo-instagram"
                  className="text-xl text-gray-500"
                ></ion-icon>
                <ion-icon
                  id="linkedin-icon"
                  name="logo-linkedin"
                  className="text-xl text-gray-500"
                ></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
