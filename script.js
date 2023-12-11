let movies = [
        { src: './assets/imgs/movies/1.png',name: 'northodox', genres: 'Thriller',movie: 'movies/1' },
        { src: './assets/imgs/movies/2.png',name: 'after life', genres: 'Commedy',movie: 'movies/2' },
        { src: './assets/imgs/movies/3.png',name: 'Vis a Vis', genres: 'Thriller-Action',movie: 'movies/3' },
        { src: './assets/imgs/movies/4.png',name: 'The place', genres: 'Thriller-Dramatic',movie: 'movies/4' },
        { src: './assets/imgs/movies/5.png',name: 'Summertime', genres: 'Commedy',movie: 'movies/5' },
        { src: './assets/imgs/movies/6.png',name: 'I Delitti di Valhalla', genres: 'Thriller-Dramatic',movie: 'movies/6' },
        { src: './assets/imgs/movies/7.png',name: "L'altra Grace", genres: 'Thriller-Dramatic',movie: 'movies/7' },
        { src: './assets/imgs/movies/8.png',name: 'Virgin River', genres: 'Action-Dramatic',movie: 'movies/8' },
        { src: './assets/imgs/movies/9.png',name: 'The English Game', genres: 'Dramatic',movie: 'movies/9' },
        { src: './assets/imgs/movies/10.png',name: 'Il metodo Kominsky', genres: 'Commedy',movie: 'movies/10' },
        { src: './assets/imgs/movies/11.png',name: "Patto d'amore", genres: 'Commedy',movie: 'movies/11' },
        { src: './assets/imgs/movies/12.png',name: 'La casa de las flores', genres: 'Commedy',movie: 'movies/12' },
        { src: './assets/imgs/movies/13.png',name: 'Collateral Beauty', genres: 'Dramatic',movie: 'movies/13' },
        { src: './assets/imgs/movies/14.png',name: 'Self-Made', genres: 'Commedy',movie: 'movies/14' },
        { src: './assets/imgs/movies/15.png',name: 'Freud', genres: 'Thriller-Dramatic',movie: 'movies/15' },
        { src: './assets/imgs/movies/16.png',name: 'Grace and Frankie', genres: 'Commedy',movie: 'movies/16' },
        { src: './assets/imgs/movies/17.png',name: 'Lasciati Andare', genres: 'Thriller',movie: 'movies/17' },
        { src: './assets/imgs/movies/18.png',name: 'Dogman', genres: 'Thriller-Dramatic',movie: 'movies/18' }
]
let = footer_subscr = [
    { p: 'Audio and Subtitles'},
    { p: 'Audio Description'},
    { p: 'Help Center'},
    { p: 'Gift Cards'},
    { p: 'Media Center'},
    { p: 'Investor Relations'},
    { p: 'Jcbs'},
    { p: 'Term of Use'},
    { p: 'Privacy'},
    { p: 'Legal Notices'},
    { p: 'Cookie Preferences'},
    { p: 'Corporate Information'},
    { p: 'Contact Us'},
]

const carousel_1_item = document.querySelectorAll('#section_1 .carousel-item .row')
const carousel_2_item = document.querySelectorAll('#section_2 .carousel-item .row')
const carousel_3_item = document.querySelectorAll('#section_3 .carousel-item .row')
const footer_dscr = document.querySelector('footer .dscr')
let shuffle = function(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Scambia gli elementi array[i] e array[j]
        [array[i], array[j]] = [array[j], array[i]];
      }
}

let tmpMovies = []
let start = 0
let finish = 6
for (let j = 0; j < carousel_1_item.length; j++) {

   tmpMovies = movies.slice(start, finish)
    // console.log(tmpMovies.length / 6)
   if(tmpMovies.length / 6 < 1) {
        for (let i = 0; i < tmpMovies.length; i++) {

            carousel_1_item[j].innerHTML += `<div style="padding: 1px;" class="movies col-2"><img class="w-100" src="${tmpMovies[i].src}" alt=""></div>`
            carousel_2_item[j].innerHTML += `<div style="padding: 1px;" class="movies col-2"><img class="w-100" src="${tmpMovies[i].src}" alt=""></div>`
            carousel_3_item[j].innerHTML += `<div style="padding: 1px;" class="movies col-2"><img class="w-100" src="${tmpMovies[i].src}" alt=""></div>`
            //movies_2.push(tmpMovies[i]);
            //movies.splice(0,1);
        }  
            break;
   }
   else {
    for (let i = 0; i < 6; i++) {

        carousel_1_item[j].innerHTML += `<div style="padding: 1px;" class="movies col-2"><img class="w-100" src="${tmpMovies[i].src}" alt=""></div>`
        carousel_2_item[j].innerHTML += `<div style="padding: 1px;" class="movies col-2"><img class="w-100" src="${tmpMovies[i].src}" alt=""></div>`
        carousel_3_item[j].innerHTML += `<div style="padding: 1px;" class="movies col-2"><img class="w-100" src="${tmpMovies[i].src}" alt=""></div>`
        //movies_2.push(tmpMovies[i]);
        //movies.splice(0,1);
    }  

   }

   start = finish++
   finish =  finish + 5
}

//  FOOTER
for (let i = 0; i < footer_subscr.length; i++) {
    footer_dscr.innerHTML += `<div class="col-3 text-nowrap">${footer_subscr[i].p}</div>`
}

// ------- EXTRA -----//
//BOTTONE GENRES
const genres = document.querySelectorAll('.jumbotron .dropdown-menu li a')
const films = document.querySelectorAll('#section_1 .movies img')
const button_genres = document.querySelector('.jumbotron button span')
const order_genres = function(event){

    for (let i = 0; i < films.length; i++) {

        for (let j = 0; j < movies.length; j++) {
            if (films[i].src.toLowerCase().includes(movies[j].movie.toLowerCase())) {
                //  console.log(movies[j].genres.includes(event.target.innerHTML));
                // console.log("si "+'i= '+i+' j= '+j + ' genere= '+movies[j].genres.includes(event.target.innerHTML) + ' genere array: '+movies[j].genres + ' genere HTML'+event.target.innerHTML);
                if (movies[j].genres.includes(event.target.innerHTML)) {
                    films[i].parentElement.style.order = '1';
                }
                else{
                    films[i].parentElement.style.order = '2';
                }
                
                break;
            }
            else {
                // console.log("no "+'i= '+i+' j= '+j);
            }
        }

    }
    button_genres.innerHTML = event.target.innerHTML
}
for (let i = 0; i < genres.length; i++) {
    genres[i].onclick = order_genres 
}


