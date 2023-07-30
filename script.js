
let title = document.querySelector(".head")
let turn = "X";





function turnXO(id) {
    let item = document.getElementById(id);

    if(turn === "X" && item.innerHTML == '') {
        item.innerHTML = "X"
        turn = "O"
        title.innerHTML = 'Turn to  <span class="opt">( O )</span>'
    } else if(turn === "O" && item.innerHTML == '') {
        item.innerHTML = "O"
        turn = "X"
        title.innerHTML = `Turn to  <span class="opt">( X )</span>`
    }
    winner() 
    document.getElementById("click").play()

}

let items = []; 

function winner() {
    for(let i = 1 ; i < 10 ; i++) {
     items[i] = document.getElementById("item" + i).innerHTML
    }

    if(items[1] == items[2] && items[2] == items[3] && items[1] != '') {
        endGame(1,2,3)
    }else if(items[4] == items[5] && items[5] == items[6] && items[4] != '') {
        endGame(4,5,6)
    }else if(items[7] == items[8] && items[8] == items[9] && items[7] != '') {
        endGame(7,8,9)
    }else if(items[1] == items[5] && items[5] == items[9] && items[5] != '') {
        endGame(1,5,9)
    }else if(items[3] == items[5] && items[5] == items[7] && items[3] != '') {
        endGame(3,5,7)
    }else if(items[1] == items[4] && items[4] == items[7] && items[1] != '') {
        endGame(1,4,7)
    }else if(items[2] == items[5] && items[5] == items[8] && items[2] != '') {
        endGame(2,5,8)
    }else if(items[3] == items[6] && items[6] == items[9] && items[3] != '') {
        endGame(3,6,9)
    } 
    
}


function endGame(id1,id2,id3) {
    title.innerHTML = `winner is <span class="opt">(${items[id1]})</span>`;
    document.getElementById("item" + id1).style.backgroundColor = "rgba(8, 6, 6, 0.7)"
    document.getElementById("item" + id2).style.backgroundColor = "rgba(8, 6, 6, 0.7)"
    document.getElementById("item" + id3).style.backgroundColor = "rgba(8, 6, 6, 0.7)"
    setInterval(function() {
    title.innerHTML += "🥇"
    },1500)
    setInterval(function() {
    location.reload()
    },2000)
    document.getElementById("success").play()
}