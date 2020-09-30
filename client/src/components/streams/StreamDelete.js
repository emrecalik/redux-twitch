import React from "react";
import { Modal, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { closeModal, openModal, deleteStream, fetchStream } from "../../actions";
import history from "../../history";

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        this.props.openModal();
    }

    handleDelete = (streamId) => {
        this.props.deleteStream(streamId);
        this.props.closeModal();
    }

    handleCancel = () => {
        this.props.closeModal();
        history.push("/");
    }

    renderContent = () => {
        return (
            <Modal
                open={this.props.modal.open}
                onClose={this.props.closeModal}
            >
                <Modal.Header>Delete Stream</Modal.Header>
                <Modal.Content>
                    Are you sure you want to delete the stream = {this.props.stream.title} ?
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => this.handleDelete(this.props.match.params.id)}>
                        Delete
                    </Button>
                    <Button onClick={this.handleCancel}>
                        Cancel
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }

    render() {

        if(!this.props.stream || !this.props.currentUserId) {
            return <div>Loading...</div>;
        }

        if (this.props.currentUserId !== this.props.stream.userId) {
            return <h1>You are not authorized!</h1>
        }

        return <div>{this.renderContent()}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        modal: state.modal,
        stream: state.streams[ownProps.match.params.id],
        currentUserId: state.user.userId
    }
}

export default connect(mapStateToProps, { openModal, closeModal, deleteStream, fetchStream })(StreamDelete);