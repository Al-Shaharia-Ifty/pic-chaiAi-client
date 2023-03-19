import React from "react";
import Card from "./Card";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.slice(0, 14).map((post) => <Card key={post._id} {...post} />);
  }
  return (
    <h2 className="mt-5 font-bold text-green-600 text-xl uppercase">{title}</h2>
  );
};

export default RenderCards;
