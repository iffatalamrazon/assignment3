//https://github.com/iffatalamrazon/assignment3




// First problem kilometerToMeter
function kilometerToMeter(num){
    if(num>0)
    {
        meter =num *1000;
        return meter ;
        
    }
    else if (num<=0){
        return ('please Enter a valid number');
    
    }
    
    
}
var result = kilometerToMeter(45);
console.log(result);

// first problem ends

//Second problem budgetCalculator stars here

function budgetCalculator( watch ,phone,laptop){
    if(watch >0){
        var totalAmountWatch = watch *50;
    }
    else if(watch <=0){
        return console.log('please specify the number of watch');
    }
     if(phone >0){
      var  totalAmountPhone =phone *100 ;

    }
    else if (phone<=0){
        return console.log ('please specify the number of phone  ')
    }
     if (laptop >0){
       var totalAmountlaptop = laptop *500 ;
    }
    else if (laptop <= 0){
        console.log ('please specify the number of laptop')
    }
     var totalBudget = totalAmountWatch + totalAmountPhone + totalAmountlaptop ;
     return totalBudget ;

}

//Enter how many watch,phone ,laptop you want to buy
var total = budgetCalculator(1 , 1, 1);
console.log (total);


//second problems ends 


//Third problem hotelCost starts Here
function hotelCost (n){
    var totalCost = 0 ;
    if(n<=10){
        var totalCost=n*100;
        
    }
    else if (n<=20 ) {
        var first10Days = 10 * 100 ;
        var remaining  = n - 10 ;
        var second20Days = remaining * 80 ;
        var totalCost = first10Days + second20Days ;
    } 
    else{
        
        var first10Days =10 * 100;
        var second20Days = 10 * 80 ;
        var remaining = n -20 ;
        var moreThan20Days = remaining * 50 ;
        var totalCost = first10Days + second20Days + moreThan20Days ;
    
    }
    return totalCost ;
}
var total = hotelCost(22);
console.log (total);


// fourth problem megaFriend starts here 

function megaFriend (n){
    var max =n[0]
    for (var i =0 ; i<n.length ;i++){
        var element = n[i];
        if (element.length >max.length){
            max =element ;
        }
        
    }
    return max ;

}
var name = ['Razon','Azizul','farjanaAkter','novaMoni','korimUddin']
var largeName =megaFriend(name);
console.log (largeName);

//fouth programs ends here 




