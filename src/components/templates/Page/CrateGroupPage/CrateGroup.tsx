import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  PageTitle: {
    fontSize: 25,
    color: "#444",
  },
}));

const CrateGroup = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.PageTitle}>グループ一覧</h2>
      <Card></Card>
    </div>
  );
};

export default CrateGroup;
