import {leafAppearKeyframes, leafDisappearKeyFrames, appearInFromBottomKeyframes, hideToBottomKeyframes, flipInAnimationKeyframes, appearInFromLeftKeyframes, appearInFromRightKeyframes} from "../../common/js/keyframes.js"
export var headerClickedToHomePage = (navObj) => {
    var runningDelay = 0;
    var header = document.querySelector("#header_container");
    header.animate(hideToBottomKeyframes(), {
        easing: "ease-in",
        duration: 500,
        delay: runningDelay,
        fill: "none"
        });
    let aboutPage = document.querySelector("#about_container");
    let contactPage = document.querySelector("#contactFormContainer");
    let experiencePage = document.querySelector("#experienceContainer");
    if (aboutPage != null){
        aboutPage.animate(hideToBottomKeyframes(), {
            easing: "ease-in",
            duration: 500,
            delay: runningDelay,
            fill: "none"
        });
    }
    else if (contactPage != null){
        contactPage.animate(hideToBottomKeyframes(), {
            easing: "ease-in",
            duration: 500,
            delay: runningDelay,
            fill: "none"
        });
    }
    else if (experiencePage != null){
        experiencePage.animate(hideToBottomKeyframes(), {
            easing: "ease-in",
            duration: 500,
            delay: runningDelay,
            fill: "none"
        });
    }
    runningDelay += 500;
    runningDelay -= 100;
    setTimeout(function (){
        navObj("/home");
    }, runningDelay); 
}
export var homePageInitAnimation = () => {
    var runningDelay = 0;
    var footerWave1 = document.getElementById("footer_wave_one");
    if (footerWave1)  footerWave1.style.opacity = "0";
    var footerWave2 = document.getElementById("footer_wave_two");
    if (footerWave2) footerWave2.style.opacity = "0";
    var footerWave3 = document.getElementById("footer_wave_three");
    if (footerWave3) footerWave3.style.opacity = "0";
    var nameTitle = document.querySelector("#welcomeComponent .nameTitle");
    if (nameTitle) nameTitle.style.opacity = "0";
    var nameSubtitle = document.querySelector("#welcomeComponent .nameSubtitle");
    if (nameSubtitle) nameSubtitle.style.opacity = "0";
    var logoLeaf = document.querySelector("#welcomeComponent #logoLeaf");
    if (logoLeaf) logoLeaf.style.opacity = "0";
    var menuItemsArr = document.getElementsByClassName("menuItem");
    Array.prototype.forEach.call(menuItemsArr, (menuItem)=>{
        menuItem.style.opacity = "0";
    });
    var menuStick = document.querySelector(".stick");
    if (menuStick) menuStick.style.opacity = "0"; 
    
    if (footerWave1) {
      footerWave1.animate(appearInFromBottomKeyframes(),
      {
        easing: "ease-in-out",
        duration: 1000,
        delay: runningDelay,
        fill: "forwards"
      });
      runningDelay+= 200;
    }
    if (footerWave2){
      footerWave2.animate(appearInFromBottomKeyframes(),
        {
          easing: "ease-in-out",
          duration: 1000,
          delay: runningDelay,
          fill: "forwards"
        });
      runningDelay+= 100;
    }
    if (footerWave3){
      footerWave3.animate(appearInFromBottomKeyframes(),
        {
          easing: "ease-in-out",
          duration: 1000,
          delay: runningDelay,
          fill: "forwards"
        });
      runningDelay+= 800;
    }
    if (nameTitle){
      nameTitle.animate(appearInFromBottomKeyframes(),
        {
        easing: "ease-in-out",
        duration: 1000,
        delay: runningDelay,
        fill: "forwards"
        });
      runningDelay += 200;
    }
    if (nameSubtitle) {
      nameSubtitle.animate(appearInFromBottomKeyframes(),
        {
          easing: "ease-in-out",
          duration: 1000,
          delay: runningDelay,
          fill: "forwards"
        });
      runningDelay += 200;
    }
    if (menuStick) {
      menuStick.animate(appearInFromBottomKeyframes(),
        {
          easing: "ease-in-out",
          duration: 1000,
          delay: runningDelay,
          fill: "forwards"
        });
      runningDelay += 1000;
    }
    if (menuItemsArr[0]) {
      menuItemsArr[0].animate(flipInAnimationKeyframes(),
        {
          easing: "ease-in-out",
          duration: 1000,
          delay: runningDelay,
          fill: "forwards"
        });
      runningDelay += 200;
    }
    if (menuItemsArr) {
      menuItemsArr[1].animate(flipInAnimationKeyframes(),
        {
          easing: "ease-in-out",
          duration: 1000,
          delay: runningDelay,
          fill: "forwards"
        });
      runningDelay += 200;
    }
    if (menuItemsArr[2]) {
      menuItemsArr[2].animate(flipInAnimationKeyframes(),
      {
        easing: "ease-in-out",
        duration: 1000,
        delay: runningDelay,
        fill: "forwards"
      });
      runningDelay += 200;
    }
    if (logoLeaf) {
    logoLeaf.animate(leafAppearKeyframes(),
      {
        easing: "ease-in-out",
        duration: 1000,
        delay: runningDelay,
        fill: "forwards"
      });
    }
      //TODO
    //logoLeaf.classList.add("rotating");
  }
export var contactPageInitAnimation = () => {
  var runningDelay = 0;
  var headerLogo = document.querySelector("#header_container .mainName");
  headerLogo.style.opacity = "0";
  var contactBody = document.getElementById("contactFormContainer");
  contactBody.style.opacity = "0";
  var footerWaves = document.querySelector("#footer svg");
  footerWaves.style.opacity = "0";
  headerLogo.animate(appearInFromBottomKeyframes(),
    {
      easing: "ease-in-out",
      duration: 1000,
      delay: runningDelay,
      fill: "forwards"
    });
  contactBody.animate(appearInFromBottomKeyframes(),
    {
      easing: "ease-in-out",
      duration: 1000,
      delay: runningDelay,
      fill: "forwards"
    });
  runningDelay+= 200;
  footerWaves.animate(appearInFromBottomKeyframes(),
  {
    easing: "ease-in-out",
    duration: 1000,
    delay: runningDelay,
    fill: "forwards"
  });
  //TODO
  //logoLeaf.classList.add("rotating");
}
export var homePageToAboutPage = (navObj) => {
    var runningDelay = 0;
    var logoLeaf = document.querySelector("#welcomeComponent #logoLeaf");
    if (logoLeaf) {
      logoLeaf.animate(leafDisappearKeyFrames(), {
        easing: "ease-in",
        duration: 500,
        delay: runningDelay,
        fill: "forwards"
      });
      runningDelay += 200;
    }
    var nameTitle = document.querySelector("#welcomeComponent .nameTitle");
    if (nameTitle) {
    nameTitle.animate(hideToBottomKeyframes(), {
        easing: "ease-in-out",
        duration: 500,
        delay: runningDelay,
        fill: "forwards"
      });
      runningDelay += 200;
    }
    var nameSubtitle = document.querySelector("#welcomeComponent .nameSubtitle");
    if (nameSubtitle){
      nameSubtitle.animate(hideToBottomKeyframes(),{
          easing: "ease-in-out",
          duration: 500,
          delay: runningDelay,
          fill: "forwards"
        });
      runningDelay += 200;
    }
    var footerWave1 = document.getElementById("footer_wave_one");
    if (footerWave1) {
      footerWave1.animate(hideToBottomKeyframes(),{
        easing: "ease-in-out",
        duration: 500,
        delay: runningDelay,
        fill: "forwards"
      });
      runningDelay += 200;
    }
    var footerWave2 = document.getElementById("footer_wave_two");
    if (footerWave2){
      runningDelay += 100;
      footerWave2.animate(hideToBottomKeyframes(),{
        easing: "ease-in-out",
        duration: 500,
        delay: runningDelay,
        fill: "forwards"
      });
    }
    var footerWave3 = document.getElementById("footer_wave_three");
    if (footerWave3) {
      footerWave3.animate(hideToBottomKeyframes(),{
        easing: "ease-in-out",
        duration: 500,
        delay: runningDelay,
        fill: "forwards"
      });
      runningDelay += 500;
    }
    setTimeout(function (){
        navObj("/about");
    }, runningDelay); 
}

export var aboutPageInitAnimation = () => {
    var runningDelay = 0;
    var headerLogo = document.querySelector("#header_container .mainName");
    headerLogo.style.opacity = "0";
    var aboutImg = document.querySelector("#about_header img");
    aboutImg.style.opacity = "0";
    var aboutTextArr = document.getElementsByClassName("about_paragraph");
    Array.prototype.forEach.call(aboutTextArr, (item)=>{
      item.style.opacity = "0";
    });
    var aboutCards = document.getElementById("about_main");
    aboutCards.style.opacity = "0";
    var footerWaves = document.querySelector("#footer svg");
    footerWaves.style.opacity = "0";
    footerWaves.animate(appearInFromBottomKeyframes(),
      {
        easing: "ease-in-out",
        duration: 1000,
        delay: runningDelay,
        fill: "forwards"
      });
    headerLogo.animate(appearInFromBottomKeyframes(),
      {
        easing: "ease-in-out",
        duration: 1000,
        delay: runningDelay,
        fill: "forwards"
      });
    runningDelay+= 200;
    aboutImg.animate(appearInFromBottomKeyframes(),
      {
        easing: "ease-in-out",
        duration: 1000,
        delay: runningDelay,
        fill: "forwards"
      });
    runningDelay+= 200;
    aboutTextArr[0].animate(appearInFromLeftKeyframes(),
      {
        easing: "ease-in-out",
        duration: 1000,
        delay: runningDelay,
        fill: "forwards"
      });
    runningDelay+= 200;
    aboutTextArr[1].animate(appearInFromRightKeyframes(),
      {
        easing: "ease-in-out",
        duration: 1000,
        delay: runningDelay,
        fill: "forwards"
      });
    runningDelay += 100;
    aboutTextArr[2].animate(appearInFromLeftKeyframes(),
      {
        easing: "ease-in-out",
        duration: 1000,
        delay: runningDelay,
        fill: "forwards"
      });
    aboutCards.animate(appearInFromBottomKeyframes(),
      {
        easing: "ease-in-out",
        duration: 1000,
        delay: runningDelay,
        fill: "forwards"
      });
      //TODO
    //logoLeaf.classList.add("rotating");
    }