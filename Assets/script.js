// Fetches the cookie consent HTML from the provided URL and inserts it into the page.
function AskForCookieConsent() {
    fetch('Assets/cookie.html') // Update this URL if necessary.
        .then(response => {
            if (!response.ok) { // Check if the response was successful
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('cookie').innerHTML = html;
            const termsVersionElement = document.getElementById('termsVersion');
            if (termsVersionElement) {
                const termsVersion = termsVersionElement.innerText.split(': ')[1];
                checkCookie(termsVersion);
            } else {
                console.error('Element with id "termsVersion" not found in fetched HTML.');
            }
        })
        .catch(error => {
            console.error('Error fetching cookie consent HTML:', error);
        });
}

// Saves the user's consent to a cookie and hides the cookie notice.
function SaveCookie() {
    const termsVersionElement = document.getElementById('termsVersion');
    if (termsVersionElement) {
        const termsVersion = termsVersionElement.innerText.split(': ')[1];
        setCookie('agreed', termsVersion, 365); // Set cookie for 365 days
        hideOverlay();
    } else {
        console.error('Element with id "termsVersion" not found.');
    }
}

// Checks if the user's consent cookie matches the current terms version and hides the overlay if it does.
function checkCookie(currentVersion) {
    const agreedVersion = getCookie('agreed');
    if (agreedVersion === currentVersion) {
        hideOverlay();
    }
}

// Hides the cookie notice overlay.
function hideOverlay() {
    const overlay = document.getElementById('cookieNotice');
    if (overlay) {
        overlay.style.display = 'none';
    } else {
        console.error('Element with id "cookieNotice" not found.');
    }
}

// Sets a cookie with the given name, value, and expiration in days.
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Retrieves the value of a cookie by its name.
function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}














// Initialize functions when the DOM is loaded.
document.addEventListener('DOMContentLoaded', function() {
    AskForCookieConsent(); // Load the cookie consent HTML.
    // Hide overlay if cookie consent is already given
    const termsVersionElement = document.getElementById('termsVersion');
    if (termsVersionElement) {
        const termsVersion = termsVersionElement.innerText.split(': ')[1];
        checkCookie(termsVersion);
    }
});

// Handle 404 errors
window.addEventListener('error', function(event) {
    if (event.target instanceof HTMLImageElement || event.target instanceof HTMLScriptElement) {
        if (event.target.src.includes('404.html')) {
            window.location.href = '/404.html'; // Redirect to a custom 404 page.
        }
    }
});







// Placeholder functions for different sections.
function project() {
    window.open('Project/'); // Replace with your target URL
}

function portfolio() {
    window.open('com/'); // Replace with your target URL
}

function Privacy() {
    window.open('UserAgreement/'); // Replace with your target URL
}

function FAQs() {
    window.open('com/'); // Replace with your target URL
}
function com(){
    window. open ('https://maazwaheed.netlify.app/com/')
}
