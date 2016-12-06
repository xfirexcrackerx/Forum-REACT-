import React, { Component } from 'react';
import '../../Css/post/postComponent.css';

export default class PostComponent extends Component {
    render() {    
           
            return (
            <div className="post-component" key={this.props.id}>
                <div className="row rowComponent">
                    <div className="col-md-9">
                        <h3 >{this.props.title}</h3>
                        <p>{this.props.text}</p>                        
                    </div>
                    <div className="col-md-1">
                        {this.props.answers}
                    </div>
                    <div className="col-md-1">
                        {this.props.views}
                    </div>
                    <div className="col-md-1">
                        <i>{this.props.author}</i>
                    </div>
                </div>                
            </div>
        )        
    }
}
