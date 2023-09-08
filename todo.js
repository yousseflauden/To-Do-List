let taskinput = document.querySelectorAll('input');
let addtaskbtn = document.getElementById('addtaskbtn');
let alltask = document.getElementById('alltasks');
let notask = document.getElementById('notask');
let notaclossvalidationmassagebtnsk = document.getElementById('clossvalidationmassagebtn');
let validationmassage = document.getElementById('validationmassage');
let tname = document.getElementById('tname');
let tdate = document.getElementById('tdate');
let tnamevalidation = document.getElementById('tnamevalidation');
let tdatevalidation = document.getElementById('tdatevalidation');



// function notaskschecker() {
//     if(alltask.childElementCount == 0){
//         notask.style.display = 'block'; 
//     }
// }



let resetinput = () => {
    for(let i = 0; i < taskinput.length; i++){
        taskinput[i].value = ''
    }
}


function checkTaskName(){
    if(taskinput[0].value.trim() == ""){
        tnamevalidation.innerHTML = 'you must enter name';
        tnamevalidation.style.display = 'block';
        tname.classList.add('bordererror');
    } else if(taskinput[0].value.trim() !== ""){
        // tnamevalidation.innerHTML = 'you must enter name';
        tnamevalidation.style.display = 'none';
        tname.classList.remove('bordererror');
    }
}

function checkTaskDate(){
    if(taskinput[1].value.trim() == ""){
        tdatevalidation.innerHTML = 'you must enter date';
        tdatevalidation.style.display = 'block';
        tdate.classList.add('bordererror');
    }else if(taskinput[1].value.trim() !== ""){
        // tdatevalidation.innerHTML = 'you must enter date';
        tdatevalidation.style.display = 'none';
        tdate.classList.remove('bordererror');
    }
}



function checkname() {
    checkTaskName();
    checkTaskDate();
    if( taskinput[0].value.trim() !== "" && taskinput[1].value.trim() !== "")
    {
    
        /*
        hide alert
        hide no tasks
        create task
        */
        validationmassage.style.display = 'none'
        notask.style.display = 'none'
        alltask.innerHTML += `
        <div class="alert alert-light div-del " style=" width:100%; ">
        <button type="button" class="btn-close del-close" disabled aria-label="Close"></button>
        <b><h3>${taskinput[0].value.trim()}</h3></b>
            <b class="floar-right">  ${taskinput[1].value.trim()} </b>
        </div>`;
    };
    //reset inputs
    if( taskinput[0].value.trim() !== "" && taskinput[1].value.trim() !== ""){
        resetinput();
    }

};


document.addEventListener('click',  (t) =>{
    if(t.target.classList.contains('div-del')){
        t.target.remove()
        if (alltask.children.length ===0) {
        notask.style.display = 'block'
        }
    }
} );

