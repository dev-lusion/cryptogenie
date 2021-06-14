import React, { useEffect, useState } from "react";
import Header from "./Header";
import NewsList from "./NewsList";
import Loading from "./Loading";
import axios from "./../axios";
import requests from "./../requests";
import TrendingCurrency from "./TrendingCurrency";
import FadeIn from "react-fade-in/lib/FadeIn";
import GlobalData from "./GlobalData";
import Sidebar from "./Sidebar";
import Table from "./Table";
import { selectLoadingStatus } from "../store/loadingSlice";
import { selectCurrency } from "../store/currencySlice";
import { apiLoaded } from "../store/loadingSlice";
import { useSelector, useDispatch } from "react-redux";
const Landing = () => {
  const apiIsLoading = useSelector(selectLoadingStatus);
  const dispatch = useDispatch();
  const defaultCurrency = useSelector(selectCurrency);
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      axios.get(requests.globalData).then((res) => {
        dispatch(apiLoaded(false));
        const marketCap = Object.entries(
          res.data.data?.total_market_cap
        ).filter((curr) => curr[0] === defaultCurrency)[0][1];
        const dominance = Object.fromEntries(
          Object.entries(res.data.data?.market_cap_percentage).slice(0, 2)
        );

        setData({
          coins: res.data.data?.active_cryptocurrencies,
          totalMarketCap: marketCap,
          dominance: dominance,
          defaultCurrency,
        });
      });
    } catch (err) {}
  };

  useEffect(() => {
    fetchData();
  }, [defaultCurrency]);
  return (
    <>
      {apiIsLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <GlobalData {...data}></GlobalData>
          <FadeIn>
            <div className="landing">
              <Header login={false}></Header>
              <Sidebar></Sidebar>
              <Table></Table>
              <NewsList></NewsList>
              {/* <TrendingCurrency></TrendingCurrency> */}

              {/* chart */}
            </div>
          </FadeIn>
        </>
      )}
    </>
  );
};

export default Landing;
