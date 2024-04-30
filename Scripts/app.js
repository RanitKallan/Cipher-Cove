/*Name- Ranit Kallan
  Student ID - 100857418
  Date Completed - 17th March, 2024
*/ 

document.addEventListener('DOMContentLoaded', function() {
    // Set welcome message
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        welcomeMessage.innerText = 'Welcome to Our Site!';
    }

    // Change 'products' link to 'Interests'
    const productsLink = document.getElementById('products');
    if (productsLink) {
        productsLink.textContent = 'Interests';
    }

    // Populate products (now Interests)
    const products = [
        { name: "Anime", description: "I love watching anime mainly because of the story line and the fight scenes and if I had to say my favorite anime of all time it would be Attack on Titan." },
        { name: "Games", description: "I also love playing games and also i use it as a stress buster. And for the favorite game it would be Red Dead Redemption 2.", image: "path/to/image2.jpg" },
        { name: "Artist", description: "I listen to music a lot while coding or even while gaming sometimes and if I had to say my fav artist it would be Karan Aujla, he is a Punjabi singer.", image: "path/to/image3.jpg" },
    ];
    
    const container = document.getElementById('product-container');
    if (container) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
            productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p>`;
            container.appendChild(productDiv);
        });
    }

    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('header');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
        })
        .catch(error => {
            console.error('Error loading the header:', error);
        });

    // Contact form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                contactNumber: document.getElementById('contact-number').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            console.log('User Information:', formData);
            setTimeout(function() {
                window.location.href = "./index.html";
            }, 3000);
        });
    }

    // Create and append footer
    const footer = document.createElement('footer');
    footer.classList.add('fixed-footer');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} Ranit Kallan`;
    document.body.appendChild(footer);
});


$(document).ready(function() {
    // Login Form Submission
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        var username = $('#loginUsername').val();
        $('#username').text(username).show();
        $('#login').text('Logout');
    });

    // Register Form Submission
    $('#registerForm').submit(function(event) {
        event.preventDefault();
        validateRegisterForm();
    });

    // Form Validation
    function validateRegisterForm() {
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
        var errorMessage = '';

        if (firstName.length < 2 || lastName.length < 2) {
            errorMessage += 'First and Last Name must be at least 2 characters long. ';
        }
        if (email.length < 8 || !email.includes('@')) {
            errorMessage += 'Email must be at least 8 characters long and contain an @ symbol. ';
        }
        if (password !== confirmPassword || password.length < 6) {
            errorMessage += 'Passwords must match and be at least 6 characters long.';
        }

        if (errorMessage) {
            $('#errorMessage').text(errorMessage).show();
        } else {
            var user = new User(firstName, lastName, email, password);
            console.log(user);
            $('#registerForm').trigger('reset');
            $('#errorMessage').hide();
        }
    }

    // User Class Definition
    class User {
        constructor(firstName, lastName, email, password) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
        }
    }
});




