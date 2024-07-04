//API
const api = '34479c15736a9bc502074d12e41504b5';

fetch('https://api.openweathermap.org/data/2.5/weather?id=524901&&lang=ru&appid=34479c15736a9bc502074d12e41504b5')
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.temperature').textContent = (Math.round(data.main.temp - 273.15)) + 'º';
        document.querySelector('.value-det1').textContent = (Math.round(data.main.feels_like - 273.15)) + 'º';
        document.querySelector('.value-det2').textContent = Math.round(data.wind.speed) +' м/с';
        document.querySelector('.value-det3').textContent = data.main.humidity + '%';
        document.querySelector('#value-det4').innerHTML = (Math.round(data.main.pressure * 0.75006)) + ' мм.рт.ст.'
        document.querySelector('.value-det5').textContent = (Math.round(data.visibility / 1000)) + ' км.';

        let = TimeRise = data.sys.sunrise
        let TimeSet = data.sys.sunset
        document.querySelector('.timerise').innerHTML = new Date(TimeRise * 1000).toLocaleTimeString("ru-RU", {hour12: false});
        document.querySelector('.timeset').innerHTML = new Date(TimeSet * 1000).toLocaleTimeString("ru-RU", {hour12: false});
       





    })

        function updateDays() {
            const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
            const now = new Date();
        
            for (let i = 0; i < 5; i++) {
                const currentDate = new Date(now);
                currentDate.setDate(now.getDate() + i);
                const day = daysOfWeek[currentDate.getDay()];
                const dayOfMonth = currentDate.getDate();
                const month = currentDate.toLocaleDateString("ru-RU");
        
                document.getElementById(`day${i + 1}`).innerHTML = `${day}, ${dayOfMonth}`;
            }
        }
        
        window.onload = updateDays;
        setInterval(updateDays, 1000);

    fetch('https://api.openweathermap.org/data/2.5/forecast?id=524901&&lang=ru&appid=34479c15736a9bc502074d12e41504b5')
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        console.log(data); 
        document.querySelector('.city').textContent = data.city.name;
        
        document.querySelector('.this_day_icon').innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png" alt="Weather Icon">';
        document.querySelector('.day1-icon').innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png" alt="Weather Icon">';
        const desc = data.list[0].weather[0].description;

        const resDes = desc.charAt(0).toUpperCase() + desc.slice(1)

        document.querySelector('.description').textContent = resDes;
    
        for (let i = 0; i < 8; i++) {
            const forecast = data.list[i * 8]; 
            const iconCode = forecast.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            const temperature = Math.round(forecast.main.temp - 273.15) + 'º';
            const minTemp =  Math.round(forecast.main.temp_min - 273.15) + 'º';

            document.querySelector(`.day${i + 1}-icon`).innerHTML = ` <img src="${iconUrl}" alt="Weather Icon"> `;
            document.querySelector(`.day-temp${i + 1}`).textContent = temperature;
            document.querySelector(`.min-temp${i + 1}`).textContent = (Math.round(data.list[i * 5].main.temp_min - 273.15) + 'º');

        }
    })

