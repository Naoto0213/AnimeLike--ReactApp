import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles, Theme } from "@material-ui/core/styles";
import NowAnimeCards from "../TopPage/Box/Card/NowAnimeCards";
import Grid from "@material-ui/core/grid";

const useStyles = makeStyles((theme) => ({
  Grid: {
    padding: "0px 20px 0px",
  },
  PageTitle: {
    fontSize: 20,
    color: "#444",
    flexGrow: 1,
  },
  Cards: {
    display: "flex",
    maxWidth: 2021,
    borderRadius: 30,
    background: "#fff",
  },
  CardsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#555",
    marginTop: 10,
  },
}));

interface eachData {
  title: string;
}

const eachData = [
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
];

const NowAnime = () => {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.PageTitle}>今期のアニメ</h2>
      <Card className={classes.Cards}>
        <Grid container justify="center">
          {eachData.map((data) => (
            <Grid item md={4} sm={6} xs={12} className={classes.Grid}>
              <h2>{data.title}</h2>
              <NowAnimeCards />
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
};

export default NowAnime;
