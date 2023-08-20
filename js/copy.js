


let urls = {
    "web": 'https://www.mlearning.url.tw',
    "fb": 'https://www.facebook.com/michellechang2006/',
    "github": 'https://github.com/michellechang2006',
    "ig": 'https://www.instagram.com/michellechanghomeschooling'
}

function copyUrl(urlName) {
    const value = urls[urlName];
    const el = document.createElement('textarea');
    el.value = value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
