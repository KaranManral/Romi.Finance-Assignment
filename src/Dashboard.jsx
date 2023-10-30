import React, { useEffect } from "react";
import Icon7 from "./images/icon7.png";
import Icon8 from "./images/icon8.png";
import Icon9 from "./images/icon9.svg";
import DropIcon1 from "./images/dropicon1.svg";
import DropIcon2 from "./images/dropicon2.svg";
import Ethereum from "./images/ethereum.svg";
import Bitcoin from "./images/bit.svg";
import Apecoin from "./images/ape.svg";
import Usdcoin from "./images/usd.svg";

export default function Dashboard() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, []);
  return (
    <div
      className="container-fluid romi-bg-dark"
      style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
    >
      <div className="container-md">
        <div className="home-title-section default-container">
          <h1 className="dashboard-title">
            Stats&thinsp;
            <img src={Icon9} alt="icon" />
          </h1>
          <p className="dashboard-desc">
            Ethereum Total Stats start from 06 Jan 2022.
            <br /> For detailed stats:
          </p>
          <div className="row" style={{ width: "100%" }}>
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div
                className="card no-shadow"
                style={{ border: "1px solid gray" }}
              >
                <div
                  className="card-header"
                  style={{ border: "1px solid gray", padding: "1rem" }}
                >
                  <h4 className="card-title">Overview</h4>
                </div>
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row1">
                    <p className="card-text">AUM</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Assets Under Management: $ZOMI staked (All chains) + $ZLP pool (Ethereum)"
                    >
                      $34
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">$ZLP Pool</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Total value of tokens in $ZLP pool (Ethereum)"
                    >
                      $34
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">24h Volume</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="{title} on Ethereum:
                      $0
                      
                      Total:
                      $0"
                    >
                      $0
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Long positions</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="{title} on Ethereum:
                      $0
                      
                      Total:
                      $0"
                    >
                      $0
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Short Positions</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="{title} on Ethereum:
                      $0
                      
                      Total:
                      $0"
                    >
                      $0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div
                className="card no-shadow"
                style={{ border: "1px solid gray", height: "100%" }}
              >
                <div
                  className="card-header"
                  style={{ border: "1px solid gray", padding: "1rem" }}
                >
                  <h4 className="card-title">Total Stats</h4>
                </div>
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row1">
                    <p className="card-text">Total Fees</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="{title} on Ethereum:
                      $0
                      
                      Total:
                      $0"
                    >
                      $0
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Total Volume</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="{title} on Ethereum:
                      $0
                      
                      Total:
                      $0"
                    >
                      $0
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Floor Price Fund</p>
                    <p className="card-text">$634,490</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-title-section default-container">
          <h1 className="dashboard-title">
            Tokens&thinsp;
            <img src={Icon9} alt="icon" />
          </h1>
          <p className="dashboard-desc">Platform and $ZLP index tokens.</p>
          <div className="row" style={{ width: "100%" }}>
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div
                className="card no-shadow"
                style={{ border: "1px solid gray", height: "100%" }}
              >
                <div className="row g-0">
                  <div className="col-md-8">
                    <div
                      className="card-header"
                      style={{
                        borderBottom: "1px solid gray",
                        padding: "1rem",
                      }}
                    >
                      <ul
                        className="navbar-nav"
                        style={{ cursor: "pointer" }}
                        data-bs-theme="dark"
                      >
                        <li className="nav-item dropdown">
                          <span
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <img
                              src={Icon7}
                              alt="zomi"
                              width={36}
                              height={36}
                            />
                            &thinsp; $ZOMI
                          </span>
                          <ul className="dropdown-menu romi-bg-dark">
                            <li>
                              <a className="dropdown-item" href="#!">
                                <img src={DropIcon1} alt="drop_icon_1" />
                                &thinsp; Open in Coingecko
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <img src={DropIcon2} alt="drop_icon_2" />
                                &thinsp; Open in Explorer
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="card-body"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div className="row1">
                        <p className="card-text">Price</p>
                        <p
                          className="card-text decorated"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-custom-class="custom-tooltip"
                          data-bs-title="Price on Ethereum:
                      $..."
                        >
                          $0.00
                        </p>
                      </div>
                      <div className="row1">
                        <p className="card-text">Supply</p>
                        <p className="card-text ">$10,000 $ZOMI</p>
                      </div>
                      <div className="row1">
                        <p className="card-text">Total Staked</p>
                        <p
                          className="card-text decorated"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-custom-class="custom-tooltip"
                          data-bs-title="{title} on Ethereum:
                      $0
                      
                      Total:
                      $0"
                        >
                          $0
                        </p>
                      </div>
                      <div className="row1">
                        <p className="card-text">Market Cap</p>
                        <p className="card-text ">$10</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <svg
                      cx="50%"
                      cy="50%"
                      className="recharts-surface"
                      width="210"
                      height="210"
                      viewBox="0 0 210 210"
                      version="1.1"
                    >
                      <defs>
                        <clipPath id="recharts1-clip">
                          <rect x="5" y="5" height="200" width="200"></rect>
                        </clipPath>
                      </defs>
                      <g className="recharts-layer recharts-pie">
                        <g className="recharts-layer recharts-pie-sector">
                          <path
                            name="in liquidity"
                            cx="105"
                            cy="105"
                            fill="#0598fa"
                            stroke="#0598fa"
                            color="#0598fa"
                            strokeWidth="1"
                            className="recharts-sector"
                            d="M 105,25
    A 80,80,0,
    1,1,
    70.73564944631276,32.70923792673068
  L 73.7337801197604,39.034679608141744
            A 73,73,0,
            1,0,
            105,32 Z"
                            style={{ filter: "none", cursor: "pointer" }}
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="94% in liquidity"
                          ></path>
                        </g>
                        <g className="recharts-layer recharts-pie-sector">
                          <path
                            name="not staked"
                            cx="105"
                            cy="105"
                            fill="#5c0af5"
                            stroke="#5c0af5"
                            color="#5c0af5"
                            strokeWidth="1"
                            className="recharts-sector"
                            d="M 73.27943357547562,31.557466916592972
    A 80,80,0,
    0,1,
    102.20804026379994,25.048733838472344
  L 102.45233674071744,32.044469627606006
            A 73,73,0,
            0,0,
            76.0549831376215,37.98368856139108 Z"
                            style={{ filter: "none", cursor: "pointer" }}
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="6% not staked"
                          ></path>
                        </g>
                        <g className="recharts-layer recharts-pie-sector"></g>
                      </g>
                      <text
                        x="50%"
                        y="50%"
                        fill="white"
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        Distribution
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div
                className="card no-shadow"
                style={{ border: "1px solid gray" }}
              >
                <div className="row g-0">
                  <div className="col-md-8">
                    <div
                      className="card-header"
                      style={{
                        borderBottom: "1px solid gray",
                        padding: "1rem",
                      }}
                    >
                      <ul
                        className="navbar-nav"
                        style={{ cursor: "pointer" }}
                        data-bs-theme="dark"
                      >
                        <li className="nav-item dropdown">
                          <span
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <img src={Icon8} alt="zlp" width={36} height={36} />
                            &thinsp; $ZLP
                          </span>
                          <ul className="dropdown-menu romi-bg-dark">
                            <li>
                              <a className="dropdown-item" href="#!">
                                <img src={DropIcon1} alt="drop_icon_1" />
                                &thinsp; Open in Coingecko
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <img src={DropIcon2} alt="drop_icon_2" />
                                &thinsp; Open in Explorer
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="card-body"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div className="row1">
                        <p className="card-text">Price</p>
                        <p className="card-text">$1.150</p>
                      </div>
                      <div className="row1">
                        <p className="card-text">Supply</p>
                        <p className="card-text ">$29 $ZLP</p>
                      </div>
                      <div className="row1">
                        <p className="card-text">Total Staked</p>
                        <p className="card-text">$34</p>
                      </div>
                      <div className="row1">
                        <p className="card-text">Market Cap</p>
                        <p className="card-text ">$34</p>
                      </div>
                      <div className="row1">
                        <p className="card-text">Stablecoin Percentage</p>
                        <p className="card-text ">49.50%</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <svg
                      cx="50%"
                      cy="50%"
                      className="recharts-surface"
                      width="210"
                      height="210"
                      viewBox="0 0 210 210"
                      version="1.1"
                    >
                      <defs>
                        <clipPath id="recharts3-clip">
                          <rect x="5" y="5" height="200" width="200"></rect>
                        </clipPath>
                      </defs>
                      <g className="recharts-layer recharts-pie">
                        <g className="recharts-layer recharts-pie-sector">
                          <path
                            name="ETH"
                            cx="105"
                            cy="105"
                            fill="#6062a6"
                            stroke="#6062a6"
                            strokeWidth="1"
                            className="recharts-sector"
                            d="M 105,25
    A 80,80,0,
    0,1,
    105.33178441162497,184.9993119914428
  L 105.30275327560778,177.99937219219154
            A 73,73,0,
            0,0,
            105,32 Z"
                            style={{ filter: "none", cursor: "pointer" }}
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="50.49% ETH"
                          ></path>
                        </g>
                        <g className="recharts-layer recharts-pie-sector">
                          <path
                            name="USDC"
                            cx="105"
                            cy="105"
                            fill="#2775CA"
                            stroke="#2775CA"
                            strokeWidth="1"
                            className="recharts-sector"
                            d="M 102.5396465724782,184.96215768106612
    A 80,80,0,
    0,1,
    102.20804026379994,25.048733838472344
  L 102.45233674071744,32.044469627606006
            A 73,73,0,
            0,0,
            102.75492749738636,177.96546888397285 Z"
                            style={{ filter: "none", cursor: "pointer" }}
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="49.5% USDC"
                          ></path>
                        </g>
                        <g className="recharts-layer recharts-pie-sector"></g>
                        <g className="recharts-layer recharts-pie-sector"></g>
                      </g>
                      <text
                        x="50%"
                        y="50%"
                        fill="white"
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        $ZLP Pool
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-title-section default-container">
          <div className="row" style={{ width: "100%" }}>
            <div className="col-sm-12 mb-3 mb-sm-0">
              <div
                className="card no-shadow"
                style={{ border: "1px solid gray" }}
              >
                <div
                  className="card-header"
                  style={{ border: "1px solid gray", padding: "1rem" }}
                >
                  <h4 className="card-title">
                    $ZLP Index Composition &thinsp;{" "}
                    <img src={Icon9} alt="icon" />
                  </h4>
                </div>
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row">
                    <div
                      className="col text-left card-text"
                      style={{ color: "gray" }}
                    >
                      TOKEN
                    </div>
                    <div
                      className="col text-center card-text"
                      style={{ color: "gray" }}
                    >
                      PRICE
                    </div>
                    <div
                      className="col text-center card-text"
                      style={{ color: "gray" }}
                    >
                      POOL
                    </div>
                    <div
                      className="col text-center card-text"
                      style={{ color: "gray" }}
                    >
                      WEIGHT
                    </div>
                    <div
                      className="col text-center card-text"
                      style={{ color: "gray" }}
                    >
                      UTILIZATION
                    </div>
                  </div>
                  <div className="row1">
                    <div className="col text-left card-text">
                      <ul
                        className="navbar-nav"
                        style={{ cursor: "pointer" }}
                        data-bs-theme="dark"
                      >
                        <li className="nav-item dropdown">
                          <span
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <img
                              src={Ethereum}
                              alt="ethereum"
                              width={36}
                              height={36}
                            />
                            &thinsp; Ethereum
                          </span>
                          <ul className="dropdown-menu romi-bg-dark">
                            <li>
                              <a className="dropdown-item" href="#!">
                                <img src={DropIcon1} alt="drop_icon_1" />
                                &thinsp; Open in Coingecko
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <img src={DropIcon2} alt="drop_icon_2" />
                                &thinsp; Open in Explorer
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="col text-center card-text">$1,818.58</div>
                    <div
                      className="col text-center card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Pool Amount:
                      0 ETH
                      Target Min Amount:
                      0 ETH
                      Max ETH Capacity:
                      $300,000"
                    >
                      $19
                    </div>
                    <div
                      className="col text-center card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Current Weight:
                    50.49%
                    Target Weight:
                    25.00%
                    
                    ETH is above its target weight.
                    
                    Get lower fees to swap tokens for ETH.
                    
                    More Info"
                    >
                      50.49% / 25.00%
                    </div>
                    <div className="col text-center card-text">0.00%</div>
                  </div>
                  <div className="row">
                    <div className="col text-left card-text">
                      <ul
                        className="navbar-nav"
                        style={{ cursor: "pointer" }}
                        data-bs-theme="dark"
                      >
                        <li className="nav-item dropdown">
                          <span
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <img
                              src={Bitcoin}
                              alt="w_bitcoint"
                              width={36}
                              height={36}
                            />
                            &thinsp; Wrapped Bitcoin
                          </span>
                          <ul className="dropdown-menu romi-bg-dark">
                            <li>
                              <a className="dropdown-item" href="#!">
                                <img src={DropIcon1} alt="drop_icon_1" />
                                &thinsp; Open in Coingecko
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <img src={DropIcon2} alt="drop_icon_2" />
                                &thinsp; Open in Explorer
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="col text-center card-text">$34,618.91</div>
                    <div
                      className="col text-center card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Pool Amount:
                      0 WBTC
                      Target Min Amount:
                      0 WBTC
                      Max WBTC Capacity:
                      $300,000"
                    >
                      $0
                    </div>
                    <div
                      className="col text-center card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Current Weight:
                      0.00%
                      Target Weight:
                      25.00%
                      
                      WBTC is below its target weight.
                      
                      Get lower fees to buy $ZLP with WBTC,  and to swap WBTC for other tokens.
                      
                      More Info"
                    >
                      0.00% / 25.00%
                    </div>
                    <div className="col text-center card-text">0.00%</div>
                  </div>
                  <div className="row">
                    <div className="col text-left card-text">
                      <ul
                        className="navbar-nav"
                        style={{ cursor: "pointer" }}
                        data-bs-theme="dark"
                      >
                        <li className="nav-item dropdown">
                          <span
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <img
                              src={Apecoin}
                              alt="apecoint"
                              width={36}
                              height={36}
                            />
                            &thinsp; ApeCoin
                          </span>
                          <ul className="dropdown-menu romi-bg-dark">
                            <li>
                              <a className="dropdown-item" href="#!">
                                <img src={DropIcon1} alt="drop_icon_1" />
                                &thinsp; Open in Coingecko
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <img src={DropIcon2} alt="drop_icon_2" />
                                &thinsp; Open in Explorer
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="col text-center card-text">$1.37</div>
                    <div
                      className="col text-center card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Pool Amount:
                      0 APE
                      Target Min Amount:
                      0 APE
                      Max APE Capacity:
                      $300,000"
                    >
                      $0
                    </div>
                    <div
                      className="col text-center card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Current Weight:
                      0.00%
                      Target Weight:
                      25.00%
                      
                      APE is below its target weight.
                      
                      Get lower fees to buy $ZLP with APE,  and to swap APE for other tokens.
                      
                      More Info"
                    >
                      0.00% / 25.00%
                    </div>
                    <div className="col text-center card-text">0.00%</div>
                  </div>
                  <div className="row">
                    <div className="col text-left card-text">
                      <ul
                        className="navbar-nav"
                        style={{ cursor: "pointer" }}
                        data-bs-theme="dark"
                      >
                        <li className="nav-item dropdown">
                          <span
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <img
                              src={Usdcoin}
                              alt="usdcoin"
                              width={36}
                              height={36}
                            />
                            &thinsp; USD Coin
                          </span>
                          <ul className="dropdown-menu romi-bg-dark">
                            <li>
                              <a className="dropdown-item" href="#!">
                                <img src={DropIcon1} alt="drop_icon_1" />
                                &thinsp; Open in Coingecko
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#!">
                                <img src={DropIcon2} alt="drop_icon_2" />
                                &thinsp; Open in Explorer
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="col text-center card-text">$1.00</div>
                    <div
                      className="col text-center card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Pool Amount:
                      14 USDC
                      Target Min Amount:
                      0 USDC
                      Max USDC Capacity:
                      $300,000"
                    >
                      $14
                    </div>
                    <div
                      className="col text-center card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Current Weight:
                      49.50%
                      Target Weight:
                      25.00%
                      
                      USDC is above its target weight.
                      
                      Get lower fees to swap tokens for USDC.
                      
                      More Info"
                    >
                      49.50% / 25.00%
                    </div>
                    <div className="col text-center card-text">0.00%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
