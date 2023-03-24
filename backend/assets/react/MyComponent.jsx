// assets/react/controllers/MyComponent.jsx
import React, { useEffect } from "react";

// Don't workd
// useEffect(() => {
//   console.log("ok");
// }, []);

export default function (props) {
  return <div>Hello {props.fullName} !</div>;
}
