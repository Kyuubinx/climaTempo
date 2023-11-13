var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3477/current?token=a1fe3f98e70ae646285bfbe919ac179b", requestOptions)
    .then(response => response.json())
    .then(tempoJson => {

        render(tempoJson)
    })
    .catch(error => console.log('error', error));

function render(tempoJson) {
    console.log(tempoJson)
    let ul = document.getElementById("weather-list");
    ul.innerHTML = "";

    ul.insertAdjacentHTML("beforeend", `
        <div id="climatempo">
            <li id="${tempoJson.id}">
                <div id="titulo">
                    <h2>Tempo agora em ${tempoJson.name}, ${tempoJson.state}</h2>
                </div>
                <br>
                <div id="temperatura">
                    <img src="https://www.climatempo.com.br/dist/images/v2/svg/2n.svg">
                    <h1>${tempoJson.data.temperature}°</h1>
                </div>
                <br>
                <div id="linha_extra">
                    <div><h3><img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-cloud.svg"> ${tempoJson.data.condition}</h3></div>
                    <div>
                        <h3><img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-sensation.svg"> Sensação: ${tempoJson.data.sensation}°</h3>
                    </div>
                    </ul>
                </div>
                <br>
                <div id="vento">
                    <h3>Vento: ${tempoJson.data.wind_velocity}km/h</h3>
                </div>
                <br>
                <div id="umidade">
                    <h3>Umidade: <img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-humidity-max.svg"> ${tempoJson.data.humidity}%</h3>
                </div>
            </li>
        </div>
        `);
}
