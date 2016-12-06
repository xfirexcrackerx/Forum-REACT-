import React, { Component } from 'react';
import PostComponent from './postComponent';

export default class PostView extends Component {
    render() {               
            return (
            <div className="post-component">
                <PostComponent/>         
            </div>
        )        
    }
}
