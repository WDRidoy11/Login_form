let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    let mail = document.getElementById('mail').value;
    let pword = document.getElementById('pword').value;
    if (mail == 'developersridoy@gmail.com' && pword == 2255) {
        btn.addEventListener('click', function() {
            window.location.href = 'https://www.w3schools.com/';
        });
    } else {
        alert('Not matching your information');
    };
});