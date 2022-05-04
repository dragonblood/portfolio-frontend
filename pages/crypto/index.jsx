import React from "react";
import Link from "next/link";

import { SideNav } from "../../components/side-nav";

import styles from "../../styles/Crypto.module.css";

export default function Crypto() {
  return (
    <div className="">
      <SideNav></SideNav>
      <div className="page-content container ml-20">
        <div className="grid grid-cols-3 gap-4">          
          <div className="row">
            <div className="bg-indigo-600 col-span-2">
                  <div className="crypto-report-history d-flex justify-content-end">
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Hour</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Day</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Week</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Month</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Order Book</a>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <div className="col-md-3 basis-1/3">
                      <div className="media">
                        <img
                          src="../assets/images/coins/btc.png"
                          className="mr-3 thumb-sm align-self-center rounded-circle"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <div className="coin-bal">
                            <h4 className="m-0">$7289.45</h4>
                            <p className="text-muted mb-0">
                              Bitcoin
                              <span className="text-muted font-12">(BTC)</span>
                              <span className="text-success"
                                >2.5% <i className="mdi mdi-arrow-up"></i
                              ></span>
                            </p>
                          </div>
                        </div>
                        
                      </div>
                      
                    </div>
                    
                    <div className="col-md-3">
                      <p className="mb-0 p-2 bg-soft-dark rounded">
                        <b>Last: </b>0.25436584
                      </p>
                    </div>
                    
                    <div className="col-md-3">
                      <p className="mb-0 p-2 bg-soft-success rounded">
                        <b>24High: </b>0.25436584
                      </p>
                    </div>
                    
                    <div className="col-md-3">
                      <p className="mb-0 p-2 bg-soft-danger rounded">
                        <b>24Low: </b>0.25436584
                      </p>
                    </div>
                    
                  </div>
                  
                  <div id="crypto_dash_main" className="apex-charts"></div>
 
            </div>
            

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="wallet-bal-usd">
                        <h4 className="wallet-title m-0">Your Total Balence</h4>
                        <span className="text-muted font-12">30 june 2019</span>
                        <h3 className="text-center">$85692.00</h3>
                      </div>
                      <p className="font-15 text-success text-center mb-4">
                        + $455.00
                        <span className="font-12 text-muted"
                          >(6.2%
                          <i className="mdi mdi-trending-up text-success"></i
                          >)</span
                        >
                      </p>
                      <div className="text-right">
                        <button className="btn btn-success btn-sm px-3">
                          Receive
                        </button>
                        <button className="btn btn-danger btn-sm px-3">Send</button>
                        <button className="btn btn-primary btn-sm px-3">
                          + Invest
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card-body pt-0">
                  <ul className="list-group wallet-bal-crypto">
                    <li
                      className="list-group-item align-items-center d-flex justify-content-between"
                    >
                      <div className="media">
                        <img
                          src="../assets/images/coins/btc.png"
                          className="mr-3 thumb-sm align-self-center rounded-circle"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <div className="coin-bal">
                            <h3 className="m-0">6.18424000</h3>
                            <p className="text-muted mb-0">$ 33277.3660</p>
                          </div>
                        </div>
                        
                      </div>
                      <span className="badge badge-soft-purple">Bitcoin</span>
                    </li>
                    <li
                      className="list-group-item align-items-center d-flex justify-content-between"
                    >
                      <div className="media">
                        <img
                          src="../assets/images/coins/mon.png"
                          className="mr-3 thumb-sm align-self-center rounded-circle"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <div className="coin-bal">
                            <h3 className="m-0">60.1842</h3>
                            <p className="text-muted mb-0">$ 18564.3660</p>
                          </div>
                        </div>
                        
                      </div>
                      <span className="badge badge-soft-info">Monero</span>
                    </li>
                    <li
                      className="list-group-item align-items-center d-flex justify-content-between"
                    >
                      <div className="media">
                        <img
                          src="../assets/images/coins/eth.png"
                          className="mr-3 thumb-sm align-self-center rounded-circle"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <div className="coin-bal">
                            <h3 className="m-0">32.65849212</h3>
                            <p className="text-muted mb-0">$ 33277.3660</p>
                          </div>
                        </div>
                        
                      </div>
                      <span className="badge badge-soft-success">Ethereum</span>
                    </li>
                  </ul>
                </div>
                
              </div>
              
            </div>
            
          </div>
          

          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <a href="" className="float-right text-info">View All</a>
                  <h4 className="header-title mt-0 mb-3">Transaction History</h4>
                  <ul className="list-unsyled m-0 pl-0 transaction-history">
                    <li
                      className="align-items-center d-flex justify-content-between"
                    >
                      <div className="media">
                        <div className="transaction-icon">
                          <i className="mdi mdi-arrow-top-right-thick"></i>
                        </div>
                        <div className="media-body align-self-center">
                          <div className="transaction-data">
                            <h3 className="m-0">Send BTC</h3>
                            <p className="text-muted mb-0">6 June 2019 10:25 AM</p>
                          </div>
                        </div>
                        
                      </div>
                      <span className="text-danger">0.000245684 BTC</span>
                    </li>
                    <li
                      className="align-items-center d-flex justify-content-between"
                    >
                      <div className="media">
                        <div className="transaction-icon">
                          <i className="mdi mdi-arrow-down-thick"></i>
                        </div>
                        <div className="media-body align-self-center">
                          <div className="transaction-data">
                            <h3 className="m-0">Receive BTC</h3>
                            <p className="text-muted mb-0">4 June 2019 7:05 PM</p>
                          </div>
                        </div>
                        
                      </div>
                      <span className="text-success">0.012458632 BTC</span>
                    </li>
                    <li
                      className="align-items-center d-flex justify-content-between"
                    >
                      <div className="media">
                        <div className="transaction-icon">
                          <i className="mdi mdi-arrow-top-right-thick"></i>
                        </div>
                        <div className="media-body align-self-center">
                          <div className="transaction-data">
                            <h3 className="m-0">Send BTC</h3>
                            <p className="text-muted mb-0">1 June 2019 11:30 PM</p>
                          </div>
                        </div>
                        
                      </div>
                      <span className="text-danger">0.000245684 BTC</span>
                    </li>
                    <li
                      className="align-items-center d-flex justify-content-between"
                    >
                      <div className="media">
                        <div className="transaction-icon">
                          <i className="mdi mdi-arrow-top-right-thick"></i>
                        </div>
                        <div className="media-body align-self-center">
                          <div className="transaction-data">
                            <h3 className="m-0">Send BTC</h3>
                            <p className="text-muted mb-0">28 May 2019 08:45 AM</p>
                          </div>
                        </div>
                        
                      </div>
                      <span className="text-danger">0.000245684 BTC</span>
                    </li>
                    <li
                      className="align-items-center d-flex justify-content-between"
                    >
                      <div className="media">
                        <div className="transaction-icon">
                          <i className="mdi mdi-arrow-down-thick"></i>
                        </div>
                        <div className="media-body align-self-center">
                          <div className="transaction-data">
                            <h3 className="m-0">Receive BTC</h3>
                            <p className="text-muted mb-0">25 May 2019 01:25 PM</p>
                          </div>
                        </div>
                        
                      </div>
                      <span className="text-success">0.012458632 BTC</span>
                    </li>
                  </ul>
                </div>
                
              </div>
              
            </div>
            
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="vol-btc float-md-right float-sm-none">
                    BTC 7324.88<small className="text-muted">(USD)</small>
                  </h3>
                  <h4 className="header-title mt-0 mb-3">BTC Volume by Currency</h4>

                  <div
                    id="animating-donut"
                    className="ct-chart ct-golden-section mt-5 mb-4 btc-volume-chart"
                  ></div>

                  <ul
                    className="list-unstyled list-inline text-center d-flex justify-content-around mb-0"
                  >
                    <li className="list-inline-item mt-2">
                      <h5 className="mb-1 mt-1 font-16">1.248.88</h5>
                      <span className="font-14 text-info"
                        ><i
                          className="mdi mdi-checkbox-blank-circle mr-2 text-purple"
                        ></i
                        >JPY
                      </span>
                      <span className="text-danger"
                        >20.1% <i className="mdi mdi-trending-down"></i
                      ></span>
                    </li>
                    <li className="list-inline-item mt-2">
                      <h5 className="mb-1 mt-1 font-16">14,351.25</h5>
                      <span className="text-info font-14"
                        ><i
                          className="mdi mdi-checkbox-blank-circle mr-2 text-secondary"
                        ></i
                        >USD</span
                      >
                      <span className="text-success"
                        >22.9% <i className="mdi mdi-trending-up"></i
                      ></span>
                    </li>
                    <li className="list-inline-item mt-2">
                      <h5 className="mb-1 mt-1 font-16">5,547.21</h5>
                      <span className="text-info font-14"
                        ><i
                          className="mdi mdi-checkbox-blank-circle mr-2 text-success"
                        ></i
                        >KRW</span
                      >
                      <span className="text-success"
                        >14.2% <i className="mdi mdi-trending-up"></i
                      ></span>
                    </li>
                    <li className="list-inline-item mt-2">
                      <h5 className="mb-1 mt-1 font-16">3,477.23</h5>
                      <span className="text-info font-14"
                        ><i
                          className="mdi mdi-checkbox-blank-circle mr-2 text-warning"
                        ></i
                        >EUR</span
                      >
                      <span className="text-success"
                        >08.1% <i className="mdi mdi-trending-up"></i
                      ></span>
                    </li>
                  </ul>
                </div>
                
              </div>
              
            </div>
            
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="header-title mt-0 mb-3">Market cap</h4>
                  <div className="table-responsive market-cap-table">
                    <table className="table mb-0">
                      <thead className="thead-light">
                        <tr>
                          <th>Name</th>
                          <th className="text-right">Market cap</th>
                          <th className="text-right">Volume(24h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="media">
                              <img
                                src="../assets/images/coins/btc.png"
                                className="mr-3 thumb-sm align-self-center rounded-circle"
                                alt="..."
                              />
                              <div className="media-body align-self-center">
                                <div className="coin-bal">
                                  <h5 className="m-0">$7289.45</h5>
                                  <p className="text-muted mb-0">
                                    Bitcoin
                                    <span className="text-muted font-12"
                                      >(BTC)</span
                                    >
                                    <span className="text-success"
                                      >2.5% <i className="mdi mdi-arrow-up"></i
                                    ></span>
                                  </p>
                                </div>
                              </div>
                              
                            </div>
                            
                          </td>
                          <td className="text-right">$129,820,932</td>
                          <td className="text-right">$25,111,773</td>
                        </tr>
                        
                        <tr>
                          <td>
                            <div className="media">
                              <img
                                src="../assets/images/coins/eth.png"
                                className="mr-3 thumb-sm align-self-center rounded-circle"
                                alt="..."
                              />
                              <div className="media-body align-self-center">
                                <div className="coin-bal">
                                  <h5 className="m-0">$234.45</h5>
                                  <p className="text-muted mb-0">
                                    Ethereum
                                    <span className="text-muted font-12"
                                      >(ETH)</span
                                    >
                                    <span className="text-success"
                                      >0.45% <i className="mdi mdi-arrow-up"></i
                                    ></span>
                                  </p>
                                </div>
                              </div>
                              
                            </div>
                            
                          </td>
                          <td className="text-right">$24,909,743</td>
                          <td className="text-right">$12,856,403</td>
                        </tr>
                        
                        <tr>
                          <td>
                            <div className="media">
                              <img
                                src="../assets/images/coins/lite.png"
                                className="mr-3 thumb-sm align-self-center rounded-circle"
                                alt="..."
                              />
                              <div className="media-body align-self-center">
                                <div className="coin-bal">
                                  <h5 className="m-0">$7289.45</h5>
                                  <p className="text-muted mb-0">
                                    Litecoin
                                    <span className="text-muted font-12"
                                      >(LTC)</span
                                    >
                                    <span className="text-success"
                                      >3.51% <i className="mdi mdi-arrow-up"></i
                                    ></span>
                                  </p>
                                </div>
                              </div>
                              
                            </div>
                            
                          </td>
                          <td className="text-right">$5,399,795,666</td>
                          <td className="text-right">$4,394,304,674</td>
                        </tr>
                        
                        <tr>
                          <td>
                            <div className="media">
                              <img
                                src="../assets/images/coins/mon.png"
                                className="mr-3 thumb-sm align-self-center rounded-circle"
                                alt="..."
                              />
                              <div className="media-body align-self-center">
                                <div className="coin-bal">
                                  <h5 className="m-0">$7289.45</h5>
                                  <p className="text-muted mb-0">
                                    Monero
                                    <span className="text-muted font-12"
                                      >(XMR)</span
                                    >
                                    <span className="text-success"
                                      >0.95% <i className="mdi mdi-arrow-up"></i
                                    ></span>
                                  </p>
                                </div>
                              </div>
                              
                            </div>
                            
                          </td>
                          <td className="text-right">$1,375,808,437</td>
                          <td className="text-right">$58,791,421</td>
                        </tr>
                        
                        <tr>
                          <td>
                            <div className="media">
                              <img
                                src="../assets/images/coins/dash.png"
                                className="mr-3 thumb-sm align-self-center rounded-circle"
                                alt="..."
                              />
                              <div className="media-body align-self-center">
                                <div className="coin-bal">
                                  <h5 className="m-0">$7289.45</h5>
                                  <p className="text-muted mb-0">
                                    Dashcoin
                                    <span className="text-muted font-12"
                                      >(DASH)</span
                                    >
                                    <span className="text-success"
                                      >4.3% <i className="mdi mdi-arrow-up"></i
                                    ></span>
                                  </p>
                                </div>
                              </div>
                              
                            </div>
                            
                          </td>
                          <td className="text-right">$1,205,400,168</td>
                          <td className="text-right">$368,553,228</td>
                        </tr>
                        
                      </tbody>
                    </table>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
          </div>
          

          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  
                  <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item waves-effect waves-light">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#buy_coins"
                        role="tab"
                        aria-selected="true"
                        >Buy</a
                      >
                    </li>
                    <li className="nav-item waves-effect waves-light">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#sell_coins"
                        role="tab"
                        aria-selected="false"
                        >Sell</a
                      >
                    </li>
                  </ul>

                  
                  <div className="tab-content">
                    <div className="tab-pane active" id="buy_coins" role="tabpanel">
                      <form className="form-horizontal">
                        <div className="form-group mb-0">
                          <div className="input-group mt-3">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text bg-light"
                                id="basic-addon1"
                                >Amount</span
                              >
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="123"
                              aria-label="123"
                              aria-describedby="basic-addon1"
                            />
                            <div className="input-group-append">
                              <span
                                className="input-group-text bg-light"
                                id="basic-addon2"
                                >BTC</span
                              >
                            </div>
                          </div>
                          <div className="input-group mt-3">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Price <i className="mdi mdi-chevron-down ml-1"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#"
                                  >Last Trade Price</a
                                >
                                <a className="dropdown-item" href="#"
                                  >Last Buy Price</a
                                >
                                <a className="dropdown-item" href="#"
                                  >Last Sell Price</a
                                >
                              </div>
                            </div>
                            <input
                              type="email"
                              id="example-input2-group3"
                              name="example-input2-group3"
                              className="form-control"
                              placeholder="$ 24,00"
                            />
                            <div className="input-group-append">
                              <span
                                className="input-group-text bg-light"
                                id="basic-addon4"
                                >$ Dollor</span
                              >
                            </div>
                          </div>
                          <div className="input-group mt-3">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text bg-light"
                                id="basic-addon5"
                                >Total</span
                              >
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="123"
                              aria-label="123"
                              aria-describedby="basic-addon1"
                            />
                            <div className="input-group-append">
                              <span
                                className="input-group-text bg-light"
                                id="basic-addon6"
                                >$ Dollor</span
                              >
                            </div>
                          </div>
                          <div className="mt-3 ml-auto">
                            <a href="#" className="btn btn-success btn-sm"
                              >Buy Coins</a
                            >
                          </div>
                        </div>
                        
                      </form>
                      
                    </div>
                    <div className="tab-pane" id="sell_coins" role="tabpanel">
                      <form className="form-horizontal">
                        <div className="form-group mb-0">
                          <div className="input-group mt-3">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text bg-light"
                                id="basic-addon7"
                                >Amount</span
                              >
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="123"
                              aria-label="123"
                              aria-describedby="basic-addon1"
                            />
                            <div className="input-group-append">
                              <span
                                className="input-group-text bg-light"
                                id="basic-addon8"
                                >BTC</span
                              >
                            </div>
                          </div>
                          <div className="input-group mt-3">
                            <div className="input-group-prepend">
                              <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Price <i className="mdi mdi-chevron-down ml-1"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#"
                                  >Last Trade Price</a
                                >
                                <a className="dropdown-item" href="#"
                                  >Last Buy Price</a
                                >
                                <a className="dropdown-item" href="#"
                                  >Last Sell Price</a
                                >
                              </div>
                            </div>
                            <input
                              type="email"
                              id="example-input2-group4"
                              name="example-input2-group4"
                              className="form-control"
                              placeholder="$ 24,00"
                            />
                            <div className="input-group-append">
                              <span
                                className="input-group-text bg-light"
                                id="basic-addon9"
                                >$ Dollor</span
                              >
                            </div>
                          </div>
                          <div className="input-group mt-3">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text bg-light"
                                id="basic-addon10"
                                >Total</span
                              >
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="123"
                              aria-label="123"
                              aria-describedby="basic-addon1"
                            />
                            <div className="input-group-append">
                              <span
                                className="input-group-text bg-light"
                                id="basic-addon11"
                                >$ Dollor</span
                              >
                            </div>
                          </div>
                          <div className="mt-3 ml-auto">
                            <a href="#" className="btn btn-danger btn-sm"
                              >Sell Coins</a
                            >
                          </div>
                        </div>
                        
                      </form>
                      
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
            

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="media">
                    <img
                      src="../assets/images/small/news-2.jpg"
                      height="90"
                      className="mr-3"
                      alt="..."
                    />
                    <div className="media-body align-self-center">
                      <div className="mb-2">
                        <span className="badge badge-purple px-3">Crypto</span>
                        <span className="ml-2 text-muted">26 mars 2019</span>
                      </div>
                      <a href="" className="font-16 d-block font-weight-normal"
                        >It is a long established fact that a reader will be
                        distracted of a page.
                      </a>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
              <div className="card">
                <div className="card-body">
                  <div className="media">
                    <img
                      src="../assets/images/small/news-3.jpg"
                      height="90"
                      className="mr-3"
                      alt="..."
                    />
                    <div className="media-body align-self-center">
                      <div className="mb-2">
                        <span className="badge badge-secondary px-3">Crypto</span>
                        <span className="ml-2 text-muted">26 mars 2019</span>
                      </div>
                      <a href="" className="font-16 d-block font-weight-normal"
                        >It is a long established fact that a reader will be
                        distracted of a page.
                      </a>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="mt-0 header-title mb-3">Currency Cacculater</h4>
                  <div className="calculator-block">
                    <div className="calculator-body">
                      <script src="https://www.cryptonator.com/ui/js/widget/calc_widget.js"></script>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <a href="" className="float-right text-info">View All</a>
                  <h4 className="header-title mt-0 mb-3">Timeline</h4>
                  <div className="slimscroll crypto-dash-activity">
                    <div className="activity">
                      <i
                        className="mdi mdi-checkbox-marked-circle-outline icon-success"
                      ></i>
                      <div className="time-item">
                        <div className="item-info">
                          <div
                            className="d-flex justify-content-between align-items-center"
                          >
                            <h6 className="m-0">Highest Account Value</h6>
                            <span className="text-muted">05 june 2019</span>
                          </div>
                          <p className="text-muted mt-3">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                            alteration.
                            <a href="#" className="text-info">[more info]</a>
                          </p>
                          <div>
                            <span className="badge badge-soft-secondary"
                              >Design</span
                            >
                            <span className="badge badge-soft-secondary">HTML</span>
                            <span className="badge badge-soft-secondary">Css</span>
                          </div>
                        </div>
                      </div>
                      <i className="mdi mdi-timer-off icon-pink"></i>
                      <div className="time-item">
                        <div className="item-info">
                          <div
                            className="d-flex justify-content-between align-items-center"
                          >
                            <h6 className="m-0">Monthly Report</h6>
                            <span className="text-muted">28 May 2019</span>
                          </div>
                          <p className="text-muted mt-3">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                            alteration.
                            <a href="#" className="text-info">[more info]</a>
                          </p>
                          <div>
                            <span className="badge badge-soft-secondary"
                              >Python</span
                            >
                            <span className="badge badge-soft-secondary"
                              >Django</span
                            >
                          </div>
                        </div>
                      </div>
                      <i className="mdi mdi-alert-decagram icon-purple"></i>
                      <div className="time-item">
                        <div className="item-info">
                          <div
                            className="d-flex justify-content-between align-items-center"
                          >
                            <h6 className="m-0">First Trade</h6>
                            <span className="text-muted">15 May 2019</span>
                          </div>
                          <p className="text-muted mt-3">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                            alteration.
                            <a href="#" className="text-info">[more info]</a>
                          </p>
                        </div>
                      </div>
                      <i className="mdi mdi-clipboard-alert icon-warning"></i>
                      <div className="time-item">
                        <div className="item-info">
                          <div
                            className="d-flex justify-content-between align-items-center"
                          >
                            <h6 className="m-0">Sign Up</h6>
                            <span className="text-muted">02 Jan 2019</span>
                          </div>
                          <p className="text-muted mt-3">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                            alteration.
                            <a href="#" className="text-info">[more info]</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <h4 className="mt-0 mb-3 header-title">
                    Historical Bitcoin Price and Volume
                  </h4>
                  <script
                    type="text/javascript"
                    src="https://widgets.cryptocompare.com/serve/v1/coin/histo_week?fsym=BTC&amp;tsym=USD&amp;app=www.cryptocompare.com"
                  ></script>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
