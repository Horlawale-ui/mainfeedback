  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAdGpw0_6SUZqt1fLayBkG9Rvu2ahce1g8",
    authDomain: "coperate-comms.firebaseapp.com",
    projectId: "coperate-comms",
    storageBucket: "coperate-comms.appspot.com",
    messagingSenderId: "384278632531",
    appId: "1:384278632531:web:a5bed6f10dbe28b1b38ea6",
    measurementId: "G-8EGV182CF9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//Reference response2 collection
var response2Ref = firebase.database().ref("response2s");

//listen for submit form
document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //Get values

  let experience = document.querySelector('input[name="experience"]:checked');
  if(experience != null) {   
    experienceValue = experience.value;  
  }else{
    experienceValue = "null";
  };
  var info = getInputVal("info");
  let aboutus = document.querySelector('input[name="aboutus"]:checked');
  if(aboutus != null) {   
    aboutusValue = aboutus.value;  
  }else{
    aboutusValue = "null";
  };
  let rating = document.querySelector('input[name="rating"]:checked');
  if(rating != null) {   
    ratingValue = rating.value;  
  }else{
    ratingValue = "null";
  };
  var info2 = getInputVal("info2");
  var info3 = getInputVal("info3");
  let sponsor = document.querySelector('input[name="sponsor"]:checked');
  if(sponsor != null) {   
    sponsorValue = sponsor.value;  
  }else{
    sponsorValue = "null";
  };
  //save response2
  saveresponse2(
    experienceValue,
    info,
    aboutusValue,
    ratingValue,
    info2,
    info3,
    sponsorValue
  );
// Show alert
document.getElementById('alert-msg').style.display = 'block';
    
// Hide alert after 3 seconds
setTimeout(function(){
   document.getElementById('alert-msg').style.display = 'none'; 
}, 3000);

// Clear form after submit
    document.getElementById('contact-form').reset();
}

//function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}
// Save response2 to firebase
function saveresponse2(
  experienceValue,
  info,
  aboutusValue,
  ratingValue,
  info2,
  info3,
  sponsorValue
) {
  var newresponse2Ref = response2Ref.push();
  newresponse2Ref.set({
    Experience: experienceValue,
    EventFeedback: info,
    Aboutus: aboutusValue,
    Eventrating: ratingValue,
    Eventlikes: info2,
    Eventshare: info3,
    Moresponsor: sponsorValue
  });
}
