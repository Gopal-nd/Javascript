const bal = 1990
if (bal<10000) {
    console.log("true")
}




const day = 1
switch(day){
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("thuseday")
        break;
    default:
        console.log("Special Day")
}

const data =[]
if(data.length ===0) console.log("Number");

const Obj = {}

if(Object.keys(Obj).length ===0 ) console.log("Number");

// nullish coalescing operator (??):null

let val ;

val = 10??11
ver = null ?? 10
