
// Enabling lock
async function getScreenLock() {
  if(isScreenLockSupported()){
    let screenLock;
    try {
       screenLock = await navigator.wakeLock.request('screen');
    } catch(err) {
       console.log(err.name, err.message);
    }
    return screenLock;
  }

  // Function calls	
  let screenLock = await getScreenLock();
  release();	
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

setTimeout(function() {
getScreenLock();
},1000);
