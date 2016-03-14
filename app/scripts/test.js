import HelloWorld from './hello-world';
//var HelloWorld = require('./hello-world');

var App = React.createClass({
  render: function() {
    return (<div className="wrapper">
    <h1>App</h1>
    <HelloWorld />
    </div>)
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
