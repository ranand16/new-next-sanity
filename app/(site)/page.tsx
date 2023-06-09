import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Rishabh
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">Check out my projects!</p>
      <h2 className="mt-16 font-bold text-gray-700 text-3xl">Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) =>
          p.demoUrl ? (
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
          ) : null
        )}
      </div>
      <h2 className="mt-16 font-bold text-gray-700 text-3xl">Other projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) =>
          p.gitUrl ? (
            <Link
              key={p._id}
              className="border-2 border-gray-500 rounded-lg p-3 hover:scale-105 hover:border-blue-500 transition duration-150"
              href={`/projects/${p.slug}`}
            >
              <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {p.name}
              </div>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}
