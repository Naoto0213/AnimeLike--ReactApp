import gql from "graphql-tag";

export const NOW_ANIME_API = gql`
  query searchWorks(
      $seasons()
      orderBy: { field: WATCHERS_COUNT, direction: DESC }
      first: 10
    ) {
      {
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
