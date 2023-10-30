import React from "react";
import Icon1 from "./images/icon1.svg";
import Icon2 from "./images/icon2.svg";
import Icon3 from "./images/icon3.svg";
import Icon4 from "./images/icon4.svg";
import Icon5 from "./images/icon5.svg";
import Icon6 from "./images/icon6.svg";
import Icon7 from "./images/icon7.png";
import Icon8 from "./images/icon8.png";
import AlertComponent from "./AlertComponent";

export default function Home() {
  return (
    <>
      <div
        className="container-fluid romi-bg-dark"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      >
        <div className="container-md">
          <div className="home-title-section default-container">
            <h1 className="home-title">
              Decentralized <br />
              Perpetual Exchange
            </h1>
            <p className="home-desc">
              Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x
              leverage directly from your wallet
            </p>
            <button type="button" className="btn btn-success btn-green">
              Launch Exchange
            </button>
          </div>
          <div className="container-fluid" style={{ marginBottom: "3rem" }}>
            <div
              className="row default-container"
              style={{ justifyContent: "center" }}
            >
              <div className="col-md-4 mb-3 mb-sm-0">
                <div className="card">
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <img src={Icon1} alt="icon" />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <p>Total Trading Volume</p>
                      <p className="home-desc">$0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <img src={Icon2} alt="icon" />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <p>Open Interest</p>
                      <p className="home-desc">$0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <img src={Icon3} alt="icon" />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <p>Total Users</p>
                      <p className="home-desc">$0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid"
          style={{
            marginTop: "5.5rem",
            borderTop: "1px solid gray",
          }}
        >
          <div className="container-md">
            <div
              className="row"
              style={{ justifyContent: "space-around", marginTop: "4.5rem" }}
            >
              <div className="col-md-3 mb-3 mb-sm-0">
                <div className="card no-shadow">
                  <div className="card-body">
                    <div
                      className="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <img src={Icon4} alt="icon" />
                      <h5>Reduce Liquidation Risks</h5>
                    </div>
                    <p className="card-text">
                      An aggregate of high-quality price feeds determine when
                      liquidations occur. This keeps positions safe from
                      temporary wicks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card no-shadow">
                  <div className="card-body">
                    <div
                      className="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <img src={Icon5} alt="icon" />
                      <h5>Save on Costs</h5>
                    </div>
                    <p className="card-text">
                      Enter and exit positions with minimal spread and zero
                      price impact. Get the optimal price without incurring
                      additional costs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card no-shadow">
                  <div className="card-body">
                    <div
                      className="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <img src={Icon6} alt="icon" />
                      <h5>Simple Swaps</h5>
                    </div>
                    <p className="card-text">
                      Open positions through a simple swap interface.
                      Conveniently swap from any supported asset into the
                      position of your choice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2
              className="home-title"
              style={{ marginTop: "3.5rem", padding: 3.5 + "rem" }}
            >
              Two tokens create <br /> our ecosystem
            </h2>
            <div className="row" style={{ justifyContent: "space-around" }}>
              <div className="col-md-5 mb-3 mb-sm-0">
                <div className="card">
                  <div className="card-body">
                    <div
                      className="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <img src={Icon7} alt="icon" width={36} height={36} />
                      <h5>$ZOMI</h5>
                    </div>
                    <p className="card-text">
                      $ZOMI is the utility and governance token. Accrues 30% of
                      the platform's generated fees.
                      <br />
                      <br />
                      Ethereum APR: 0.00%
                    </p>
                    <a href="#" className="btn btn-success btn-green">
                      Buy
                    </a>
                    &emsp;
                    <a href="#" className="btn btn-outline-secondary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <div
                      className="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <img src={Icon8} alt="icon" width={36} height={36} />
                      <h5>$ZLP</h5>
                    </div>
                    <p className="card-text">
                      $ZLP is the liquidity provider token. Accrues 70% of the
                      platform's generated fees.
                      <br />
                      <br />
                      Ethereum APR: 1,661,652,611.16%
                    </p>
                    <a href="#" className="btn btn-success btn-green">
                      Buy
                    </a>
                    &emsp;
                    <a href="#" className="btn btn-outline-secondary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
