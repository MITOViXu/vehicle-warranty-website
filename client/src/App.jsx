import React, { Fragment, useState, useEffect } from "react";
import { ethers } from "ethers";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { contractAddress, abi } from "./constant/constant";
import Routers from "./routers/Router";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import Loading from "./components/LoadingComponent/Loading";
import { routes } from "./routers";
import { useQuery } from "@tanstack/react-query";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const res = await axios.get(`http://localhost:3001/api/vehicle/get-all`);
    console.log("res api: ", res);
  };
  const query = useQuery({ queryKey: ["todos"], queryFn: fetchApi });
  console.log("query", query);
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [contractInstance, setcontractInstance] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [car, setCar] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum); //read the Blockchain
        const signer = provider.getSigner(); //write the blockchain
        const address = await signer.getAddress();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log("Metamask Connected : " + address);
        setCar({ provider, signer, contract });
        setIsConnected(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error("Metamask is not detected in the browser");
    }
  }
  async function handleLogOut() {
    setIsConnected(false);
  }
  return (
    <div style={{ padding: "0" }}>
      <Loading isLoading={isLoading}>
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page;
              const Layout = route.isShowHeader ? DefaultComponent : Fragment;
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </Loading>
    </div>
  );
}
export default App;
// import React from 'react'
// import CarCard from './components/CarCard'

// const App = () => {
//   return (
//     <CarCard />
//   )
// }

// export default App
