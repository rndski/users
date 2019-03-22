import React from "react";
import UserData from "../Data/UserData";

export const AppContext = React.createContext();

export default class AppContextProvider extends React.Component {
  state = {
    users: UserData.results
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
