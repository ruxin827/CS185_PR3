import React from "react";
import pic1 from "./1.JPG";
import pic2 from "./2.JPG";
import pic3 from "./3.JPG";
import pic4 from "./4.JPG";
import pic5 from "./5.JPG";
import pic6 from "./6.JPG";
import "./image.css";

function Image() {
  return (
    <div>
      <img src={pic1} class="img-editor" />
      <img src={pic2} class="img-editor" />
      <img src={pic3} class="img-editor" />
      <img src={pic4} class="img-editor" />
      <img src={pic5} class="img-editor" />
      <img src={pic6} class="img-editor" />
    </div>
  );
}

export default Image;
