import React from "react";
import Typography from "@material-ui/core/Typography";
import { Slide } from "@material-ui/core";
//import Weather from "./Weather";

const Address = props => {
  return (
    <Slide in={true} timeout={{ enter: 400, exit: 200 }} direction="left">
      <div>
        <Typography
          translate="no"
          style={{ paddingTop: 10, textTransform: "capitalize" }}
        >
          <span>{props.location.street}</span>
          <br />
          <span>
            {props.location.city}, {props.location.state},{" "}
            {props.location.postcode}
          </span>
          <br />
        </Typography>
        {/* <Weather
          latitude={props.location.coordinates.latitude}
          longitude={props.location.coordinates.longitude}
        /> */}
      </div>
    </Slide>
  );
};

export default Address;
