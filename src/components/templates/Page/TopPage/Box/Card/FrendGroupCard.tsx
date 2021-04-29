import React, { Component } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, Route, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 270,
    boxShadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    [theme.breakpoints.down("sm")]: {
      minWidth: 220,
      marginBottom: 30,
    },
  },
  link: {
    textDecoration: "none",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  ButtonBox: {
    margin: "50px 0px 20px",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  CardsTitleButton: {
    margin: "0px 30px 60px",
    color: "rgba(255,152,0,1)",
    width: 321,
    height: 68,
    border: "1px solid rgba(255,152,0,1);",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      width: 200,
      height: 40,
      margin: "0px 0px 30px",
    },
  },
}));

const FrendGroupCard = () => {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="">
      <div className={classes.ButtonBox}>
        <Link to="/CrateGroup" className={classes.link}>
          <Button variant="outlined" className={classes.CardsTitleButton}>
            グループを作成する
          </Button>
        </Link>
        <Link to="/CrateGroup" className={classes.link}>
          <Button variant="outlined" className={classes.CardsTitleButton}>
            グループを見る
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FrendGroupCard;
