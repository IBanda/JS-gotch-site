import Nprogress from 'nprogress';

const progressMethods = {
  start() {
    Nprogress.start();
  },
  done() {
    Nprogress.done();
  },
};

export default progressMethods;
