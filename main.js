"use strict"

let bornYear = +prompt("Enter your born year"),
  livingCity = prompt("Enter city where you live"),
  favoriteSport = prompt("Enter your favorite type of sport"),
  livingCityMessage,
  currentAgeMessage,
  selectedSportsMessage

if (bornYear === 0) {
  currentAgeMessage = "Too bad you didn't want to enter your born date"
} else {
  currentAgeMessage = `Your age is:  ${2023 - bornYear}`
}

switch (livingCity) {
  case "":
    livingCityMessage = "Too bad you didn't want to enter your city."
    break

  case "London":
    livingCityMessage = "You live in the capital of Great Britain"
    break

  case "Kyiv":
    livingCityMessage = "You live in the capital of Ukraine"
    break

  case "Washington":
    livingCityMessage = "You live in the capital of United States of America"
    break

  default:
    livingCityMessage = "You live in the city named: " + livingCity
}

switch (favoriteSport) {
  case "":
    selectedSportsMessage = "Too bad you didn't want to enter your favorite sports type."
    break

  case "Boxing":
    selectedSportsMessage = "Cool! Wanna be like Mike Tyson?"
    break

  case "Footbal":
    selectedSportsMessage = "Cool! Wanna be like Leonel Messi?"
    break

  case "F1":
    selectedSportsMessage = "Cool! Wanna be like Michael Schumacher?"
    break

  default:
    selectedSportsMessage = "Your favorite sport type is " + favoriteSport
}
alert(` ${currentAgeMessage} \n ${livingCityMessage} \n ${selectedSportsMessage} `)
