import React from "react";

import GenericTemplate from "./TopPageUI/GenericTemplate";
import FrendGroupBox from "./TopPageBox/FrendGroupBox";
import TopPegeCards from "./TopPageBox/TopPageCard/TopPegeCards";
import AnimeBox from "./TopPageBox/AnimeBox";

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
