'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 

        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
        }
    },
    rememberMyFilms: function(){
        for(let i = personalMovieDB.count; i > 0; i--){
            const question1 = prompt('Один из последних просмотренных фильмов?', '');
            if(question1 != null && question1 != '' && question1.length < 50){
                const question2 = prompt('На сколько оцените его?', '');
                personalMovieDB.movies[question1] = question2;
            }else {
                break;
            }
        }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        } else {
            console.log("Вы киноман");
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true; 
        }
    },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();








