

const divWrapperFlex = document.createElement('div');
divWrapperFlex.classList.add('wrapper');
document.body.appendChild(divWrapperFlex);
document.querySelector(".wrapper").style.cssText =
	"display: flex; justify-content: space-around; align-items: center; background: rgb(200, 178, 178); width: 1000px; height: 550px;";
document.body.appendChild(divWrapperFlex);


//CARD	11

const divCardTwitter = document.createElement('div');
divCardTwitter.classList.add('card-twitter');
document.body.appendChild(divCardTwitter);
divWrapperFlex.appendChild(divCardTwitter);
document.querySelector(".card-twitter").style.cssText =
	"color: grey; font-size: 16px; width: 245px; height: 350px; border:  2px solid rgb(0, 0, 0); border-radius: 10px; background: rgb(244, 246, 246);";

const imgTwitter = document.createElement('img');
imgTwitter.src = './img/twitter-logo.png';
imgTwitter.classList.add('logo');
imgTwitter.alt = 'twitter-logo';
divCardTwitter.appendChild(imgTwitter);

const namingCard = document.createElement('h1');
namingCard.classList.add('title-twitter');
divCardTwitter.appendChild(namingCard);
namingCard.textContent = 'TWITTER';
document.querySelector(".title-twitter").style.cssText =
	"color: black; font-size: 26px; margin-left: 60px;";

const textTwitter = document.createElement('p');
textTwitter.classList.add('text-twitter');
divCardTwitter.appendChild(textTwitter);
textTwitter.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugit consectetur mollitia possimus voluptate tempore iste fugiat qui dolor inventore, id, nulla quos sed, doloremque molestias asperiores rerum tenetur nobis.';
document.querySelector(".text-twitter").style.cssText =
	"color: black; font-size: 13px; margin-left: 20px; width: 220px";

const buttonTwitter = document.createElement('button');
buttonTwitter.classList.add('button-twitter');
divCardTwitter.appendChild(buttonTwitter);
buttonTwitter.textContent = 'READ MORE';
document.querySelector(".button-twitter").style.cssText =
	"width: 170px; color:white; margin: 10px 35px; text-align: center; padding: 15px; background: #000; border: 0px; border-radius: 100px;";

//CARD	1

const divCardInstagram = document.createElement('div');
divCardInstagram.classList.add('card-instagram');

document.body.appendChild(divCardInstagram);
divWrapperFlex.appendChild(divCardInstagram);
document.querySelector(".card-instagram").style.cssText =
	"color: white; font-size: 16px; width: 245px; height: 350px; border: none; border-radius: 10px; background: #E2306C;";

const imgInstagram = document.createElement('img');
imgInstagram.src = './img/instagram-logo.png';
imgInstagram.classList.add('logo');
imgInstagram.alt = 'instagram-logo';
divCardInstagram.appendChild(imgInstagram);


const namingCardInstagram = document.createElement('h1');
namingCardInstagram.classList.add('title-instagram');
divCardInstagram.appendChild(namingCardInstagram);
namingCardInstagram.textContent = 'INSTAGRAM';
document.querySelector(".title-instagram").style.cssText =
	"color: white; font-size: 26px; margin-left: 43px;";

const textInstagram = document.createElement('p');
textInstagram.classList.add('text-instagram');
divCardInstagram.appendChild(textInstagram);
textInstagram.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugit consectetur mollitia possimus voluptate tempore iste fugiat qui dolor inventore, id, nulla quos sed, doloremque molestias asperiores rerum tenetur nobis.';
document.querySelector(".text-instagram").style.cssText =
	"color: white; font-size: 13px; margin-left: 20px; width: 220px";

const buttonInstagram = document.createElement('button');
buttonInstagram.classList.add('button-instagram');
divCardInstagram.appendChild(buttonInstagram);
buttonInstagram.textContent = 'READ MORE';
document.querySelector(".button-instagram").style.cssText = 
	"width: 170px; color:#E2306C; margin: 10px 35px; text-align: center; padding: 15px; background: white; border: 0px; border-radius: 100px;";

//CARD 3

const divCardYoutube = document.createElement('div');
divCardYoutube.classList.add('card-youtube');

document.body.appendChild(divCardYoutube);
divWrapperFlex.appendChild(divCardYoutube);
document.querySelector(".card-youtube").style.cssText =
	"color: grey; font-size: 16px; width: 245px; height: 350px; border:  2px solid rgb(0, 0, 0); border-radius: 10px; background: rgb(244, 246, 246);";

const imgYoutube = document.createElement('img');
imgYoutube.src = './img/youtube-logo.png';
imgYoutube.classList.add('logo');
imgYoutube.alt = 'youtube-logo';
divCardYoutube.appendChild(imgYoutube);

const namingCardYoutube = document.createElement('h1');
namingCardYoutube.classList.add('title-youtube');
divCardYoutube.appendChild(namingCardYoutube);
namingCardYoutube.textContent = 'YOUTUBE';
document.querySelector(".title-youtube").style.cssText =
	"color: black; font-size: 26px; margin-left: 60px;";

const textYoutube = document.createElement('p');
textYoutube.classList.add('text-youtube');
divCardYoutube.appendChild(textYoutube);
textYoutube.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugit consectetur mollitia possimus voluptate tempore iste fugiat qui dolor inventore, id, nulla quos sed, doloremque molestias asperiores rerum tenetur nobis.';
document.querySelector(".text-youtube").style.cssText =
	"color: black; font-size: 13px; margin-left: 20px; width: 220px";

const buttonYoutube = document.createElement('button');
buttonYoutube.classList.add('button-youtube');
divCardYoutube.appendChild(buttonYoutube);
buttonYoutube.textContent = 'READ MORE';
document.querySelector(".button-youtube").style.cssText =
	"width: 170px; color:white; margin: 10px 35px; text-align: center; padding: 15px; background: #000; border: 0px; border-radius: 100px;";


// Рішення 1
const logos = document.querySelectorAll(".logo");

logos.forEach((logo) => {
	logo.style.cssText = "margin: 40px 92px 2px; width: 60px;";
});

// Рішення 2
// const logos = document.querySelectorAll(".logo");
// logos[0].style.cssText = "margin: 40px 92px 2px; width: 60px;";
// logos[1].style.cssText = "margin: 40px 92px 2px; width: 60px;";
// logos[2].style.cssText = "margin: 40px 92px 2px; width: 60px;";
