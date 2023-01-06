import { FC } from "react";
import { use } from "react";
import { getPosts } from "../lib/posts";
import Image from "next/image";
import Link from "next/link";

async function getInitialPosts() {
  const posts = getPosts();
  return posts;
}

const shortify = (text: string, maxLength = 60) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + " ...";
}

const Page: FC = () => {
  const posts = use(getInitialPosts());
  
  return (
    <div>
      <h2 className="sr-only">Posts</h2>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {posts.map(post => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="group">
            <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <Image
                fill
                src={post.coverImage}
                alt={""}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{post.title}</h3>
            <p className="mt-1 text-md font-medium text-gray-900">{shortify(post.description, 100)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page;
