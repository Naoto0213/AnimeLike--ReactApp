import React from "react";
import FrendGroupBox from "./Box/FrendGroupBox";
import TopPegeCards from "./Box/Card/TopPegeCards";
import AnimeBox from "./Box/AnimeBox";
import HeaderNav from "../../UI/HeaderNav";

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
      <TopPegeCards />
      <FrendGroupBox />
      {boxTitles.map((data) => (
        <AnimeBox title={data.title} />
      ))}
    </div>
  );
};
export default TopPage;
