import React from "react";
import PersonCard from "../components/personCard";
import SamplePerson from "./sampleData";

export default {
  title: "Person List Page/PersonCard",
  component: PersonCard,
};

export const Basic = () => {
  return <PersonCard person={SamplePerson} />;
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SamplePerson, poster_path: undefined };
  return <PersonCard person={sampleNoPoster} />;
};
Exceptional.storyName = "exception";
