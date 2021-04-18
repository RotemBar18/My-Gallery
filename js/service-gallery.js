'use strict'


var gProjs = 
[createProj('mineSweeper',
    'Find those mine as fast as you can',
    'one of the oldest and most liked games of all time',
    'projs/mine-sweeper-main/index.html',
    'APRIL|7th|2021/13:50',
    ['matrixes', 'keyboard events']),
createProj('Book Shop',
    'Orgenize your Shop storage ',
    'A easy and comfortable platform to get your books orgenized',
    'projs/Book Shop/index.html',
    'APRIL|8th|2021/20:00',
    ['matrixes', 'keyboard events']),
createProj('chess',
    'Learn the movements of each chess piece',
    'A very comfortable platform to learn the basics of the chess pieces',
    'projs/chess/index.html',
    'APRIL|7th|2021 14:40',
    ['matrixes', 'keyboard events']
),
createProj('mister-canvas',
    'A "Paint" application to inheance your creativity and have some fun',
    'the very loved app "Paint" designed and made by me, try the cool tools and import your own photos and in the end feel free to download them or share to FB',
    'projs/mister-canvas/index.html',
    'APRIL|18th|2021 20:30',
    ['matrixes', 'keyboard events']
),
createProj('blogin',
    'A responsive webPage to take ideas from',
    'An assiment about making a pixel perfect responsive webPage that I had so much fun making ',
    'projs/blogin/index.html',
    'APRIL|13th|2021 21:30',
    ['matrixes', 'keyboard events']
),]


function createProj(name, title, desc, url, publishedAt, labels) {
    return {
        id: makeId(),
        name,
        title,
        desc,
        url,
        publishedAt,
        labels: labels
    }

}
console.log('gProjs', gProjs)

function getProjs() {
    return gProjs
}

function getProjById(projectId){
   var  proj = gProjs.find(function(proj){
        return proj.id === projectId
    })
    return proj
}