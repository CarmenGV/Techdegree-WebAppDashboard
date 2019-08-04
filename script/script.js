//Alert Message
const alert = document.getElementById('alert');
const alertMessage = document.createElement('p');
const alertClose = document.createElement('i');

alertMessage.innerHTML = "<strong>Alert</strong> This is an alert, alerting you of important messages. Important message: There are no important messages at the moment.";
alertClose.className = "fa fa-close";
alertClose.addEventListener('click', ()=>{
  alert.style.display = "none";
});

alert.appendChild(alertMessage);
alert.appendChild(alertClose);


//Bell Notification
const notification = document.getElementById('bell-notification');
const bellNote = document.createElement('i');

bellNote.className = "fa fa-circle";
notification.appendChild(bellNote);
