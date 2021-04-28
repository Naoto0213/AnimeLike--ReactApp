import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import TopPage from "./components/templates/Page/TopPage/TopPage";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const client: any = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.annict.com/graphql",
});

const App: React.FC = () => {
  return (
    <div className="">
      <BrowserRouter>
        <TopPage />
      </BrowserRouter>
    </div>
  );
};
export default App;
