import React from 'react';
import {
  Layout,
  Post,
  IntroWrapper,
  ThemeWrapper,
} from '../components/Components';
import { getPosts } from './api/posts';
import { Row } from 'react-bootstrap';
import propTypes from 'prop-types';

const Index = ({ posts }) => {
  return (
    <ThemeWrapper>
      <IntroWrapper />
      <div className="main">
        <ul className="postList">
          <li className="postItem">
            <Row>
              {posts && posts.map((post) => <Post key={post.id} post={post} />)}
            </Row>
          </li>
        </ul>
      </div>
      <style jsx>{`
        #nprogress .bar {
          width: 0;
        }
        #nprogress .peg {
        }

        .main {
          padding: 5% 0;
        }
        .postList {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .postItem {
          margin-bottom: 20px;
        }
      `}</style>
    </ThemeWrapper>
  );
};

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

Index.propTypes = {
  map: propTypes.func,
  posts: propTypes.arrayOf(propTypes.object),
};
export default Index;
