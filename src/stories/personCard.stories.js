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
  const sampleNoProfile = { ...SamplePerson, profile_path: undefined };
  return <PersonCard person={sampleNoProfile} />;
};
Exceptional.storyName = "exception";
