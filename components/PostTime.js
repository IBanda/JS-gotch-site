import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
const PostTime = ({ post, align = '' }) => {
  return (
    <>
      <p className={`time ${align}`}>
        {moment(post.created_at).format('LL')} .
        <span className="readingTime">{post.reading_time} min read</span>
      </p>
      <style jsx>
        {`
          .time {
            font-size: 0.7rem;
            margin: 0;
          }
          .readingTime {
            text-transform: uppercase;
          }
        `}
      </style>
    </>
  );
};

PostTime.propTypes = {
  post: propTypes.object.isRequired,
  align: propTypes.string,
};

export default PostTime;
