import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Welcome from "../../welcome/Welcome";
import { LoadingContext } from "../../context/Loading";

const Home = () => {
  const { loading } = useContext(LoadingContext);
  //   const { pathname } = useLocation();
  //   const [homePage, setHomePage] = useState(true);

  //   useEffect(() => {
  //     pathname !== "/" && setHomePage(false);
  //   }, [pathname]);

  return (
    <div className="box">
      <Welcome />
      <div className={loading ? "container hide" : "container"}>
        <div className="box-background">
          <img
            src="https://res.cloudinary.com/daovinhkhuong/image/upload/v1628583032/newProject/slider_new_aven_ulti_02_0_qyjxmj.jpg"
            alt=""
          />
          <div className="box-title">
            <span>THE FUTURE OF MOBILITY IS HERE</span>
            <span>
              Discover the safest self-driving experience with Autono.
            </span>
            <div className="box-connect">
              <Link to="/show-room">See more!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
