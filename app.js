
// function button(){
//   var x=document.getElementById("inp")
//   if(x.value==""){
//       alert("Please Login")
//   }
//   else{
//         window.location.href= "chat.html"
//   }

const button=()=>{
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    var user =result.user;
       window.location.href= "chat.html"

    console.log("user===>",user)
    
  }).catch(function(error) {
   console.log(error.message)
  });

}


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
function Send(){

    var messages=document.getElementById("messages")
   
  firebase.database().ref("messages").push().set({
      "messages":messages.value
  });
  messages.value="";

return false;

}