let allTotal = 0

function add(element) {
	let mainElemenet = element.closest('.film');
	let cijena = mainElemenet.querySelector('h4').innerText;
	const ukupnaCijena = document.querySelector('.ukupna-cijena');
	cijena = cijena.substring(1);
	cijena = parseInt(cijena);

	allTotal += cijena


	let nazivFilma = mainElemenet.querySelector('h3').innerText;
	let pogledano = document.querySelector('.pogledano')

		pogledano.innerHTML += `<div>
									<h2>${nazivFilma}</h2>
									<p>Price: $<span>${cijena}</span></p>
									<button onclick="remove(this)">Remove</button>
								</div>`


	element.innerText = 'Watched';
	element.setAttribute('disabled', 'true')

	ukupnaCijena.innerHTML = `<h2>Total: $${allTotal}</h2>` ;

	mainElemenet.style.backgroundColor = 'red'

}

function remove(btn) {
	let mainElemenet = btn.closest('div');
	let cijena = mainElemenet.querySelector('p span').innerText;
	let nazivFilma = mainElemenet.querySelector('h2').innerText
	let filmovi = document.querySelectorAll('.film');
	cijena = parseInt(cijena);
	allTotal -= cijena;
	mainElemenet.remove();
	document.querySelector('.ukupna-cijena').innerHTML = `<h2>Total: $${allTotal}</h2>`;
	mainElemenet.remove();

	filmovi.forEach(function (film) {
		let imeFilma = film.querySelector('h3').innerText
		if(imeFilma === nazivFilma) {
			film.querySelector('.film button').innerText = 'Watch'
			film.querySelector('.film button').removeAttribute('disabled')
			film.style.backgroundColor = 'white';
		}
	});
}