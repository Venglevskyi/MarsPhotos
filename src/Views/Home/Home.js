import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { CSSTransition } from "react-transition-group";

import {
  curiosity,
  opportunity,
  spirit,
} from "../../Components/CardItem/roverOptions";

import { CardItem } from "../../Components/CardItem/CardItem";
import { useStyles } from "./styles";
import "./animation.css";

const HomePage = ({ history }) => {
  const classes = useStyles();
  return (
    <>
      <Typography
        align="center"
        component="h1"
        gutterBottom={true}
        display="block"
        className={classes.title}
      >
        Choose your rover and let's go watch Mars
      </Typography>
      <Box className={classes.container}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={2000}
          classNames="cardCuriosity"
          unmountOnExit
        >
          <Box style={{ display: "inline-block" }}>
            <CardItem options={curiosity} history={history} />
          </Box>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={2500}
          classNames="cardOpportunity"
          unmountOnExit
        >
          <Box style={{ display: "inline-block" }}>
            <CardItem options={opportunity} history={history} />
          </Box>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={3000}
          classNames="cardSpirit"
          unmountOnExit
        >
          <Box style={{ display: "inline-block" }}>
            <CardItem options={spirit} history={history} />
          </Box>
        </CSSTransition>
      </Box>
    </>
  );
};

export default HomePage;
