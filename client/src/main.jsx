import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient()
root.render(
  <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
