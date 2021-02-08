const client = new XMLHttpRequest();

let boton = document.getElementsByTagName("button")[0];
boton.addEventListener('click', pruebaJQuery);
let img = document.getElementsByTagName("img")[0];

function pruebaXHR() {
    client.open("GET", "https://dog.ceo/api/breeds/image/random");
    client.send();
    console.log(client.responseText);
}

/* function pruebaJQuery() {
    $.ajax(
        {
            url: 'https://dog.ceo/api/breeds/image/random',
            type: "GET",
        })
        .done(function () {
            //$("#respuesta").html();
        })
        .fail(function () {
            alert("error");
        })
        .always(function () {
            alert("complete");
        });
} */