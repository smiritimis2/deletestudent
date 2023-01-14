const arr=[{
    id:0,
    name:"simran",
    profession:"developer",
    age:"12",
}]
let btn=document.getElementById("addbtn");
let tb=document.getElementById("list");
let err=document.getElementById("msg");
let count=document.getElementById("counting");

count.innerText="you have 0 employees";
count.style="color:white";

function add()
{ 
count.innerText="";
 let name=document.getElementById("name");
 let profession=document.getElementById("profession");
 let age=document.getElementById("age");
 let names=name.value;
 let professions=profession.value;
 let ages=age.value;
 //if(item.id==0){
  //let dive=document.createElement("div");
  
//}


  if(names==""|| professions==""||ages=="")
  {
    //let dive=document.createElement("div");
    //dive.style.background="red";
    err.innerText="Error : PleaseMake sure All the fields are filled before adding in an employee !";
   err.style="color:red";
  //  div.style.color="red";
  }


else{
 err.innerText="Success : Employee Added !";
 err.style="color:green";

    let len=arr.length;
    len++;
    len--;

    const brr={
      id: len,
      name:names,
      profession:professions,
      age:ages
     }

    //const trdata=document.createElement("tr");
     arr.push(brr);
     //if()
     name.value="";
     age.value="";
     profession.value="";

tb.innerHTML="";

     arr.forEach((item)=>{
     let i=1;
      if(item.id==0)
      {
         count.innerText="you have 0 employees";
         count.style="color: white"
      }

      
      //let i=1;
      
      
      
      if(item.id>0)
        {
         // <br></br>
         count.innerText=" ";
      let Item=document.createElement("tr");
      let btn=document.createElement("button");
      btn.style="height:20px;width:100px";
      btn.innerText="Delete User";
      
    
      Item.innerHTML=`
      <td>${item.id} &nbsp &nbsp &nbsp</td>
      <td> Name ${item.name} &nbsp &nbsp &nbsp</td>
      <td> Profession ${item.profession} &nbsp &nbsp &nbsp </td>
      <td> Age ${item.age}  &nbsp &nbsp &nbsp</td>
      `
      Item.style.display="block";
      Item.style.height="20px";
      Item.style.width="400px";
      Item.style.color="white";
      Item.style.borderStyle="solid";
      Item.style.margin="20px 10px";
      Item.style.borderRadius="5px";
      
      
      btn.addEventListener("click",()=>{Item.innerHTML="";Item.style.display="none"; delete arr[item.id];});

      tb.append(Item);
      tb.append(btn);
      //let row=document.createElement("tr");
     //tb.append(row);
     
     i++;
     


      }
    
    })


     //forEach()
  }

//tb.append(trdata);


    
}




btn.addEventListener("click",add);
