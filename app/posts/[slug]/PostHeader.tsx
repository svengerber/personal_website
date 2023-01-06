import { FunctionComponent } from "react";
import Image from "next/image";
import { Post } from "../../../interfaces/Post";

type Props = {
  post: Post
}

const BlogHeader: FunctionComponent<Props> = ({post}) => {

  return (
    <div className="post-detail-header">
      <div className="flex flex-row justify-between mb-2">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only">{post.author}</span>
              <div className="relative h-10 w-10 !mb-0" >
                <Image 
                  priority
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  src={post.authorImage} alt="" 
                />
              </div>
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 !mb-0">
              <a href="#" className="hover:underline">
                {post.author}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </div>
        </div>
        <div className="flex self-end">
          {/* Social Links Here */}
        </div>
      </div>
      <h1 className="font-bold text-4xl mb-1">{post.title}</h1>
      <h2 className="post-detail-header-subtitle mb-2 text-xl text-gray-600">{post.description}</h2>
      <div className="h-96 bg-black mx-auto w-full relative">
        <Image
          priority
          layout="fill"
          objectFit="cover"
          src={post.coverImage} alt=""/>
      </div>
    </div>
  )
}

export default BlogHeader;
