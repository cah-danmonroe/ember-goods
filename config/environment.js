/* eslint-env node */
'use strict';

module.exports = function(environment, appConfig) {
  appConfig['APP']['goods']['host'] = 'https://api.goods.co.uk' || appConfig['APP']['goods']['host'];
  return {};
};
