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
      
    });