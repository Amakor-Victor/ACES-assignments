let movies = [
   { "title": "Attack on Titan", "author": "Lakashi Demola", "description": "Thriller", "year of release": "2021" },
  { "title": "Naruto", "author": "Itachi Uchiha", "description": "fantasy", "year of release": "2022" },
    { "title": "Solo leveling", "author": "Yakmoto Izuki", "description": "fantasy", "year of release": "2023" },
   { "title": "Demon Slayer", "author": "Lee Kato", "description": "Action", "year of release": "2024" },
 { "title": "Nana", "author": "Ye Wuzi", "description": "romance", "year of release": "2025" }

]

for(i in movies){
    console.log(movies[i].title);
}

movies.splice(2,1);

for(i in movies){
    console.log(movies[i].title);
}