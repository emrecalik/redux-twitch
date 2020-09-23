import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        const { title, description } = this.props.stream

        return (
          <div>
              <video style={{width:"100%"}} controls />
              <h1>{title}</h1>
              <h4>{description}</h4>
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);