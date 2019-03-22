import React from "react";
import Typography from "@material-ui/core/Typography";
import { Slide } from "@material-ui/core";

const General = props => {
  return (
    <Slide in={true} timeout={{ enter: 400, exit: 300 }} direction="right">
      <Typography
        translate="no"
        style={{ paddingTop: 10, textTransform: "capitalize" }}
      >
        <span>{props.email}</span>
        <br />
        <span>{props.gender}</span>
        <br />
        <span>{props.dob}</span>
        <br />
        {/* <span>{props.phone}</span>
        <br />
        <span>{props.cell}</span>
        <br /> */}
      </Typography>
    </Slide>
  );
};

export default General;
