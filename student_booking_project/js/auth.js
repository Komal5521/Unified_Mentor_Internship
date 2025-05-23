<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // 🔍 First check if user is a teacher
        return firebase.firestore().collection("teachers").doc(user.uid).get()
          .then((doc) => {
            if (doc.exists) {
              // ✅ Teacher found
              window.location.href = "teacher.html";
            } else {
              // 👩‍🎓 Not a teacher, check students
              return firebase.firestore().collection("students").doc(user.uid).get()
                .then((studentDoc) => {
                  if (studentDoc.exists) {
                    window.location.href = "student.html";
                  } else {
                    alert("No profile found. Please register first.");
                    firebase.auth().signOut();
                  }
                });
            }
          });
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  });
}

