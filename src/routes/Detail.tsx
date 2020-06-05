import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import styled from "styled-components";

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
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
`;
const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25px;
  height: 60px;
  background-color: transparent;
`;

//How to draw information with a prop,
export default () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: idInt },
  });

  console.log(loading, data);
  return (
    <Container>
      <Column>
        <Title>hi</Title>
        <Subtitle>sub</Subtitle>
        <Description>description</Description>
      </Column>
      <Poster></Poster>
    </Container>
  );
};
