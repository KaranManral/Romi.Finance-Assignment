import React, { useEffect } from "react";
import Logo from "./logo.png";
import Wallet from "./images/wallet.svg";
import Ethereum from "./images/ethereum.svg";

export default function Header() {
  useEffect(() => {
    let dropdown = document.getElementsByClassName("dropdown")[0];
    let ehtereum = document.getElementById("ethereum");
    let menus = document.getElementsByClassName("dropdown-menu");

    dropdown.addEventListener("mouseenter", () => {
      menus[0].classList.add("show");
    });

    dropdown.addEventListener("mouseleave", () => {
      menus[0].classList.remove("show");
    });

    ehtereum.addEventListener("click", () => {
      menus[1].classList.add("show");
    });

    ehtereum.addEventListener("focusout", () => {
      menus[1].classList.remove("show");
    });
  }, []);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg romi-bg-dark shadow-lg"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={Logo}
              alt="Logo"
              title="Romi.Finance"
              width="45"
              height="45"
            />
            <span>Romi.Finance</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ position: "fixed", left: "10px" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#!">
                  NFT
                </a>
                <ul className="dropdown-menu romi-bg-dark">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Mint
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Stake NFT
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/earn">
                  Earn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Buy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Referrals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Ecosystem
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="right_items">
            <button type="button" className="btn btn-success btn-green">
              Trade
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img src={Wallet} alt="wallet_icon" width={20} height={20} />
              <span> Connect Wallet </span>
            </button>
            <button
              className="nav-item dropdown btn btn-outline-secondary"
              id="ethereum"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img src={Ethereum} alt="ethereum_icon" />
              <div className="vr"></div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                color="white"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "white" }}
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>

              <ul
                className="dropdown-menu romi-bg-dark"
                style={{ right: 0, top: 45, padding: 10 }}
              >
                <span className="small">Networks</span>
                <li>
                  <a className="dropdown-item" href="#!">
                    <img
                      src={Ethereum}
                      alt="ethereum_logo"
                      style={{ marginRight: 5 }}
                    />
                    Ethereum
                  </a>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <a className="dropdown-item" href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-gear"
                      viewBox="0 0 16 16"
                      style={{ marginRight: 5 }}
                    >
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                    </svg>
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-globe-americas"
                      viewBox="0 0 16 16"
                      style={{ marginRight: 5 }}
                    >
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                    </svg>
                    Language
                  </a>
                </li>
              </ul>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
