import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import { createClientConfig } from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  const client = createClient(createClientConfig);
  return client.fetch(
    groq`*[_type=="project"]{
        _id, 
        _createdAt, 
        name, 
        demoUrl, 
        gitUrl, 
        "slug":slug.current, 
        "image": image.asset->url,
        content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient(createClientConfig);
  return client.fetch(
    groq`*[_type=="project" && slug.current == $slug][0]{
        _id, 
        _createdAt, 
        name, 
        demoUrl, 
        gitUrl, 
        "slug":slug.current, 
        "image": image.asset->url,
        content
    }`,
    { slug }
  );
}
