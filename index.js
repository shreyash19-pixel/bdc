
var hamburger = document.querySelector(".hamburger-wrap")
var hamburgerBars = document.querySelectorAll(".hamburger-bars")
var responsiveBar = document.querySelector(".responsive-navbar")
var navbarbg = document.querySelector(".navbar-wrap")
var container = document.getElementById('brandAssetsContainer');
var text = document.querySelector(".copy-link")
var clipboardIcon = document.getElementById("clip-board")
var downloadBtn = document.querySelectorAll(".media-kit-download-btn")
var brandAssetbtn = document.querySelectorAll(".brand-asset-download-img-wrap")
var hiddenFooterLinks = document.querySelectorAll(".responsive-footer-minimize-contents")
var plusIcon = document.querySelectorAll(".plus-icon")
var copyMessage = document.querySelector(".copy-message")

hamburger.addEventListener("click", function(){

    hamburgerBars.forEach(function(bar,index){
        if(index === 0)
        {
            bar.classList.toggle("hamburger-bars-tilt-left")
        }
        else if(index === 1)
        {
            bar.classList.toggle("hamburger-bars-tilt-right")
        }
        else if(index === 2)
        {
            bar.classList.toggle("hamburger-bar-inactive");
        }
       
    })

    responsiveBar.classList.toggle("responsive-navbar-inactive")
    document.body.classList.toggle("overflow-hidden");
});

clipboardIcon.addEventListener("click", function(){
    var copiedText = text.innerHTML
    copyToClipboard(copiedText);
    copyMessage.classList.add("copy-message-active");

    setTimeout(function() {
        copyMessage.classList.remove("copy-message-active");
    }, 2000);
});


function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed"; 
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

downloadBtn.forEach(function(downloadBtn,index) {
    downloadBtn.addEventListener("click", function() {
        if(index === 0)
        {
            var imageUrl = "images/nav/company-logo.png"
            downloadImage(imageUrl);
        }
        else if(index === 1)
        {
            var imageUrl = "images/brand-assets/brand-asset-img.png"
            downloadImage(imageUrl);
        }
    });
});

brandAssetbtn.forEach(function(brandAssetbtn,index) {
    brandAssetbtn.addEventListener("click", function() {
        if(index === 0)
        {
            var imageUrl = "images/brand-assets/brand-asset-card1.png"
            downloadImage(imageUrl);
        }
        else if(index === 1)
        {
            var imageUrl = "images/brand-assets/brand-asset-card2.png"
            downloadImage(imageUrl);
        }
        else if(index === 2)
        {
            var imageUrl = "images/brand-assets/brand-asset-card3.png"
            downloadImage(imageUrl);
        }
    });
});



function downloadImage(url) {
    var a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop(); 
    document.body.appendChild(a);
    a.click(); 
    document.body.removeChild(a); 
}

plusIcon.forEach(function(icon, index) {
    icon.addEventListener("click", function() {
        hiddenFooterLinks[index].classList.toggle("responsive-footer-minimize-contents-active");
    });
});

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll > 60)
    {
        navbarbg.classList.add("navbar-background")
    }
    else
    {
        navbarbg.classList.remove("navbar-background")
    }
});
