function calculateDaysFromMonths(n){ 
  if ( n == 1 ) {
    return 30
  }
  if( n==2 ){
  return 28
  }
  if(n==3){
    return 31
  }
  if(n==4){
    return 30
  }
  if(n==5){
    return 31
  }
  if(n==6){
    return 30
  }
  if(n==7){
    return 31
  }
  if(n==8){
    return 31
  }
  if(n==9){
    return 30
  }
  if (n==10){
    return 31
  }
  if(n==11){
    return 30
  }
  if(n==12){
    return 31
  }
}

days = calculateDaysFromMonths(5)


console.log(days)
