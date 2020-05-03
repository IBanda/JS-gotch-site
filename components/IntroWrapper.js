import React from 'react';
import Link from 'next/link';
const IntroWrapper = () => {
  return (
    <>
      <div className="introWrapper">
        <div>
          <p className="intro">
            A personal blog by{' '}
            <Link href="/#">
              <a className="myName">Ian Banda</a>
            </Link>
          </p>
          <p>JavaScript Gotchas, Deep Dives and some of my new Discoveries </p>
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
            margin: 0;
          }
          .myName {
            font-size: 1em;
            display: flex;
            align-items: center;
            text-decoration: none;
            display: inline-block;
            border-bottom: 2px solid #f7e032;
          }
        `}
      </style>
    </>
  );
};

export default IntroWrapper;
