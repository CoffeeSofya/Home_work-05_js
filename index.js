'use strict';

function makeBlock(parentTag) {
    let body = document.querySelector('body');
    let newParentTag = document.createElement(parentTag);
    body.append(newParentTag);
    return (childTag) => {
        return (childTagCount) => {
            for(let i = 0; i < childTagCount; i++) {
                let newImage = document.createElement('img');
                newImage.setAttribute('src', 'img/cancel.png');
                newImage.className = 'cancel-img';
   
                newImage.setAttribute('onclick', 'this.parentNode.remove(\'\')');

                let newChildTag = document.createElement(childTag);
                newChildTag.className = 'new-block';
                newChildTag.innerText = `Я элемент ${childTag}!`;
   
                newParentTag.append(newChildTag);
                newChildTag.appendChild(newImage);
            }
            return ;
        }
    }
}


makeBlock('body')('div')(3);
makeBlock('div')('p')(2);
