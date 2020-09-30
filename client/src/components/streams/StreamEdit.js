import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

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
        if (!this.props.stream || !this.props.currentUserId) {
            return <div>Loading...</div>
        }

        if (this.props.currentUserId !== this.props.stream.userId) {
            return <h1>You are not authorized!</h1>
        }

        const { title, description } = this.props.stream;

        return (
            <React.Fragment>
                <StreamForm initialValues={{title, description}} onSubmit={this.handleOnSubmit}/>
            </React.Fragment>
        );
    }

    render() {
        return this.renderContent();
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
        currentUserId: state.user.userId
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);