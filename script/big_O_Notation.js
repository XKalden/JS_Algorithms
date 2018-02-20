

// Constant Runtime 
// Big O Notation = 'O (1)'
function log(array){
    console.log(array[0]);
    console.log(array[1]);
}

log([1,2,3,4]);
log([1,2,3,4,5,6]);


// Linear Runtime
// Big O Notation = 'O (n)'
// O => function to evaluate && n => Size of Input 

function logAll(ary){
    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}


// Exponential Runtime
// Big O Notation = 'O (n^2)'

function addAndLog(ary){
    for(var i=0; i<ary.length; i++){
        for(var j=0; j<ary.length; j++){
            console.log(ary[i] + ary[j]);
        }
    }
}

// Logarithmic Runtime 
// Big O Notaion = 'O (log n)'

function binarySearch(array, key){
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;
    
    while(low <= hight){
        mid = Math.floor((low + high) / 2 , 10);
        element = array[mid];
        if(element < key){
            low = mid + 1;
        } else if(element > key){
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}