'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for(let i = numberOfFilms; i > 0; i--){
    const question1 = prompt('Один из последних просмотренных фильмов?', '');
    if(question1.length > 0 && question1.length < 50){
        const question2 = prompt('На сколько оцените его?', '');
        personalMovieDB.movies[question1] = question2;
    }else {
        break;
    }
    
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else {
        console.log("Вы киноман");
    }
    
}

console.log(personalMovieDB);
