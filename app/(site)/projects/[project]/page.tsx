import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
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
    <div>
      <header className="flex items-center justify-between ">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow">
          {project.name}
        </h1>
        <Link
          href={`${project.demoUrl ?? project.gitUrl} `}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          Check project out!
        </Link>
      </header>
      <div className="text-lg text-gray-700 mt-5">
        {<PortableText value={project.content} />}
      </div>
      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl "
        />
      )}
    </div>
  );
}
