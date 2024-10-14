let res = document.getElementById("resultado")
let evento = document.getElementById("manterResultado")

evento.addEventListener('submit', function(e) {
    e.preventDefault()
})

function verificar() {
    let campoNA = Number(document.getElementById("campoA").value)
    let campoNB = Number(document.getElementById("campoB").value)  

    if (campoNA != "" && campoNB != "") {
        if (campoNA < campoNB) {
            res.innerHTML = 'O campo B é maior que o campo A'
            res.style.color = 'green'
        } else if (campoNA > campoNB) {
            res.innerHTML = 'O campo B é menor que o campo A'
            res.style.color = 'red'
        } else if (campoNA == campoNB) {
            res.innerHTML = 'O campo A e B são iguais.'
            res.style.color = 'rgb(171, 173, 39)'
        }
    } else {
        res.innerHTML = 'Digite no campo A e B.'
        res.style.color = ''
    }

    if (campoA.value ==='') {
        campoA.style.border = '2px solid red'
    }

    if (campoB.value === "") {
        campoB.style.border = '2px solid red'
    }

    campoA.addEventListener('change', function() {
        campoA.style.border = ''
    })

    campoB.addEventListener('change', function() {
        campoB.style.border = ''
    })
}

