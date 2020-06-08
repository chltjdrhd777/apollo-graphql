import React from "react";
import { Link } from "react-router-dom";
import { DataType } from "../type";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int!, $isLiked: Boolean!) {
    likeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Container = styled.div`
  height: 100px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 7px;
`;

export interface Bg {
  bg: string;
}

//background-size : cover(fit to a containger) || contain(maintain ratio)<-- unrecommendable
const Poster = styled.div<Bg>`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

//? useMutation = it is similar to useState
//? const [name] = useMutation(mutation requset, {variables <--- like params in axios.get})
//? that means like "const likeMovie = () => likeMovie() in apollo's resolvers"

export default ({ id, bg, isLiked }: DataType) => {
  const [likeMovie] = useMutation(LIKE_MOVIE, { variables: { id, isLiked } });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button
        onClick={() => {
          likeMovie();
        }}
      >
        {isLiked ? "Unlike" : "Like"}
      </button>
    </Container>
  );
};
