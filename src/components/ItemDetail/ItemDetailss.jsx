import React, { useState, useEffect } from "react";

import { getUnCurso } from "../../mockAPI/mockAPI";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import informacion from "./informacion";

// 6. Leer los parámetros de la URL
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [curso, setCurso] = useState([]);

  const { itemID } = useParams();

  useEffect(() => {
    getUnCurso(itemID).then((data) => {
      setCurso(data);
    });
  }, [itemID]);

  return (
    <FlexWrapper>      
      <informacion curso={curso} />
    </FlexWrapper>
  );
}

export default ItemDetailContainer;
