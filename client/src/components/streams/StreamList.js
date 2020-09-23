import React from "react";
import { connect } from "react-redux";
import { fetchStreams, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderStreams = () => {
        const { streams } = this.props;
        if (!streams) {
            return null;
        }
        return streams.map((stream) => {
            return (
                <div key={stream.id} className={"item"}>
                    {this.renderAdminButtons(stream.userId, stream.id)}
                    <i className="large camera middle aligned icon"/>
                    <div className={"content"}>
                        <Link to={`/stream/show/${stream.id}`} className={"header"}>{stream.title}</Link>
                        <div className={"description"}>{stream.description}</div>
                    </div>
                </div>
            );
        })
    }

    renderAdminButtons = (userId, streamId) => {
        if (userId === this.props.currentUserId) {
            return (
                <div className={"right floated content"}>
                    <Link to={`/stream/edit/${streamId}`} className={"ui primary button"}>Edit</Link>
                    <Link to={`/stream/delete/${streamId}`} className={"ui red button"} >Delete</Link>
                </div>
            )
        }
        return null;
    }

    renderCreateStreamButton = () => {
        if (this.props.isSignedIn) {
            return <Link to={"/stream/create"} className={"ui right floated primary button"}>Create Stream</Link>
        }
        return null;
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className={"ui relaxed celled list"}>
                    {this.renderStreams()}
                </div>
                {this.renderCreateStreamButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        isSignedIn: state.user.isSignedIn,
        currentUserId: state.user.userId,
    }
}

export default connect(mapStateToProps, { fetchStreams, deleteStream })(StreamList);