<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Website</title>
    <style>
        /* Inline CSS for simplicity */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: white;
            padding: 10px 0;
            text-align: center;
        }
        nav a {
            margin: 0 15px;
            color: white;
            text-decoration: none;
            font-weight: bold;
        }
        section {
            padding: 20px;
            margin: 20px;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
        form {
            display: flex;
            flex-direction: column;
            max-width: 400px;
            margin: 20px auto;
        }
        input, textarea {
            margin: 5px 0;
            padding: 10px;
            font-size: 16px;
        }
        button {
            background-color: #333;
            color: white;
            padding: 10px;
            cursor: pointer;
            border: none;
        }
        button:hover {
            background-color: #555;
        }
    </style>
</head>
<body>

    <header>
        <h1>Welcome to My Personal Website</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <section id="home">
        <h2>Home</h2>
        <p>Hello! My name is John Doe, and I am a web developer. Welcome to my personal website where I showcase my projects and share my passion for coding.</p>
    </section>

    <section id="about">
        <h2>About Me</h2>
        <p>I am a full-stack web developer with a passion for creating interactive and responsive web applications. I have experience in JavaScript, HTML, CSS, and various frameworks like React and Node.js.</p>
    </section>

    <section id="contact">
        <h2>Contact Me</h2>
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
        </form>
        <p id="formFeedback"></p>
    </section>

    <footer>
        <p>© 2024 John Doe | All Rights Reserved</p>
    </footer>

    <script>
        // JavaScript for Form Validation and Submission
        const form = document.getElementById('contactForm');
        const feedback = document.getElementById('formFeedback');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the default way

            // Fetch form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                feedback.textContent = "Please fill out all fields.";
                feedback.style.color = "red";
            } else {
                feedback.textContent = `Thank you, ${name}! Your message has been sent.`;
                feedback.style.color = "green";

                // Clear form after submission
                form.reset();
            }
        });
    </script>

</body>
</html>
