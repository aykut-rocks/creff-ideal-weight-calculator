var calculateIdealWeight = () => {

	const personHeight = parseInt(document.querySelector('#height').value, 10);
	const personAge = parseInt(document.querySelector('#age').value, 10);
	const personSlimness = document.querySelector('#slimness');

	const personHeightFactor = personHeight - 100;
	const personAgeFactor = personAge/10;
	const personSlimnessFactor = parseFloat(personSlimness.options[personSlimness.selectedIndex].value, 10);

	let idealWeight = (personHeightFactor + personAgeFactor) * 0.9 * personSlimnessFactor;
	let idealWeightContainer = document.querySelector('.ideal-weight');

	idealWeightContainer.innerHTML = idealWeight.toFixed(2);
};

var resetCreffForm = () => {
	document.querySelector('#creff-form').reset();
};
