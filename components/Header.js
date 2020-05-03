import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import { Progress, progressMethods } from './Progress';
import ThemeContext from './ThemeContext';
import propTypes from 'prop-types';

Router.events.on('routeChangeStart', () => progressMethods.start());
Router.events.on('routeChangeComplete', () => progressMethods.done());
Router.events.on('routeChangeError', () => progressMethods.done());

const Header = ({ onThemeHandler }) => {
  const color = useContext(ThemeContext);

  const onclickHandler = () => {
    onThemeHandler();
  };
  const bgColor = color.background;

  return (
    <>
      <div className="header">
        <Progress />
        <Container>
          <Row>
            <Col md={6} sm={6} xs={6}>
              <a
                href="https://github.com/IBanda/JS-Gotcha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src={`/images/github${color.variation}.svg`}
                  alt="github"
                />
              </a>

              <a
                href="https://wwww.facebook.com/ian.banda.9085"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src={`/images/facebook${color.variation}.svg`}
                  alt="facebook"
                />
              </a>

              <a
                href="https://twitter.com/banda_ian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src={`/images/twitter${color.variation}.svg`}
                  alt="twitter"
                />
              </a>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <div className="switchWrapper">
                <button onClick={onclickHandler} className="switch">
                  <img
                    src={`/images/${
                      bgColor === '#222831' ? 'sun' : 'night'
                    }.svg`}
                    alt="sun"
                  />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="logoWrapper">
        <Link href="/">
          <a href="/">
            <img
              className="logo"
              src={`/images/${
                bgColor === '#222831' ? 'logo-white' : 'logo'
              }.png`}
              alt="logo"
            />
          </a>
        </Link>
      </div>
      <style jsx>{`
        .header {
          background-color: transparent;
          padding: 0.3125em;
          width: 100%;
        }
        .icon {
          max-width: 15px;
          width: 100%;
          margin-right: 10px;
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
          max-width: 200px;
          width: 100%;
        }
      `}</style>
    </>
  );
};
Header.propTypes = {
  onThemeHandler: propTypes.func,
};
export default Header;
