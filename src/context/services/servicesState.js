import React, { useReducer } from "react";
import axios from "axios";
import ServicesContext from "./servicesContext";
import { ServicesReducers } from "./servicesReducer";
import { GET_SERVICES, SET_LOADING } from "../types";

const ServicesState = (props) => {
  const initialState = {
    services: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(ServicesReducers, initialState);

  // Get Services
  const getServices = async () => {
    setLoading();

    const { data } = await axios.get(
      `https://us-central1-rushmaid-test.cloudfunctions.net/app/category`
    );

    dispatch({
      type: GET_SERVICES,
      payload: data,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ServicesContext.Provider
      value={{
        services: state.services,
        loading: state.loading,
        getServices,
      }}
    >
      {props.children}
    </ServicesContext.Provider>
  );
};

export default ServicesState;
