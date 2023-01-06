import { NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { use } from "react";
import { getPostBySlug, getPosts } from "../../../lib/posts";
import PostHeader from "./PostHeader";

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  params: Params;
}

const getInitialPost = async (slug: string) => {
  const post = getPostBySlug(slug);
  return post;
}

const PostDetail: NextPage<Props> = ({params}) => {
  const post = use(getInitialPost(params.slug));

  return (
    <div className="w-2/3 m-auto">
      <PostHeader post={post} />
      <article className="prose lg:prose-xl">
        <div dangerouslySetInnerHTML={{__html: post.content}} />
      </article>
    </div>
  )
}

export function generateStaticParams() {
  const posts = getPosts();

  return posts.map(post => ({
    slug: post.slug
  }))
}

export default PostDetail;
