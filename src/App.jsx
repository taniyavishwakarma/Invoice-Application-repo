import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import DashBoard from "./DashBoard/DashBoard";
import Header from "./Header/Header";
import SideNavbar from "./SideNavbar/SideNavbar";
import Invoice from "./Invoice/Invoice";
import InvoiceForm from "./InvoiceForm/InvoiceForm";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter> */}
      <Header></Header>
      <SideNavbar></SideNavbar>
      <InvoiceForm></InvoiceForm>
      <Invoice></Invoice>
      <DashBoard></DashBoard>
    </>
  );
}

export default App;
