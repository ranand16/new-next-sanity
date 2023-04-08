import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Rishabh
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">Check out my projects!</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl"></h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <Link
            key={p._id}
            className="border-2 border-gray-500 rounded-lg p-3 hover:scale-105 hover:border-blue-500 transition duration-150"
            href={`/projects/${p.slug}`}
          >
            {p.image && (
              <Image
                src={p.image}
                alt={p.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}

            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {p.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
