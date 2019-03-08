// When clicked add high-lighted class to current select element;
// remove high-lighted class from any other nav links;
export const selectNav=function(event){
    let items = document.querySelectorAll('.nav li');
    items.forEach(item=>item.firstChild.classList.remove('high-lighted'))
    event.target.classList.add('high-lighted');
}

// navigate to other pages from page link, set destination tab to active
export const navFromPage = function(route){
    if(route){
        let items = document.querySelectorAll('.nav li');
        items.forEach(item=>{
            item.firstChild.classList.remove('high-lighted')
            if(route === item.firstChild.innerHTML.toLowerCase()){
                item.firstChild.classList.add('high-lighted');
            }
        })
    }
}

