const wakeLockCheckbox = document.querySelector('#wakeLockCheckbox');
const statusDiv = document.querySelector('#statusDiv');
const reaquireCheckbox = document.querySelector('#reacquireCheckbox');
const fullScreenButton = document.querySelector('#fullScreenButton');

// Enabling lock
//if(isScreenLockSupported()){
  let wakeLock = null;
  
  const requestWakeLock = async () => {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', (e) => {
        console.log(e);
        wakeLockCheckbox.checked = false;
        statusDiv.textContent = 'Wake Lock was released';
        console.log('Wake Lock was released');                    
      });
      wakeLockCheckbox.checked = true;
      statusDiv.textContent = 'Wake Lock is active';
      console.log('Wake Lock is active');      
    } catch (e) {      
      wakeLockCheckbox.checked = false;
      statusDiv.textContent = `${e.name}, ${e.message}`;
      console.error(`${e.name}, ${e.message}`);
    } 
  };
  
  wakeLockCheckbox.addEventListener('change', () => {
    if (wakeLockCheckbox.checked) {
      requestWakeLock();
      console.log("Wake Lock Checked");
    } else {
      wakeLock.release();
      wakeLock = null;
      console.log("Wake Lock Unchecked");
    }
  });
//}

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
