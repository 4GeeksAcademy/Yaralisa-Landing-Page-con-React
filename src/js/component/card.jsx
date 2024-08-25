import React from "react";

export const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* <img src="" class="card-img-top" alt=""> */}
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.texto}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
