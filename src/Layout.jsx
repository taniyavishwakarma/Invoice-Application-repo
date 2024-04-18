import React from "react";
import { Outlet } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import SideNavbar from "./SideNavbar/SideNavbar";
import Header from "./Header/Header";
import "./Layout.css";
import Invoice from "./Invoice/Invoice";
import InvoiceForm from "./InvoiceForm/InvoiceForm";
import InvoiceTable from "./InvoiceTable/InvoiceTable";
export default function Layout() {
  return (
    <>
      <div>
        <div className="sidebar ">
          <SideNavbar />
        </div>

        <div class="content">
          <h2>
            <Header />
          </h2>
          <p>
            <Outlet />
          </p>
          <h3></h3>
        </div>
        {/* <header>
          <Header />
        </header>

        <section>
          <SideNavbar />

          <article>
            <Outlet />
          </article>
        </section>

        <footer>
          <p>Footer</p>
        </footer> */}
      </div>
    </>
  );
}
