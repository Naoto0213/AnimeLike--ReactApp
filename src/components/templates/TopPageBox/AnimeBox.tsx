// Material-UI
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import NowAnimeCards from "../Cards/NowAnimeCards";
import Swipers from "./Swipers";
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

const AnimeBox = (props) => {
  const { title } = props;
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.Cards}>
        <h2 className={classes.CardsTitle}>{title}</h2>
        <div className={classes.Swipers}>
          <Swipers />
        </div>
        <div className={classes.AnimeCardsSP}>
          <NowAnimeCards />
          <NowAnimeCards />
          <NowAnimeCards />
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.CardBoxItemButton}
        >
          すべて見る
        </Button>
      </Card>
    </div>
  );
};

export default AnimeBox;
