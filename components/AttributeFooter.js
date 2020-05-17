import React from 'react';

const AttributeFooter = () => {
  return (
    <div className="attributeFooter">
      <p>
        Sun & Moon icons by{' '}
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
      </p>
      <p>
        Github & Twitter icons by{' '}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>
      </p>
      <style jsx>{`
        .attributeFooter {
          max-width: 450px;
          display: flex;
          flex-direction: column;
          margin: auto;
          align-items: center;
        }
        p {
          font-size: 0.6em;
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default AttributeFooter;
