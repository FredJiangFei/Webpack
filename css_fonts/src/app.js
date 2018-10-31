import base from './css/base.less'
import './css/common.less'

var app = document.getElementById('app');
app.innerHTML = '<div class ="' + base.box + '"></div>';

console.log('123');
$.get('/users', function (data) {
    console.log(data);
});
