import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import {
  IconButton,
  Avatar,
  CardHeader,
  CardContent,
  Button,
  CardActions
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Popover from "@material-ui/core/Popover";
import Grid from "@material-ui/core/Grid";
import Address from "./Address";
import General from "./General";
import Image from "./Image";

class UserCard extends Component {
  header = {
    textTransform: "capitalize",
    textAlign: "left"
  };

  state = {
    tab: "general",
    popover: {
      open: false,
      target: null
    }
  };

  onSwitch = view => {
    // this.context.setBusy(true);
    this.setState({ tab: view });
    setTimeout(() => {
      // this.context.setBusy(false);
    }, 200);
  };
  togglePopover = event => {
    let newState = !this.state.popover.open;
    let newTarget = newState ? event.target : null;

    this.setState({
      popover: {
        open: newState,
        target: newTarget
      }
    });
  };
  shouldComponentUpdate({ id }, nextState) {
    let shouldUpdate =
      id !== this.props.id ||
      nextState.popover.open !== this.state.popover.open ||
      nextState.tab !== this.state.tab;

    console.log("shouldUpdate: ", shouldUpdate);
    return shouldUpdate;
  }
  render() {
    console.log("UserCard:render()");

    const props = this.props;
    let tab = null;

    switch (this.state.tab) {
      case "location":
        tab = <Address location={this.props.location} />;
        break;
      default:
        tab = (
          <General
            gender={this.props.gender}
            dob={new Date(this.props.dob.date).toLocaleDateString()}
            phone={this.props.phone}
            cell={this.props.cell}
            email={this.props.email}
          />
        );
        break;
    }

    return (
      <Card>
        <CardHeader
          style={this.header}
          avatar={
            <Avatar
              onClick={this.togglePopover}
              aria-label=""
              src={props.picture}
              className=""
            />
          }
          action={
            <IconButton onClick={this.togglePopover}>
              <MoreVertIcon />
              <Popover
                id="simple-popper"
                open={this.state.popover.open}
                anchorEl={this.state.popover.target}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <Image src={this.props.lg_picture} />
              </Popover>
            </IconButton>
          }
          title={`${props.first_name} ${props.last_name}`}
          subheader={props.age}
        />
        <CardContent style={{ height: 60 }}>{tab}</CardContent>

        <CardActions>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Button
              onClick={() => {
                this.onSwitch("general");
              }}
              size="small"
              color="primary"
              value={0}
              disabled={this.state.tab === "general"}
            >
              General
            </Button>
            <Button
              onClick={() => {
                this.onSwitch("location");
              }}
              size="small"
              color="primary"
              value={1}
              disabled={this.state.tab === "location"}
            >
              Location
            </Button>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}

export default UserCard;
