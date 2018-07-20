$(document).ready(function(){

  // attach event listener to buttons(input?)
  // create function stub for read/write/delete
    // research local storage

  // $().on('click', function(){
  //
  // });

  $('.store-btn').on('click', function(event){
    localStorage.setItem('hrext', "three is the best");
  });

  $('.get-btn').on('click', function(event){
    console.log(localStorage.getItem('hrext'));
  });

  $('.delete-btn').on('click', function(event){
    console.log(localStorage.removeItem('hrext'));
  });


});
