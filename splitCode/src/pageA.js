import users from './users';


require.ensure([], function () {
    var _ = require('lodash');
    const adam = _.find(users, { firstName: 'Adam' });
    console.log(adam);
}, 'lodash');

