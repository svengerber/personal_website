import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';


export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center'
}));

export default function Home({ posts }) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
      {posts.map(({ slug, frontmatter }) => (
        
        <div key={slug}>
          <Grid xs={8}>
            <Item>
            <Link href={`/post/${slug}`} legacyBehavior>
            <a>
              <Image
                width={540}
                height={300}
                alt={frontmatter.title}
                src={`/${frontmatter.coverImage}`}
              />
              <h1>{frontmatter.title}</h1>
            </a>
          </Link>
          </Item>
          </Grid>

        </div>
      ))}
        </Grid>
      </Box>
    </div>
  );
}

