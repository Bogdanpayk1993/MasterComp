function facebook() {
    open('http://www.facebook.com/mastercomp2/')
}

function instagram() {
    open('https://www.instagram.com/mastercomp_uzh/?hl=ru')
}

class Slider {
    constructor(jmg1, jmg2, jmg3) {
        this.i = 1
        this.jmg1 = jmg1
        this.jmg2 = jmg2
        this.jmg3 = jmg3
    }

    slider_prev() {
        this.i = this.i - 1

        if (this.i == 0)
            this.i = 3

        this.print()
    }

    slider_next() {
        this.i = this.i + 1

        if (this.i == 4)
            this.i = 1

        this.print()
    }

    print() {
        switch (this.i) {
            case 1:
                this.div.style.backgroundImage = `url(${this.jmg1})`
                break
            case 2:
                this.div.style.backgroundImage = `url(${this.jmg2})`
                break
            case 3:
                this.div.style.backgroundImage = `url(${this.jmg3})`
                break
        }
    }

    render(containerID) {
        this.div = document.getElementById(containerID)
        this.div.style.backgroundImage = `url(${this.jmg1})`
        this.div.style.backgroundSize = "100%"
        this.div.style.height = "30.8vw"

        let prev = document.createElement("img")
        prev.src = "./image/prev.png"
        prev.style.width = "5vw"
        prev.style.float = "left"
        prev.style.marginLeft = "3vw"
        prev.style.marginTop = "12.9vw"
        prev.onclick = this.slider_prev.bind(this)
        this.div.appendChild(prev)

        let next = document.createElement("img")
        next.src = "./image/next.png"
        next.style.width = "5vw"
        next.style.float = "right"
        next.style.marginRight = "3vw"
        next.style.marginTop = "12.9vw"
        next.onclick = this.slider_next.bind(this)
        this.div.appendChild(next)
    }

}

window.onload = function () {
    var slider = new Slider('./image/phone1.jpg','./image/phone2.jpg','./image/phone3.jpg')
    slider.render("slider")
    document.getElementById("facebook").onclick = facebook
    document.getElementById("instagram").onclick = instagram
}
