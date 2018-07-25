$(document).ready(function(){

  //to pull up all storage values use
  // localStorage.length as your array length
  // localStorage.key(index) to access by number
  // that returns a list of keys
  // attach event listener to buttons(input?)
  // create function stub for read/write/delete
    // research local storage

  // $().on('click', function(){
  //
  // });
  /* TO DO
  */

  let displayTaskList = function (filter) {
    $('.task-display').html('');
    $('.task-display').append('<ol>');
    for (var i = 0; i < localStorage.length; i++) {
      let obj = JSON.parse(localStorage.getItem(localStorage.key(i)))
      let deleteLink = '<span class="delete">delete</span>'
      let categoryLink = '<span class="category">' + obj.catValue + '</span>'
      if (filter) {
        if (obj.catValue === filter) {
          $('.task-display').append('<li>'+ '<span>' + localStorage.key(i) + ' ' + deleteLink + '</span> <br>' + ' due ' + obj.dateValue + ' ' + obj.catValue + ' ' + '<br>' + obj.notesValue + '</li>')
        }
      } else {
        $('.task-display').append('<li>'+ '<span>' + localStorage.key(i) + ' ' + deleteLink + '</span> <br>' + ' due ' + obj.dateValue + ' ' + categoryLink + ' ' + '<br>' + obj.notesValue + '</li>')
      }
    }
    $('.task-display').append('</ol>');
  }
  
  displayTaskList();

  $('.create-btn').on('click', function(event){
    let taskValue = $('.task-input').val();
    let catValue = $('select[name="category"]').val();
    let dateValue = $('.date-input').val();
    let notesValue = $('.notes-input').val();
    let taskObj = {'taskValue': taskValue, 'catValue': catValue, 'dateValue': dateValue, 'notesValue': notesValue};
    localStorage.setItem(taskValue, JSON.stringify(taskObj));
    displayTaskList();
  });

  // $('.get-btn').on('click', function(event){
  //   //console.log(localStorage.getItem('hrext'));
  //   let titleValue = localStorage.getItem('titleValue');
  //   let contentValue = localStorage.getItem('contentValue');

  //   $('.debug').html(`<p>${titleValue} ${contentValue}</p>`);

  // });

  $('.task-display').on('click', '.delete', function(event){
    let key = $(this).parent().text().split(' ')
    key.splice(-1,1);
    key = key.join(" ");
    localStorage.removeItem(key);
    displayTaskList();
  });

  $('.task-display').on('click', '.category', function(event){
    console.log($(event.target).text())
    displayTaskList($(event.target).text());
  });

    $('.all-btn').on('click', function(event){
    displayTaskList();

  });

});
