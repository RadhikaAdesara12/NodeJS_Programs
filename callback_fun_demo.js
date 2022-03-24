function add(a,callback){
    console.log('First Value:- '+a);
}

function callme()
{
    console.log('This is Second Function');
}

add('1',callme);