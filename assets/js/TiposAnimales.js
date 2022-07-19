import Animal from "./Animal.js";

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    chillar(){
        $('#player').attr({ 'src': `./assets/sounds/${this.sonido}`, 'autoplay': '' });
    }
}

class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    rugir(){
        $('#player').attr({ 'src': `./assets/sounds/${this.sonido}`, 'autoplay': '' });
    }
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar(){
        $('#player').attr({ 'src': `./assets/sounds/${this.sonido}`, 'autoplay': '' });
    }
}

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    grunir(){
        $('#player').attr({ 'src': `./assets/sounds/${this.sonido}`, 'autoplay': '' });
    }
}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    sisear(){
        $('#player').attr({ 'src': `./assets/sounds/${this.sonido}`, 'autoplay': '' });
    }
}

export {Aguila, Leon, Lobo, Oso, Serpiente}