import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DashBoard from "./DashBoard/DashBoard.jsx";
import Invoice from "./Invoice/Invoice.jsx";
import InvoiceForm from "./InvoiceForm/InvoiceForm.jsx";
import Layouts from "./Layout.jsx";
import InvoiceTable from "./InvoiceTable/InvoiceTable.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route path="/" element={<DashBoard />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/invoiceform" element={<InvoiceForm />} />
      <Route path="/invoicetable" element={<InvoiceTable />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
