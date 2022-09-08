
$(document).ready(function() {
/*
const wakeLockCheckbox = document.querySelector('#wakeLockCheckbox');
const statusDiv = document.querySelector('#statusDiv');
const reaquireCheckbox = document.querySelector('#reacquireCheckbox');
const fullScreenButton = document.querySelector('#fullScreenButton');
*/
const wakeLockCheckbox = $('#wakeLockCheckbox');
const statusDiv = $('#statusDiv');
const reaquireCheckbox = $('#reacquireCheckbox');
const fullScreenButton = $('#fullScreenButton');

statusDiv.hide();

// Enabling lock
if(isScreenLockSupported()){
  let wakeLock = null;
  
  const requestWakeLock = async () => {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', (e) => {
        console.log(e);
        wakeLockCheckbox.checked = false;
        statusDiv.text('Wake Lock was released');
        statusDiv.show();
        console.log('Wake Lock was released');                    
      });
      wakeLockCheckbox.checked = true;
      statusDiv.text('Wake Lock is active');
      statusDiv.show();
      console.log('Wake Lock is active');      
    } catch (e) {      
      wakeLockCheckbox.checked = false;
      statusDiv.textContent = `${e.name}, ${e.message}`;
      console.error(`${e.name}, ${e.message}`);
    } 
  };
  
  wakeLockCheckbox.on('change', function() {
    if (this.checked) {
      requestWakeLock();
    } else {
      wakeLock.release();
      wakeLock = null;
    }
  });
}

// Disabiling lock
function release() { 
  if(typeof screenLock !== "undefined" && screenLock != null) {
    screenLock.release()
    .then(() => {
      console.log("Lock released 🎈");
      screenLock = null;
    });
  }
}

function isScreenLockSupported() {
 return ('wakeLock' in navigator);
}

});
