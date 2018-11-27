import _ from 'lodash';
import './style/index.css';
import './style/a.less';

function createDomElement() {
  var dom = document.createElement('div');
  dom.innerHTML = _.join(['aicoder', '.com', ' wow'], '');
  dom.classList.add('box')
  return dom;
}
console.log(111)
document.body.appendChild(createDomElement());