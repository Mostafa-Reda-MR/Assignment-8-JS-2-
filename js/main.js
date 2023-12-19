var quotes = [
    `<div class="w-small mt-5"> <img src="image/Q1.jpg" class="w-100 h-100 rounded-circle" alt="person"> </div>
    <p class="lead fw-normal pt-2 my-0">“Be yourself; everyone else is already taken.”</p>
    <p class="fw-bold fs-3 my-0">- Oscar Wilde -</p>`
    ,

    `<div class="w-small mt-5"> <img src="image/Q2.jpg" class="w-100 h-100 rounded-circle" alt="person"> </div>
    <p class="lead fw-normal pt-2 my-0">“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</p>
    <p class="fw-bold fs-3 my-0">- Albert Einstein -</p>`
    ,

    `<div class="w-small mt-5"> <img src="image/Q3.jpg" class="w-100 h-100 rounded-circle" alt="person"> </div>
    <p class="lead fw-normal pt-2 my-0">“So many books, so little time.”</p>
    <p class="fw-bold fs-3 my-0">- Frank Zappa -</p>`
    ,

    `<div class="w-small mt-5"> <img src="image/Q4.jpg" class="w-100 h-100 rounded-circle" alt="person"> </div>
    <p class="lead fw-normal pt-2 my-0">“You only live once, but if you do it right, once is enough.”</p>
    <p class="fw-bold fs-3 my-0">- Mae West -</p>`
    ,

    `<div class="w-small mt-5"> <img src="image/Q5.jpg" class="w-100 h-100 rounded-circle" alt="person"> </div>
    <p class="lead fw-normal pt-2 my-0">“Be the change that you wish to see in the world.”</p>
    <p class="fw-bold fs-3 my-0">- Mahatma Gandhi -</p>`
    ,

    `<div class="w-small mt-5"> <img src="image/Q6.jpg" class="w-100 h-100 rounded-circle" alt="person"> </div>
    <p class="lead fw-normal pt-2 my-0">“If you tell the truth, you don't have to remember anything.”</p>
    <p class="fw-bold fs-3 my-0">- Mark Twain -</p>`
    ,

    `<div class="w-small mt-5"> <img src="image/Q7.jpg" class="w-100 h-100 rounded-circle" alt="person"> </div>
    <p class="lead fw-normal pt-2 my-0">“A friend is someone who knows all about you and still loves you.”</p>
    <p class="fw-bold fs-3 my-0">- Elbert Hubbard -</p>`
    ,

    `<div class="w-small mt-5"> <img src="image/Q8.jpg" class="w-100 h-100 rounded-circle" alt="person"> </div>
    <p class="lead fw-normal pt-2 my-0">“I have not failed. I've just found 10,000 ways that won't work.”</p>
    <p class="fw-bold fs-3 my-0">- Thomas A. Edison -</p>`
]


var randomNum = -1;

function displayQuote(){
    var newNum;
    while (true) {
        newNum = Math.floor(Math.random() * quotes.length);
        if (newNum !== randomNum) {
            break;
        }
    }

    randomNum = newNum;
    var displayQuote = quotes[randomNum];
    output.innerHTML = displayQuote ;
}