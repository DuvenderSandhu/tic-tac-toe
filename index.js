let body= document.body;
let turn=0;
let boxes= Array.from(body.querySelectorAll('.box'))
let cross=[]
let nought=[]
function resetGame(){
    boxes.forEach((box)=>{
        console.log()
        if(box.innerHTML!=null){
            box.innerHTML=null
            cross=[]
            nought=[]
        }
    })
}
function checkWin(){
    /*
    Left to Right =>0,1,2   && 3,4,5   && 6,7,8
    Top to Bottom => 0,3,6   && 1,4,7   && 2,5,8
    Cross=> 0,4,8 && 2,4,6
    */
    if(cross.includes('0') && cross.includes('1') && cross.includes('2') ||cross.includes('3') && cross.includes('4') && cross.includes('5') ||cross.includes('0') && cross.includes('7') && cross.includes('8')){
        alert("Cross Won")
    }
    else if(nought.includes('0') && nought.includes('1') && nought.includes('2') ||nought.includes('3') && nought.includes('4') && nought.includes('5') ||nought.includes('0') && nought.includes('7') && nought.includes('8')){
        alert("Nought Won")
    }

    else if(nought.includes('0') && nought.includes('3') && nought.includes('6') ||nought.includes('1') && nought.includes('4') && nought.includes('7') ||nought.includes('2') && nought.includes('5') && nought.includes('8')){
        alert("Nought Won")
    }
    else if(cross.includes('0') && cross.includes('3') && cross.includes('6') ||cross.includes('1') && cross.includes('4') && cross.includes('7') ||cross.includes('2') && cross.includes('5') && cross.includes('8')){
        alert("Cross Won")
    }
    else if(cross.includes('0') && cross.includes('4') && cross.includes('8') ||cross.includes('2') && cross.includes('4') && cross.includes('6')){
        alert("Cross Won")
        resetGame()
    }
    else if(nought.includes('0') && nought.includes('4') && nought.includes('8') ||nought.includes('2') && nought.includes('4') && nought.includes('6')){
        alert("Nought Won")
        resetGame()
    }
    else if(nought.length+cross.length===9){
        alert("Match Draw")
        resetGame()
    }

}
body.querySelector('.new').addEventListener('click',()=>{
    resetGame()
})
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        let element= document.createElement('img')
        if(turn===0 && !box.children[0]){
            element.setAttribute('src','images/cross.png')
            box.appendChild(element)
            cross.push(box.getAttribute('id'))
            checkWin()
            turn=turn+1;
        }
        else if(turn===1 && !box.children[0]){
            element.setAttribute('src','images/nought.png')
            box.appendChild(element)
            nought.push(box.getAttribute('id'))
            checkWin()


            turn=turn-1;

        }
    })
})