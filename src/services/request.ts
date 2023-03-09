import React from "react";
import axios from "axios";

const baseURL = "https://hacker-news.firebaseio.com/v0";

const axiosRequest = axios.create({
  baseURL,
});

export { axiosRequest as request };
