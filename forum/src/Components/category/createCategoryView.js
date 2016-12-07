import React, {Component} from 'react';
import CategoryForm from './createCategoryForm';
import category from '../../Models/category';


export default class RegisterView extends Component{
    constructor(props){
        super(props);
        this.state = { title: '', text: '' };
        this.onSubmitResponse = this.onSubmitResponse.bind(this);

    }

    render(){ return(
        <div className="register-view">
            <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <h1 className="h1">Create category</h1>
                    <CategoryForm
                        title={this.state.title}
                        text={this.state.text}
                        onChangeHandler={this.onChangeHandler.bind(this)}
                        onSubmitHandler={this.onSubmitHandler.bind(this)}
                        submitDisabled={this.state.submitDisabled}/>
                </div>
                <div className="col-md-5"></div>
            </div>
        </div>
    )}

    onChangeHandler(event) {
        event.preventDefault();
        switch(event.target.name){
            case 'title':
                this.setState({ title: event.target.value });
                break;
            case 'text':
                this.setState({ text: event.target.value });
                break;
            default:
                break;
        }
    }
    onSubmitHandler(event){
        event.preventDefault();

        this.setState({ submitDisabled: true });
        category.create(this.state.title, this.state.text, this.onSubmitResponse);
    }
    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from register page
            this.context.router.push('/');
        } else {
            // Something went wrong, let the user try again
            this.setState({ submitDisabled: true });
        }
    }

}

RegisterView.contextTypes = {
    router: React.PropTypes.object
};