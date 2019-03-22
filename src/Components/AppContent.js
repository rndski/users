import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import UserCard from "./UserCard";
import { AppContext } from "../Data/AppContext";

const AppContent = props => {
  const context = useContext(AppContext);

  const content = {
    padding: "7rem 3rem 3rem 3rem"
  };

  const createCards = items => {
    const cards = items.map((item, i) => {
      return (
        <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
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
          />
        </Grid>
      );
    });
    return cards;
  };

  return (
    <Grid style={content} container spacing={40}>
      {createCards(context.users)}
    </Grid>
  );
};

export default AppContent;
