import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "gwoaoxcb",
    dataset: "production",
    apiVersion: "2023-04-01",
  });
  return client.fetch(
    groq`*[_type=="project"]{
        _id, 
        _createdAt, 
        name, 
        url, 
        "slug":slug.current, 
        "image": image.asset->url,
        content
    }`
  );
}
