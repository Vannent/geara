import { gql, useQuery } from "@apollo/client";
import React from "react";

const CompleteTaskQuery = gql`
  query {
    tasks {
      id
      title
      description
      status
    }
  }
`;

const Board = () => {
  const { data, loading, error } = useQuery(CompleteTaskQuery, {
    onCompleted: (data) => {
      console.log(data);
    },
  });
  return <div className="bg-gray-200 w-screen h-[85vh]">board</div>;
};

export default Board;
