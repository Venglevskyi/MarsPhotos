import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: 1200,
  },
  item: {
    minWidth: 320,
    margin: "auto",
  },
  spiner: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  btnPagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: 16,
  },
}));

export { useStyles };
