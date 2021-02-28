import React from "react";
import "./video.css";

function Video() {
  return (
    <div>
      <body>
        <div className="row">
          <div className="column">
            <iframe
              src="https://www.youtube.com/embed/sG7jHvLw5Q8" class="videos" frameBorder="0"
            ></iframe>
            <iframe
                src="https://www.youtube.com/embed/Ca7f9mDEW_s" class="videos" frameBorder="0"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/tiz2Vyw6eVo" class="videos" frameBorder="0"
            ></iframe>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Video;
