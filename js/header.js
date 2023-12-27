

const placeholderText = "start exploreing..."
let placeholderIndex = 0;
let increasingValue=true;
let isTyping=false;

function animatePlaceholder(){
    const searchBar = document.getElementById('search');
    if(!isTyping){
        if(increasingValue){
            searchBar.setAttribute("placeholder",placeholderText.substring(0,placeholderIndex))            
            searchBar.setAttribute
            placeholderIndex++;
            if(placeholderIndex>=placeholderText.length)
                increasingValue=false;
        }else{
            searchBar.setAttribute("placeholder",placeholderText.substring(0,placeholderIndex))
            placeholderIndex--;
            if(placeholderIndex==0){
                increasingValue=true;
            }
        }
    }
}

function handler(){
    const searchBar = document.getElementById("search");
    if (searchBar.value !== "") {
        isTyping = true;
        searchBar.setAttribute("placeholder", searchBar.value);
      } else {
        isTyping = false;
      }
}

setInterval(animatePlaceholder,200)


