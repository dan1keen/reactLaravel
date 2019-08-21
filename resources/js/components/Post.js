import React, { Component } from 'react';

const Post = ({post}) => {
    const divStyle = {

    }
    if(!post){
        return(<div style={divStyle}>  No products selected </div>);
    }
    return (
        <div >
            <h2> {post.title} </h2>
            <p> {post.description} </p>
            <h3> Status {post.availability ? 'Available' : 'Out of stock'} </h3>
            <h3> Price : {post.price} </h3>
        </div>
    );
}
export default Post ;