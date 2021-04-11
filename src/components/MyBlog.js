import React, { Component } from 'react';
import axios from 'axios';

class MyBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    }
  }

  componentDidMount() {
    const POSTS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jagruteebanda99';
    axios.get(POSTS_URL)
      .then(response => {
        if (response) {
          this.setState({
            blogPosts: response.data.items
          });
        }
      })
      .catch(error => console.log("Jagz posts api error: ", error));
  }

  render() {
    const { blogPosts } = this.state;
    return (
      <div className={"my-blog"}>
        {
          blogPosts.length > 0 && blogPosts.map((item, i) => <div key={`blog_post_${i}`}>
            <p>{item.title}</p>
            {item.description}
          </div>)
        }
      </div>
    )
  }
}

export default MyBlog;
