var React = require('react');
var $ = require('jquery');
var LenderPage = require('./LenderPage')

var App = React.createClass({

  render () {

    return (
      <div>
        <LenderPage/>
      </div>
    );
  }
});

React.render(<App/>, document.body);
