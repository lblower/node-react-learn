var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"Welcome to the React Dom App"},{"id":2,"text":"React Dom Used"},{"id ":3,"text":"Babel"}];


var List = React.createClass({
  render: function(){

      var listItems = ingredients.map(function(item){
        return <ListItem key={item.id} ingredient={item.text} />;
      });

    return (<ul>{listItems}</ul>
    );
  }
});

module.exports = List;
