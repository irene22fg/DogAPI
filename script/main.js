const client = new XMLHttpRequest();

let boton = document.getElementsByTagName("button")[0];
boton.addEventListener('click', optionAJAX);
let img = document.getElementsByTagName("img")[0];

function optionAJAX(){
    let option = $('input[name="option"]:checked').val();

    if(option == "XHR")
        pruebaXHR();
    else if(option == "fetch")
        pruebaFetch();
    else
        pruebaJQuery();
}

function pruebaXHR() {

    if (client.readyState === 4 && client.status === 200){
        let data = client.responseText;
        data = JSON.parse(data);
        img.src=data.message;
    }
    client.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    client.send();

    console.log("Mostrado por peticion XHR");
}

function pruebaJQuery() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'https://dog.ceo/api/breeds/image/random',
        success: data => {
            // en data tenemos lo recibido
            img.src=data.message
        },
        error: () => {
            alert("error");
        },
        always: () => {
            console.log("complete");
        }
    });

    console.log("Mostrado por peticion JQuery");
}

async function pruebaFetch(){
    await fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            data = JSON.parse(data);
            img.src=data.message;
        })
        .catch(error =>{
            console.log(error);
        });

        console.log("Mostrado por peticion Fetch");
}