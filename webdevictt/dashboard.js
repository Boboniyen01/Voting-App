import {array} from "./rules.js"
document.addEventListener("DOMContentLoaded", ()=>{
    const rules= document.getElementsByClassName('rules')
    console.log(rules)
    const menu=document.querySelector(".menu")
    const sidebar=document.querySelector(".side-bar")
    menu.addEventListener("click",()=>{
       sidebar.classList.toggle('active')
       if(sidebar.classList.contains("active")){
           menu.src="images/x.svg"
       }
       else{
        menu.src="images/Frame.svg"
       }
    })
    console.log(array)
    array.forEach((e) => {
        const rule= document.createElement("div")
        rule.className="rule"
        const ruleHeading=document.createElement("h2")
        ruleHeading.textContent= e.ruleHeadings
        
        const ruleText=document.createElement("p")
        ruleText.textContent=e.rule
        ruleText.style.color="grey"
         rule.append(ruleHeading)
         rule.append(ruleText)
        if (rules.length > 0) {
            rules[0].append(rule); // Use the first element in the HTMLCollection
        } else {
            console.error("No element with class 'rules' found.");
        }
    });
})
