const main = document.querySelector(".main");
const head = document.querySelector("#head");

people = [];
fetch(" https://dummy-apis.netlify.app/api/contact-suggestions?count=30")
  .then((response) => response.json())
  .then((data) => {
    people = data;
    console.log(people);

    people.forEach((element) => {
      main.innerHTML += `
          
          <div class="person">
          <div class="delete">x
          </div>
          <img src="${element.picture}" alt="photo">
          <h4> ${element.name.title} ${element.name.first} ${element.name.last} </h4>
          <p> ${element.title}</p>
          <p> ${element.mutualConnections} mutual connections</p>
          <button type="submit" class="btn"> connect </button>
          </div>`;
    });

    let pendingCount = 0;
    function connectButtons() {
      const btns = document.querySelectorAll(".btn");
       
     
      btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.classList.toggle("btn-toggle");

          //btn.classList.contains('essaie')  ?  btn.innerHTML='pending': btn.innerHTML= 'connect'

          if (btn.classList.contains("btn-toggle")) {
            btn.innerHTML = `pending`;
            pendingCount += 1;
          } else {
            btn.innerHTML = `connect`;
            pendingCount -= 1;
          }

          console.log(pendingCount);
          if(pendingCount<2){
            head.innerHTML = `${pendingCount} pending Invitations`;

          }else{
            head.innerHTML = `${pendingCount} pendings Invitations`;

          }
        });

        
      });
    }
    function deletePerson() {
      const deletes = document.querySelectorAll(".delete");
      deletes.forEach((del) => {
        del.addEventListener("click", () => {
          del.parentElement.remove();
        });
      });
    }

    connectButtons();
    deletePerson();

    function pendingCounts(){
        if(pendingCount<2){
            head.innerHTML = `${pendingCount} pending Invitations`;

          }else{
            head.innerHTML = `${pendingCount} pendings Invitations`;

          }
    }

    pendingCounts();

  function  stylePeople (){
      const peopli = document.querySelectorAll('.person')
      console.log(peopli);
      peopli.forEach(person=>{
          person.addEventListener('click', ()=>{
              person.classList.toggle('styling-people')
          })
      })
  }

  

  stylePeople ()
  });
