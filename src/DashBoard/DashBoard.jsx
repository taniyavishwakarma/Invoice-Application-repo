import React from "react";
import "./DashBoard.css";
export default function DashBoard() {
  return (
    <div>
      <div className=" font-bold text-2xl text-center pt-40 pl-20">
        <div className="containerD justify-center text-center ">
          <div className="grid grid-cols-3 gap-8 justify-center">
            <div className="flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>Invoice</h1>
                </div>
                <div className="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>Invoice</h1>
                </div>
                <div className="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
            <div className="flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>Invoice</h1>
                </div>
                <div className="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
