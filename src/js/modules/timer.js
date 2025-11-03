function timer() {
    const endDate = new Date('Jan 1, 2026, 00:00:00');

    const daysElements = document.querySelector('#days');
    const hoursElements = document.querySelector('#hours');
    const minutesElements = document.querySelector('#minutes');
    const secondsElements = document.querySelector('#seconds');

    let timerInterval;

    function updateTimer() {
        const now = new Date();
        const timeDifference = endDate - now;

        if (timeDifference <= 0) {
            daysElements.innerText = '0';
            hoursElements.innerText = '0';
            minutesElements.innerText = '0';
            secondsElements.innerText = '0';
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);
        
        daysElements.innerText = days;
        hoursElements.innerText = hours;
        minutesElements.innerText = minutes;
        secondsElements.innerText = seconds;
    }

    updateTimer(); //Запускаем счетчик при загрузке страницы
    timerInterval = setInterval(updateTimer, 1000); //Обновляем таймер каждую секунду
}

export default timer