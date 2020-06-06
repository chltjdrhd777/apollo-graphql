import React from "react";
import { Link } from "react-router-dom";
import { DataType } from "../type";
import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
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

export default ({ id, bg }: DataType) => (
  <Container>
    <Link to={`/${id}`}>
      <Poster bg={bg} />
    </Link>
  </Container>
);
