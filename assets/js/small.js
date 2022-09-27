'use strict';

const selectBtn = document.querySelector('.btn-mark');
const unreadedMsg = document.querySelectorAll('.still-unread');

selectBtn.addEventListener('click', function(){
  unreadedMsg.forEach(function(e){
    e.classList.remove('still-unread');
    e.querySelector('.notification__unreaded').remove();
    document.querySelector('.head--unread').innerHTML = "0";
  });
});