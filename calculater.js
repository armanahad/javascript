function calc(option){
          let a=document.getElementById('first').value;
          let b=document.getElementById('second').value;
          if(option == "add"){
                    document.getElementsByClassName('output')[0].innerText="sum of two no is "+(Number(a)+Number(b));
          }
          if(option == "sub"){
                    document.getElementsByClassName('output')[0].innerText="sub of two no is "+(Number(a)-Number(b));
          }
          
}







// function add(){
//           let a =document.getElementById('first').value;
//           let b =document.getElementById('second').value;
//            let output= Number(a)+Number(b);
//            document.getElementsByClassName('output')[0].innerText="sum of two number is "+output;


// }
// function sub(){
//           let a=document.getElementById('first').value;
//           let b=document.getElementById('second').value;
//           let output=Number(a)-Number(b);
//           document.getElementsByClassName('output')[0].innerText='subtract of two number is  '+output;
// }