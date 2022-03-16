
var flag=0;
//ENABLES THE BUTTON TO BE CLICKED
function EnableDisable() {
    //Reference the Button.
    var btnSubmit = document.getElementById("btnSubmit");

    //Verify the TextBox value.
    if (document.getElementById("TOAddData").value.trim() != "") {
        //Enable the TextBox when TextBox has value.
        btnSubmit.disabled = false;
    } else {
        //Disable the TextBox when TextBox is empty.
        btnSubmit.disabled = true;
    }
};




//ADD'S NEW ELEMENT TO THE TODO TAKS LIST 
function Add_Element(){
    flag=1;
    var x = document.getElementById("TOAddData");
    var date = document.getElementById("Date");
    console.log("the value is  -" + x.value);
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage === null){
        IistArr = [];
    }else{
        IistArr= JSON.parse(getLocalStorage);
        //IistArr.Add_Element(x.value)
    }
    if(date.value==''){
        IistArr.push(x.value);
    }else{
        IistArr.push(x.value+"   ["+date.value+"  ]");
    }
    
    localStorage.setItem("New Todo",JSON.stringify(IistArr));
    document.getElementById("TOAddData").value = "";
    document.getElementById("Date").value = "";
    var btnClearAll = document.getElementById("btnClearAll");
    btnClearAll.disabled = false;
    EnableDisable();
    showTask();
}



//SHOWS ALL THE TODO TASK'S
function showTask(){
    flag=1;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage === null){
        IistArr = [];
    }else{
        IistArr= JSON.parse(getLocalStorage);
    }
    let newLiTag='';
    IistArr.forEach((element, index) => {
        newLiTag +=    `<li>${element}</li>
        <button onclick = reMove(${index}) type="button">delete</button>
        <button  onclick = comPleteD1(${index}) 
        type="button">completed</button>`
    });
    console.log(newLiTag)
    //todoList.innerHTML = newLiTag;
    document.getElementById("display").innerHTML = newLiTag;
};




//REMOVE THE UNWANTED TODO TASK'S
function reMove(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    IistArr = JSON.parse(getLocalStorage);
    IistArr.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(IistArr));
    showTask();
}




//CLEARS THE ALL TODO TASK'S IN THE SCREEN
function clearAll(){
    if(flag==0){
        IistArr=[];
    localStorage.setItem("Submites",JSON.stringify(IistArr));
    showCompleted()
    }else{
    IistArr=[];
    localStorage.setItem("New Todo",JSON.stringify(IistArr));
    showTask();
    }
}




//REMOVES THE BLOCK AND ADD IT TO NEW MEMORY LOCATON
function comPleteD1(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    IistArr = JSON.parse(getLocalStorage);
    cArr=[];
    element=IistArr[index]
    console.log(element);

    cArr.push(element);
    localStorage.setItem("Submites",JSON.stringify(cArr));

    console.log("the value of complete is " + cArr)
    
    
    IistArr.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(IistArr));
    showTask();
    
}


//SHOWS THE COMPLETED TASKS
function showCompleted(){
    flag=0;
    let getLocalStorage = localStorage.getItem("Submites");
    //let getLocalStorage = null;
    if(getLocalStorage.length === null){
        data="you have not completed anything !"
        cArr = [data]
        console.log("entered the block")
    }else{
        cArr= JSON.parse(getLocalStorage);
    }
    let newLiTag1=''
    cArr.forEach((element, index) => {
        newLiTag1 +=    `<li><s>${element}</s></li><button 
        onclick = reMoveComplited(${index}) 
        type="button">delete</button>`
    });
    console.log("the completed list is " + cArr);
    document.getElementById("display").innerHTML = newLiTag1;
}

//SHOWS THE COMPLETED LIST OF TODO TASK
