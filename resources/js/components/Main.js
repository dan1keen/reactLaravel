import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Post from "./Post";
import AddPost from "./AddPost";

class Main extends Component{
    constructor(){
        super();
        this.state = {
            posts: [],
            currentPost: null,
        }
        this.handleAddPost = this.handleAddPost.bind(this);
    }

    componentDidMount() {
        fetch('api/posts')
            .then(response=>{
                return response.json();
            })
            .then(posts=>{
                this.setState({posts});
            });
    }
    renderPosts(){
        return this.state.posts.map(post=>{
            return (
                <li onClick={
                    () => this.handleClick(post)} key = {post.id}>
                    {post.title}
                </li>
            );
        })
    }
    handleClick(post){
        this.setState({currentPost:post});
    }
    handleAddPost(post){
        post.price = Number(post.price);
        fetch('api/posts', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(response => {
            return response.json();
        }).then(data => {
            this.setState((prevState) => ({
                posts: prevState.posts.concat(data),
                currentPost: data
            }))
        });
    }

    render() {
        return(
            <div>
                <div>
                <h3>All Products</h3>
                <ul>
                    { this.renderPosts() }
                </ul>
                </div>
                <div>
                <Post post = {this.state.currentPost}/>
                </div>
                <div>
                    <AddPost onAdd={this.handleAddPost} />
                </div>
            </div>
        );
    }
}
export default Main;

if(document.getElementById("root")){
    ReactDOM.render(<Main />, document.getElementById("root"));
}