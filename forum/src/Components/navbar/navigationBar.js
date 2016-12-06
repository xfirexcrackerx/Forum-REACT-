import React, { Component } from 'react';
import Greeting from '../common/greeting';
import '../../Css/navbar/navigationBar.css';

export default class NavigationBar extends Component {
    render() {        
            return (
            <div className="navigation-bar">
                <Greeting user={this.props.user}/>
                {this.props.children}                
            </div>
        )        
    }
}
