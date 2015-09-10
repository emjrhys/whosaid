var quotes = [
	{ quote: "Everyone's got friends when they’re 21.", origin: "jodj" },
	{ quote: "Who needs running water when we can go to a fountain?", origin: "jodj" },
	{ quote: "Having a beer would be too much work. Instead, I'll just have a strong rum drink.", origin: "jodj" },
	{ quote: "I just do what satisfies me… it’s all temporary.", origin: "jodj" },
	{ quote: "You know what we should do. We should take one of these couches and put wheels on it and turn it into a car.", origin: "jodj" },
	{ quote: "There's no such thing as too turnt.", origin: "jodj" },
	{ quote: "Nobody washes the dishes! We eat the food directly off the coffee table and you know it.", origin: "frank" },
	{ quote: "Two dudes getting married, that doesn't seem very gay.", origin: "frank" },
	{ quote: "I don't know how many years on this earth I got left. I'm gonna get real weird with it.", origin: "frank" },
	{ quote: "We could be in a turtle's dream in outer space", origin: "frank" }
];

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function init() {
	shuffle(quotes);
	console.log(quotes);
}

init();