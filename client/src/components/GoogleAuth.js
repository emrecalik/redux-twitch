import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import history from "../history";

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "540387888409-ihbmngs2upo7kc6j4tqn82j9kp062khn.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.userId = this.auth.currentUser.get().getId();
                this.updateSignInStatus(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.updateSignInStatus)
            })
        })
    }

    updateSignInStatus = (isSignedIn) => {
        if(isSignedIn) {
            this.props.SignIn(this.userId)
        } else {
            this.props.SignOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
        history.push("/")
    }

    renderAuthButton = () => {
        if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In
                </button>
            )
        }
    }

    render() {
        return (
          <div>
              {this.renderAuthButton()}
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn : state.user.isSignedIn }
}

export default connect(mapStateToProps, { SignIn: signIn, SignOut: signOut })(GoogleAuth);