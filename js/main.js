var profilePicture = document.querySelector('#info .profile-picture img');
console.log(profilePicture);

function toggleIMG() {
    //console.log(profilePicture.src);
    if (profilePicture.src.includes('pictures/profile-pic.jpg')) {
        profilePicture.src = 'pictures/memoji.png'
    } else {
        profilePicture.src = 'pictures/profile-pic.jpg'
    }
}
