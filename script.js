const text = document.getElementById('modalText');
const title = document.getElementById('modalTitle');

function showModal() {
    const myModal = new bootstrap.Modal('#featureModal', {});

    myModal.show();
}

function openFridge() {
    const img = document.getElementById('fridgeImg');
    const label = document.getElementById('openclose');

    if(img.src.includes('Open_')){
        img.src = 'Personal_NALA.png';
        label.innerHTML = 'Open';
    }
    else {
        img.src = 'Open_NALA_Personal.png';
        label.innerHTML = 'Close';
    }
}

function tempControl() {
    title.innerHTML = 'Temperature Control';
    text.innerHTML = 'Temperature Control maintain consistent temperatures throughout compartments for longer food freshness.';
    showModal();
}

function iceMaker() {
    title.innerHTML = 'Ice Maker';
    text.innerHTML = 'Ice Maker produces ice cubes for everyday use.';
    showModal();
}

function smartScreen() {
    title.innerHTML = 'Smart Screen';
    text.innerHTML = 'Smart Screen Interface allows for easy access to features like inventory management and temperature control.';
    showModal();
}

function camera() {
    title.innerHTML = 'Camera';
    text.innerHTML = 'Built-in Camera monitor fridge contents remotely via the smart screen interface or mobile app.';
    showModal();
}

function freshness() {
    title.innerHTML = 'Freshness Monitor';
    text.innerHTML = 'Freshness Detector assess food freshness based on temperature, humidity, and odor.';
    showModal();
}

function energyEfficient() {
    title.innerHTML = 'Energy Efficient';
    text.innerHTML = 'Energy Efficiency Features minimize electricity consumption, reducing environmental impact and costs.';
    showModal();
}

function securityFeatures() {
    title.innerHTML = 'Security Features';
    text.innerHTML = 'Security Features consists of passcode protection, biometric authentication, and privacy settings safeguard user data and privacy.';
    showModal();
}
