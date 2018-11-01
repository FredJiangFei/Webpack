import base from './css/base.less'
import './css/common.less'
import { componentA } from './components/a' 

var app = document.getElementById('app');
app.innerHTML = '<div class ="' + base.box + '"></div>';

var list = componentA()
app.appendChild(list)

$.get('/users', function (data) {
    console.log(data);
});

if (module.hot) {
    module.hot.accept();
}
