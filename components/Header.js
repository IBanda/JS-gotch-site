import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import progressMethods from './Progress';
import ThemeContext from './ThemeContext';
import propTypes from 'prop-types';
import { GitHub, Twitter } from './svg';

const Header = ({ onThemeHandler }) => {
  const color = useContext(ThemeContext);
  const onclickHandler = () => {
    onThemeHandler();
  };
  const bgColor = color.background;
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), [isVisible, setIsVisible]);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => progressMethods.start());
    Router.events.on('routeChangeComplete', () => progressMethods.done());
    Router.events.on('routeChangeError', () => progressMethods.done());
  });
  return (
    <>
      <div className="header">
        <Container>
          <Row>
            <Col md={6} sm={6} xs={6}>
              <a
                href="https://github.com/IBanda/JS-Gotcha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </a>

              <a
                href="https://twitter.com/banda_ian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <div className="switchWrapper">
                {isVisible && (
                  <button onClick={onclickHandler} className="switch">
                    <img
                      src={`/images/${
                        bgColor === '#263238' ? 'sun' : 'moon-phase'
                      }.svg`}
                      alt="sun"
                    />
                  </button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="logoWrapper">
        <Link href="/">
          <a href="/" className="logoLink">
            <img className="logo" src="/images/logo.png" alt="logo" />
            <h4>Gotcha</h4>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .header {
          background-color: transparent;
          padding: 0.3125em;
          width: 100%;
        }

        .logoWrapper {
          margin-top: 5%;
          display: flex;
          justify-content: center;
        }
        @media (min-width: 700px) and (max-width: 1024px) {
          .logoWrapper {
            margin-top: 9%;
          }
        }
        @media (min-width: 500px) and (max-width: 700px) {
          .logoWrapper {
            margin-top: 15%;
          }
        }
        @media (max-width: 500px) {
          .logoWrapper {
            margin-top: 20%;
          }
        }
        .switchWrapper {
          display: flex;
          justify-content: flex-end;
        }
        .switchWrapper img {
          width: 2em;
        }
        .switch {
          background: transparent;
          border: none;
        }
        .logo {
          max-width: 5em;
          width: 100%;
        }
        .logoLink {
          display: flex;
          align-items: flex-end;
          text-decoration: none;
        }
        h4 {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};
Header.propTypes = {
  onThemeHandler: propTypes.func,
};
export default Header;
