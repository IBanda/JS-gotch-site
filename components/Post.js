import React from 'react';
import { Col } from 'react-bootstrap';
import Link from 'next/link';
import PostTime from './PostTime';
import propTypes from 'prop-types';
import { Arrow } from '../components/Components';
const Post = ({ post }) => {
  return (
    <>
      <Col md="4 mb-4">
        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
          <a>
            <img className="featuredImage" src={post.feature_image} alt="" />
          </a>
        </Link>

        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
          <a className="linkTitle">
            <h3 className="postTitle">{post.title} </h3>
          </a>
        </Link>

        <PostTime post={post} />
        <div>
          <Link href="/post/[slug]" as={`/post/${post.slug}`}>
            <a className="readNowLink">
              Read Now <Arrow />
            </a>
          </Link>
        </div>
      </Col>

      <style jsx>{`
        .postTitle {
          font-weight: bold;
          font-size: 1.3em;
        }
        .featuredImage {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .linkTitle {
          font-weight: bold;
        }

        .readNowLink {
          font-size: 0.8rem;

          align-items: center;
          text-decoration: none;
          border-bottom: 2px solid #f7e032;
        }
      `}</style>
    </>
  );
};

Post.propTypes = {
  post: propTypes.object.isRequired,
};

export default Post;
