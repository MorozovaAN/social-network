import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import { store } from "./redax/state";

let rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerender();
store.subscriber(rerender);
