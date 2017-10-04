$('.dropdown').on('click', function(e){
   $(this).toggleClass('open');
   e.stopPropagation();
  });

/* Upon a mouseup event, if the clicked element is not dropdown,
then remove the open class to close the dropdown menu */
  $(document).on('mouseup', function(e){
    var eleNotFound = false;
    if($(e.target).attr("class") !== "dropdown")
    {
          eleNotFound = true;
         $(".dropdown-menu").each(function(){
           $(this).parent().removeClass('open');
         });
    }
     if(eleNotFound)
       e.preventDefault();
  });
