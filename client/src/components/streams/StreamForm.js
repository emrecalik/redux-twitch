import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";

class StreamForm extends React.Component {

    handleOnSubmit = (values) => {
        values.userId = this.props.userId;
        this.props.onSubmit(values);
    }

    renderField = ({input, meta:{touched, error}}) => {
        return (
            <React.Fragment>
                <input {...input} />
                {touched && (error && this.renderError(error))}
            </React.Fragment>
        );
    }

    renderError = (error) => {
        return (
            <div className={"ui error message"}>
                {error}
            </div>
        )
    }

    render() {
        return (
            <form className={"ui form error"} onSubmit={this.props.handleSubmit(this.handleOnSubmit)}>
                <div className={"field"}>
                    <label>Enter Title</label>
                    <Field
                        name={"title"}
                        type={"text"}
                        component={this.renderField}
                    />
                </div>
                <div className={"field"}>
                    <label>Enter Description</label>
                    <Field
                        name={"description"}
                        type={"text"}
                        component={this.renderField}
                    />
                </div>
                <button className={"ui primary button"} type={"submit"}>Submit</button>
            </form>
        );
    }
}

const validate = (values) => {
    const errors = {}
    if (!values.title) {
        errors.title = "You must enter a title"
    }
    if (!values.description) {
        errors.description = "You must enter a description"
    }
    return errors;
}

const mapStateToProps = (state) => {
    return { userId: state.user.userId }
}

const createForm = reduxForm({
    form: 'contact',
    validate
})(StreamForm)

export default connect(mapStateToProps)(createForm)