import { MemoryRouter } from "react-router-dom";
import React from "react";
import GenericTemplate from "./components/templates/HeaderNav/GenericTemplate";
import TopPegeCards from "./components/templates/TopPageCards/TopPegeCards";
import AnimeBox from "./components/templates/TopPageBox/AnimeBox";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import FrendGroupBox from "./components/templates/TopPageBox/FrendGroupBox";

const client: any = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.annict.com/graphql",
});

const boxTitles = [
  {
    title: "今期のアニメ",
  },
  {
    title: "全てのアニメ",
  },
  {
    title: "お気に入りアニメ",
  },
  {
    title: "更新されるアニメ",
  },
];

const App: React.FC = () => {
  return (
    <div className="">
      <ApolloProvider client={client}>
        <MemoryRouter>
          <GenericTemplate title="トップページ">
            <TopPegeCards />
            <FrendGroupBox />
            {boxTitles.map((data) => (
              <AnimeBox title={data.title} />
            ))}
          </GenericTemplate>
        </MemoryRouter>
      </ApolloProvider>
    </div>
  );
};
export default App;
