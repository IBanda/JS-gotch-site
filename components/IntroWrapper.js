import React from 'react';
const IntroWrapper = () => {
  return (
    <>
      <div className="introWrapper">
        <div>
          <p className="intro">
            A blog by{' '}
            <a href="https://twitter.com/banda_ian" className="myName">
              Ian Banda
            </a>
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .introWrapper {
            text-align: center;
            font-size: 1em;
          }
          .profileImage {
            max-width: 50px;
            max-height: 50px;
            width: 100%;
            border-radius: 50%;
          }
          .intro {
            margin-bottom: 1em;
          }
          .myName {
            font-size: 1em;
            display: flex;
            align-items: center;
            text-decoration: none;
            display: inline-block;
            border-bottom: 2px solid #f7e032;
            padding-bottom: 0;
          }
        `}
      </style>
    </>
  );
};

export default IntroWrapper;
