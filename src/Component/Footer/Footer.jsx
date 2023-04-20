import React from "react";
import Flogo from "../images/logo-dark.png";
import postImage from "../images/post-1.jpg";
import postImage2 from "../images/post-2.jpg";
import mobileImg from "../images/mobile.png";
import FooterLinksComponent from "./FooterLinksComponent";
import FooterPostComponent from "./FooterPostComponent";
export default function Footer() {
  const LinksDataSet = [
    {
      id: 1,
      heading: "Quick Links",
      link1: "Buy a property",
      link2: "Sell a property",
      link3: "Rent a property",
      link4: "Calculate your property",
      link5: "Top offers",
      link6: "Top cities",
    },
    {
      id: 2,
      heading: "About",
      link1: "About us",
      link2: "Our agent",
      link3: "Our Support",
      link4: "Contacts",
      link5: "News",
    },
  ];
  const postDataSet = [
    {
      id: 1,
      postImg: postImage,
      heading: "HOME IMPROVEMENT",
      title: "Your Guide to a Smart Apartment Searching",
      paragraph:
        "Mi justo, varius vitae cursus ipsum sem massa amet pellentesque. Ipsum enim sit nulla ridiculus semper nam...",
      calanderIcon: "fa fa-calendar",
      dates: "Dec 4",
      commentIcons: "fa fa-comments",
      comments: "2 comments",
    },
    {
      id: 2,
      postImg: postImage2,
      heading: "Tips & advice",
      title: "Top 10 Ways to Refresh Your Space",
      paragraph:
        "Volutpat, orci, vitae arcu feugiat vestibulum ultricies nisi, aenean eget. Vitae enim, tellus tempor consequat mi vitae...",
      calanderIcon: "fa fa-calendar",
      dates: "Nov 24",
      commentIcons: "fa fa-comments",
      comments: "no comments",
    },
  ];
  return (
    <footer>
      <div className=" footer-container">
        <div className="row footers">
          <div className="col-lg-8 footer-flex">
            <div className="footer-contact footer-aligment">
              <div className="footer-log">
                <img src={Flogo} alt="" />
              </div>
              <div className="contect-items">
                <a href="/" className="nav-links">
                  <i className="fa fa-envelope "></i>
                  <span>example@email.com</span>
                </a>
                <br />
                <a href="/" className="nav-links">
                  <i className="fa fa-mobile"></i>
                  <span>123-456-789</span>
                </a>

                <div className="agent-social footer-icons">
                  <i className="fa fa-facebook agent-icon"></i>
                  <i className="fa fa-twitter agent-icon"></i>
                  <i className="fa fa-whatsapp agent-icon"></i>
                  <i className="fa fa-instagram agent-icon"></i>
                </div>
              </div>
            </div>

            {LinksDataSet.map((linkItems) => (
              <FooterLinksComponent key={linkItems.id} linkItems={linkItems} />
            ))}
          </div>

          <div className="col-lg-4">
            <div className="links-heading recent-post">
              <h4>Recent Posts</h4>
              {postDataSet.map((postItems) => (
                <FooterPostComponent key={postItems.id} postItems={postItems} />
              ))}

              {/* <!-- end --> */}
            </div>
          </div>
        </div>
        <div className="container  container-fluid download-app">
          <div className="row app-container">
            <div className="col-lg-4">
              <div className="app-img">
                <img src={mobileImg} alt="" />
              </div>
            </div>
            <div className="col-lg-8 app-items-container">
              <div className="app-items footer-aligment">
                <div className="app-text">
                  <h2>Download Our App</h2>
                  <p>
                    Find everything you need for buying, selling & renting
                    property in our new Finder App!
                  </p>
                </div>

                <div className="app-btn footer-aligment">
                  <button className="btn-items">
                    <div className="ios-icon">
                      <i className="fa fa-apple ios"></i>
                    </div>
                    <div className="ios-container">
                      <a className="ios-name" href="/">
                        Available on the <br />
                        App Store
                      </a>
                    </div>
                  </button>
                  <button className="btn-items">
                    <div className="ios-icon">
                      <i className="fa fa-android ios"></i>
                    </div>
                    <div className="ios-container">
                      <a className="ios-name" href="/">
                        Get It On <br />
                        Google Play
                      </a>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
