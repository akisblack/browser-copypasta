import { browser } from '$app/env';

if (browser) {
	window.addEventListener('input', function (e) {
    	document.getElementsByName("insert").forEach(function(value) {
        value.innerHTML = document.getElementById("userInput").value;
    })
    }, false);
}