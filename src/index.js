import React from "react";
import reactdom from "react-dom";
reactdom.render(
  <div>
    <h1>List1</h1>
    <ul>
      <li>first</li>
      <li>second</li>
      <li>third</li>
    </ul>
  </div>,
  document.getElementById("root")
);
