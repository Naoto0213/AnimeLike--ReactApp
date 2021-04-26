import { MemoryRouter } from "react-router-dom";
import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import TopPage from "./components/templates/Page/TopPage/TopPage";

const client: any = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.annict.com/graphql",
});

const App: React.FC = () => {
  return (
    <div className="">
      <ApolloProvider client={client}>
        <MemoryRouter>
          <TopPage />
        </MemoryRouter>
      </ApolloProvider>
    </div>
  );
};
export default App;
