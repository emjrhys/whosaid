var quotes = [
	{ quote: "Everyone's got friends when they're 21.", origin: "jodj" },
	{ quote: "Who needs running water when we can go to a fountain?", origin: "jodj" },
	{ quote: "Having a beer would be too much work. Instead, I'll just have a strong rum drink.", origin: "jodj" },
	{ quote: "I just do what satisfies me... it's all temporary.", origin: "jodj" },
	{ quote: "You know what we should do? We should take one of these couches and put wheels on it and turn it into a car.", origin: "jodj" },
	{ quote: "There's no such thing as too turnt.", origin: "jodj" },
	{ quote: "I feel like I would be an irresponsible person.", origin: "jodj" },
	{ quote: "Have you ever tried half-drowning yourself? I was doing that yesterday.", origin: "jodj" },
	{ quote: "I'm 180 lbs of pure deliciousness.", origin: "jodj" },
	{ quote: "Do you have anything better to do than cry?", origin: "jodj" },
	{ quote: "Nobody washes the dishes! We eat food directly off the coffee table and you know it.", origin: "frank" },
	{ quote: "Two dudes getting married, that doesn't seem very gay.", origin: "frank" },
	{ quote: "I don't know how many years on this earth I got left. I'm gonna get real weird with it.", origin: "frank" },
	{ quote: "We could be in a turtle's dream in outer space!", origin: "frank" },
	{ quote: "What's up bitches! I'm a man cheetah!", origin: "frank" },
	{ quote: "I need an Advil, a roll of duct tape, a pack of peanuts, and four beers.", origin: "frank" },
	{ quote: "Everybody lies on the internet.", origin: "frank" },
	{ quote: "When I'm dead, just throw me in the trash.", origin: "frank" },
	{ quote: "I told you, animals suck.", origin: "frank" },
	{ quote: "That sounds the tits!", origin: "frank" }
];

var current = 0;
var score = 0;
var max = 8;

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function init() {
	shuffle(quotes);

	$('.quote span').text(quotes[current].quote);
	$('section.start').fadeOut(400, function() {
		$('section.game').fadeIn(400);
	});
}

function nextQuote() {
	current++;

	$('.choice').removeClass('right wrong');
	$('.choice').removeAttr('disabled');

	if (current < max) {
		$('.quote').fadeOut(400, function() {
			$('.quote span').text(quotes[current].quote);
			$('.quote').fadeIn(400);
		});
		$('.next').attr('disabled', 'disabled');
	} else {
		endGame();
	}
}

function endGame() {
	$('.score').text(score);
	$('.total').text(max);
	$('section.game').fadeOut(400, function() {
		$('section.results').fadeIn(400);
	});
}

function replay() {
	current = 0;
	score = 0;

	$('.choice').removeAttr('disabled');
	$('.next').attr('disabled', 'disabled');
	$('section.results').fadeOut(400, function() {
		$('section.start').fadeIn(400);
	});
}

$('.choice').click(function() {
	var choice = $(this).attr('data-choice');

	$('.choice').attr('disabled', 'disabled');

	if (choice == quotes[current].origin) {
		$(this).addClass('right');
		score++;
	} else {
		$('.choice').addClass('right');
		$(this).removeClass('right').addClass('wrong');
	}

	setTimeout(function() {
		$('.next').removeAttr('disabled');
	}, 600);
});

$('section.game, section.results').css({ display: 'none' });

$('.start').click(init);
$('.next').click(nextQuote);
$('.replay').click(replay);
