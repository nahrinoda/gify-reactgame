import React from "react";
import "./Wrapper.css";

// props.children includes everything within this div tag, which will be the title and image
// wrapper is a generic box that doesn't know it's children ahead of time
const Wrapper = props => 
<div className="wrapper">{props.children}</div>;

export default Wrapper;