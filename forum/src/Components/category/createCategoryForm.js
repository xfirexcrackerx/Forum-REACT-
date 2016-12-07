import React, {Component} from 'react';

export default class CreateCategoryForm extends Component{


    render(){
        return (
            <div className="category-form">
                <form onSubmit={this.props.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="username" className="user-n-pass">Title</label>
                        <input
                            type="text"
                            name="title"
                            className="user-box"
                            placeholder="Username"
                            value={this.props.title}
                            onChange={this.props.onChangeHandler}
                            disabled={this.props.submitDisabled}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username" className="user-n-pass">Text</label>
                        <input
                            type="text"
                            name="title"
                            className="user-box"
                            placeholder="Username"
                            value={this.props.text}
                            onChange={this.props.onChangeHandler}
                            disabled={this.props.submitDisabled}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="button" disabled={this.props.submitDisabled}>Submit</button>
                    </div>
                </form>
            </div>
        )}
}