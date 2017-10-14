'use strict';



document.addEventListener('DOMContentLoaded', function() { // działa dopiero gdy cały html się załaduje. Tu wrzucam wszystkie rozwiązania
      
      //show and hide dropdown menu
      var forDropdown = document.querySelector('.for-dropdown');
      console.log(forDropdown);

      var dropdown = document.querySelector('.dropdown');
      console.log(dropdown);

      function showDropdown() {
      	dropdown.style.display = 'block';
      }

       function hideDropdown() {
      	dropdown.style.display = 'none';
      }

      forDropdown.addEventListener('mouseover', showDropdown);
      forDropdown.addEventListener('mouseout', hideDropdown);

      // read-more and read-less

      // Read more/less
  var buttons = document.querySelectorAll('.read-more');

  function showHide() {

    var textArea = this.previousElementSibling;
   
    if (textArea.style.display === 'none' || textArea.style.display === '') {
      textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    } else {
      textArea.style.display = 'none';
      this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showHide);
  }
});