import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { Arrow } from './svg';
import propTypes from 'prop-types';

const PostNavigation = ({ posts, index }) => {
  return (
    <div className="controllers">
      <Row>
        <Col md="6 mt-3">
          {posts && index === 0 ? (
            ''
          ) : (
            <Link
              href="/post/[slug]"
              as={`/post/${posts && posts[index - 1].slug}`}
            >
              <a className="ctrl mr-2">
                <Arrow rotate="rotate" />
                {posts[index - 1].title}
              </a>
            </Link>
          )}
        </Col>
        <Col md="6 mt-3 text-right">
          {posts && index === posts.length - 1 ? (
            ''
          ) : (
            <Link href="/post/[slug]" as={`/post/${posts[index + 1].slug}`}>
              <a className="ctrl ml-2">
                {posts[index + 1].title}
                <Arrow />
              </a>
            </Link>
          )}
        </Col>
      </Row>
      <style jsx>{`
        .controllers {
          margin-bottom: 10%;
        }
        .ctrl {
          font-size: 0.8rem;
          text-decoration: none;
          border-bottom: 2px solid #f7e032;
        }
      `}</style>
    </div>
  );
};
PostNavigation.propTypes = {
  posts: propTypes.array,
  index: propTypes.number,
};
export default PostNavigation;
