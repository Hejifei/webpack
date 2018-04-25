import _ from 'lodash';
import './style.css';
// import Icon from './nodejs.jpg';
// import Data from './data.xml';
import Print from './print';
import { cube } from './math.js';

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}else{
    console.log('Looks like we are in production mode!');
}
    

function component(){
    var element = document.createElement('div');
    // element.innerHTML = _.join(['Hello','webpack',' ']);
    // element.classList.add('hello');

    // var myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);
    // console.log(Data);

    var btn = document.createElement('button');
    var br = document.createElement('br');
    btn.innerHTML='Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // btn.onclick = printMe;
    element.appendChild(br);
    element.appendChild(btn);
    element.onclick = Print.bind(null, 'Hello webpack!');

    // btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    //     var print = module.default;
    //     print();
    // });

    // var element = document.createElement('pre');
    // element.innerHTML = [
    //     'Hello webpack!',
    //     '5 cubed is equal to ' + cube(5)
    // ].join('\n\n');
    return element;
}
document.body.appendChild(component());
// let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);


if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}