import React from "react";
import PersonListHeader from "../components/headerPersonList";

export default {
  title: "Person List Page/Person List Header",
  component: PersonListHeader,
};

export const Basic = () => <PersonListHeader title={'Discover Actors'} />;

Basic.storyName = "Default";