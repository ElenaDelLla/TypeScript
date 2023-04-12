var moviesSmall = [
    { title: 'Movie 1' },
    { title: 'Movie 2' },
    { title: 'Movie 3' },
    { title: 'Movie 4' },
    { title: 'Movie 5' },
];
var moviesFull = [
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
function getDirector(movie) {
    var _a, _b;
    return (_b = (_a = movie.director) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'Unknown Director';
}
// Recomendation use :any as a movie type
function getActors(movie) {
    var _a;
    if (movie.actors != null) {
        return movie.actors;
    }
    return (_a = movie.actors) !== null && _a !== void 0 ? _a : 'Unknown actors';
}
// Recomendation use :any as a movie type
function getLeadingActor(movie) {
    var _a, _b, _c;
    return (_c = (_b = (_a = movie.actors) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : 'Unknown actor';
}
// Recomendation use :any as a movie type
function getSecondaryActor(movie) {
    var _a, _b, _c;
    if (movie.actors != null && movie.actors.length >= 0) {
        if (movie.actors[1] && movie.actors[1].name) {
            return movie.actors[1].name;
        }
    }
    return (_c = (_b = (_a = movie.actors) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : 'Unknown actor';
    ;
}
// Recomendation use :any as a movie type
function logMovie(movie) {
    console.log('Director:', getDirector(movie));
    console.log('Actors:', getActors(movie));
    console.log('Lead actor', getLeadingActor(movie));
    console.log('Second actor', getSecondaryActor(movie));
}
// Recomendation use :any as a movie type
function logSmallMovies(movie) {
    logMovie(movie);
}
// Recomendation use :any as a movie type
function logFullMovies(movie) {
    logMovie(movie);
}
moviesSmall.forEach(function (movie) {
    console.group('Small movies');
    logSmallMovies(movie);
    console.groupEnd();
});
moviesFull.forEach(function (movie) {
    console.group('Full movies');
    logFullMovies(movie);
    console.groupEnd();
});
