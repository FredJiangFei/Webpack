import users from './users';

import(/* webpackChunkName:'lodash' */'lodash').then(function (_) {
    const adam = _.find(users, { firstName: 'Adam' });
    console.log(adam);
});

import(/* webpackChunkName:'asyncPage' */'./asyncPage').then(function (asy) {
    console.log(asy);
});