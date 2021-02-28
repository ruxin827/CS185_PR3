import React from "react";

function Text() {
  return (
    <div>
      <form>
        <p>First name:</p>
        <input type="text" />
        <p>Last name:</p>
        <input type="text" />
      </form>

      <p>Favourite Movie</p>
      <input type="checkbox" value="bubbles" />
      <label>Avengers</label>
      <p></p>
      <input type="checkbox" value="gregory" />
      <label>Iron Man</label>
      <p></p>
      <input type="checkbox" value="gregory" />
      <label>Captain America</label>
      <p></p>
      <button className="btn btn-default" type="submit">
        Submit
      </button>
    </div>
  );
}

export default Text;
