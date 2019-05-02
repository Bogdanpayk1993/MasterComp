let i = 1
let img
let jmg1 = "./image/background1.jpg"
let jmg2 = "./image/background2.jpg"
let jmg3 = "./image/background3.jpg"

window.onload = function () {
    slider()
    document.getElementById("facebook").onclick = facebook
    document.getElementById("instagram").onclick = instagram
}

function facebook() {
    open('http://www.facebook.com/mastercomp2/')
}

function instagram() {
    open('https://www.instagram.com/mastercomp_uzh/?hl=ru')
}

function slider_prev() {
    i = i - 1

    if (i == 0)
        i = 3

    print()
}

function slider_next() {
    i = i + 1

    if (i == 4)
        i = 1

    print()
}

function print() {
    switch (i) {
        case 1:
            img.src = `${jmg1}`
            break
        case 2:
            img.src = `${jmg2}`
            break
        case 3:
            img.src = `${jmg3}`
            break
    }
}

function slider() {
    let div = document.getElementById("slider")
    div.style.height = "30.9vw"

    img = document.createElement("img")
    img.src = `${jmg1}`
    img.style.width = "100%"
    img.style.position = "absolute"
    img.style.zIndex = "0"
    div.appendChild(img)

    let prev = document.createElement("img")
    prev.src = "./image/prev.png"
    prev.style.width = "5%"
    prev.style.float = "left"
    prev.style.marginLeft = "3%"
    prev.style.position = "relative"
    prev.style.zIndex = "1"
    prev.style.marginTop = "12.9vw"
    prev.onclick = slider_prev
    div.appendChild(prev)

    let next = document.createElement("img")
    next.src = "./image/next.png"
    next.style.width = "5%"
    next.style.float = "right"
    next.style.marginRight = "3%"
    next.style.position = "relative"
    next.style.zIndex = "1"
    next.style.marginTop = "12.9vw"
    next.onclick = slider_next
    div.appendChild(next)
}