//Function to display my search form on click

// 
$(document).ready(function() {
    $('#search_icon').click(function() {
        $('#search_form').toggle();
    });
});

// Function that will remove my hidden class to the html to let the page show only when fully charged
// to prevent to show any not charged css and elements - this fix the bug that my personal style.css
// font and styling is not fully charged at the load of the page
$(document).ready(function() {
  document.getElementsByTagName("html")[0].style.visibility = "visible";
});


//Function to hide password from the form
function hide_password() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


// Function to add a new line to add and remove a new must see in my database
function addMustSee() {
    var addMustSee = '<textarea name="city_must_see" id="city_must_see" class="materialize-textarea new_mustSee" required> </textarea>'
    $("#add_new_must_see").before(addMustSee)
}

function removeMustSee() {
    $(".new_mustSee").last().remove()
}


// Function to add a new line to add a new tip in my database
function addTips() {
    var addTips = '<textarea name="city_tips" id="city_tips" class="materialize-textarea new_tips" required></textarea>'
    $("#add_new_tips").before(addTips)
}

function removeTips() {
    $(".new_tips").last().remove()
}


// Let carousel self slide
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

// To remove the class error if the login es error
function errorLogIn() {
    $('#loginbtn').click(function() {
        setTimeout(function() {
            $('#loginform').addClass('error_login');
            console.log('button clicked');
        });
        setTimeout(function() {
            $('#loginform').removeClass('error_login');
        }, 1000);
    });
}


// Materialize Customiztions

// Add the collapse to the navbar button
$(".button-collapse").sideNav();

// Add the tooltip
$(document).ready(function() {
    $('.tooltipped').tooltip();
});

// Add the collpase to the search box
$(document).ready(function() {
    $('#search_cities').collapsible();
});

// Add select function
$(document).ready(function() {
    $('select').toggle();
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true
});


// Matezialize box
$(document).ready(function() {
    $('.materialboxed').materialbox();
});

// Calling my functions
errorLogIn();
autoplay();
hide_password();