import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import propTypes from 'prop-types';
import ThemeContext from './ThemeContext';
const PostNavigation = ({ posts, index }) => {
  const color = useContext(ThemeContext);
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
                <img
                  className="leftArrow pointer"
                  src={`/images/right${color.variation}.svg`}
                  alt="left_arrow"
                />
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
                <img
                  className="pointer"
                  src={`/images/right${color.variation}.svg`}
                  alt="right_arrow"
                />
              </a>
            </Link>
          )}
        </Col>
      </Row>
      <style jsx>{`
        .controllers {
          margin-bottom: 10%;
        }
        .pointer {
          max-width: 15px;
          width: 100%;
          margin-left: 10px;
        }
        .leftArrow {
          transform: rotate(180deg);
          margin-left: 0;
          margin-right: 10px;
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
