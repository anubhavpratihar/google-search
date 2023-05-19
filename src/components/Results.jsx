import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useStateContext } from "../contexts/StateContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm !== "") {
        if (location.pathname === "/videos") {
          getResults(`/search/q=${searchTerm} videos`);
        } else {
          getResults(`${location.pathname}/q=${searchTerm}&num=40`);
        }
      }
    };

    fetchData();
  }, [searchTerm, location.pathname, getResults]); // Include getResults in the dependency array

  if (loading) return <Loading />;

  switch (location.pathname) {
    // Rest of your code...
  }
};
