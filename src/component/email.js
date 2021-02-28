import React from "react";
import ReactDOM from "react-dom";

function Email() {
  return (
    <div>
      <form>
        <p>Email:</p>
        <input type="text" />
      </form>
      <button className="btn btn-default" type="submit">
        Submit
      </button>
    </div>
  );
}

export default Email;
