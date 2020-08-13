import React from "react";

import { GenericLayout } from "./index";
import componentNotes from "./read-me.md";

export default {
  title: "Layouts/Template",
  component: GenericLayout,
  parameters: { notes: componentNotes },
};

export const Base = () => <GenericLayout>Text</GenericLayout>;
