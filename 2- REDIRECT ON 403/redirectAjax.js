$( document ).ajaxComplete(function(e, xhr) {
    if(xhr.status==403){
        if(window.location.pathname != '/')
        {
          window.location.href = '/'
        }
        
    }
  });