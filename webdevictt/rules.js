
const targetDate = new Date("June 10, 2025 12:00:00").getTime();
const days= document.querySelector(".days")
const hours= document.querySelector(".hours")
const minutes= document.querySelector(".minutes")
const seconds=document.querySelector(".seconds")

        function updateTimer() {
            const now = new Date().getTime();
            const timeDifference = targetDate - now;
            days.textContent = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
         hours.textContent = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes.textContent = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
         seconds.textContent = Math.floor((timeDifference % (1000 * 60)) / 1000);
        }
        setInterval(() => { (updateTimer(), 1000)})
        setInterval()
        updateTimer();
