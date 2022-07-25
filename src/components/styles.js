import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
    background: "tomato",
  },
  toolbar: {
    height: "70px",
    background: "blue",
  },
  content: {
    flexGrow: 1,
    padding: "2em",
    background: "yellow",
  },
}));
