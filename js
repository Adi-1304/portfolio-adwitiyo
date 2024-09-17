<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Adwitiyo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="background"></div>
<div class="content content_outer">
    <div class="nav">
        <div class="logo_1">
            logo
        </div>
        <div class="menu">
            <div id="home" class="home" target="#home-section">Home</div>
            <div id="about" class="about" target="#about-section">About</div>
            <div id="projects" class="projects" target="#projects-section">Projects</div>
            <div id="education" class="education" target="#education-section">Education</div>
            <div id="services" class="services" target="#expertise-section">Expertise</div>
        </div>
        <div class="logo_2">
            <a>logo</a>
        </div>
    </div>
    <div class="container">
        <div id="home-section" class="section">
            <div class="content">
                <div class="about">
                    <div class="background"></div>
                    <div class="content">
                        <h1>Hello</h1>
                        <h2>Myself,&nbsp;&nbsp;&nbsp;&nbsp; <span class="name">ADWITIYO</span></h2>
                        <a>A passionate developer with expertise in Android, Python, AI systems, and hardware design, focused on dynamic, innovative solutions.</a>
                    </div>
                </div>
                <div class="image">
                    <p>Welcome to the Home section.</p>
                </div>
            </div>
        </div>
        <div id="about-section" class="section">
            <div class="content">
                <div class="image">
                    <p>Welcome to the Home section.</p>
                </div>
                <div class="about">
                    <h1>Hello</h1>
                    <h2>Myself,&nbsp;&nbsp;&nbsp;&nbsp; <span class="name">ADWITIYO</span></h2>
                    <a>A passionate developer with expertise in Android, Python, AI systems, and hardware design, focused on dynamic, innovative solutions.</a>
                </div>
            </div>
        </div>
        <div id="projects-section" class="section">
            <div class="content">
                <div class="block">Project 1</div>
                <div class="block">Project 2</div>
                <div class="block">Project 3</div>
            </div>
        </div>
        <div id="education-section" class="section">
            <h1>Education</h1>
            <p>Details about education.</p>
        </div>
        <div id="expertise-section" class="section">
            <div class="content">
                <div class="service">
                    <i class="icon uiux"></i>
                    <h3>UI/UX</h3>
                    <p>Designing modern and user-friendly interfaces.</p>
                </div>
                <div class="service">
                    <i class="icon illustration"></i>
                    <h3>Illustration</h3>
                    <p>Creating unique and engaging illustrations.</p>
                </div>
                <div class="service">
                    <i class="icon development"></i>
                    <h3>Development</h3>
                    <p>Building responsive and scalable websites.</p>
                </div>
                <div class="service">
                    <i class="icon branding"></i>
                    <h3>Branding</h3>
                    <p>Developing strong, memorable brands.</p>
                </div>
                <div class="service">
                    <i class="icon uiux"></i>
                    <h3>UI/UX</h3>
                    <p>Designing modern and user-friendly interfaces.</p>
                </div>
                <div class="service">
                    <i class="icon illustration"></i>
                    <h3>Illustration</h3>
                    <p>Creating unique and engaging illustrations.</p>
                </div>
                <div class="service">
                    <i class="icon development"></i>
                    <h3>Development</h3>
                    <p>Building responsive and scalable websites.</p>
                </div>
                <div class="service">
                    <i class="icon branding"></i>
                    <h3>Branding</h3>
                    <p>Developing strong, memorable brands.</p>
                </div>
                <div class="service">
                    <i class="icon branding"></i>
                    <h3>Branding</h3>
                    <p>Developing strong, memorable brands.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer-content">
            <div class="contact">
                <h3>Contact Me</h3>
                <p>Email: adwitiyobera02@gmail.com</p>
                <p>Phone: +91 9073313505</p>
            </div>

            <div class="feedback">
                <h3>Feedback</h3>
                <form id="feedback-form">

                    <div class="inputBox">
                        <input type="text" id="name" name="name" placeholder="Your Name" required>
                    </div>

                    <div class="inputBox">
                        <input type="email" id="email" name="email" placeholder="Your Email" required>
                    </div>

                    <div class="inputBox">
                        <textarea id="message" name="message" placeholder="Your Feedback" rows="4" required></textarea>
                    </div>

                    <div class="inputBox">
                        <button type="submit">Send Feedback</button>
                    </div>

                </form>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Adwitiyo. All rights reserved.</p>
        </div>
    </div>
</div>

<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
    import { getFirestore, collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

    const firebaseConfig = {
        apiKey: "AIzaSyACu6q5Mw4vr9hDvG_6y_pfrJ8Hkvluxuc",
        authDomain: "portfoliofinal-5aa0f.firebaseapp.com",
        databaseURL: "https://portfoliofinal-5aa0f-default-rtdb.firebaseio.com",
        projectId: "portfoliofinal-5aa0f",
        storageBucket: "portfoliofinal-5aa0f.appspot.com",
        messagingSenderId: "633472259919",
        appId: "1:633472259919:web:7d7b29517006afa53cd73a"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    document.getElementById('feedback-form').addEventListener('submit', submitForm);

    async function submitForm(e) {
        e.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        let timestamp = Timestamp.now();

        try {
            await addDoc(collection(db, "feedbackForm"), {
                name: name,
                email: email,
                message: message,
                submittedAt: timestamp
            });

            console.log("Feedback submitted successfully");
            document.getElementById('feedback-form').reset();
        } catch (error) {
            console.error("Error submitting feedback: ", error);
        }
    }
</script>

<script src="script.js"></script>

</body>
</html>