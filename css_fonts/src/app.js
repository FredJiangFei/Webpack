import base from './css/base.less'
import './css/common.less'

var app = document.getElementById('app');
app.innerHTML = '<div class ="'+ base.box  +'"></div>';

$.get('api/users', function(data){
    console.log('123');
    console.log(data);
});