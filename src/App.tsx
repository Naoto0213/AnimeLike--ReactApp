import { MemoryRouter } from "react-router-dom";
import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import TopPage from "./components/templates/Page/TopPage/TopPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const client: any = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.annict.com/graphql",
});

const App: React.FC = () => {
  return (
    <Router>
      <div className="">
        <ApolloProvider client={client}>
          <MemoryRouter>
            <Switch>
              <Route path="/">
                <TopPage />
              </Route>
            </Switch>
          </MemoryRouter>
        </ApolloProvider>
      </div>
    </Router>
  );
};
export default App;
