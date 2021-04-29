import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HeaderNav from "./components/templates/UI/HeaderNav";
import Routers from "./components/Routers";

const client: any = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.annict.com/graphql",
});

const App: React.FC = () => {
  return (
    <div className="">
      <BrowserRouter>
        <HeaderNav title="Top">
          <Routers />
        </HeaderNav>
      </BrowserRouter>
    </div>
  );
};
export default App;
