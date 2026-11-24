"use strict";

const taulukko = [];

for (let i = 0; i < 5; i++) {
    taulukko.push(prompt("Anna nimi"));
}

document.querySelector("#kaikki").innerHTML = taulukko;

document.querySelector("#vika").innerHTML = taulukko[taulukko.length-1];

taulukko.sort();
document.querySelector("#sort").innerHTML = taulukko[0];

taulukko.shift();
document.querySelector("#muokattu").innerHTML = taulukko;