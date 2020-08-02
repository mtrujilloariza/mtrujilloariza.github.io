var profilePicture = document.querySelector('#info .profile-picture img');


function toggleIMG() {
    if (profilePicture.src.includes('pictures/profile-pic.jpg')) {
        profilePicture.src = 'pictures/memoji.png'
    } else {
        profilePicture.src = 'pictures/profile-pic.jpg'
    }
}

profilePicture.setAttribute('onclick', 'toggleIMG()');
