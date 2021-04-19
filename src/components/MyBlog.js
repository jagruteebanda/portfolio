import React, { Component } from 'react';
import axios from 'axios';
import '../styles/MyBlog.css';

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
			<div className="my-blog" >
				{
					blogPosts.length > 0 && blogPosts.map((item, i) =>
						<div
							key={`blog_post_${i}`}
							className="blog-post-card" >
							<div className="blog-post-card-header">
								<h3 className="blog-post-card-title">{item.title}</h3>
							</div>
							<div className="blog-post-card-content" dangerouslySetInnerHTML={{ __html: item.description }} /> 
							<div className="read-more-view"><a href={item.link} target="_blank" rel="noopener noreferrer" className="read-more-button">Read more</a></div>
						</div>)
				}
			</div>
		)
	}
}

export default MyBlog;