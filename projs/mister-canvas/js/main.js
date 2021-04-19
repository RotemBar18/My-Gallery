'use strict'

let gElCanvas;
let gCtx;
let gIsMouseDown = false;
let gCurrShape = 'square';
let gCurrColor = 'white';
let gCurrOutLineColor = 'black';
let gPrevPos = {
    x: 0,
    y: 0
};
let gImg;
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function init() {
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d')
    addTouchListeners()
    resizeCanvas()
}

function draw(ev) {
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        const pos = getEvPos(ev)
        var offsetX = pos.x
        var offsetY = pos.y
        var movementX = gPrevPos.x - offsetX
        var movementY = gPrevPos.y - offsetY

    } else {
        var { offsetX, offsetY, movementX, movementY } = ev
    }
    movementX = Math.abs(movementX)
    movementY = Math.abs(movementY)
    switch (gCurrShape) {
        case 'right-triangle':
            drawRightTriangle(offsetX, offsetY, movementX, movementY)
            break;
        case 'left-triangle':
            drawLeftTriangle(offsetX, offsetY, movementX, movementY)
            break;
        case 'square':
            drawSquare(offsetX, offsetY, movementX, movementY)
            break;
        case 'circle':
            drawArc(offsetX, offsetY, movementX, movementY)
            break;
        case 'line':
            drawLine(offsetX, offsetY, movementX, movementY)
            break;
    }

    gPrevPos = {
        x: offsetX,
        y: offsetY
    }
}

function onMouseDown(ev) {
    gIsMouseDown = true
    gPrevPos.x = ev.offsetX
    gPrevPos.y = ev.offsetY
    draw(ev)
}


function onMouseMove(ev) {
    if (!gIsMouseDown) return
    draw(ev)
}

function onMouseUp() {
    gIsMouseDown = false
}

function drawRightTriangle(x, y, movementX, movementY) {
    let size = movementX + movementY;
    if (!size) size = 50
    gCtx.beginPath();
    gCtx.moveTo(x, y);
    gCtx.lineTo(x + size, y + size);
    gCtx.lineTo(x + size, y);
    gCtx.closePath()
    gCtx.strokeStyle = gCurrOutLineColor
    gCtx.fillStyle = gCurrColor
    gCtx.stroke();
    gCtx.fill()

}
function drawLeftTriangle(x, y, movementX, movementY) {
    let size = movementX + movementY;
    if (!size) size = 50
    gCtx.beginPath();
    gCtx.moveTo(x, y);
    gCtx.lineTo(x - size, y + size);
    gCtx.lineTo(x - size, y);
    gCtx.closePath()
    gCtx.strokeStyle = gCurrOutLineColor
    gCtx.fillStyle = gCurrColor
    gCtx.stroke();
    gCtx.fill()

}

function drawArc(x, y, movementX, movementY) {
    let radius = movementX + movementY;
    if (!radius) radius = 50
    gCtx.fillStyle = gCurrColor
    gCtx.strokeStyle = gCurrOutLineColor
    gCtx.beginPath();
    gCtx.arc(x, y, radius, 0, 2 * Math.PI);
    gCtx.stroke();
}

function drawLine(x, y) {
    let prevX = gPrevPos.x
    let prevY = gPrevPos.y
    gCtx.strokeStyle = gCurrColor
    gCtx.beginPath();
    gCtx.moveTo(prevX, prevY);
    gCtx.lineTo(x, y);
    gCtx.lineWidth = 10
    gCtx.closePath()
    gCtx.stroke();
}


function drawSquare(x, y, movementX, movementY) {
    let size = movementX + movementY;
    if (!size) size = 50
    gCtx.beginPath();
    gCtx.rect(x, y, size, size)
    gCtx.fillStyle = gCurrColor
    gCtx.fillRect(x, y, size, size)
    gCtx.strokeStyle = gCurrOutLineColor
    gCtx.stroke()
    gCtx.closePath()
}

function setShape(shape) {
    gCurrShape = shape
}
function setColor(color) {
    gCurrColor = color
}

function setOutLineColor(color) {
    gCurrOutLineColor = color
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}


function getEvPos(ev) {
    ev = ev.changedTouches[0]
    const pos = {
        x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
        y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
    }

    return pos
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMouseMove)

    gElCanvas.addEventListener('touchstart', onMouseDown)

    gElCanvas.addEventListener('touchend', onMouseUp)
}


function downloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL()
    elLink.href = imgContent
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader()

    reader.onload = function (event) {
        var img = new Image()
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
        gImg = img
    }
    reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}
