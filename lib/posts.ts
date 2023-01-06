
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "../interfaces/Post";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const markdownToHtml = async (markdown: string) => {
  const result = await remark()
    .use(html)
    .use(remarkGfm)
    .process(markdown);
  
  return result.toString();
}

const getDir = (path: string) => join(process.cwd(), path);
const POST_DIR = getDir("/posts");

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
}

const getPostFileNames = () => {
  return getFileNames(POST_DIR);
}

const getItemInPath = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const {data, content} = matter(fileContent);
  return {...data, content} as Post;
}

const getPost = (name: string) => {
  const post = getItemInPath(join(POST_DIR, name));
  post.slug = name.replace(/\.md$/, "");
  return post;
}

const getPostBySlug = async (slug: string) => {
  const fileName = slug + '.md';
  const post = getPost(fileName);
  post.content = await markdownToHtml(post.content);
  return post;
}

const getPosts = (): Post[] => {
  const names = getPostFileNames();

  const items = names.map(getPost);
  return items;
}

export {
  getPostFileNames,
  getPosts,
  getPostBySlug
}
