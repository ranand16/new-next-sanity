import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "gwoaoxcb",
  dataset: "production",
  title: "My Personal New Next Webiste",
  apiVersion: "2023-04-01",
  basePath: "/radmin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});

export default config;
