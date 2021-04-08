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
    'a very comfortable platform to learn the basics of the chess pieces',
    'projs/chess/index.html',
    'APRIL|7th|2021 14:40',
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