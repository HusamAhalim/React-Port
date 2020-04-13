import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  expContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-around"
  },
  title: {
    margin: "16px",
    fontSize: "30px",
    fontFamily: "times",
    textTransform: "uppercase"
  }
});
