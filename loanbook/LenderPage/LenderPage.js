var React =  require('react');

var LenderPage = React.createClass({
  render: function () {
    return (
      <div>
        <body className="with-new-header ">
          <div id="header" className="airbnb-header new  logged_in">
            <header className="header--sm show-sm" aria-hidden="true" role="banner">
              <a href="#" aria-label="Homepage" data-prevent-default="" className="link-reset burger--sm">
                <i className="icon icon-reorder icon-rausch"></i>
                <span className="screen-reader-only">
                  Loan Book
                </span>
              </a>
              <div className="action--sm"></div>
              <nav className="nav--sm" role="navigation"></nav>
              <div className="search-modal-container"></div>
            </header>

            <div className="regular-header regular-header--new clearfix hide-sm" id="new-header">

              <div className="comp pull-left">
                <a href="/index.html" className="hdr-btn link-reset belo-container" aria-label="LoanBook">
                <img src="img/logo.png" height="60px"></img>
                </a>
              </div>

              <div className="comp pull-right show-login">
                <a className="no-crawl hdr-btn link-reset header-avatar-trigger needsclick" rel="nofollow">
                  <span className="value_name margin-right--tiny hide-md">Dhana Allysa</span>
                  <div className="media-photo media-round user-profile-image header-icon icon-profile-alt-gray">
                    <img width="28" height="28" src="img/user_pic-50x50.png" alt=""></img>
                  </div>
                </a>

                <div className="panel  drop-down-menu avatar-tooltip--new">
                  <div className="panel-header no-border hide-lg">
                    <strong><span className="value_name">Dhana Allysa</span></strong>
                  </div>
                </div>
              </div>

              <div className="comp pull-right show-logout">
                <a data-login-modal="" href="/login" data-redirect="redirect_params[action]=edit&amp;redirect_params[controller]=users" className="hdr-btn link-reset">
                Log In
                </a>
              </div>

              <div className="comp pull-right show-logout">
                <a data-signup-modal="" data-header-view="true" href="/signup_login" data-redirect="redirect_params[action]=edit&amp;redirect_params[controller]=users" className="hdr-btn link-reset">
                Sign Up
                </a>
              </div>

              <div id="js-header-help-menu">
                <div className="comp pull-right no-border help-trigger-wrapper" data-reactid=".7">
                  <a className="hdr-btn js-help-toggle link-reset needsclick" href="/help" data-reactid=".7.0">
                    <span className="margin-right--tiny hide-md" data-reactid=".7.0.0">Help</span>
                    <span data-reactid=".7.0.1">&nbsp;</span>
                    <i className="header-icon icon-lifesaver-alt-gray" data-reactid=".7.0.2"></i>
                  </a>
                </div>
              </div>

              <div className="comp pull-right show-login">
                <a className="needsclick no-crawl hdr-btn link-reset js-inbox-comp " href="/inbox" data-href="/inbox" rel="nofollow">
                  <div className="inbox-icon-container text-center">
                    <span className="margin-right--tiny hide-md">Messages</span>
                    <i className="header-icon message-icon icon-message-alt-gray">
                      <i className="alert-count unread-count text-center fade in">1</i>
                    </i>
                  </div>
                </a>
              </div>

              <div className="comp pull-right show-trips show-login js-trips-menu-container %>">
                <a className="needsclick no-crawl hdr-btn link-reset js-trips-comp " href="/trips" rel="nofollow" data-href="/trips">
                  <div className="inbox-icon-container text-center">
                    <span className="margin-right--tiny hide-md">Account</span>
                    <i className="header-icon js-trips-icon icon-suitcase-gray">
                      <i className="alert-count js-trips-unread-count text-center fade">0</i>
                    </i>
                  </div>
                </a>
              </div>

              <div className="comp pull-right hide-host comp-become-a-host ">
                <a className="hdr-btn link-reset lys-link " href="/rooms/new">
                  <span className="btn btn-small btn-become-a-host">Fund your Account</span>
                </a>
              </div>

              <div className="comp pull-right hide-host comp-become-a-host ">
                <a className="hdr-btn link-reset lys-link " href="/rooms/new">
                  <span className="btn btn-small btn-become-a-host">View Loans</span>
                </a>
              </div>

            </div>
          </div>


          <div className="flash-container"></div>

          <main id="site-content" role="main">
            <div className="subnav hide-print">
              <div className="page-container-responsive">
                <ul className="subnav-list">
                  <li>
                    <a href="#" aria-selected="false" className="subnav-item">Account</a>
                  </li>
                  <li>
                    <a href="#" aria-selected="false" className="subnav-item">Notes</a>
                  </li>
                  <li>
                    <a href="#" aria-selected="false" className="subnav-item">Portfolios</a>
                  </li>
                  <li>
                    <a href="#" aria-selected="false" className="subnav-item">Account Activity</a>
                  </li>
                  <li>
                    <a href="#" aria-selected="false" className="subnav-item">Bank Account</a>
                  </li>
                    <li>
                      <a href="#" className="subnav-item">Statements</a>
                    </li>
                    <li>
                      <a href="#" className="subnav-item">Statistics</a>
                    </li>
                    <li>
                      <a href="../user/lender_profile.html" aria-selected="true" className="subnav-item">Profile</a>
                    </li>
                </ul>
              </div>
            </div>

            <div id="notification-area"></div>
            <div className="page-container-responsive space-top-4 space-4">
              <div className="row">
                <div className="col-md-3 space-sm-4">
                  <div className="sidenav">
                    <ul className="sidenav-list">
                      <li>
                      <a href="#" aria-selected="true" className="sidenav-item">Edit Profile</a>
                      </li>
                      <li>
                      <a href="#" aria-selected="false" className="sidenav-item">Photos, Symbol, and Video</a>
                      </li>
                      <li>
                      <a href="#" aria-selected="false" className="sidenav-item">Trust and Verification</a>
                      </li>
                      <li>
                      <a href="#" aria-selected="false" className="sidenav-item">Reviews</a>
                      </li>
                      <li>
                      <a href="#" aria-selected="false" className="sidenav-item">References</a>
                      </li>
                    </ul>
                  </div>
                  <a href="/users/show/63830229" className="btn btn-block row-space-top-4">View Profile</a>
                </div>

                <div className="col-md-9">
                  <div id="dashboard-content">
                    <div className="panel space-4">
                    <div className="panel-header">Required</div>
                      <div className="panel-body">

                        <div className="row row-condensed space-4">
                          <label className="text-right col-sm-3" for="user_first_name">
                            First Name
                          </label>
                          <div className="col-sm-9">
                            <input id="user_first_name" name="user[first_name]" size="30" type="text" value="Dhana Allysa"/>
                          </div>
                        </div>

                        <div className="row row-condensed space-4">
                          <label className="text-right col-sm-3" for="user_last_name">
                            Last Name
                          </label>
                          <div className="col-sm-9">
                            <input id="user_last_name" name="user[last_name]" size="30" type="text" value="Villar"/>
                          </div>
                        </div>

                        <div className="row row-condensed space-4">
                          <label className="text-right col-sm-3" for="user_sex">
                            Gender <i className="icon icon-lock icon-ebisu" data-behavior="tooltip" aria-label="Private"></i>
                          </label>
                          <div className="col-sm-9">
                            <div className="select">
                              <select id="user_sex" name="user[sex]">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="row row-condensed space-4">
                          <label className="text-right col-sm-3" for="user_birthdate">
                            Birth Date <i className="icon icon-lock icon-ebisu" data-behavior="tooltip" aria-label="Private"></i>
                          </label>
                          <div className="col-sm-9">
                            <div className="select">
                              <select id="user_birthdate_2i" name="user[birthdate(2i)]">
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                              </select>
                            </div>
                            <div className="select">
                              <select id="user_birthdate_3i" name="user[birthdate(3i)]">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                              </select>
                            </div>
                            <div className="select">
                              <select id="user_birthdate_1i" name="user[birthdate(1i)]">
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                                <option value="1982">1982</option>
                                <option value="1981">1981</option>
                              </select>
                            </div>

                          </div>
                        </div>

                        <div className="row row-condensed space-4">
                          <label className="text-right col-sm-3" for="user_email">
                            Email Address <i className="icon icon-lock icon-ebisu" data-behavior="tooltip" aria-label="Private"></i>
                          </label>
                          <div className="col-sm-9">
                            <input id="user_email" name="user[email]" size="30" type="text" value="dhana.villar@gmail.com"/>
                          </div>
                        </div>

                        <div className="row row-condensed space-4">
                          <label className="text-right col-sm-3" for="user_phone">
                            Phone Number <i className="icon icon-lock icon-ebisu" data-behavior="tooltip" aria-label="Private"></i>
                          </label>

                          <div className="col-sm-9">
                            <div className="clearfix">
                              <div className="phone-numbers-container">

                                <div className="phone-number-verify-widget">
                                  <p className="pnaw-verification-error"></p>
                                  <div className="pnaw-step1">
                                    <div className="phone-number-input-widget" id="phone-number-input-widget-23ab7897">

                                      <label for="phone_number">Add a phone number:</label>
                                      <div className="pniw-number-container clearfix">
                                        <div className="pniw-number-prefix">+63</div>
                                        <input type="tel" className="pniw-number" id="phone_number"/>
                                      </div>
                                      <input type="hidden" data-role="phone_number" name="phone" value="63"/>
                                      <input type="hidden" name="user_id" value="63830229"/>
                                    </div>
                                    <div className="pnaw-verify-container">
                                      <a className="btn btn-primary" href="#" rel="sms">Verify via SMS</a>
                                      <a className="btn btn-primary" href="#" rel="call">Verify via Call</a>
                                      <a className="cancel" rel="cancel" href="#">Cancel</a>
                                    </div>
                                  </div>
                                  <div className="pnaw-step2">
                                    <p className="message"></p>
                                    <label for="phone_number_verification">Please enter the 4-digit code:</label>
                                    <input type="text" pattern="[0-9]*" id="phone_number_verification"/>
                                    <div className="pnaw-verify-container">
                                      <a className="btn btn-primary" href="#" rel="verify">
                                        Verify
                                      </a>
                                      <a className="cancel" rel="cancel" href="#">
                                        Cancel
                                      </a>
                                    </div>
                                    <p className="cancel-message">If it doesn't arrive, click cancel and try call verification instead.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row row-condensed space-4">
                          <label className="text-right col-sm-3" for="user_profile_info_current_city">Address</label>
                          <div className="col-sm-9">
                              <label for="shipping-address-street">Address Line 1</label>
                              <input type="text" name="street" id="shipping-address-street" data-reactid=".5.1.1.0.1"/>
                              <label for="shipping-address-apt">Address Line 2</label>
                              <input type="text" name="apt" id="shipping-address-apt"/>
                              <label for="shipping-address-city">City / Town / District</label>
                              <input type="text" name="city" id="shipping-address-city"/>
                              <label for="shipping-address-state">State / Province / County / Region</label>
                              <input type="text" name="state" id="shipping-address-state"/>
                              <label for="shipping-address-zipcode">ZIP / Postal Code</label>
                              <input type="text" name="zipcode" id="shipping-address-zipcode"/>
                          </div>
                        </div>

                        <div className="row row-condensed space-4">
                          <label className="text-right col-sm-3" for="user_profile_info_sss">
                            SSS No. <i className="icon icon-lock icon-ebisu" data-behavior="tooltip" aria-label="Private"></i>
                          </label>
                          <div className="col-sm-9">
                            <input id="user_profile_info_sss" name="user_profile_info[sss]" size="30" type="text"/>
                          </div>
                        </div>

                        <div className="row row-condensed space-4">
                          <label className="text-right col-sm-3" for="user_profile_info_tin">
                            TIN <i className="icon icon-lock icon-ebisu" data-behavior="tooltip" aria-label="Private"></i>
                          </label>
                          <div className="col-sm-9">
                            <input id="user_profile_info_tin" name="user_profile_info[tin]" size="30" type="text"/>
                          </div>
                        </div>

                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-large">Save</button>

                  </div>
                </div>
              </div>

            </div>

          </main>

          <div id="footer">
            <footer>
              <div className="container">
                <div className="row">
                    <div className="col-md-6 text-left">
                        <span className="copyright">&copy; 2016 privacy policy</span>
                        <ul className="list-inline social-button">
                            <li><a className="social" href="#"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li><a className="social" href="#"><i className="fa fa-google-plus"></i></a>
                            </li>
                            <li><a className="social" href="#"><i className="fa fa-linkedin"></i></a>
                            </li>
                            <li><a className="social" href="#"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li><a className="social" href="#"><i className="fa fa-pinterest"></i></a>
                            </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </footer>
            </div>

            <div id="gmap-preload" className="hide"></div>

        </body>
      </div>
      );
    }
  });

module.exports = LenderPage;
