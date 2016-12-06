import React, {Component} from 'react';
import '../../Css/common/greeting.css'

export default class Greeting extends Component {
    render() {
        if (this.props.user === '' || this.props.user === undefined) {
            return null;
        } else {
            return (
                <span id="welcome-user">Welcome, {this.props.user}</span>
            );
        }
    }
}