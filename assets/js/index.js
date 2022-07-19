import Json from './Json.js';
import { Aguila, Leon, Lobo, Oso, Serpiente } from './TiposAnimales.js';

let identificador = 0;
// PREVISUALIZACION DEL ANIMAL
$('#animal').change(async () => {
    let { animales } = await Json.info();
    let nombre = $('#animal').val();
    let img = animales.find((animal) => animal.name == nombre).imagen;
    $('.card').css('padding', '0rem 3rem');
    $('#preview').empty()
    $('#preview').append(`<img class="mw-100 mh-100" src="./assets/imgs/${img}" />`);
})
// OBTENIENDO Y AGREGANDO ANIMAL
$('#btnRegistrar').click(async () => {
    const animal = [];
    identificador++;
    let { animales } = await Json.info();
    let nombre = $('#animal').val();
    let edad = $('#edad').val();
    let comentarios = $('#comentarios').val();

    if (nombre && edad && comentarios) {
        let img = animales.find((animal) => animal.name == nombre).imagen;
        let sonido = animales.find((animal) => animal.name == nombre).sonido;

        // AGREGAR ANIMAL
        $('#Animales').append(`<div class="px-3 w-25 h-25" aria-label="Close">
                                    <div id="modal${identificador}" data-toggle="modal" data-target="#modalShow">
                                        <img class="w-100" height="150px" src="./assets/imgs/${img}" />
                                    </div>
                                    <div id="audio${identificador}" class="audio"><i class="fa-solid fa-volume-low"></i></div>
                                <div>`);
        // INSTANCIACIÓN
        switch (nombre) {
            case 'Aguila':
                animal.push(new Aguila(nombre, edad, img, comentarios, sonido));
                $('#audio' + identificador).click(function () {
                    animal[0].chillar();
                })
                break;
            case 'Leon':
                animal.push(new Leon(nombre, edad, img, comentarios, sonido));
                $('#audio' + identificador).click(function () {
                    animal[0].rugir();
                })
                break;
            case 'Lobo':
                animal.push(new Lobo(nombre, edad, img, comentarios, sonido));
                $('#audio' + identificador).click(function () {
                    animal[0].aullar();
                })
                break;
            case 'Oso':
                animal.push(new Oso(nombre, edad, img, comentarios, sonido));
                $('#audio' + identificador).click(function () {
                    animal[0].grunir();
                })
                break;
            case 'Serpiente':
                animal.push(new Serpiente(nombre, edad, img, comentarios, sonido));
                $('#audio' + identificador).click(function () {
                    animal[0].sisear();
                })
                break;
        }
        // MODAL
        $('#modal' + identificador).click(function () {
            $('#modalShow .modal-body').empty();
            $('#modalShow .modal-body').append(`<div class="text-center text-white">
                                                    <img class="mw-100 h-100" src="./assets/imgs/${animal[0].img}" />
                                                    <div class="mt-2">${animal[0].edad}</div>
                                                    <h6>Comentarios</h6>
                                                    <hr>
                                                    <div>${comentarios}</div>
                                                </div>`);
        })
        // LIMPIEZA
        $('#animal').prop('selectedIndex', 0);
        $("#edad").prop('selectedIndex', 0);
        $('#comentarios').val('');
        $('.card').css('padding', '3rem');
        $('#preview').empty();
    } else {
        alert('Por favor llene el formulario')
    }
})