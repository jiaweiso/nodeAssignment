var React = require("react");
module.exports = React.createClass({displayName: "exports",

  getInitialState: function() {
    return {done: this.props.done}
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("input", {type: "checkbox", defaultChecked: this.state.done}), 
        this.props.name
      )
    );
  }

});