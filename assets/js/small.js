'use strict';

const selectBtn = document.querySelector('.btn-mark');
const unreadedMsg = document.querySelectorAll('.notification__unreaded');

selectBtn.addEventListener('click', function(){
  unreadedMsg.forEach(function(e){
    e.remove();
  });
});