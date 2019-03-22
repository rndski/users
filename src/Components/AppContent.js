import React, { /*useContext,*/ useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import UserCard from "./UserCard";
import loadUserData from "../Data/LoadUsers";

const USER_URL = "https://randomuser.me/api/";

const AppContent = props => {
  const [users, setUsers] = useState([]);

  const content = {
    padding: "7rem 3rem 3rem 3rem"
  };

  useEffect(() => {
    console.log("UseEffect");
    if (users.length === 0) {
      loadUserData(50)
        .then(res => {
          console.log("got:", res.data.results);
          setUsers(res.data.results);
        })
        .catch(e => {
          console.log("Something went wrong with getting the users... :(", e);
          throw e;
        });
    }
  }, []);

  const add = () => {
    loadUserData(10)
      .then(res => {
        console.log("add:");
        const s = [...users, ...res.data.results];
        setUsers(s);
      })
      .catch(e => {
        console.log("Something went wrong with getting the users... :(", e);
        throw e;
      });
  };

  const createCards = items => {
    const cards = items.map((item, i) => {
      return (
        <Grid item key={item.login.uuid} xs={12} sm={6} md={4} lg={3}>
          <UserCard
            title={item.name.title}
            picture={item.picture.thumbnail}
            lg_picture={item.picture.large}
            last_name={item.name.last}
            first_name={item.name.first}
            age={item.dob.age}
            location={item.location}
            gender={item.gender}
            email={item.email}
            dob={item.dob}
            phone={item.phone}
            cell={item.cell}
            id={item.login.uuid}
          />
        </Grid>
      );
    });
    return cards;
  };

  return (
    <React.Fragment>
      <Grid style={content} container spacing={40}>
        {createCards(users)}
      </Grid>
      <button onClick={add}>Add</button>
    </React.Fragment>
  );
};

export default AppContent;
