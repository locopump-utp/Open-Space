const checkPass = () => {
    const passDom = document.getElementById('password');
    let trust = 'TrustNo1';
    if (passDom.value === trust) {
        enableControls();
    }
};

const enableControls = () => {
    const passDom = document.getElementById('password');
    const btnOk = document.getElementById('btnOk');
    const btnLaunch = document.getElementById('launch');
    const buttonCheckboxes = document.querySelectorAll('.checkLevel');
    const buttonRanges = document.querySelectorAll('.lever');
    let inputs = document.getElementsByTagName('input');

    for (let ipt in inputs) {
        inputs[ipt].disabled = false;
    }
    passDom.disabled = true;
    btnOk.disabled = true;
    btnLaunch.disabled = true;

    buttonCheckboxes.forEach(ckButton => {
        // ckButton.addEventListener('change', () => verifiedControls());
        ckButton.onchange = function() {verifiedControls()}
    });
    buttonRanges.forEach(rgButton => {
        // rgButton.addEventListener('change', () => verifiedControls());
        rgButton.onchange = function() {verifiedControls()}
    });
};


const verifiedControls = () => {
    const buttonCheckboxes = document.querySelectorAll('.checkLevel');
    const buttonRanges = document.querySelectorAll('.lever');
    const btnLaunch = document.getElementById('launch');
    let checkStatus = 0;
    let rangeStatus = 0;
    buttonCheckboxes.forEach(ckButton => {
        if (ckButton.checked === true) {
            checkStatus += 1;
        }
    });
    buttonRanges.forEach(rgButton => {
        if (parseInt(rgButton.value) === 100) {
            rangeStatus += 1;
        }
    });
    if (checkStatus === 6 && rangeStatus === 5) {
        btnLaunch.disabled = false;
        btnLaunch.addEventListener('click', () => launchRocket());
    }
};

const launchRocket = () => {
    let rocket = document.getElementById('rocket');
    setTimeout( function() {
        rocket.style.left = '350px';
        rocket.style.bottom = '200px';
    }, 1000);
    setTimeout( function() {
        rocket.style.left = '500px';
        rocket.style.bottom = '350px';
    }, 2000);
    setTimeout( function() {
        rocket.style.left = '700px';
        rocket.style.bottom = '550px';
    }, 4000);
    setTimeout( function() {
        rocket.style.left = '900px';
        rocket.style.bottom = '600px';
        rocket.style.transform = 'rotate(75deg)';
    }, 5000);
    setTimeout( function() {
        rocket.style.left = '1350px';
        rocket.style.bottom = '600px';
    }, 6000);
    setTimeout( function() {
        rocket.style.left = '50px';
        rocket.style.bottom = '600px';
    }, 7000);
    setTimeout( function() {
        rocket.style.left = '300px';
        rocket.style.bottom = '550px';
    }, 8000);
    setTimeout( function() {
        rocket.style.left = '750px';
        rocket.style.bottom = '450px';
    }, 9000);
    setTimeout( function() {
        rocket.style.left = '1250px';
        rocket.style.bottom = '400px';
    }, 10000);
    console.log('3.. 2... 1.. liftoff!');
};
