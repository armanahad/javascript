api.createorder(cart,function(){
  api.proceddPayment(function(){
    api.makePayment(function(){
      api.showorderSummary(function(){}); 
     });      
   });
});
//callback =>pyramid of doom(callback Hell)
//solve the problem of callback by using promise


 //promise =>fullfilment,rejecte, pending
 // it is an one of the object

 // by using then() with promise

//promise chaining
 .then(() =>console.log(data))
 .then( ()=> console.log(result))
 .then( ()=> console.log(result))
 .then( ()=> console.log(result))
 .then( ()=> console.log(result))
 

 // to avoid a promise chain  we can go ahead with saync and await 