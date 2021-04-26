import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
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
}));

const ReturnAnimeCards = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const url = "https://api.github.com/users/Neitworks";
  const fetchProfile = () => {
    return new Promise((resolve, reject) => {
      fetch(url).then((res: Response) => {
        res
          .json()
          .then((json) => {
            console.log("Asynchrous Promise Sample 1:", json);
            resolve(json);
          })
          .catch((error) => {
            console.error(error);
            reject(null);
          });
      });
    });
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Words of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ReturnAnimeCards;
