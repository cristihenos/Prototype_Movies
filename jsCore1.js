function load() {

let ArrayMovies=[];

//<button>
let selectBtns0=document.querySelector('#Btns0');

//<div>
let selectDiv4=document.querySelector('#show_meReturn');
let selectDiv3=document.querySelector('#array1');
let selectDiv2=document.querySelector('#ListOfmovies');
let selectDiv1=document.querySelector('#msg1');
let selectDiv0=document.querySelector('#show_me');

// Hide <button>
selectDiv4.setAttribute("hidden", "");


// Onclick pe ShowME
selectBtns0.addEventListener('click', showMe);
  function showMe(){
      selectDiv4.removeAttribute("hidden");
      selectDiv4.innerHTML='▲';
      selectBtns0.setAttribute("hidden", "");
      selectDiv0.innerHTML=
      `  <form action="filmelemeleass.html" id="add-movie-form" method="POST" >
                <table id="Table1" class="table table-sm table-dark">
                    <tr><td>Nume Film:<input name="movie" type="text" class="form-control form-control-sm"></td></tr>
                    <tr><td>Anul aparitiei:<input name="years" type="text" maxlength="4" id="fieldYears" class="form-control form-control-sm"></td></tr>
                    <tr><td>Gen:<select name="gender" class="form-control form-control-sm">
                        option value="Actiune">Actiune</option>
                        <option value="Aventuri" selected="">Aventuri</option>
                        <option value="Horror">Horror</option>
                        <option value="Familie">Familie</option>
                        <option value="Comedie">Comedie</option>
                        <option value="Dragoste">Dragoste</option>
                        <option value="Triller">Triller</option>
                        </select></td></tr>
                    <tr><td>Notita personala <p class="small">Max. 50 de caractere!</p><textarea name="SortDescription" maxlength="51" class="form-control form-control-sm"></textarea></td></tr>
                     <tr><td>Adauga o nota:<select name="scoring" class="form-control form-control-sm">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5" selected="">5</option>
                        </select></td></tr>
                    <tr><td colspan="2"><button type="submit" class="btn btn-primary" id="Send" >Trimite</button></td></tr>
                    </table>
                </form>
          <div id="buttons1"><button class="btn btn-primary" id="reMove">Remove</button>
            <button class="btn btn-primary" id="printOne" >Printeaza</button>
              </div>
      `;

// Remove Element si indice din Array
      document.querySelector('#reMove').addEventListener('click',removeElement);
     function removeElement() {
      ArrayMovies.splice(0,1);
      let elem=document.querySelector('#del')
      elem.parentNode.removeChild(elem);
      };

// PrintElement
      document.querySelector('#printOne').addEventListener('click',printOne);
      function printOne() {
      let WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
      WinPrint.document.write(selectDiv2.innerHTML);
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
      };

// Select <form>
      let selectForm0=document.querySelector('#add-movie-form');

// Submit event 
       selectForm0.addEventListener('submit', submitControl);

      function submitControl (event) {
       event.preventDefault();
       
  // Selict <input>
      let inputSelectAll=document.getElementsByTagName('input');
      let textArea=document.getElementsByTagName('textarea');
      let selectSE=document.getElementsByTagName('select');
      let fieldYears=document.getElementById('fieldYears');

        // Verifica inputurile
      for (i=0; inputSelectAll.length>i; i++) {

      if (isNaN(fieldYears.value)) {
        fieldYears.style.border = '1px solid red';
        fieldYears.style.background = '#F6CECE';
        selectDiv1.innerHTML='<li class="list-group-item list-group-item-danger">'+'Verifica campul "Anul aparitiei:" sa fie doar cifre'+'</li>';
        return;
      };

      if (inputSelectAll[i].value=='' ) {
        inputSelectAll[i].style.border = '1px solid red';
        inputSelectAll[i].style.background = '#F6CECE';
        selectDiv1.innerHTML='<li class="list-group-item list-group-item-danger">'+'Verifica datele introduse!'+'</li>';
        return;

      }else {
        inputSelectAll[i].style.border = '';
        inputSelectAll[i].style.background = '';
      };

      if (inputSelectAll[i].value.length>35 ) {
        inputSelectAll[i].style.border = '1px solid red';
        inputSelectAll[i].style.background = '#F6CECE';
        selectDiv1.innerHTML='<li class="list-group-item list-group-item-danger">'+'Ai introdus mai mult de 35 de caractere!'+'</li>';
        return;

      }else {
        inputSelectAll[i].style.border = '';
        inputSelectAll[i].style.background = '';
      };
    };  // Se termina bucla pentru Input

// Verifica Texarea
    for (i=0; textArea.length>i; i++) {

      if (textArea[i].value=='') {
        textArea[i].style.border = '1px solid red';
        textArea[i].style.background = '#F6CECE';
        selectDiv1.innerHTML='<li class="list-group-item list-group-item-danger">'+'Campul "Notita personala:" este gol '+'</li>';
        return;
      };

      if (textArea[i].value.length>50) {
        textArea[i].style.border = '1px solid red';
        textArea[i].style.background = '#F6CECE';
        selectDiv1.innerHTML='<li class="list-group-item list-group-item-danger">'+'Ai introdus mai mult de 50 de caractere in "Campul "Notita personala:'+'</li>';
        return;

      }else {
        textArea[i].style.border = '';
        textArea[i].style.background = '';
      };
    };  // Se termina bucla pentru Texarea

      for (i=0; selectSE.length>i; i++) {

      if (selectSE[i].value=='') {
        selectSE[i].style.border = '1px solid red';
        selectSE[i].style.background = '#F6CECE';
        selectDiv1.innerHTML='<li class="list-group-item list-group-item-danger">'+'Selecteaza optiunea!'+'</li>';
        return;

      }else {
        selectSE[i].style.border = '';
        selectSE[i].style.background = '';
        selectDiv1.innerHTML='<p class="list-group-item list-group-item-success">'+'Filmul a fost adaugat!'+'</p>';
      }

    }; // Se termina bucla pentru Select

      let movie = event.target.movie.value;
      let years = +event.target.years.value;
      let scoring = +event.target.scoring.value;
      let SortDescription = event.target.SortDescription.value;
      let gender = event.target.gender.value;
      let Data= new Date().toLocaleString();
      let DataMovies={Data,movie,years,scoring,SortDescription,gender};
      DataMovies.constructor;

      ArrayMovies.push(DataMovies);

      renderMovies();

// Stergem datele din <form>, an, scoring, etc.
     event.target.movie.value = '';
     event.target.years.value = '';
     event.target.scoring.value = '';
     event.target.SortDescription.value ='';
     event.target.gender.value ='';

     
// Functia de renderMovies
     function renderMovies() {
      selectDiv2.innerHTML +=
      ` <li class="list-group-item" id='del'>
        Film: <strong>${DataMovies.movie}</strong><br>
        Data adaugare: <strong>${DataMovies.Data}</strong><br>
        Anul aparitiei: <strong>${DataMovies.years}</strong><br>
        Gen :<strong>${DataMovies.gender}</strong><br>
        Notita personala: <strong> ${DataMovies.SortDescription}</strong><br>
        Nota acordata: <strong>${DataMovies.scoring}</strong><br>
        </li><br>
          `;
        }; 

        CountObjAndstop();

// Salveaza datele in local format JOSN 
     window.localStorage.setItem('movies', JSON.stringify(ArrayMovies));
      };

    }; // Functia ShowME

    function CountObjAndstop(){
   
     if (ArrayMovies.length>7) {
        // Creem Atrbutul Disable pentru button si style pentru mesaj.
        let ParentElem=document.querySelector('#Send'); 
        selectDiv1.innerHTML='<li class="list-group-item list-group-item-danger">'+'Mai mult de 8 filme nu poti sa adaugi!'+'</li>';
        ParentElem.setAttribute("disabled", "disabled");
        ParentElem.setAttribute("class", "btn btn-secondary");
     }
      return
    };


    document.querySelector('#show_meReturn').addEventListener('click', removeshowMe);
    function removeshowMe () {
      selectDiv0.innerHTML='';
      selectDiv1.innerHTML='';
      selectDiv2.innerHTML='';
      selectBtns0.removeAttribute("hidden");
      selectDiv4.setAttribute("hidden", "");
    }
};
window.addEventListener('load', load);

