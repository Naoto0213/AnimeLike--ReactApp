import React, { Component } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, Route, Switch } from "react-router-dom";
import CrateGroup from "../../../CrateGroup/CrateGroup";
import GroupList from "../../../CrateGroup/GroupList";

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
  Link: {
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
  CardsTitleButton: {
    margin: "20px 30px 60px",
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
      <Link to="/CrateGroup" style={{ textDecoration: "none" }}>
        <Button variant="outlined" className={classes.CardsTitleButton}>
          グループを作成する
        </Button>
      </Link>
      <Link to="/GroupList" style={{ textDecoration: "none" }}>
        <Button variant="outlined" className={classes.CardsTitleButton}>
          グループを見る
        </Button>
      </Link>

      <Switch>
        <Route path="/CrateGroup" component={CrateGroup} />
        <Route path="/Grouplist" component={GroupList} />
      </Switch>
    </div>
  );
};

export default FrendGroupCard;
