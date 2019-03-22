import React from "react";
import { CardMedia } from "@material-ui/core";

function Image(props) {
  return (
    <CardMedia
      style={{ height: 275, width: 275, margin: 5 }}
      image={props.src}
      title=""
    />
  );
}

export default Image;
