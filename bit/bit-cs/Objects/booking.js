'use strict';



function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
}

function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;

}

Person.prototype.getData = function () {
    return this.name + ' ' + this.surname + ' ' + this.dateOfBirth.getDate() + '.' + (this.dateOfBirth.getMonth() + 1) + '.' + this.dateOfBirth.getFullYear();
};

function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
}

Player.prototype.getData = function () {

    return this.country + ", " + this.country.odds * this.betAmount + ", " + this.person.getData + ", " + (2017 - this.person.dateOfBirth.getFullYear());
};

function Address(country, city, postal, street, number) {
    this.country = country;
    this.city = city;
    this.postal = postal;
    this.street = street;
    this.number = number;
}
Address.prototype.getData = function () {
    return this.street + " " + this.number + ", " + this.postal + ", " + this.country;
};

function BettingPlace(address) {
    this.address = address;
    this.listOfPlayers = [];
}

BettingPlace.prototype.addPlayer = function(player){
    this.listOfPlayers.push(player);
};

BettingPlace.prototype.getData = function () {
    var output = 0;

    for (var i = 0; i < listOfPlayers.length; i++) {
        output += listOfPlayers[i].Player.betAmount;
    }
    return this.address.street + ", " + this.address.postal + ", " + this.address.city + ", " + "Sum of all bets: " + output +"eur";
};

function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.numberOfPlayers = 0;

}



//Create continents!!


(function () {

    var p1 = new Person('Srdjan', 'Popovic', 'July 22 1991');

    console.log(p1);
    var a1 = new Address("SRB", "Belgrade", "11000", "Nemanjina", "4");
    console.log(a1.getData());

}
)();
