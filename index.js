
window.onload = function(){
    let area=document.getElementsByClassName("text");
    let changebutton=document.getElementsByClassName("change");

    let output=document.getElementById("output");
       output = output.contentDocument || output.contentWindow.document;
       let body= output.body;

    let htmlstart=
    [
        
     '<!DOCTYPE html>' ,
     '<html lang="en">','',
     '<head>',
     '  <meta charset="UTF-8">',
     '  <meta http-equiv="X-UA-Compatible" content="IE=edge">',
     '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
     '   <title>Document</title>',
    '</head>','',
     '<body>', 
    '<h1>Hi There!</h1>',
    '<h2>Code and Enjoy here!!</h2>',
    
    '</body>', '',
    '</html>'
 ]   

for(let elem in htmlstart){
    area[0].value = area[0].value + htmlstart[elem] + "\n";
    body.innerHTML = body.innerHTML + htmlstart[elem];
}

function changearea(number){
    for(let i=0;i<3;i++){
        if(i == number){
             
        if(area[i].classList.contains("hide")){
            area[i].classList.remove("hide");
        }
        if(area[i].classList.contains("show")){
            area[i].classList.add("show");
        }
        if(!changebutton[i].classList.contains("active")){
            changebutton[i].classList.add("active");
        }
        area[i].focus;

        continue
        }

        if(!area[i].classList.contains("hide")){
            area[i].classList.add("hide");
        }
        if(area[i].classList.contains("show")){
            area[i].classList.remove("show");
        }
        if(changebutton[i].classList.contains("active")){
            changebutton[i].classList.remove("active");
        }
    }
}

function changecontent(number){
    output.open();
    output.close();
    
    output.write(`<style>${ area[1].value }</style> ${ area[0].value } <body><script> \n ${ area[2].value } \n</script></body>`);
}




for(let i=0;i<changebutton.length;i++){
    changebutton[i].addEventListener("click",function(){
        changearea(i);
    })

area[i].addEventListener("input", function(){
    changecontent(i);
})
}
}

