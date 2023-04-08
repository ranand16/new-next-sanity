import { getProject } from "@/sanity/sanity-utils";
import Link from "next/link";

type Props = {
  params: {
    project: string;
  };
};

export default async function project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  console.log(project);
  return (
    <div className="max-w-3xl mx-auto py-20">
      <header>
        <h1 className="flex items-center justify-between">{project.name}</h1>
        <Link
          href={`${project.demoUrl ?? project.gitUrl} `}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check project out!
        </Link>
      </header>
    </div>
  );
}
