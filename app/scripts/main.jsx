import HelloWorld from 'hello-world';
//var HelloWorld = require('./hello-world');

var App = React.createClass({
  render: function() {
    <div className="wrapper">App
      <HelloWorld/>
    </div>
  }
});
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
