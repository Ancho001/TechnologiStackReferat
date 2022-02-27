function cleacked(){
    alert("Вы нажали на кнопку");
}

const block = document.querySelector('.block_color')
const colors = ['#F08080', '#FA8072', '#CD5C5C', '#DC143C',  '#FF0000', '#B22222', '#8B0000']
const colorWhite = 'rgb(180, 176, 176)'
const ALLWIDTH = 280
const WIDTH = 40
const HIDTH = 50
block.getElementsByClassName.width = ALLWIDTH + 'px'
block.getElementsByClassName.heigth = HIDTH + 'px'
for (let i=0; i< (ALLWIDTH/WIDTH); i++)
{
    const span = document.createElement('span')
        span.className = 'block__square'
        span.style.width = WIDTH + 'px'
        span.style.height = HIDTH + 'px'
    block.appendChild(span)
}
const out = document.querySelectorAll('.block__square');
const changeColor = (out) => {
    setInterval(()=>{    
    for (let i = 0; i < (ALLWIDTH / WIDTH); i++) {
        setTimeout(() => {
            out[0].style.backgroundColor = colors[0];
            out[6].style.backgroundColor = colorWhite;
        }, 100)
        setTimeout(() => {
            out[1].style.backgroundColor = colors[1];
            out[0].style.backgroundColor = colorWhite;
        }, 200)
        setTimeout(() => {
            out[2].style.backgroundColor = colors[2];
            out[1].style.backgroundColor = colorWhite;
        }, 300)
        setTimeout(() => {
            out[3].style.backgroundColor = colors[3];
            out[2].style.backgroundColor = colorWhite;
        }, 400)
        setTimeout(() => {
            out[4].style.backgroundColor = colors[4];
            out[3].style.backgroundColor = colorWhite;
        }, 500)
        setTimeout(() => {
            out[5].style.backgroundColor = colors[5];
            out[4].style.backgroundColor = colorWhite;
        }, 600)
        setTimeout(() => {
            out[6].style.backgroundColor = colors[6];
            out[5].style.backgroundColor = colorWhite;
        }, 700)
        setTimeout(() => {
            out[6].style.backgroundColor = colorWhite;
        }, 800)
    }
},800)
}
changeColor(out)
