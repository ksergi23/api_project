const baseURL =' https://ghibliapi.herokuapp.com/films';
const searchMovies= document.querySelector('form')


searchMovies.addEventListener('click', fetchFilm)


function fetchFilm (e) {
  e.preventDefault();
   fetch(baseURL)
.then(function(response) {
return response.json()
})
.then(json  => {
  displayFilm (json)
     
})}

function displayFilm(movie){
  movie.forEach(f => {
  let films = document.createElement('h2');
  let release = document.createElement ('h4')
  let description= document.createElement('p');
  release.innerText=f.release_date;
  films.innerText = f.title;
  description.innerText=f.description;
  searchMovies.appendChild(films) 
  searchMovies.appendChild(description)
  searchMovies.appendChild(release) 
  })}  
