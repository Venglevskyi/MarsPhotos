import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import image from "../../images/earth-1149733_1920.jpg";

const useStyles = makeStyles({
  root: {
    padding: 20,
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "100vw",
    minHeight: "100vh",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} className={classes.root}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
