import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingPageChild from "../../loading/LoadingPageChild";
import DashboardHeader from "../dashboardComponent/DashboardHeader";
import DashboardBodyLeft from "../dashboardComponent/DashboardBodyLeft";
import TableContext from "../../context/TableContext";

const initialState = {
  data: {},
  loading: false,
  err: "",
};

const DashBoard = () => {
  const [product, setProduct] = useState(initialState);
  const { data, err, loading } = product;

  const { statistical, totalQuantity, fiveLarge } = data;

  const [dataStatistical, setDataStatistical] = useState([{}]);

  useEffect(() => {
    const technologyData = async () => {
      try {
        setProduct((prev) => ({
          ...prev,
          loading: true,
        }));
        const res = await axios.get("/technology");
        if (!res)
          return setProduct((prev) => ({
            ...prev,
            err: "Not connect is database.",
          }));

        setProduct((prev) => ({
          ...prev,
          data: res.data.data,
          err: "",
          loading: false,
        }));
        setDataStatistical(res.data.data.changeKeyData);
      } catch (err) {
        console.log(err);
      }
    };

    technologyData();
  }, []);

  if (err) console.log(err);

  return (
    <div className="box-dashboard">
      {loading && <LoadingPageChild />}
      <div className="box-header">
        <h3 className="header-title">the country that buys the most cars</h3>
        {fiveLarge &&
          fiveLarge.map((item) => {
            return (
              <div key={item._id} className="header-item">
                <p>{item.country}</p>
                <DashboardHeader item={item} totalQuantity={totalQuantity} />
              </div>
            );
          })}
      </div>
      <div className="box-body">
        <div className="box-body-container">
          <DashboardBodyLeft dataStatistical={dataStatistical} />
          <TableContext statistical={statistical} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
