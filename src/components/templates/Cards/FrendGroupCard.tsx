import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
      <Button variant="outlined" className={classes.CardsTitleButton}>
        グループを作成する
      </Button>
      <Button variant="outlined" className={classes.CardsTitleButton}>
        グループを見る
      </Button>
    </div>
  );
};

export default FrendGroupCard;
