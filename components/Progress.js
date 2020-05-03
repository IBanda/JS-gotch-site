import React, { useRef } from 'react';
const progressMethods = {};

const Progress = () => {
  const progress = useRef(null);
  const start = () => {
    if (progress.current) {
      progress.current.classList.add('progress');
    }
  };
  const done = () => {
    if (progress.current) {
      progress.current.classList.remove('progress');
    }
  };
  progressMethods['start'] = start;
  progressMethods['done'] = done;

  return (
    <div className="progressWrapper">
      <div ref={progress}></div>
      <style jsx>{`
        .progressWrapper {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 2px;
          overflow: hidden;
        }
        .progress {
          display: block;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 1500;
          width: 10%;
          height: 2px;
          animation-name: progress;
          animation-duration: 4s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          background-color: red;
        }
        @keyframes progress {
          0% {
            left: 0;
            top: 0px;
          }
          100% {
            left: 102%;
            top: 0px;
          }
        }
      `}</style>
    </div>
  );
};

export { Progress, progressMethods };
