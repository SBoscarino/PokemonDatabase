//js for checkbox limits on index.mustache

//adds an event listener to the div with id: checkboxes in the form. This function sets a max number of two boxes.
document.querySelector('#checkboxes').addEventListener('change', function(evt){
  let checked = document.querySelectorAll('input:checked');
  if(checked.length > 2){
    evt.target.checked = false;
  }
  checked = document.querySelectorAll('input:checked');

  console.log(checked);
})
