import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./ItemDetail.css";

function informacion({ curso }) {
  return (
    <div className="detail-container">
      <FlexWrapper>
      <div class="card mb-3">
  <img src={curso.img} class="card-img-top"></img>
  <div class="card-body">
    <h5 class="card-title">{curso.title}</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>
      </FlexWrapper>
    </div>
  );
}

export default informacion;


