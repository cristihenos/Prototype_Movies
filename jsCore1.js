function load() {

    let FromTable=document.getElementById('add-movie-form');
    let IdUls=document.getElementById('ListOfmovies');
    let FieldYears=document.getElementById('Field-years');
    let InputSelectAll=document.getElementsByTagName('input');
    let TextArea=document.getElementsByTagName('textarea');
    let SelectSE=document.getElementsByTagName('select');
    let SelectMessage=document.getElementById('Message1');
    let SelectButtonRemove=document.getElementById('remove');
    const submitButton = document.getElementById('Send');
    let ValforidLI=Math.floor((Math.random() * 9999) + 1);
    let SelectLi=document.getElementsByTagName('li');
    let SelectPrint=document.getElementById('printOne');

    // Const obj cu array
    let movies= [{
      Data: new Date().toLocaleString(),
      movie: 'Home Alone',
      years: 1990,
      scoring:5,
      SortDescription:'Il sugerez cu mare placere!',
      gender:'Comedie'
    }];

    renderMovies();

    FromTable.addEventListener('submit', SubmitControl);
    function SubmitControl (event) {
    
    event.preventDefault();
    let Time1=setTimeout(Time2Sec,1500);
    function Time2Sec() {
      submitButton.innerHTML = '🔃 Adauga Filme!';
    }
      // Verifa inputurile
      for (i=0; InputSelectAll.length>i; i++) {

      if (isNaN(FieldYears.value)) {
        FieldYears.style.border = '1px solid red';
        FieldYears.style.background = '#F6CECE';
        SelectMessage.innerHTML='<li class="list-group-item list-group-item-danger">'+'Verifica campul "Anul aparitiei:" sa fie doar cifre'+'</li>';
        return;
      };

      if (InputSelectAll[i].value=='' ) {
        InputSelectAll[i].style.border = '1px solid red';
        InputSelectAll[i].style.background = '#F6CECE';
        SelectMessage.innerHTML='<li class="list-group-item list-group-item-danger">'+'Verifica datele introduse!'+'</li>';
        return;

      }else {
        InputSelectAll[i].style.border = '';
        InputSelectAll[i].style.background = '';
        SelectMessage.innerHTML='<p class="list-group-item list-group-item-success">'+'Filmul a fost adaugat!'+'</p>';
      };

      if (InputSelectAll[i].value.length>35 ) {
        InputSelectAll[i].style.border = '1px solid red';
        InputSelectAll[i].style.background = '#F6CECE';
        SelectMessage.innerHTML='<li class="list-group-item list-group-item-danger">'+'Ai introdus mai mult de 35 de caractere!'+'</li>';
        return;

      }else {
        InputSelectAll[i].style.border = '';
        InputSelectAll[i].style.background = '';
        SelectMessage.innerHTML='<p class="list-group-item list-group-item-success">'+'Filmul a fost adaugat!'+'</p>';
      };
    };  // Se termina bucla pentru Input

    // Verifica Texarea
    for (i=0; TextArea.length>i; i++) {

      if (TextArea[i].value=='') {
        TextArea[i].style.border = '1px solid red';
        TextArea[i].style.background = '#F6CECE';
        SelectMessage.innerHTML='<li class="list-group-item list-group-item-danger">'+'Campul "Notita personala:" este gol '+'</li>';
        return;
      };

      if (TextArea[i].value.length>50) {
        TextArea[i].style.border = '1px solid red';
        TextArea[i].style.background = '#F6CECE';
        SelectMessage.innerHTML='<li class="list-group-item list-group-item-danger">'+'Ai introdus mai mult de 50 de caractere in "Campul "Notita personala:'+'</li>';
        return;

      }else {
        TextArea[i].style.border = '';
        TextArea[i].style.background = '';
        SelectMessage.innerHTML='<p class="list-group-item list-group-item-success">'+'Filmul a fost adaugat!'+'</p>';
      };
    };  // Se termina bucla pentru Texarea

      for (i=0; SelectSE.length>i; i++) {

      if (SelectSE[i].value=='') {
        SelectSE[i].style.border = '1px solid red';
        SelectSE[i].style.background = '#F6CECE';
        SelectMessage.innerHTML='<li class="list-group-item list-group-item-danger">'+'Selecteaza optiunea!'+'</li>';
        return;

      }else {
        SelectSE[i].style.border = '';
        SelectSE[i].style.background = '';
        SelectMessage.innerHTML='<p class="list-group-item list-group-item-success">'+'Filmul a fost adaugat!'+'</p>';
      }

    }; // Se termina bucla pentru Select

   // citim datele dupa campul name 
    let movie = event.target.movie.value;
    let years = +event.target.years.value;
    let scoring = +event.target.scoring.value;
    let SortDescription = event.target.SortDescription.value;
    let gender = event.target.gender.value;
    let Data= new Date().toLocaleString();

    // suprascriem #ListOfmovies cu datele noi
      movies.push({
      Data:Data,
      movie: movie,
      years: years,
      scoring:scoring,
      SortDescription:SortDescription,
      gender:gender,
    });

    renderMovies();
    // stergem datele din Movie, an, scoring, etc.
    event.target.movie.value = '';
    event.target.years.value = '';
    event.target.scoring.value = '';
    event.target.SortDescription.value ='';
    event.target.gender.value ='';

  };   // Se termina SubmitControl;

    function renderMovies() {
      
      IdUls.innerHTML ='<div id="Exemple" class="list-group-item list-group-item-action list-group-item-warning">'+'Exemplu Notita:'+'</div>';
      movies.forEach(function(movies) {
      submitButton.innerHTML = 'Trimite';
      IdUls.innerHTML +=
      ` <li class="list-group-item" id=${ValforidLI++}>
        Film: <strong>${movies.movie}</strong><br>
        Data adaugare: <strong>${movies.Data}</strong><br>
        Anul aparitiei: <strong>${movies.years}</strong><br>
        Gen :<strong>${movies.gender}</strong><br>
        Notita personala: <strong> ${movies.SortDescription}</strong><br>
        Nota acordata: <strong>${movies.scoring}</strong><br>
        </li><br>
      `;
    });

    SelectButtonRemove.addEventListener('click',removeElement)

    //  Remove Element din IdUls.
//      function removeElement() {
//        IdUls.removeChild(IdUls.childNodes[0]);
//     };


    // Salveaza datele in local JOSN 
    window.localStorage.setItem('movies', JSON.stringify(movies));
    CountObjAndstop();
    };

   function CountObjAndstop(){
    let countObj = movies.length;
     if (countObj>=8) {
        // Creem Atrbutul Disable pentru button si style pentru mesaj.
        let ParentElem=document.getElementById('Send'); 
        SelectMessage.innerHTML='<li class="list-group-item list-group-item-danger">'+'Mai mult de 8 filme nu poti sa adaugi!'+'</li>';
        ParentElem.setAttribute("disabled", "disabled");
        ParentElem.setAttribute("class", "btn btn-secondary");
     };
    };

    SelectPrint.addEventListener('click',printOne);
      function printOne() {
         let WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
         WinPrint.document.write(IdUls.innerHTML);
         WinPrint.document.close();
         WinPrint.focus();
         WinPrint.print();
         WinPrint.close();
      };
  };
window.addEventListener('load', load);

// 

// 
//     
