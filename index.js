const input = document.getElementById('input')
const body = document.getElementById('body')
const para = document.getElementById('para')

function colorChanger(){
    let color = input.value;
    body.style.background = color;
    para.innerText = `copy code : ${color}`
    para.style.background = 'black'
    para.style.color = 'white'
}