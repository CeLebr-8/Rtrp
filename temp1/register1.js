 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAG0Uxg4p---IprT-PLV6y8cyXidQetGGc",
   authDomain: "login-c4483.firebaseapp.com",
   projectId: "login-c4483",
   storageBucket: "login-c4483.firebasestorage.app",
   messagingSenderId: "462560818341",
   appId: "1:462560818341:web:4a9bffaf0a2a7cd8e7c94c"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

// Intercept Login button click
window.submitLogin = function () {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    alert("Please fill in both fields.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "secondpage.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
};

// Intercept Register button click
window.submitRegister = function () {
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const phone = document.getElementById('regPhone').value;
  const pass = document.getElementById('regPassword').value;
  const confirmPass = document.getElementById('regConfirmPassword').value;

  if (!name || !email || !phone || !pass || !confirmPass) {
    alert("Please fill in all fields.");
    return;
  }

  if (pass !== confirmPass) {
    alert("Passwords do not match.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Optional: Save user info to localStorage
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);

      alert("Registration successful!");
      window.location.href = "secondpage.html";
    })
    .catch((error) => {
      alert("Registration failed: " + error.message);
    });
};