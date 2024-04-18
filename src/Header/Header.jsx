import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <div className="flex justify-end">
          <div>
            <a
              href="#"
              class="flex items-center  text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
          </div>

          <div>
            <a
              href="#"
              class="flex items-center  text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
