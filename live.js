// live.js
// Replace with your Firebase config and live update logic

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
if (typeof firebase !== "undefined") {
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  // Example: Update dustbin level on dashboard
  db.ref("dustbin/level").on("value", (snapshot) => {
    const level = snapshot.val();
    const el = document.getElementById("dustbin-level");
    if (el) el.textContent = level + "%";
  });
}
