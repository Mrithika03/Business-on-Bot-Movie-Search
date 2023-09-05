document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    signupForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const username = document.getElementById("signup-username").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        // Simulate registration (client-side)
        const registrationSuccess = await simulateRegistration(username, email, password);

        if (registrationSuccess) {
            // Registration successful, redirect to the login page
            sessionStorage.setItem("Email", email);
            sessionStorage.setItem("Password", password);
            alert("Registration successful");
            window.location.href = "login.html"; // Redirect to the login page
        } else {
            // Registration failed, display an error message
            alert("Registration failed. Please try again.");
        }
    });

    // Simulated registration and login functions (replace with server-side code)
    function simulateRegistration(username, email, password) {
        // Simulate a delay (e.g., for API call)
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate success for demonstration purposes
                resolve(true);
                // In a real application, you would send a request to the server here
            }, 1500); // Simulate a 1.5-second delay
        });
    }

    function simulateLogin(email, password) {
        // Simulate a delay (e.g., for API call)
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate success for demonstration purposes
                console.log("Simulated login success");
                resolve(true);
                // In a real application, you would send a request to the server here
            }, 1500); // Simulate a 1.5-second delay
        });
    }
});
