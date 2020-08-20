import React from "react";

import Layout from "../components/layout/layout";
import SubLinks from "../components/sublink/subLink";
import TestActivity from "../components/testActivity/testActivity";
import calender from "../icons/calender.svg"

export default () => {
  let links = [
    { name: "overview", active: false },
    { name: "teams", active: false },
    { name: "test", active: true },
    { name: "files", active: false },
    { name: "progress", active: false },
  ];
  return (
    <Layout>
      <SubLinks links={links} displaySwitcher={false} icon={calender} duration="10-june-2020"/>
      <TestActivity />
    </Layout>
  );
};
