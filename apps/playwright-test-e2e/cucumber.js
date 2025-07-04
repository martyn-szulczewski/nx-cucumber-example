const options = [
  '--require-module ts-node/register',
  '--require src/steps/**/*.ts',
  '--format progress',
].join(' ');
const features = ['src/features/', options].join(' ');
module.exports = {
  default: features,
};
