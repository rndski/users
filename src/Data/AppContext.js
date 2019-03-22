import React from "react";
//import UserData from "../Data/UserData";
import axios from "axios";
const USER_URL = "https://randomuser.me/api/";

export const AppContext = React.createContext();

export default class AppContextProvider extends React.Component {
  state = {
    users: [], //UserData.results,

    loadUsers: count => {
      console.log("loadUsers!", count);
      if (count === undefined) count = 6;
      let url = `${USER_URL}?results=${count}`;
      console.log(url);
      axios
        .get(url, { headers: { mode: "no-cors" } })
        .then(res => {
          const s = [...this.state.users, ...res.data.results];
          console.log(s);
          this.setState({
            users: s
          });
          console.log(res.data.results);
        })
        .catch(e => {
          console.log("Something went wrong with getting the users... :(");
        });
    }
  };

  componentDidMount = () => {
    // this.state.loadUsers(5);
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
