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
 
             let tdNome = document.createElement("td")
             tdNome.append(document.createTextNode(slice.userId))
             tr.append(tdNome)
 
             let tdEmail = document.createElement("td")
             tdEmail.append(document.createTextNode(slice.id))
             tr.append(tdEmail)
 
             let tdPhone = document.createElement("td")
             tdPhone.append(document.createTextNode(slice.title))
             tr.append(tdPhone)
 
             let tdEmp = document.createElement("td")
             tdEmp.append(document.createTextNode(slice.completed))
             tr.append(tdEmp)
             tbody.append(tr)
             
         });
    })
 }