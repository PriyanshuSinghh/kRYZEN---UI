import React from "react";

export default function Home() {
  return (
    
    <div className="container">
       <div className="page">
        <header className="navbar navbar-expand-md d-print-none">
          <div className="container-xl">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-menu"
              aria-controls="navbar-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
              <a href=".">
                <img
                  src="https://app.kryzen.com/packs/media/images/kryzen-logo2-3500bcbbdeb667df12ee3d574941ce09.png"
                  width="110"
                  height="32"
                  alt="Kryzen Biotech"
                  className="navbar-brand-image"
                />
              </a>
            </h1>
            <div className="navbar-nav flex-row order-md-last">
              <div className="d-none d-md-flex">
                <a
                  href="?theme=light"
                  className="nav-link px-0 hide-theme-light"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  aria-label="Enable light mode"
                  data-bs-original-title="Enable light mode"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                  </svg>
                </a>
                <div className="nav-item dropdown d-none d-md-flex me-3">
                  <a
                    href="/"
                    className="nav-link px-0"
                    data-bs-toggle="dropdown"
                    tabindex="-1"
                    aria-label="Show notifications"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                    </svg>
                    <span className="badge bg-red"></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Last updates</h3>
                      </div>
                      <div className="list-group list-group-flush list-group-hoverable">
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="status-dot status-dot-animated bg-red d-block"></span>
                            </div>
                            <div className="col text-truncate">
                              <a href="/" className="text-body d-block">
                                Example 1
                              </a>
                              <div className="d-block text-muted text-truncate mt-n1">
                                Change deprecated html tags to text decoration
                                classNamees (#29604)
                              </div>
                            </div>
                            <div className="col-auto">
                              <a href="/" className="list-group-item-actions">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon text-muted"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="status-dot d-block"></span>
                            </div>
                            <div className="col text-truncate">
                              <a href="/" className="text-body d-block">
                                Example 2
                              </a>
                              <div className="d-block text-muted text-truncate mt-n1">
                                justify-content:between ?
                                justify-content:space-between (#29734)
                              </div>
                            </div>
                            <div className="col-auto">
                              <a
                                href="/"
                                className="list-group-item-actions show"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon text-yellow"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="status-dot d-block"></span>
                            </div>
                            <div className="col text-truncate">
                              <a href="/" className="text-body d-block">
                                Example 3
                              </a>
                              <div className="d-block text-muted text-truncate mt-n1">
                                Update change-version.js (#29736)
                              </div>
                            </div>
                            <div className="col-auto">
                              <a href="/" className="list-group-item-actions">
                                {/*<!-- Download SVG icon from http://tabler-icons.io/i/star -->*/}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon text-muted"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="status-dot status-dot-animated bg-green d-block"></span>
                            </div>
                            <div className="col text-truncate">
                              <a href="/" className="text-body d-block">
                                Example 4
                              </a>
                              <div className="d-block text-muted text-truncate mt-n1">
                                Regenerate package-lock.json (#29730)
                              </div>
                            </div>
                            <div className="col-auto">
                              <a href="/" className="list-group-item-actions">
                                {/*<!-- Download SVG icon from http://tabler-icons.io/i/star -->*/}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon text-muted"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="/"
                  className="nav-link d-flex lh-1 text-reset p-0"
                  data-bs-toggle="dropdown"
                  aria-label="Open user menu"
                >
                  <span
                    className="avatar avatar-sm"
                    allign="background-image: url(./static/avatars/000m.jpg)"
                  ></span>
                  <div className="d-none d-xl-block ps-2">
                  <div>Test Account</div>
                  <div className="mt-1 small text-muted">
                    Test Account's team
                  </div>
                </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <a href="/" className="dropdown-item">
                    Status
                  </a>
                  <a href="./profile.html" className="dropdown-item">
                    Profile
                  </a>
                  <a href="/" className="dropdown-item">
                    Feedback
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="./settings.html" className="dropdown-item">
                    Settings
                  </a>
                  <a href="./sign-in.html" className="dropdown-item">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <header className="navbar-expand-md">
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="navbar">
              <div className="container-xl">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="/home">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🏠 Home </span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="./Pricewatcher">
                      <span className="nav-link-link d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🗓️ Pricewatcher </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./form-elements.html">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🙋🏽‍♂️ Buyer Connect </span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="./">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🌱 Nurseries </span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="./">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🥬 Farms </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./icons.html">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🎯 Market Prices </span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="./">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🧑🏽‍🌾 Workforce </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="page-wrapper">
          <div className="page-header d-print-none">
            <div className="container-xl">
              <div className="row g-2 align-items-center">
                <div className="col-auto ms-auto d-print-none">
                  <div className="btn-list">
                    <a
                      href="/"
                      className="btn btn-primary d-sm-none btn-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-report"
                      aria-label="Create new report"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/p/a">Accounts</a></li>
          <li className="breadcrumb-item">Test Account's team</li>
        </ol>
      </nav>

      <div className="row">
        <div className="col-6 col-sm-4 col-lg-6">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="h1 m-0" style={{ color: '#23bf6a' }}>₹0.00</div>
              <div className="text-muted">30 Days Revenue</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-6">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="h1 m-0">0kg</div>
              <div className="text-muted">30 Days Output</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6 col-sm-4 col-lg-3">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="h1 m-0">1</div>
              <div className="text-muted">Nurseries</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="h1 m-0">0</div>
              <div className="text-muted">Active Batches</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="h1 m-0"></div>
              <div className="text-muted">Current Revenue</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-3">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="h1 m-0"></div>
              <div className="text-muted">Current Output</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cards">
        <div className="col-12">
          <div className="card ">
            <div className="card-header">
              <h3 className="card-title">Test Account's team</h3>
              <div className="card-options">
                <div className="btn-list">
                  <a className="btn btn-primary btn-sm" href="/p/a/1509/edit">Edit</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <dl className="row">
                <dt className="col-sm-4">Name</dt>
                <dd className="col-sm-8">Test Account's team</dd>
                <dt className="col-sm-4">Farm count</dt>
                <dd className="col-sm-8">0</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cards">
        <div className="col-12">
          <div className="card ">
            <div className="card-header">
              <h3 className="card-title">Nurseries</h3>
              <div className="card-options">
                <div className="btn-list">
                  <a className="btn btn-primary btn-sm" href="/p/a/1509/nurseries/new">New</a>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover table-outline table-vcenter text-nowrap card-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Active Batches</th>
                    <th>Number of Plants</th>
                    <th>Germinated Plants</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="/p/a/1509/nurseries/2403">shubham</a>
                    </td>
                    <td>
                      0 batches
                    </td>
                    <td>
                      0
                    </td>
                    <td>
                      0
                    </td>
                    <td className="text-right">
                      <a className="btn btn-primary btn-sm" href="/p/a/1509/nurseries/2403">View</a>
                      <a className="btn btn-danger btn-sm" data-confirm="Delete shubham?" rel="nofollow" data-method="delete" href="/p/a/1509/nurseries/2403"><i className="fe fe-trash"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-right">
              <div className="row">
                <div className="col-12">
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <a className="btn btn-primary btn-sm" href="/p/a/1509/nurseries">View all</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cards">
        <div className="col-12">
          <div className="card ">
            <div className="card-header">
              <h3 className="card-title">Farms</h3>
              <div className="card-options">
                <div className="btn-list">
                  <a className="btn btn-primary btn-sm" href="/p/a/1509/farms/new">New</a>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover table-outline table-vcenter text-nowrap card-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Aream (sqft)</th>
                    <th>Structure</th>
                    <th>Last Output</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-right">
              <div className="row">
                <div className="col-12">
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <a className="btn btn-primary btn-sm" href="/p/a/1509/farms">View all</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
            <div className="container">
              <div className="row align-items-center flex-row-reverse">
                <div className="col col-auto ml-auto">
                  <div className="row align-items-center"></div>
                </div>
                <div className="col col-12 col-lg-auto mt-3 mt-lg-0 text-center">
                  <div className="text-center">
                    Copyright © 2024 Kryzen Biotech. All rights reserved.
                    <br />
                    Made in India with{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="heart"
                      className="svg-inline--fa fa-heart fa-w-16 icon text-danger"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                      ></path>
                    </svg>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer>
    </div>

    
  );
};

