let myHeading = document.querySelector('p');
myHeading.textContent = "hello world!";

var g_chg = false

document.querySelector('img').onclick = function() {
    if (!g_chg) {
        document.querySelector("img").attributes["src"].nodeValue = "images/test2.jpg"
        g_chg = !g_chg
    } else {
        document.querySelector("img").attributes["src"].nodeValue = "images/test.jpg"
        g_chg = !g_chg
    }
    
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;