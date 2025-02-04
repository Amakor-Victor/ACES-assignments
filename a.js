let movies = {
    "movie 1": { "title": "Attack on Titan", "author": "Lakashi Demola", "description": "Thriller", "year of release": "2021" },
    "movie 2": { "title": "Naruto", "author": "Itachi Uchiha", "description": "fantasy", "year of release": "2022" },
    "movie 3": { "title": "Solo leveling", "author": "Yakmoto Izuki", "description": "fantasy", "year of release": "2023" },
    "movie 4": { "title": "Demon Slayer", "author": "Lee Kato", "description": "Action", "year of release": "2024" },
    "movie 5": { "title": "Nana", "author": "Ye Wuzi", "description": "romance", "year of release": "2025" }

}



for(i in movies){
    console.log(movies[i].title);
}

delete(movies["movie 3"]);


for(i in movies){
    console.log(movies[i].title);
}
