import React from "react";

export default function Pricewatcher2() {
  return (
    <div>
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
                    <a className="nav-link" href="/Home">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
                      <span className="nav-link-title"> 🏠 Home </span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="/Pricewatcher">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"></span>
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
      <div className="table">
        
        
        <div className="table-wrapper">
               

          <div className="container">
            <div className="table-responsive">
              <h1>Price Watchlist: India</h1>
              <p>Find price of different commodities.</p>
              <table className="table table-vcenter">
                <thead>
                  <tr>
                    <th></th>
                    <th>PRODUCT</th>
                    <th>WHOLESALE PRICE</th>
                    <th>RETAIL PRICE</th>
                    <th>WEEKS HIGH</th>
                    <th>WEEKS LOW</th>
                    <th>TREND</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.vz7Q3c036eUwFS_RlMinxAHaFi&pid=Api&rs=1&c=1&qlt=95&w=137&h=102"
                        alt="Italian Basil"
                        height={40}
                        width={75}
                      />
                    </td>

                    <td >Green Lettuce</td>
                    <td>₹33.80</td>
                    <td>₹52.00</td>
                    <td>₹59.00</td>
                    <td>₹47.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.vHzxX5O6u5eWCjq4TAtnNgHaE7&pid=Api&rs=1&c=1&qlt=95&w=159&h=106"
                        alt="Swiss Chard"
                        height={40}
                        width={75}
                      />
                    </td>

                    <td > Green Chilli</td>
                    <td>₹31.20</td>
                    <td>₹48.00</td>
                    <td>₹59.00</td>
                    <td>₹48.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1500,c_fill,g_auto/https://storage.googleapis.com/gen-atmedia/3/2012/03/d852987f86aeae8b65926f9e7a260c28285ea744.jpeg"
                        alt="broccoli"
                        height={40}
                        width={75}
                      />
                    </td>

                   <td>Chilli Picador</td>
                    <td>₹29.90</td>
                    <td>₹46.00</td>
                    <td>₹59.00</td>
                    <td>₹46.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.jp1X5k8UDqgX_D5C89G1iQHaE8&pid=Api&P=0&h=180"
                        alt="Kale"
                        height={40}
                        width={75}
                      />
                    </td>

                     <td>Flat Parsley</td>
                    <td>₹33.15</td>
                    <td>₹51.00</td>
                    <td>₹57.00</td>
                    <td>₹46.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.caBt-gq5zLsDS9h5QZDszgHaE7&pid=Api&P=0&h=180"
                        alt="Celery"
                        height={40}
                        width={75}
                      />
                    </td>

                     <td>Rocket Leaves</td>
                    <td>₹29.90</td>
                    <td>₹46.00</td>
                    <td>₹57.00</td>
                    <td>₹46.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.87sSG9GxyXMhG0NtLsZJUgHaJC&pid=Api&P=0&h=180"
                        alt="Rosemary"
                        height={40}
                        width={75}
                      />
                    </td>

                    <td>Oregano</td>
                    <td>₹37.05</td>
                    <td>₹57.00</td>
                    <td>₹57.00</td>
                    <td>₹52.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.Oa-iisu3rmk4STjs6pVfrAHaHa&pid=Api&P=0&h=180"
                        alt="Pak Choi"
                        height={40}
                        width={75}
                      />
                    </td>

                     <td>Sage</td>
                    <td>₹37.70</td>
                    <td>₹58.00</td>
                    <td>₹58.00</td>
                    <td>₹51.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.rJEGFp-0zL1WNFe3RPNLgAHaHa&pid=Api&P=0&h=180"
                        alt="Asparagus"
                        height={40}
                        width={75}
                      />
                    </td>

                    <td>Fennel</td>
                    <td>₹179.40</td>
                    <td>₹276.00</td>
                    <td>₹285.00</td>
                    <td>₹276.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.EcEB8qaDHPJKDzPAZIP80QHaEz&pid=Api&P=0&h=180"
                        alt="Thyme"
                        height={40}
                        width={75}
                      />
                    </td>

                    <td>Green-chilli-short,Hot</td>
                    <td>₹76.05</td>
                    <td>₹117.00</td>
                    <td>₹129.00</td>
                    <td>₹117.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.ImmKJzCx-BGdXGwprGkPUAAAAA&pid=Api&P=0&h=180"
                        alt="Broccoli Florets"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Strawberry</td>

                    <td>₹120.25</td>
                    <td>₹185.00</td>
                    <td>₹190.00</td>
                    <td>₹180.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.jaZfH5c2Ksqc4in2GIncuAHaHa&pid=Api&P=0&h=180"
                        alt="Lollo Rossa"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Thai Brinjal</td>

                    <td>₹36.40</td>
                    <td>₹56.00</td>
                    <td>₹72.00</td>
                    <td>₹49.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.g78r43WuEkPTWdos6C-NQgHaFR&pid=Api&P=0&h=180"
                        alt="Red Oak Lettuce"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Cherry Tomato</td>

                    <td>₹35.10</td>
                    <td>₹54.00</td>
                    <td>₹56.00</td>
                    <td>₹46.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.EWmEH7sz_-j0c_zdvCKl4AHaE8&pid=Api&P=0&h=180"
                        alt="Green Butterhead Lettuce"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Coriander Leaves</td>

                    <td>₹35.75</td>
                    <td>₹55.00</td>
                    <td>₹55.00</td>
                    <td>₹47.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.fwwKiqcx6g5heJTNK1bT_AHaHa&pid=Api&P=0&h=180"
                        alt="Romaine Lettuce"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Basil Thai sweet</td>

                    <td>₹34.45</td>
                    <td>₹53.00</td>
                    <td>₹53.00</td>
                    <td>₹46.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.Z8yx2r2GxqOwi83_yijXqgHaFj&pid=Api&P=0&h=180"
                        alt="Tulsi"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Tomato Cherry Red-imported</td>

                    <td>₹52.00</td>
                    <td>₹80.00</td>
                    <td>₹80.00</td>
                    <td>₹63.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.-q2q6WswWQ-0CHlaAgBMeAAAAA&pid=Api&P=0&h=180"
                        alt="Leeks"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Red Vine Cherry Tomato</td>

                    <td>₹51.35</td>
                    <td>₹79.00</td>
                    <td>₹97.00</td>
                    <td>₹79.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.YFpJuZfZk1Loxe3tfy35FgHaHa&pid=Api&P=0&h=180"
                        alt="Mint"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Parsley</td>

                    <td>₹21.45</td>
                    <td>₹33.00</td>
                    <td>₹38.00</td>
                    <td>₹31.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse3.mm.bing.net/th?id=OIP.MX7UKLwvzjpKUuJTVkBj1QHaJ4&pid=Api&P=0&h=180"
                        alt="Amaranthus"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Baby Lettuce</td>

                    <td>₹23.40</td>
                    <td>₹36.00</td>
                    <td>₹39.00</td>
                    <td>₹32.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.040MMbJbiGxRxXlOLz8MHAHaHa&pid=Api&P=0&h=180"
                        alt="Palak"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Baby Spinach/Palak-Exotic</td>

                    <td>₹44.85</td>
                    <td>₹69.00</td>
                    <td>₹70.00</td>
                    <td>₹60.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.BDlcU42MR747AR3H3X0xnwHaFe&pid=Api&P=0&h=180"
                        alt="Amaranthus green"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Amaranthus green</td>

                    <td>₹51.35</td>
                    <td>₹79.00</td>
                    <td>₹79.00</td>
                    <td>₹61.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.IdW7RBn-gdbuAjgFe9soeAHaHa&pid=Api&P=0&h=180"
                        alt="Colocasia Leaf"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Colocasia Leaf</td>

                    <td>₹71.50</td>
                    <td>₹110.00</td>
                    <td>₹123.00</td>
                    <td>₹106.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.gWgGhgm3RdkDaUnEQaQNkgHaFj&pid=Api&P=0&h=180"
                        alt="Methi"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Methi</td>

                    <td>₹40.95</td>
                    <td>₹63.00</td>
                    <td>₹83.00</td>
                    <td>₹63.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.5_LhxRSZLExPsnBkEr_LagHaFj&pid=Api&P=0&h=180"
                        alt="Drumstick"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Drumstick</td>

                    <td>₹48.10</td>
                    <td>₹74.00</td>
                    <td>₹78.00</td>
                    <td>₹63.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP._W2lTtBHMEUebhbXPSDdhwHaE8&pid=Api&P=0&h=180"
                        alt="Green Coral"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Green Coral</td>

                    <td>₹56.55</td>
                    <td>₹87.00</td>
                    <td>₹91.00</td>
                    <td>₹72.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.tUN1ELf5s0JjbmWFnGGIfgHaHa&pid=Api&P=0&h=180"
                        alt="Simpson Lettuce"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Simpson Lettuce</td>

                    <td>₹53.95</td>
                    <td>₹83.00</td>
                    <td>₹109.00</td>
                    <td>₹83.00</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center pt-3">
              <a href="Pricewatcher"><button className="btn btn-outline-primary mx-2">Previous</button></a>
              <a href="/Pricewatcher2"><button className="btn btn-outline-primary mx-2">Next</button></a>
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
      </div>
    </div>
  );
}
