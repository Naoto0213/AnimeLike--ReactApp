import gql from "graphql-tag";

export const NOW_ANIME_API = gql`
  query searchWorks($seasons: Int, $first: Number) {
    searchWorks(season: $season, first: $first) {
      edges {
        node {
          title
          episodesCount
          image {
            twitterBiggerAvatarUrl
          }
        }
      }
    }
  }
`;
