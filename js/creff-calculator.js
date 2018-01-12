const creffForm = document.getElementById('creff-form');
const heightCreffForm = document.getElementById('height');
const ageCreffForm = document.getElementById('age');
const idealWeightContainer = document.querySelector('.ideal-weight');

var calculateIdealWeight = () => {
	const personHeight = parseInt(heightCreffForm.value, 10);
	const personAge = parseInt(ageCreffForm.value, 10);
	const personSlimness = document.getElementById('slimness');

	let personHeightFactor = personHeight - 100;
	let personAgeFactor = personAge/10;
	let personSlimnessFactor = parseFloat(personSlimness.options[personSlimness.selectedIndex].value, 10);

	let idealWeight = (personHeightFactor + personAgeFactor) * 0.9 * personSlimnessFactor;

	idealWeightContainer.innerHTML = idealWeight.toFixed(2);
};

var resetCreffForm = () => {
	creffForm.reset();
};

creffForm.addEventListener("submit", function(event) {
	let heightError = heightCreffForm.validity.patternMismatch;
	let ageError =  ageCreffForm.validity.patternMismatch;
	
	if(!heightError && !ageError) {
		calculateIdealWeight();
		event.preventDefault();
	}
}, false);

(() => {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then(function() { 
				console.log('Service Worker Registered'); 
		  	});
	  }
})();
