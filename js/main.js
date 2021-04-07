$(document).ready(init)

function init() {
    console.log('Starting up');
    renderProjs()
}
function renderProjs() {
    var projs = getProjs()
    var strHtml = `<div class="row">
    <div class="col-lg-12 text-center">
      <h2 class="section-heading">Portfolio</h2>
      <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
    </div>
  </div>
  <div class="row">`
    projs.map(function (proj) {
        strHtml +=
            `<div class="col-md-4 col-sm-6 portfolio-item"> 
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
         <div class="portfolio-hover" onclick="renderModal('${proj.id}')">
           <div class="portfolio-hover-content" >
             <i class="fa fa-plus fa-3x"></i>
           </div>
         </div>
         <img class="img-fluid" src="img/rb imgs/${proj.name}.JPG" alt="">
       </a>
       <div class="portfolio-caption">
         <h4>${proj.name}</h4>
         <p class="text-muted">${proj.title}</p>
       </div>
     </div>`
    })
    strHtml += `</div>`
    $('#portfolio').html(strHtml)
}

function renderModal(projectId) {
    var proj = getProjById(projectId)
    var strHtml = `
                <!-- Project Details Go Here -->
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}.</p>
                <img class="img-fluid d-block mx-auto" src="img/rb imgs/${proj.name}.JPG" alt="">
                <p>${proj.desc}<p>
                <ul class="list-inline">
                  <li>Published at: ${proj.publishedAt}</li>
                </ul>
                <a target="_blank" href="projs/mine-sweeper-main/index.html">Visit my project</a>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                    `
    $('.modal-body').html(strHtml)
}

function onSubmitBtn(){
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${$('#email').val()}&su=${$('#subject').val()}&body=${$('#body-msg').val()}`)
}

