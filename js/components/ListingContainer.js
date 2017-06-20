"use strict";

var ListingContainer = React.createClass({
  displayName: "App",

  getPostsByCat: function(catId) {
  	this.serverRequest = axios.get(this.props.posts).then(function (result) {
  		var posts = result.data
    });
    debugger
  },
  getInitialState: function getInitialState() {
    return {
      categories: []
    };
  },
  componentWillMount: function componentWillMount() {
    var th = this;
    console.log("this state")
    console.log(this.state)
    this.serverRequest = axios.get(this.props.categories).then(function (result) {
      for (var i = 0; i < result.data.length; i++) {
      	var propertyName = "cat-" + i
      	var propertyListings = "listing-" + 1
      	var posts = getPostsByCat(result.data[i].id);
      	th.setState({
        	categories: [
        					{
        						[propertyName]: result.data[i].name
        					}
        				]
      	});
      }
    });
      console.log('new state')
      console.log(this.state)
  },
  componentDidMount: function componentDidMount() {
    // var th = this;
    // console.log("this state")
    // console.log(this.state)
    // this.serverRequest = axios.get(this.props.categories).then(function (result) {
    //   for (var i = 0; i < result.data.length; i++) {
    //   	console.log(result.data.length)
    //   	th.setState({
    //     	categories: {
    //     					"cat": result.data[i].name
    //     				}
    //   	});
    //   }
    // });
    //   console.log('new state')
    //   console.log(this.state)
  },

  componentWillUnmount: function componentWillUnmount() {
    this.serverRequest.abort();
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "item-wrapper" },
      this.state.categories.map(function (category) {
      	console.log(category)

        return React.createElement(
        "div",
          { className: "wrapper" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "h4",
              { className: "post-title" },
              React.createElement("a", { href: category.acf.resource_link,
                dangerouslySetInnerHTML: { __html: category.acf.name }
              })
            ),
            React.createElement(
              "div",
              { key: category.acf.content, className: "post-content" },
                React.createElement("p", {}, category.acf.resource_content)
            ),
            React.createElement(
              "div",
              { className: "push" },
                React.createElement("div", {})
            )
          )
        )
      })
    );
  }

});



ReactDOM.render(React.createElement(ListingContainer, { categories: "http://localhost:8888/self-taught-web-developer/wp-json/wp/v2/categories", posts: "http://localhost:8888/self-taught-web-developer/wp-json/wp/v2/posts"}), document.querySelector("#html-css-resources"));