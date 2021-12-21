
//upper case
let btnUpperCase=document.querySelector("#upperCase");
btnUpperCase.addEventListener("click",function(){
   let text= document.getElementById("addTxt").value;
   let uppercase=text.toUpperCase();
   document.getElementById("addTxt").value=uppercase;
   
    

});

//Lower case
let btnlowerCase=document.querySelector("#lowerCase");
btnlowerCase.addEventListener("click",function(){
   let text= document.getElementById("addTxt").value;
   let uppercase=text.toLowerCase();
   document.getElementById("addTxt").value=uppercase;
  
    

});

//Remove text
let Removetext=document.querySelector("#remove");
Removetext.addEventListener("click",function(){
  let text= document.getElementById("addTxt").value="";
  document.getElementById("character").innerHTML=0;
  document.querySelector("#show").innerHTML=0;
  document.querySelector("#para").innerHTML="";
  document.querySelector("#time").innerHTML=0;
  
});


//REMOVE EXTRA SPACES
let removeExtraspace=document.querySelector("#removeSpace");
removeExtraspace.addEventListener("click",function () {
   let text=document.getElementById("addTxt").value;
   let newtext=text.split(/[ ]+/);
   let newstr=newtext.join(" ");
   document.getElementById("addTxt").value=newstr;
})


//Capital first word
let firstWordcapital=document.querySelector("#firstWordcapital");
firstWordcapital.addEventListener("click",function () {
   let text=document.getElementById("addTxt").value;
   let arr=text.split(" ");
   for (let i = 0; i < arr.length; i++){
      arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
   }
   let str=arr.join(" ");
   document.getElementById("addTxt").value=str;
});


//Copy to clipboard
let CopyText=document.querySelector("#copy");
CopyText.addEventListener("click",function () {
   let text=document.getElementById("addTxt");
   text.select()
   navigator.clipboard.writeText(text.value);
   let alert=document.querySelector("#alert");
   alert.innerHTML=`<div class="alert alert-dark" role="alert">
   <h4>Text Copied</h4>
 </div>`

 setTimeout(() => {
    alert.innerHTML="";
    
 }, 3000);

});

//text summary
let TextSum=document.querySelector("#textSum")
TextSum.addEventListener("click",function() {
   let text=document.getElementById("addTxt").value;
   document.getElementById("para").innerHTML=`<h4>Your Text Preview</h4>${text}`;

});

//sentence CASE
let sentence=document.querySelector("#Sentence")
sentence.addEventListener("click",function() {
   let text=document.getElementById("addTxt").value;
   let fullText=text.slice(1);
   let firtword=text.charAt(0).toUpperCase()+fullText;
   document.getElementById("addTxt").value=firtword;

});

//words and character count

//character counter
function countCharacter() {
   let text=document.getElementById("addTxt").value;
   let count=0;
   for (var i = 0; i < text.length; i++) {
      if (text[i] != "") {
          count += 1;
      }
  }
document.querySelector("#character").innerHTML=count;
   
}

//word count
function countWord() {
   let text=document.getElementById("addTxt").value;
   let count=0;
   /*let split=text.split(" ").filter((n)=>{ return n.length!==0 
   }).length*/
   let split=text.split(" ");
   for (let i = 0; i < split.length; i++) {
      if (split[i] != "") {
          count += 1;
      }
  }
  document.querySelector("#show").innerHTML=count;
}


//Time taken to read
function timeTaken() {
   let text=document.getElementById("addTxt").value;
   let count=0;
   let split=text.split(" ");
   
   for (let i = 0; i < split.length; i++) {
      if (split[i] != " ") {
          count = 0.008*split.length;
      }
   }
   
  document.querySelector("#time").innerHTML=parseFloat(count).toFixed(3);

}
