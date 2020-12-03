import React from "react";

function Forget() {
  return (
    <div className="insta">
      <div className="container">
        <div className="back">
          <img src="../img/cloud.svg" className="icon" alt="" />
          <input type="text" className="Formcontrol" placeholder="E-mail" />
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
