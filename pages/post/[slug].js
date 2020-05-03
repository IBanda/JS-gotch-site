import React from 'react';
import {
  IntroWrapper,
  PostTime,
  ThemeWrapper,
  PostNavigation,
} from '../../components/Components';
import { getPost, getPosts } from '../api/posts';
import propTypes from 'prop-types';

const Post = ({ post, posts, index }) => {
  return (
    <ThemeWrapper>
      {post && (
        <div className="postBody">
          <h1 className="text-center">{post.title}</h1>
          <PostTime post={post} align="text-center" />
          <img className="featureImage" src={post.feature_image} alt="" />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      )}
      <PostNavigation posts={posts} index={index} />
      <IntroWrapper />
      <style jsx>{`
        .postBody {
          padding: 4% 0;
        }
        .featureImage {
          width: 100%;
          margin: 4% 0;
        }
      `}</style>
    </ThemeWrapper>
  );
};

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts && posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  const index = posts.findIndex((post) => post.slug === params.slug);
  const post = await getPost(params.slug);
  return {
    props: {
      post,
      posts,
      index,
    },
  };
};

Post.propTypes = {
  post: propTypes.object.isRequired,
  posts: propTypes.arrayOf(propTypes.object).isRequired,
  index: propTypes.number.isRequired,
};

export default Post;
