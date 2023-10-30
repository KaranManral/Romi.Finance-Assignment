import React from "react";
import MetaMask from "./images/mm.png";
import CoinBase from "./images/cbw.png";
import WalletConnect from "./images/wc.svg";

export default function AlertComponent() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-theme="dark"
    >
      <div className="modal-dialog modal-sm modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">
              Connect Wallet
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="modal-body"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              height: "200px",
            }}
          >
            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{
                width: "70%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src={MetaMask} alt="MetaMask" width={30} height={30} />
              <span>MetaMask</span>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{
                width: "70%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                src={CoinBase}
                alt="Coinbase_Wallet"
                width={30}
                height={30}
              />
              <span>Coinbase Wallet</span>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{
                width: "70%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                src={WalletConnect}
                alt="wallet_connect"
                width={30}
                height={30}
              />
              <span>WalletConnect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
