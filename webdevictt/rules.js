export const array=[
     {
        ruleHeadings:"Eligibility",
        rule:"Only registered students, staff, or alumni with valid credentials can participate in the vote."
     },
     {
        ruleHeadings:"One Vote Per Poll",
        rule:"Each voter is allowed to cast only one vote per poll. Multiple votes are not permitted."
     }, {
        ruleHeadings:"No Proxy Voting",
        rule:"Voting on behalf of someone else is not allowed under any circumstances."
     }, {
        ruleHeadings:"Respect Voting Deadlines",
        rule:"Ensure you cast your vote within the specified voting period. Late votes will not be accepted."
     }, {
        ruleHeadings:"No Tampering Or Manipulation",
        rule:"Attempting to hack, manipulate, or interfere with the voting system is strictly forbidden and may result in disqualification or disciplinary action."
     }, {
        ruleHeadings:"Review Before Submission",
        rule:"Double-check your choice before submitting your vote. Once submitted, votes cannot be changed or withdrawn."
     }, {
        ruleHeadings:"Maintain Confidentiality",
        rule:"Do not attempt to discover, share, or discuss the choices of other voters. Your vote is private, and so is theirs."
     }, {
        ruleHeadings:"Use The Platform Responsibly",
        rule:"Avoid any misuse of the platform, such as spamming or disrupting other users' access to the web app."
     }, {
        ruleHeadings:"Report Issues Promptly",
        rule:"If you encounter any issues with the voting system, report them immediately through the provided support channels."
     },
     
]
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
