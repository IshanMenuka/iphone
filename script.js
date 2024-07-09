
var toggle =false;

function swapScreen(toggle) {
    if(toggle===false){
    document.getElementById('Passcode').classList.remove('hidden');
    document.getElementById('lockScreen').classList.add('flex');
    document.getElementById('lockScreen').classList.remove('hidden');
    document.getElementById('date').classList.add('hidden');
    document.getElementById('Passcode').classList.add('hDiv');
    document.getElementById('lockScreen').classList.add('hDiv');
    document.getElementById('OptionPanel').classList.add('hidden');
    document.getElementById('OptionPanelPasscode').classList.remove('hidden');
    document.getElementById('OptionPanelPasscode').classList.add('flex');
    document.getElementById('main').classList.add('backdrop-blur-sm');
    document.getElementById('message').classList.add('hidden');
    }
}


function getCurrentDateTime12HourFormat() {
    const now = new Date();

    // Date parts
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = now.getDate();
    const month = monthsOfYear[now.getMonth()];

    // Time parts
    let hours = now.getHours();
    const minutes = now.getMinutes();


    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    const formattedTime = hours + ':' + minutesStr;
    const formattedDate = `${dayOfWeek}, ${day} ${month}`;
    document.getElementById('timer').innerHTML = formattedTime;
    document.getElementById('dates').innerHTML = formattedDate;

}

console.log(getCurrentDateTime12HourFormat());


function hDiv() {
    toggle = true;

    document.getElementById('date').classList.add('hidden');
    document.getElementById('sup').classList.add('hidden');
    document.getElementById('OptionPanel').classList.add('hidden');
    document.getElementById('OptionPanel2').classList.remove('hidden');
    document.getElementById('videoElement').classList.remove('hidden');
    document.getElementById('message').classList.add('hidden');    navigator.mediaDevices
        .getUserMedia({
            video: {
                width: { ideal: 600 }, // Setting height as width for portrait
                height: { ideal: 288 }, // Setting width as height for portrait
                frameRate: { ideal: 30, max: 30 },
                facingMode: 'user', // Front-facing camera
            },
        })
        .then(function (stream) {
            var video = document.getElementById('videoElement');
            video.srcObject = stream;
            video.onloadedmetadata = function() {
                video.play();
            };
        })
        .catch(function (error) {
            console.error('Error accessing the camera: ' + error);
        });

    // Debugging event listeners
    document.getElementById('videoElement').addEventListener('loadeddata', function() {
        console.log('Video data loaded');
    });

    document.getElementById('videoElement').addEventListener('error', function(event) {
        console.error('Video error:', event);
    });
}

    
var flash1 = false;

function flash() {
    if (flash1 === false) {
        flash1 = true;
        document.getElementById('body').classList.add('bg-white');
        document.getElementById('body').classList.remove('bg-gradient-to-r');
        document.getElementById('body').classList.remove('from-white');
        document.getElementById('body').classList.remove('to-gray-500');
        
    } else {
        flash1 = false;
        document.getElementById('body').classList.remove('bg-white');
        document.getElementById('body').classList.add('bg-gradient-to-r');
        document.getElementById('body').classList.add('from-white');
        document.getElementById('body').classList.add('to-gray-500');
    }
}


function filter(id){
    document.getElementById('videoElement').classList ='w-full h-full object-cover rounded-[24px]';
if(id ==1){
    document.getElementById('videoElement').classList ='w-full h-full object-cover rounded-[24px]';
   
}else if(id==2){
    document.getElementById('videoElement').classList.add('saturate-150');
}else{
    document.getElementById('videoElement').classList.add('grayscale');
}

}
