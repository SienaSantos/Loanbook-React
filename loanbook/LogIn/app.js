var React = require('react');
var $ = require('jquery');
var Signup = require('./Signup');
var Fillup = require('./Fillup');

var App = React.createClass({

  getInitialState: function(){
    return {
      email:'',
      password:'',
      url: '',
      list:'',
      records: []
    };
  },

  // componentDidMount: function() {
  //   this.serverRequest = $.get(this.props.source, function (result) {
  //     var customer = result[0];
  //     this.setState({
  //       email: customer.Fullname,
  //     });
  //   }.bind(this));
  // },

  componentDidMount: function() {


  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },


  onChangeEmail:function(e){
     this.setState({email: e.target.value});
  },
  onChangePassword:function(e){
     this.setState({password: e.target.value});
  },

  checkAccountType () {
    var info = this.state.list;
    console.log('account info: ' + info);

    var x = [["Dhana Allysa","Villar","Female","86 Dr. Fabella St., Mandaluyong City","9/18/1992 12:00:00 AM","dhana.villar@gmail.com","9059536303","Borrower","000-000-000-000","00-00000-00","Cusyma Technologies","11th Floor Unit MN Cyber One Building, Eastwood Cyber Park, Quezon City, 1110 ","Junior Software Developer"]];
    console.log('x: ' + x[0][0]);
  },

  login: function(){
    var state = this.state;
    var email = state.email;
    var password = state.password;
    var records = state.records;
    var value = {email: "Siena"};
    var request = {
      email : $('#signin_email').val()
    };
      $.ajax({
          type: "POST",
          contentType: "application/json; charset=utf-8",
          // url: "http://162.144.199.112/JSONWebService/Service1.svc/validateBorrowerLogin",
          url: "http://localhost:15021/Service1.svc/validateBorrowerLogin",
          data : JSON.stringify(request),
          // data: '{ email: "' + email + '", password: "' + password +'"  }',
          // data: value,
          dataType: "json",
          complete:function(xhr){
            var result = JSON.stringify(xhr.responseJSON.validateBorrowerLoginResult);
            console.log('xhr Result: '+ result);
            console.log('xhr Result: '+ result.Address);

            // alert("success")
          },
          success: function(msg) {
            console.log('msg: '+msg)

            this.setState({
                list: msg,
                records: this.state.records.concat(
                  {      list: msg
                  }
                ),
            });
            console.log('inside: '+ value);
            console.log('this.state: '+ this.state)
            this.checkAccountType();
          }.bind(this)
        });
      console.log("this state list: "+ this.state.list);
    },


  render: function () {

    var btnLogin = <button type="submit" onClick={this.login} className="btn btn-block btn-primary btn-large" id="user-login-btn">Log In</button>;

    return (
        <div>
          <div className="modal-table" id="loginModal">
            <div className="modal-cell">
              <div className="modal-content signup panel-padding panel-body " id="login-modal-content">

                <a href="/oauth_connect?from=facebook_login&amp;service=facebook" className="btn icon-btn btn-block btn-large row-space-1 btn-facebook">
                  <span className="icon-container">
                    <i className="icon icon-facebook"></i>
                  </span>
                  <span className="text-container">
                    Log in with Facebook
                  </span>
                </a>
                <a href="/oauth_connect?from=google_login&amp;service=google" className="btn icon-btn btn-block btn-large row-space-1 btn-google">
                <image className="google-logo-svg-fallback icon icon-google-image" src="https://a1.muscache.com/airbnb/static/signinup/google_icon_2x-745c2280e5004d4c90e3ca4e60e3f677.png"></image>
                    <span className="text-container">
                      Log in with Google
                    </span>
                </a>
                <div className="signup-or-separator">
                  <span className="h6 signup-or-separator--text">or</span>
                  <hr></hr>
                </div>
                <div className="control-group row-space-1">
                  <input className="decorative-input inspectletIgnore" id="signin_email" name="email" placeholder="Email Address" type="email" value={this.state.email} onChange={this.onChangeEmail}/>
                </div>

                <div className="control-group row-space-2">
                  <input className="decorative-input inspectletIgnore" id="signin_password" name="password" placeholder="Password" type="password" value={this.state.password} onChange={this.onChangePassword}/>
                </div>
                <div className="clearfix row-space-1">
                  <label for="remember_me2" className="checkbox remember-me space-1">
                    <input type="checkbox" name="remember_me" id="remember_me2" value="true" className="remember_me"/>
                    Remember me
                  </label>
                  <a href="/forgot_password" className="forgot-password pull-right" data-from="email">Forgot password?</a>
                </div>
                {btnLogin}
                <hr> </hr>
                <div className="text-left">
                    Don’t have an account?
                    <a data-toggle="modal" role="button" href="#signupModal" className="modal-link link-to-signup-in-login" data-dismiss="modal" data-modal-href="/signup_modal" data-modal-type="signup">
                      {' '} Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

React.render(<App/>, document.body);
