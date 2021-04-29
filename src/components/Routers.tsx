import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import CrateGroup from "./templates/Page/CrateGroupPage/CrateGroup";
import TopPage from "./templates/Page/TopPage/TopPage";
import NowAnime from "./templates/Page/AnimePage/NowAnime";
import FavoriteAnime from "./templates/Page/AnimePage/FavoriteAnime";

const Routers = () => {
  return (
    <div className="">
      <Switch>
        <Route path="/TopPage" component={TopPage} />
        <Route path="/CrateGroup" component={CrateGroup} />
        <Route path="/NowAnime" component={NowAnime} />
        <Route path="/FavoriteiAnime" component={FavoriteAnime} />
      </Switch>
    </div>
  );
};

export default Routers;
