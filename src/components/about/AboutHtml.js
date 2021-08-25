import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import LoadingPageChild from "../../loading/LoadingPageChild";
import Aos from "aos";

const AboutHtml = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/about");

        if (!res) return setErr("data is not already.");

        setData(res.data);
        setLoading(false);
      } catch (err) {
        err.response.data.message && console.log(err.response.data.message);
      }
    };

    getData();
    Aos.init({ duration: 1500 });
  }, []);

  if (err) console.log(err);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      {loading && <LoadingPageChild />}
      {data && !loading && (
        <>
          <div className="about-header">
            <Slider {...settings}>
              {data.length > 0 &&
                data.map((item) => {
                  return (
                    <div key={item._id} className="about-header-item">
                      <img src={item.image} alt="" />
                    </div>
                  );
                })}
            </Slider>
          </div>
          <div className="about-row">
            <div className="box-about">
              <div className="box-left" data-aos="fade-right">
                <img
                  src="https://res.cloudinary.com/daovinhkhuong/image/upload/v1629879949/newProject/museum_layout_01_thgkyo.jpg"
                  alt=""
                />
              </div>
              <div className="box-right" data-aos="fade-left">
                <h3>MUDETEC: IN SEARCH OF THE FUTURE</h3>
                <p>
                  The Lamborghini Museum has been updated to become Museum of
                  Technologies, where fascinating history, the iconic models and
                  tours of the production lines tell the story of over 50 years
                  of innovation that project Lamborghini into the future.
                  Mudetec offers an interactive experience, also thanks to the
                  new driving simulator that amplifies the thrills and the
                  discovery of the vehicles on display. From the early visionary
                  creations of the genius of Ferruccio Lamborghini like the
                  Miura and Countach to the more recent and exclusive super
                  sports cars like the hybrid concept Asterion, the few-off
                  Centenario, the Huracán Performante and the Aventador SVJ.
                  Experience the emotion of the new augmented reality. Download
                  the #lamborghinimudetec app Open every day from 9:30 a.m.
                  until 6:00 p.m{" "}
                </p>
                <p>
                  <span>
                    To visit Mudetec in complete safety, we remind you that
                    reservations are required. Find out more on info & booking.
                  </span>
                </p>
                <p>
                  Please note that, pursuant to applicable legislation, starting
                  August 6, 2021 only those visitors to the MUDETEC in
                  possession of the green certificate (Green Pass) are permitted
                  access. The visitor shall be responsible for presenting this
                  document, along with an appropriate ID document, at the
                  entrance so that Lamborghini can check its validity and
                  authenticity. If the required requisites are not met and if
                  there are no exemptions as established by law, the visitor
                  will be refused access to the museum and will be unable to
                  request a refund. DAYS CLOSED IN 2021 July: 8 (closed until 2
                  PM) August: 14, 15; December: 25; January 1, 2022 December 24,
                  31 (early closing at 2 p.m.)
                </p>
                <p>
                  <span>DAYS CLOSED IN 2021</span>
                </p>
                <p>
                  July: 8 (closed until 2 PM) August: 14, 15; December: 25;
                  January 1, 2022 December 24, 31 (early closing at 2 p.m.)
                </p>
                <div>
                  <Link to="/home">info and booking</Link>
                </div>
              </div>
            </div>
            <div className="row2">
              <div className="box-content" data-aos="fade-right">
                <h3>TOUR OF THE PRODUCTION LINES</h3>
                <p>
                  From the historic entrance to the future: touring the
                  production lines is a unique journey to witness the birth of
                  the Lamborghini sports cars. From the V12 line where the
                  Aventador’s engine and frame come together for the first time
                  and on to the V10 line where the Huracán is born. The guided
                  tours that start from Mudetec make the tour an unforgettable
                  experience in search of the company’s most amazing places.
                </p>
                <p>
                  <span>Available once again starting 6/28.</span>
                </p>
              </div>
            </div>
            <div className="row3">
              <div className="image">
                <div className="skew" data-aos="fade-left">
                  <img
                    src="https://res.cloudinary.com/daovinhkhuong/image/upload/v1629875236/newProject/museum_s_01_wxx94y.jpg"
                    alt=""
                  />
                </div>
                <div className="skew" data-aos="fade-right">
                  <img
                    src="https://res.cloudinary.com/daovinhkhuong/image/upload/v1629875198/newProject/museum_s_03_tiuial.jpg"
                    alt=""
                  />
                </div>
                <div className="skew" data-aos="fade-left">
                  <img
                    src="https://res.cloudinary.com/daovinhkhuong/image/upload/v1629875255/newProject/museum_s_02_yjpin4.jpg"
                    alt=""
                  />
                </div>
                <div className="skew" data-aos="fade-right">
                  <img
                    src="https://res.cloudinary.com/daovinhkhuong/image/upload/v1629875277/newProject/museum_s_04_ivbsmw.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="box-content" data-aos="fade-left">
                <h3>You Must Know About Lamborghini</h3>
                <p>
                  Ferruccio Lamborghini was a successful tractor manufacturer
                  before he got interested in sports cars. His interest in
                  sports cars made him buy many different high-performance cars
                  including both Maseratis and Ferraris, but he was never really
                  happy with any of them and therefore decided to built his own,
                  perfect sports car, Lamborghini used to be an independent
                  company, but today it is a subsidiary of the German company
                  Audi AG. Audi AG became the owner of Lamborghini in 1998.
                  Lamborghini went bankrupt in 1978 and was sold to Chrysler a
                  long time before Audi AG became the sole owner of the company.
                </p>
                <p>
                  The fastest Lamborghini is the Le Mans version of the
                  Murcielago R-GT model. It has been reported to have a top
                  speed of 370 km/h. The fastest street model from Lamborghini
                  is the Murcielago LP640 with an estimated top speed of 340
                  km/h. Both of the models have a V12 engine with more than 6000
                  cc.
                </p>
                <p>
                  Several of the newer Lamborghini models feature the familiar
                  Lamborghini scissor doors that rotate up and forward on a
                  hinge near the front of the door. The Countach, the Diablo and
                  the Murcielago all have scissor doors, but the Gallardo does
                  not. Both the Countach and the Diablo are no longer being
                  produced, so the Murcielago is the only current model with
                  scissor doors.
                </p>
                <div>
                  <Link to="/home">info and booking</Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AboutHtml;
