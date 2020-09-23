import React from "react";
import Header from "./Header";
import { Router, Route } from "react-router-dom";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import history from "../history";

const App = () => {
    return (
        <div className={"ui container"} style={{marginTop:"10px"}}>
            <Router history={history}>
                <Header />
                <Route path={"/stream/create"} exact component={StreamCreate} />
                <Route path={"/stream/show/:id"} exact component={StreamShow} />
                <Route path={"/streams"} exact component={StreamList} />
                <Route path={"/"} exact component={StreamList}/>
                <Route path={"/stream/delete/:id"} exact component={StreamDelete} />
                <Route path={"/stream/edit/:id"} exact component={StreamEdit} />
            </Router>
        </div>
    );
}

export default App;