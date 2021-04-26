import React from "react";
import { makeStyles, Theme, fade } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InputBase from "@material-ui/core/InputBase";

// Material-Ui icons
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: 30,
    position: "relative",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  searchBox: {
    display: "flex",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon

    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.secondary,
  },
}));

const Searchbox = () => {
  const classes = useStyles();
  return (
    <div className="">
      <Link to="/products" className={classes.link}>
        <div className={classes.searchBox}>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <div className={classes.search}>
              <InputBase
                placeholder="アニメを見つける"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </ListItem>
        </div>
      </Link>
    </div>
  );
};

export default Searchbox;
