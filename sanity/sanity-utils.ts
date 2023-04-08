import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import { createClientConfig } from "./config/client-config";
import { Page } from "@/types/Page";

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

export async function getPages(): Promise<Page[]> {
  const client = createClient(createClientConfig);
  return client.fetch(
    groq`*[_type=="page"]{
        _id, 
        _createdAt, 
        title, 
        "slug":slug.current, 
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  const client = createClient(createClientConfig);
  return client.fetch(
    groq`*[_type=="page" && slug.current == $slug][0]{
        _id, 
        _createdAt, 
        title, 
        "slug":slug.current, 
        content
    }`,
    { slug }
  );
}
