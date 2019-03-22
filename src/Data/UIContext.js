import React from "react";

export const UIContext = React.createContext();

export default class UIContextProvider extends React.Component {
  state = {
    busy: false,

    setBusy: busy => {
      if (this.state.busy !== busy) {
        this.setState({ busy });
      }
    }
  };

  render() {
    return (
      <UIContext.Provider value={this.state}>
        {this.props.children}
      </UIContext.Provider>
    );
  }
}
