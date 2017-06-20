"use strict";

var ListingContainer = React.createClass({
  displayName: "App",

  getInitialState: function getInitialState() {
    return {
      categories: []
    };
  },
  // getPostsByCat: function getPostsByCat(catId, th) {
  // 		var posts = [];
  // 		var matchingPosts = [];
	 //  	th.serverRequest = axios.get(th.props.posts).then(function (result) {
	 //  		debugger
	 //  		posts = result.data
		//   	for (var i = 0; i < posts.length; i++) {
		//     	for (var j = 0; j < posts[i].categories.length; j++) {
		//     		if (posts[i].categories[j] == catId) {
		//     			matchingPosts.push(posts[i]);
		//     		}
		//     	}
		//     }
		//     th.serverRequest.abort();
	 //    });
	 //    return matchingPosts
  // 	},
  // componentWillMount: function componentWillMount() {
  //   var th = this;
  //   console.log("this state")
  //   console.log(this.state)
  //   this.serverRequest = axios.get(this.props.categories).then(function (result) {
  //     for (var i = 0; i < result.data.length; i++) {
  //     	var propertyName = "cat-" + i
  //     	var propertyListings = "listing-" + 1
  //     	var posts = getPostsByCat(result.data[i].id);
  //     	th.setState({
  //       	categories: [
  //       					{
  //       						[propertyName]: result.data[i].name
  //       					}
  //       				]
  //     	});
  //     }
  //   });
  //     console.log('new state')
  //     console.log(this.state)
  // },
  componentDidMount: function componentDidMount() {
  	var th = this;
    console.log("this state")
    console.log(this.state)
    this.serverRequest = axios.get(this.props.categories).then(function (result) {
      var categories = result.data
   	  //loop through each category type - make state for each
   	  var posts = [];
   	  var matchingPosts = [];
   	  //get all posts
	  th.serverRequest = axios.get(th.props.posts).then(function (result) {
	  	posts = result.data
		for (var i = 0; i < result.data.length - 1; i++) {
			var categoryName = "cat_" + i;
		  	//loop through all posts to check if this category num matches any of post nums
		  	for (var j = 0; j < posts.length; j++) {
		  		//for each post, loop through the tagged categories for that post and see if any match
		    	for (var k = 0; k < posts[j].categories.length; k++) {
		    		if (posts[j].categories[k] == posts[i].categories[j]) {
		    			matchingPosts.push(posts[i]);
		    		}
		    	}
		    }
	      	th.setState({
	        	categories[i] =  
	        				[
	        					{[categoryName]: {
	        						"cat": categories[i].name,
	        						"listings": matchingPosts
	        					}}
	        				]
	        				
	      	});
	      }
	  });
    });
  },

  componentWillUnmount: function componentWillUnmount(th) {
    th.serverRequest.abort();
  },

  render: function render() {
  	console.log("this state")
    console.log(this.state)
    return React.createElement(
      "div", { className: "item-wrapper"}, this.state.categories.cat

	        // return React.createElement(
	        // "div",
	        //   { className: "wrapper" },
	        //   React.createElement(
	        //     "div",
	        //     { className: "container" },
	        //     React.createElement(
	        //       "h4",
	        //       { className: "post-title" },
	        //       React.createElement("a", { href: category.acf.resource_link,
	        //         dangerouslySetInnerHTML: { __html: category.acf.name }
	        //       })
	        //     ),
	        //     React.createElement(
	        //       "div",
	        //       { key: category.acf.content, className: "post-content" },
	        //         React.createElement("p", {}, category.acf.resource_content)
	        //     ),
	        //     React.createElement(
	        //       "div",
	        //       { className: "push" },
	        //         React.createElement("div", {})
	        //     )
	        //   )
	        // )

    );
  }

});



ReactDOM.render(React.createElement(ListingContainer, { categories: "http://localhost:8888/self-taught-web-developer/wp-json/wp/v2/categories", posts: "http://localhost:8888/self-taught-web-developer/wp-json/wp/v2/posts"}), document.querySelector("#html-css-resources"));