var React =  require('react');

var Signup = React.createClass({
  render: function () {
    return (
    <div>
      <div className="modal-table" id="loginModal">
        <div className="modal-cell">
          <div className="modal-content signup panel-padding panel-body " id="login-modal-content">

            <a href="#" className="btn icon-btn btn-block btn-large row-space-1 btn-facebook">
              <span className="icon-container">
                <i className="icon icon-facebook"></i>
              </span>
              <span className="text-container">
                Sign up with Facebook
              </span>
            </a>
            <a href="#" className="btn icon-btn btn-block btn-large row-space-1 btn-google">
            <image className="google-logo-svg-fallback icon icon-google-image" src="https://a1.muscache.com/airbnb/static/signinup/google_icon_2x-745c2280e5004d4c90e3ca4e60e3f677.png"></image>
                <span className="text-container">
                  Sign up with Google
                </span>
            </a>
            <div className="signup-or-separator">
              <span className="h6 signup-or-separator--text">or</span>
              <hr></hr>
            </div>

            <div className="text-center">
              <a data-toggle="modal" role="button" href="#fillupModal" className="create-using-email btn-block  row-space-2 btn btn-primary btn-block btn-large large icon-btn" id="create_using_email_button">
                  <i className="icon icon-envelope"></i>Sign up with Email</a>
            </div>

            <div id="tos_outside" className="row-space-top-3">
              <small>
                By signing up, I agree to Loanbook's <a href="/terms" data-popup="true">Terms of Service</a>, <a href="/terms/privacy_policy" data-popup="true">Privacy Policy</a>, <a href="/terms/guest_refund_policy" data-popup="true">Guest Refund Policy</a>, and <a href="/terms/host_guarantee" data-popup="true">Host Guarantee Terms</a>.
              </small>
            </div>
            <hr></hr>
            <div>
              <div>
                <span>
                  Already a Loanbook member?
                </span>
                  <a data-toggle="modal" role="button" href="#loginModal" className="modal-link link-to-login-in-signup " data-modal-href="/login_modal" data-modal-type="login">{' '}Log in</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

    );
  }

});

module.exports = Signup;
