var React = require('react');
var ReactDom = require('react-dom');
var List = require("./components/List.jsx");

var manageID = document.getElementById('ingredients');
ReactDom.render(<List />, manageID);
