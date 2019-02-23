function load() {

let ArrayMovies=[];
let ErrorMesFieldYears='<li class="list-group-item list-group-item-danger">'+'Verifica campul An!'+'</li>';
let ErrorMesinputSelectAll='<li class="list-group-item list-group-item-danger">'+'Verifica campurile!!'+'</li>';
let ErrorMestextArea='<li class="list-group-item list-group-item-danger">'+'Verifica campul Comentariu!'+'</li>';
let ErrorMesselectSE='<li class="list-group-item list-group-item-danger">'+'Verifica campurile!'+'</li>';
let SuccessMes='<p class="list-group-item list-group-item-success">'+'Filmul a fost adaugat!'+'</p>';

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
      ` <br>
        <div><h5>Language:</h5>
          <select name='Language'>
              <option value="1">English</option>
              <option value="2">Italiano</option>
              <option value="3">Romana</option>
                </select>
             <button id='Btns1' class="btn btn-warning">Go!</button>
            </div><br>
            <form action="filmelemeleass.html" id="add-movie-form" method="POST" >
                <table id="Table1" class="table table-sm table-dark">
                    <tr><td><p id="p1">Numele Filmului:</p><input name="movie" type="text" class="form-control form-control-sm"></td></tr>
                    <tr><td><p id="p2">An:</p><input name="years" type="text" maxlength="4" id="fieldYears" class="form-control form-control-sm"></td></tr>
                    <tr><td><p id="p3">Gen:</p>
                      <select name="gender" class="form-control form-control-sm">
                          <option value="Actiune" id="p4">Actiune</option>
                          <option value="Aventuri" selected="" id="p5">Aventuri</option>
                          <option value="Horror">Horror</option>
                          <option value="Familie" id="p6">Documentar</option>
                          <option value="Comedie" id="p7">Comedie</option>
                          <option value="Dragoste" id="p8">Dragoste</option>
                          <option value="Triller">Triller</option>
                          <option value="SF">SF</option>
                        </select></td></tr>
                    <tr><td><p id="p9">Comentariu:</p><p id="p10" class="small">Max. 50 de caractere!</p><textarea name="SortDescription" maxlength="51" class="form-control form-control-sm"></textarea></td></tr>
                     <tr><td><p id="p11">Nota:</p>
                      <select name="scoring" class="form-control form-control-sm">
                          <option value="1">★</option>
                          <option value="2">★✩</option>
                          <option value="3">★✩★</option>
                          <option value="4">★✩★✩</option>
                          <option value="5" selected="">★✩★✩★</option>
                      </select></td></tr>
                    <tr><td colspan="2"><button type="submit" class="btn btn-primary" id="Send"><p id="p12">Trimite</p></button></td></tr>
                    </table>
                </form>
              <div id="buttons1"><button class="btn btn-primary" id="reMove"><p id="p13">Elimina</p></button>
                <button class="btn btn-primary" id="printOne"><p id="p14">Printeaza</p></button>
                  </div><br>
      `;
        let selectBtns1=document.querySelector('#Btns1');
        let selectLAN=document.querySelector('#Lan');
        let selectreMove=document.querySelector('#reMove');

// Remove Element si indice din Array
      selectreMove.addEventListener('click',removeElement);
     function removeElement() {
      selectreMove.removeAttribute("hidden");
      ArrayMovies.splice(0,1);
      let elem=document.querySelector('#del')
      elem.parentNode.removeChild(elem);
      selectDiv1.innerHTML='';
      };

// Schimba Limba

      selectBtns1.addEventListener('click',changeLanguage);
      function changeLanguage (){
      let language = document.getElementsByTagName('select')[0].value;
        switch (language) {
          case '1':
                document.querySelector('#p1').innerHTML='Movie name:';
                document.querySelector('#p2').innerHTML='Year:';
                document.querySelector('#p3').innerHTML='Categorie:';
                document.querySelector('#p4').innerHTML='Action';
                document.querySelector('#p5').innerHTML='Adventure';
                document.querySelector('#p6').innerHTML='Documentary';
                document.querySelector('#p7').innerHTML='Comedy';
                document.querySelector('#p8').innerHTML='Love';
                document.querySelector('#p9').innerHTML='Reviews:';
                document.querySelector('#p10').innerHTML='Max. 50 characters!';
                document.querySelector('#p11').innerHTML='Stars:';
                document.querySelector('#p12').innerHTML='Send';
                document.querySelector('#p13').innerHTML='Remove note';
                document.querySelector('#p14').innerHTML='Print';
                ErrorMesFieldYears='<li class="list-group-item list-group-item-danger">'+'Check the Year field'+'</li>';
                ErrorMesinputSelectAll='<li class="list-group-item list-group-item-danger">'+'Check data in the field!'+'</li>';
                ErrorMestextArea='<li class="list-group-item list-group-item-danger">'+'Check data in the text field!'+'</li>';
                ErrorMesselectSE='<li class="list-group-item list-group-item-danger">'+'Select field!'+'</li>';
                SuccessMes='<p class="list-group-item list-group-item-success">'+'The movie was added!'+'</p>';
            break;
          case '2':
                document.querySelector('#p1').innerHTML='Nome del film:';
                document.querySelector('#p2').innerHTML='Anno:';
                document.querySelector('#p3').innerHTML='Generi:';
                document.querySelector('#p4').innerHTML='Azione';
                document.querySelector('#p5').innerHTML='Avventura';
                document.querySelector('#p6').innerHTML='Documentario';
                document.querySelector('#p7').innerHTML='Comico';
                document.querySelector('#p8').innerHTML='Sentimentale';
                document.querySelector('#p9').innerHTML='Recensione:';
                document.querySelector('#p10').innerHTML='Mas. 50 caratteri!';
                document.querySelector('#p11').innerHTML='Stelle:';
                document.querySelector('#p12').innerHTML='Invio';
                document.querySelector('#p13').innerHTML='Rimuovi';
                document.querySelector('#p14').innerHTML='Stampa';
                ErrorMesFieldYears='<li class="list-group-item list-group-item-danger">'+'Verifica il campo Anno!'+'</li>';
                ErrorMesinputSelectAll='<li class="list-group-item list-group-item-danger">'+'Verifica il campo Nome del film!'+'</li>';
                ErrorMestextArea='<li class="list-group-item list-group-item-danger">'+'Verifica il campo Nota Personale'+'</li>';
                ErrorMesselectSE='<li class="list-group-item list-group-item-danger">'+'Scegli un genere!'+'</li>';
                SuccessMes='<p class="list-group-item list-group-item-success">'+'Il film è stato aggiunto!'+'</p>';
            break;
                
          case '3':
                showMe();
            break;
        };
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
        selectDiv1.innerHTML=ErrorMesFieldYears;
       
        return;
      };

      if (inputSelectAll[i].value=='' ) {
        inputSelectAll[i].style.border = '1px solid red';
        inputSelectAll[i].style.background = '#F6CECE';
        selectDiv1.innerHTML=ErrorMesinputSelectAll;
        return;

      }else {
        inputSelectAll[i].style.border = '';
        inputSelectAll[i].style.background = '';
      };

      if (inputSelectAll[i].value.length>35 ) {
        inputSelectAll[i].style.border = '1px solid red';
        inputSelectAll[i].style.background = '#F6CECE';
        selectDiv1.innerHTML=ErrorMesinputSelectAll;
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
        selectDiv1.innerHTML=ErrorMestextArea;
        return;
      };

      if (textArea[i].value.length>50) {
        textArea[i].style.border = '1px solid red';
        textArea[i].style.background = '#F6CECE';
        selectDiv1.innerHTML=ErrorMestextArea;
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
        selectDiv1.innerHTML=ErrorMesselectSE;
        return;

      }else {
        selectSE[i].style.border = '';
        selectSE[i].style.background = '';
        selectDiv1.innerHTML=SuccessMes;
      };

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
      ` <li class="list-group-item list-group-item-dark" id='del'>
        Film: <strong>${DataMovies.movie}</strong><br>
        Data adaugare: <strong>${DataMovies.Data}</strong><br>
        Anul aparitiei: <strong>${DataMovies.years}</strong><br>
        Gen :<strong>${DataMovies.gender}</strong><br>
        Notita personala: <strong> ${DataMovies.SortDescription}</strong><br>
        Nota: <strong>${DataMovies.scoring}</strong><strong>★</strong><br>
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
    };
};
window.addEventListener('load', load);

