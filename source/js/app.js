// navbar burger
$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });
});

// modal
'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Modals

  var rootEl = document.documentElement;
  var $modals = getAll('.modal');
  var $modalButtons = getAll('.modal-button');
  var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        rootEl.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
      $el.addEventListener('click', function () {
        closeModals();
      });
    });
  }

  document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
    }
  });

  function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

});

// share
var value = document.getElementById("cur").value;
if (value !== ""){
    var u  = document.getElementById('share');
    u.onmouseover = function() {
        document.getElementById("shared").style.display = 'block';
    }
    u.onmouseout = function() {
        document.getElementById("shared").style.display = 'none';
    }
    var al = document.getElementById('shared').getElementsByTagName('a');
    for (var i=0; i<al.length; i++){
        al[i].setAttribute('target', '_blank');
    }
    document.getElementById('fb').setAttribute("href", "https://www.facebook.com/sharer.php?u="+value);
    document.getElementById('tw').setAttribute("href", "https://twitter.com/intent/tweet?url="+value);
    document.getElementById('gp').setAttribute("href", "https://plus.google.com/share?url="+value);
    document.getElementById('pt').setAttribute("href", "http://pinterest.com/pin/create/button/?url="+value);
}
