import React from "react";

// Material-UI
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Cards: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0 auto",
      maxWidth: "2020px",
      borderRadius: "30px",
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
      background: "#FF9800",
      "& h2": {
        paddingTop: "50px",
        textAlign: "center",
        color: "White",
        fontSize: "40px",
        fontWeight: "bold",
        [theme.breakpoints.down("md")]: {
          fontSize: 26,
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: 18,
        },
      },
      "& h3": {
        fontSize: "20px",
        [theme.breakpoints.down("md")]: {
          fontSize: 16,
        },
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
        textAlign: "center",
        color: "White",
        fontWeight: "bold",
      },
    },
    ButtonBox: {
      margin: "50px 0px 20px",
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    link: {
      textDecoration: "none",
    },
    CardsTitleButton: {
      margin: "0px 30px 60px",
      color: "white",
      width: 321,
      height: 68,
      border: "1px solid rgba(255,255,255,1)",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        width: 200,
        height: 40,
        margin: "0px 0px 30px",
      },
    },
  })
);
// Material-UI Icons

// Style

const TopPageCards: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.Cards}>
        <h2>好きなアニメを管理しよう！</h2>
        <h3>好きなアニメを登録して見逃しを防ぐアプリ</h3>
        <div className={classes.ButtonBox}>
          <Link to="/NowAnime" className={classes.link}>
            <Button variant="outlined" className={classes.CardsTitleButton}>
              放送中アニメ
            </Button>
          </Link>
          <Link to="/FavoriteAnime" className={classes.link}>
            <Button variant="outlined" className={classes.CardsTitleButton}>
              お気に入りアニメを見る
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default TopPageCards;
