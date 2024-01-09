
let h2 = document.querySelector("h2");
const getColor=()=>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = '#'+randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    h2.innerHTML=randomCode;
    console.log(randomNumber);
}

// event code
document.getElementById('btn').addEventListener(
    "click",
    getColor
)

// Initial call
getColor();