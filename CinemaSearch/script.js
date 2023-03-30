"use script"
const Input = document.querySelector(".search");
const Btn = document.querySelector(".btn-search");
const film =document.querySelector(".cinemaCards");
const wait = document.querySelector(".loader");

document.addEventListener("keydown", function(event){
  if(event.code === "Enter"){
    Cinemas(Input)
  }
})


const Cinemas = async function(Input){
  // wait(style="display:none");
  try{
    const DataJnos = await fetch(
      `https://www.omdbapi.com/?apikey=1fd18c03&s=${Input.value}`
    );

    const Data = await DataJnos.json();
    console.log(Data.Search);
    searhtml(Data.Search)

    // wait(style="display:block");
  }


  catch (error){
    return error
  }
  // wait(style="display:none");
};
Btn.addEventListener("click", function(){
  Cinemas(Input)
});


let searhtml = function(Data){
  Data.forEach((element) => {
    searhtmlelements(element)

  });
}

let searhtmlelements = function (data){
  let searhtml = `
  <div class="cinemaBox">
        <div class="cinemaBox__img" style="background-image:url(${data.Poster});"></div>
        <p class="cinemaBox__title">${data.Title}</p>
        <p class="cinemaBox__year">Year${data.Year}</p>
      </div>`;

      film.insertAdjacentHTML("afterbegin",searhtml)
    }

    
