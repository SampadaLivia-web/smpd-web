var faqAccordionRef = document.getElementById('faqAccordion');

const FAQ = [
    {
        ques:"Will the layout of flat be changed?",
        ans:`Layout can not be changed but if members want to upgrade their units / or shift to another tower in Phase -1 then â€“ may so be done at the time of BBA change as follows
            -   Receiving request from Members, 
            -	Availability of flat will be ascertained 
            -	Then first-come, first-served basis
        `
    },
    {
        ques:"Will the layout of flat be changed?",
        ans:`Layout can not be changed but if members want to upgrade their units / or shift to another tower in Phase -1 then â€“ may so be done at the time of BBA change as follows
            -   Receiving request from Members, 
            -	Availability of flat will be ascertained 
            -	Then first-come, first-served basis
        `
    },{
        ques:"Will the layout of flat be changed?",
        ans:`Layout can not be changed but if members want to upgrade their units / or shift to another tower in Phase -1 then â€“ may so be done at the time of BBA change as follows
            -   Receiving request from Members, 
            -	Availability of flat will be ascertained 
            -	Then first-come, first-served basis
        `
    },{
        ques:"Will the layout of flat be changed?",
        ans:`Layout can not be changed but if members want to upgrade their units / or shift to another tower in Phase -1 then â€“ may so be done at the time of BBA change as follows
            -   Receiving request from Members, 
            -	Availability of flat will be ascertained 
            -	Then first-come, first-served basis
        `
    },
]

const faqGenerator = (faq, idx) => {
    return `<div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${idx}">
                        ${faq.ques}
                    </button>
                </h2>
                <div id="collapse${idx}" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        ${faq.ans}
                    </div>
                </div>
            </div>`
}

var faqInnerHTML = "";

var idx=0;

for (const faq of FAQ) {
    faqInnerHTML+=faqGenerator(faq, idx);
    idx++;
}

faqAccordionRef.innerHTML=faqInnerHTML;