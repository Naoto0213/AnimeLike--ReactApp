import React from "react";
import Swipers from "./Swipers";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import NowAnimeCards from "./Card/NowAnimeCards";
import FrendGroupCard from "./Card/FrendGroupCard";
// Material-UI Icons

// Style
const useStyles = makeStyles((theme) => ({
  Cards: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    maxWidth: 2020,
    borderRadius: 30,

    background: "#fff",
  },
  CardsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#555",
    marginTop: 30,
  },
  CardBoxItemButton: {
    marginTop: 10,
    marginBottom: 40,
    color: "#fff",
    width: 200,
    height: 40,
  },
  Swipers: {
    display: "block",
    maxWidth: 1200,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  AnimeCardsSP: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: 20,
      width: 200,
    },
  },
}));

const FrendGroupBox = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.Cards}>
        <h2 className={classes.CardsTitle}>友達とアニメを共有しよう！</h2>
        <FrendGroupCard />
      </Card>
    </div>
  );
};

export default FrendGroupBox;
