type MovieSmall = {
  title: string;
}

const moviesSmall: MovieSmall[] = [
  { title: 'Movie 1' },
  { title: 'Movie 2' },
  { title: 'Movie 3' },
  { title: 'Movie 4' },
  { title: 'Movie 5' },
];

type Person= {
  name: string;
}

type Director = Person;
type Actor = Person;
type MoviesFull = {
  title: string;
  director: Director;
  actors: Actor[];
}

const moviesFull: MoviesFull[] = [
  {
    title: 'Movie 1',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
  },
  {
    title: 'Movie 2',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
  },
  {
    title: 'Movie 3',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
  },
  {
    title: 'Movie 4',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }],
  },
  {
    title: 'Movie 5',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }],
  },
];

// Recomendation use :any as a movie type
function getDirector(movie: any) {
  return movie.director ?.name ?? 'Unknown Director';
}

// Recomendation use :any as a movie type
function getActors(movie: any) {
  if (movie.actors != null) {
    return movie.actors;
  }

  return movie.actors ?? 'Unknown actors';
}

// Recomendation use :any as a movie type
function getLeadingActor(movie: any) {

  return movie.actors?.[0]?.name ?? 'Unknown actor';
}

// Recomendation use :any as a movie type
function getSecondaryActor(movie: any) {
  if (movie.actors != null && movie.actors.length >= 0) {
    if (movie.actors[1] && movie.actors[1].name) {
      return movie.actors[1].name;
    }
  }

  return movie.actors?.[1]?.name ?? 'Unknown actor';;
}

// Recomendation use :any as a movie type
function logMovie(movie: any) {
  console.log('Director:', getDirector(movie));
  console.log('Actors:', getActors(movie));
  console.log('Lead actor', getLeadingActor(movie));
  console.log('Second actor', getSecondaryActor(movie));
}

// Recomendation use :any as a movie type
function logSmallMovies(movie: any) {
  logMovie(movie);
}

// Recomendation use :any as a movie type
function logFullMovies(movie: any) {
  logMovie(movie);
}

moviesSmall.forEach((movie: any) => {
  console.group('Small movies');
  logSmallMovies(movie);
  console.groupEnd();
});

moviesFull.forEach((movie: any) => {
  console.group('Full movies');
  logFullMovies(movie);
  console.groupEnd();
});
