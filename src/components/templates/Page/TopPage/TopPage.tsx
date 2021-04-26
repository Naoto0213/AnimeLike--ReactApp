import React from "react";

import GenericTemplate from "./UI/GenericTemplate";
import FrendGroupBox from "./Box/FrendGroupBox";
import TopPegeCards from "./Box/Card/TopPegeCards";
import AnimeBox from "./Box/AnimeBox";

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

const TopPage: React.FC = () => {
  return (
    <div className="">
      <GenericTemplate title="トップページ">
        <TopPegeCards />
        <FrendGroupBox />
        {boxTitles.map((data) => (
          <AnimeBox title={data.title} />
        ))}
      </GenericTemplate>
    </div>
  );
};
export default TopPage;
