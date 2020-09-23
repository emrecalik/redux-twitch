import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import { reduxForm } from "redux-form";

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    handleOnSubmit = (values) => {
        values.id = this.props.match.params.id;
        values.userId = this.props.userId;
        this.props.editStream(values);
    }

    renderContent = () => {
        const { title } = this.props.initialValues;

        if (!title) {
            return null;
        }

        return (
            <React.Fragment>
                <StreamForm onSubmit={this.handleOnSubmit}/>
            </React.Fragment>
        );

    }

    render() {
        return this.renderContent();
    }
}

const mapStateToProps = (state, ownProps) => {
    const stream = state.streams[ownProps.match.params.id]

    return {
        initialValues: {
            title: stream.title,
            description: stream.description,
        },
        userId: stream.userId
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })
((reduxForm({form: 'contact', enableReinitialize: true}))(StreamEdit));