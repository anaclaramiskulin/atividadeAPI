document.querySelector("button").onclick=function(){
    fetch("https://jsonplaceholder.typicode.com/todos").then(
        function(res){
            return res.json();
        }
    ).then(function(res){
         let tbody=document.querySelector("tbody")
         res.forEach(slice=>{
             
            // console.log(slice);
            // console.log(slice.email)
             let tr= document.createElement("tr")
 
             let userId = document.createElement("td")
             userId.append(document.createTextNode(slice.userId))
             tr.append(userId)
 
             let Id = document.createElement("td")
             Id.append(document.createTextNode(slice.id))
             tr.append(Id)
 
             let title = document.createElement("td")
             title.append(document.createTextNode(slice.title))
             tr.append(title)
 
             let completed = document.createElement("td")
             completed.append(document.createTextNode(slice.completed))
             tr.append(completed)
             tbody.append(tr)
             
         });
    })
 }
