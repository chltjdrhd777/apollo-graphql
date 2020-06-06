import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import styled from "styled-components";
import { Bg } from "../components/Movie";

//useParams = extract the id of present page

//if the query structure requires arguments, I should write the code like that
//in GraphQl, my schema to obtain specific one movie information, it's feature is like in query
//movies: (_,{id}) => getMovies(id)

//getMovies(id) <--- I should write the code for apollo
//apollo also check the schema automaticall.
//In schema, movies's id is "Int!" and I have to apply this feature

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      description_intro
      rating
      language
    }
  }
`;
const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 35%;
`;
const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 5px;
`;

const Subtitle = styled.h4`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Rating = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 15px;
`;

const Poster = styled.div<Bg>`
  width: 26%;
  height: 40%;
  background-color: transparent;
  background-image: url(${(Bg) => Bg.bg});
  background-size: cover;
  background-position: center center;
`;

//How to draw information with a prop,
//! Note!!!
//? I can't access to the data directly like "<div>data.movie.title</div>"
//? the reason is that during loading process, the page cannot identify the data
//? therefore, I should request data after checking conditional things like loading

export default () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: idInt },
  });
  console.log(data);
  return (
    <Container>
      <Column>
        <Title>{loading ? "loading..." : data.movie.title}</Title>
        {!loading && data.movie && (
          <>
            <Subtitle>Language : {data.movie.language}</Subtitle>
            <Rating>Rating : {data.movie.rating}</Rating>
            <Description>{data.movie.description_intro}</Description>
          </>
        )}
      </Column>
      <Poster
        bg={data && data.movie ? data.movie.medium_cover_image : ""}
      ></Poster>
    </Container>
  );
};
