let movies = [
   [ "movie1", { "title": "Attack on Titan", "author": "Lakashi Demola", "description": "Thriller", "year of release": "2021" }],
   [ "movie2", { "title": "Naruto", "author": "Itachi Uchiha", "description": "fantasy", "year of release": "2022" }],
   [ "movie3", { "title": "Solo leveling", "author": "Yakmoto Izuki", "description": "fantasy", "year of release": "2023" }],
   [ "movie4", { "title": "Demon Slayer", "author": "Lee Kato", "description": "Action", "year of release": "2024" }],
   [ "movie5", { "title": "Nana", "author": "Ye Wuzi", "description": "romance", "year of release": "2025" }],

]



for(i = 0;i<movies.length;i++){
    console.log(movies[i][1].title);
}