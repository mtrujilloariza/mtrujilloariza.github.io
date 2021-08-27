var profilePicture = document.querySelector('#info .profile-picture img');


function toggleIMG() {
    if (profilePicture.src.includes('pictures/profile-pic.jpg')) {
        profilePicture.src = 'pictures/memoji.png'
    } else {
        profilePicture.src = 'pictures/profile-pic.jpg'
    }
}

profilePicture.setAttribute('onclick', 'toggleIMG()');

$('.js-tilt').tilt({
  maxTilt: 5,
  scale: 1.05,
  speed: 5000, 
})

AOS.init();