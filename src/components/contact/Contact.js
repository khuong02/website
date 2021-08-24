import React, { useEffect, useState, useRef, useContext } from "react";
import Aos from "aos";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Contact = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/contact");

        if (!res) return;

        setData(res.data);
        setLoading(false);
      } catch (err) {
        err.response.getData.message && console.log(err);
      }
    };

    getData();
    Aos.init({ duration: 1500 });
  }, []);

  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div className="contact-page">
      <div className="contact-header">
        <img
          src="https://res.cloudinary.com/daovinhkhuong/image/upload/v1628697487/newProject/contact_us_hero_01_iqchpd.jpg"
          alt=""
        />
        <div className="box-content">
          <h3 data-aos="fade-right">CONTACT US</h3>
          <h1 data-aos="fade-left">CUSTOMER CARE</h1>
          <div className="btn" onClick={executeScroll}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="contact-body" ref={myRef}>
        <div className="row">
          <div className="image" data-aos="fade-left">
            <img
              src="https://res.cloudinary.com/daovinhkhuong/image/upload/v1628697444/newProject/contact_us_over_01_merdhx.jpg"
              alt=""
            />
          </div>
          <div className="box-content" data-aos="fade-right">
            <h3>LAMBORGHINI </h3>
            <h3>CUSTOMER CARE</h3>
            <p>
              Automobili Lamborghini is pleased to assist you with an attentive
              multi-channel service: You can ask your questions to the
              Lamborghini Assistant, who will guide you through the Lamborghini
              world.
            </p>
            <p>
              If our Assistant is unable to find what you are looking for,
              please scroll down and get in touch with our dedicated Customer
              Contact Center via phone or contact form.
            </p>
            <Link className="box-btn" to="/home">
              <div className="btn">
                <i className="fas fa-plus"></i>
              </div>
              <p>Ask A Question</p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="box-country">
            {!loading &&
              data.map((item, index) => {
                return (
                  <div
                    key={item._id}
                    className="box-country-item"
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  >
                    <div className="__box-country-item">
                      <img src={item.image} alt="" />
                      <div className="box-country-content">
                        <h3>{item.title}</h3>
                        <p>{item.phone}</p>
                        <p>{item.params}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row">
          <div className="image-footer" data-aos="fade-left">
            <img
              src="https://res.cloudinary.com/daovinhkhuong/image/upload/v1628777650/newProject/contact_us_over_02_gjvhyk.jpg"
              alt=""
            />
          </div>
          <div className="box-content-footer" data-aos="fade-right">
            <h3>SEND A MESSAGE </h3>
            <p>
              In this section, you can write to us for any request or support
              needed. If you are a Lamborghini Owner, register on the Unica App
              in order to keep in touch and stay updated on all Lamborghini
              news, events and exclusive communications. Fill in the form of
              your interest and we will be glad to manage your request at the
              soonest:
            </p>
            <Link className="box-btn" to={`/message/${user._id}`}>
              <div className="btn">
                <i className="fas fa-plus"></i>
              </div>
              <p>Send a message</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
