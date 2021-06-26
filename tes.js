var input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("tombol").click();
  }
});
var button=document.getElementById("tombol");
button.addEventListener('click', quote)
function quote(){ 
  document.getElementById("home").innerHTML="";
    console.log(' ');
    var isian=document.getElementById("input").value;
    fetch('https://api-lk21.herokuapp.com/search?query='+isian).then(response => response.json())
      .then((data) => {
        if (data.result.length === 0){
          Swal.fire({
            title: 'Maaf Film Tidak Tersedia',
            width: 600,
            padding: '3em',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
        } 
        else{
          for(var i=0; i<16;i++){
            document.getElementById("home").innerHTML+=`
            <div class="col-md-3 mb-4">
            <div class="card" style="width: 20rem;">
              <img src="${data.result[i].thumbnail}" class="card-img-top" alt="...">
              <div class="card-body">
              <div class="text-center">
                <h3 class='judul'>${data.result[i].title}</h3>
                <p class='judul'>Genre : ${data.result[i].genre}</p>
                <p class="card-text">Durasi : ${data.result[i].duration}</p>
                <p class="card-text">Rating : ${data.result[i].rating}</p>
                </div>
              </div>
                <a href=${data.result[i].watch} class="btn btn-warning"><b>Tonton</b></a>
            </div>
          </div>` 
      }
      }}); 
}
function refresh(){
  console.log(' ');
  fetch('https://api-lk21.herokuapp.com/newupload').then(response => response.json())
    .then((data) => { 
      for(var i=0; i<16;i++){
        document.getElementById("home").innerHTML+=`
          <div class="col-md-3 mb-4">
            <div class="card" style="width: 20rem;">
              <img src="${data.result[i].thumbnail}" class="card-img-top" alt="...">
              <div class="card-body">
              <div class="text-center">
                <h3 class='judul'>${data.result[i].title}</h3>
                <p class='judul'>Genre : ${data.result[i].genre}</p>
                <p class="card-text">Durasi : ${data.result[i].duration}</p>
                <p class="card-text">Rating : ${data.result[i].rating}</p>
                </div>
              </div>
                <a href=${data.result[i].watch} class="btn btn-warning"><b>Tonton</b></a>
            </div>
          </div>` 
      }
    }); 
} 
var jenisgenre;
function hasilgenre(jenisgenre){
  document.getElementById("home").innerHTML="";
    console.log(' ');
    fetch('https://api-lk21.herokuapp.com/genre?genre='+jenisgenre).then(response => response.json())
      .then((data) => { 
        for(var i=0; i<16;i++){
          document.getElementById("home").innerHTML+=`
          <div class="col-md-3 mb-4">
            <div class="card" style="width: 20rem;">
              <img src="${data.result[i].thumbnail}" class="card-img-top" alt="...">
              <div class="card-body">
              <div class="text-center">
                <h3 class='judul'>${data.result[i].title}</h3>
                <p class='judul'>Genre : ${data.result[i].genre}</p>
                <p class="card-text">Durasi : ${data.result[i].duration}</p>
                <p class="card-text">Rating : ${data.result[i].rating}</p>
                </div>
              </div>
                <a href=${data.result[i].watch} class="btn btn-warning"><b>Tonton</b></a>
            </div>
          </div>` 
      }
    }); 
}
var tahunfilm;
function film(tahunfilm){
  document.getElementById("home").innerHTML="";
    console.log(' ');
    fetch('https://api-lk21.herokuapp.com/year?year='+tahunfilm).then(response => response.json())
      .then((data) => { 
        for(var i=0; i<16;i++){
          document.getElementById("home").innerHTML+=`
          <div class="col-md-3 mb-4">
            <div class="card" style="width: 20rem;">
              <img src="${data.result[i].thumbnail}" class="card-img-top" alt="...">
              <div class="card-body">
              <div class="text-center">
                <h3 class='judul'>${data.result[i].title}</h3>
                <p class='judul'>Genre : ${data.result[i].genre}</p>
                <p class="card-text">Durasi : ${data.result[i].duration}</p>
                <p class="card-text">Rating : ${data.result[i].rating}</p>
                </div>
              </div>
                <a href=${data.result[i].watch} class="btn btn-warning"><b>Tonton</b></a>
            </div>
          </div>` 
      }
    }); 
}