import React, { useEffect } from "react";

export default function Earn() {
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
          <h1 className="dashboard-title">Earn</h1>
          <p className="dashboard-desc">
            Stake $ZOMI and $ZLP to earn rewards.
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
                  <h4 className="card-title">$ZOMI</h4>
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
                      data-bs-title="Price on Avalanche:$..."
                    >
                      $0.00
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Wallet</p>
                    <p className="card-text ">... $ZOMI ($...)</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Staked</p>
                    <p className="card-text ">... $ZOMI ($...)</p>
                  </div>
                </div>
                <hr />
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row1">
                    <p className="card-text">APR</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Escrowed $ZOMI APR:...%ETH APR:...%APRs are updated weekly on Wednesday and will depend on the fees collected for the week."
                    >
                      ...%
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Rewards</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="ETH (WETH):
                    ... ($...)
                    Escrowed $ZOMI:
                    ... ($...)"
                    >
                      $...
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Multiplier Points APR</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Boost your rewards with Multiplier Points. More info."
                    >
                      100.00%
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Boost Percentage</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="You are earning ...% more ETH rewards using true Staked Multiplier Points.
                        Use the 'Compound' button to stake your Multiplier Points."
                    >
                      ...%
                    </p>
                  </div>
                </div>
                <hr />
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row1">
                    <p className="card-text">Total Staked</p>
                    <p className="card-text ">... $ZOMI ($...)</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Total Supply</p>
                    <p className="card-text ">10,000 $ZOMI ($10)</p>
                  </div>
                </div>
                <hr />
                <div className="card-footer">
                  <button type="button" className="btn btn-success btn-green">
                    Buy $ZOMI
                  </button>
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
                  <h4 className="card-title">Total Rewards</h4>
                </div>
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row1">
                    <p className="card-text">ETH (WETH)</p>
                    <p className="card-text">... ($...)</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">$ZOMI</p>
                    <p className="card-text">... ($...)</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Escrowed $ZOMI</p>
                    <p className="card-text">... ($...)</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Multiplier Points</p>
                    <p className="card-text">...</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Staked Multiplier Points</p>
                    <p className="card-text">...</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Total</p>
                    <p className="card-text">$...</p>
                  </div>
                </div>
                <hr />
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-success btn-green"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
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
                  <h4 className="card-title">$ZLP (Ethereum)</h4>
                </div>
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row1">
                    <p className="card-text">Price</p>
                    <p className="card-text">$...</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Wallet</p>
                    <p className="card-text ">... $ZLP ($...)</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Staked</p>
                    <p className="card-text ">... $ZLP ($...)</p>
                  </div>
                </div>
                <hr />
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row1">
                    <p className="card-text">APR</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Escrowed $ZOMI APR:...%ETH APR:...%APRs are updated weekly on Wednesday and will depend on the fees collected for the week."
                    >
                      ...%
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Rewards</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="ETH (WETH):
                    ... ($...)
                    Escrowed $ZOMI:
                    ... ($...)"
                    >
                      $...
                    </p>
                  </div>
                </div>
                <hr />
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row1">
                    <p className="card-text">Total Staked</p>
                    <p className="card-text ">... $ZLP ($...)</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Total Supply</p>
                    <p className="card-text ">... $ZLP ($...)</p>
                  </div>
                </div>
                <hr />
                <div className="card-footer">
                  <button type="button" className="btn btn-success btn-green">
                    Buy $ZLP
                  </button>
                  &emsp;
                  <button type="button" className="btn btn-success btn-green">
                    Sell $ZLP
                  </button>
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
                  <h4 className="card-title">Escrowed $ZOMI</h4>
                </div>
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row1">
                    <p className="card-text">Price</p>
                    <p className="card-text">$0.00</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Wallet</p>
                    <p className="card-text">... esZOMI ($...)</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Staked</p>
                    <p className="card-text">... esZOMI ($...)</p>
                  </div>
                </div>
                <hr />
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row1">
                    <p className="card-text">APR</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Escrowed $ZOMI APR:...%ETH APR:...%APRs are updated weekly on Wednesday and will depend on the fees collected for the week."
                    >
                      ...%
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Multiplier Points APR</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Boost your rewards with Multiplier Points. More info."
                    >
                      100.00%
                    </p>
                  </div>
                </div>
                <hr />
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row1">
                    <p className="card-text">Total Staked</p>
                    <p className="card-text ">... esZOMI ($...)</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Total Supply</p>
                    <p className="card-text ">1,023,379 esZOMI ($1,065)</p>
                  </div>
                </div>
                <hr />
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-success btn-green"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-title-section default-container">
          <h1 className="dashboard-title">Vest</h1>
          <p className="dashboard-desc">
            Convert esZOMI tokens to $ZOMI tokens.
            <br />
            Please read the vesting details before using the vaults.
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
                  <h4 className="card-title">$ZOMI Vault</h4>
                </div>
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row1">
                    <p className="card-text">Staked Tokens</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="$ZOMI:
                      ...
                      esZOMI:
                      ...
                      Multiplier Points:
                      ..."
                    >
                      ...
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Reserved for Vesting</p>
                    <p className="card-text ">0.00 / ...</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Vesting Status</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="0.0000 tokens have been converted to $ZOMI from the 0.0000 esZOMI deposited for vesting."
                    >
                      0.0000 / 0.0000
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Claimable</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="0.0000 $ZOMI tokens can be claimed, use the options under the Total Rewards section to claim them."
                    >
                      0.0000 $ZOMI
                    </p>
                  </div>
                </div>
                <hr />
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-success btn-green"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Connect Wallet
                  </button>
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
                  <h4 className="card-title">$ZLP Vault</h4>
                </div>
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="row1">
                    <p className="card-text">Staked Tokens</p>
                    <p className="card-text ">... $ZLP</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Reserved for Vesting</p>
                    <p className="card-text ">0.00 / ...</p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Vesting Status</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="0.0000 tokens have been converted to $ZOMI from the 0.0000 esZOMI deposited for vesting."
                    >
                      0.0000 / 0.0000
                    </p>
                  </div>
                  <div className="row1">
                    <p className="card-text">Claimable</p>
                    <p
                      className="card-text decorated"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="0.0000 $ZOMI tokens can be claimed, use the options under the Total Rewards section to claim them."
                    >
                      0.0000 $ZOMI
                    </p>
                  </div>
                </div>
                <hr />
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-success btn-green"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
