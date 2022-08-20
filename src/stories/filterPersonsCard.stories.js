import React from "react";
import FilterPersonsCard from "../components/filterPersonsCard";

export default {
  title: "Person List Page/FilterPersonsCard",
  component: FilterPersonsCard,
};

export const Basic = () => {
  return <FilterPersonsCard />;
};
Basic.storyName = "Default";