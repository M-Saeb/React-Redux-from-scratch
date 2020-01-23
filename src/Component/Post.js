import React, { Component } from 'react'

export default class Post extends Component {
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(e => this.setState({posts: e}))
    }

    constructor(props){
        super(props)
        this.state= {
            posts: []
        }
    }

    render() {
        const postItem = this.state.posts.map(post => (
          <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
          </div>   
        ))
        return (
            <div>
                <h1>Post</h1>
                { postItem }
            </div>
        )
    }
}
