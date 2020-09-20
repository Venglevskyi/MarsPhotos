import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textAlign: "center",
    background: "wheat",
    [theme.breakpoints.down("md")]: {
      marginBottom: 12,
    },
  },
  container: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      height: 500,
    },
    overflow: "auto",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  media: {
    height: 200,
  },
  select: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 16px",
  },
  button: {
    padding: "6px 26px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  title: {
    minWidth: 320,
    maxWidth: 700,
    padding: 6,
    fontSize: "2rem",
    color: "wheat",
    margin: "0 auto 2em",
    borderRight: "1px solid wheat",
    borderLeft: "1px solid wheat",
  },
}));

export { useStyles };
