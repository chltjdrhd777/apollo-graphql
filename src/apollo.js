import ApolloClient from "apollo-boost";

//in schema, I set the definition of each items as Movie
//In the front-end, I can configure received caches with apollo's config called "resolvers"
//For example, I called information with gql`{movies{id medium_cover_image}}`

//? then, I can get the information's cache data
//? with resolvers, I can push everything I want to add in cache data like that

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
  },
});

//? And just, go to the gql request form and add this customized information like
//? "gql`id medium_cover_image isLiked @client`" <--- @client means it is added from client to back-end

export default client;
