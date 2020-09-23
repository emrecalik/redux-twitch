import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {

    handleOnSubmit = (values) => {
        this.props.createStream(values);
    }

    render() {
        return <StreamForm onSubmit={this.handleOnSubmit}/>;
    }
}

export default connect(null, { createStream })(StreamCreate);