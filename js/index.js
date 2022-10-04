
// get data in file json
let main_object;
// content of main array
let ele_arr;


// tget file json
function goToBox () {
    
    fetch('../data.json')
    .then(res => res.json())
    .then(data => {
        main_object = data
        read_first_Object()
    })
}
goToBox()

// read two first ele
function read_first_Object () {
    const keys_Object = Object.keys(main_object);
    const value_Object = Object.values(main_object);
    let main_ele;
    let main_arr;

    for (var i = 0; i < value_Object.length ;i++){
        if (typeof (value_Object[i]) != "object"){
            main_ele = keys_Object[i] + " : " + value_Object[i] + "<br> "
            // console.log("oooo",main_ele);
            document.getElementById('first_ele').innerHTML +=  main_ele;
        }
        else{
            ele_arr = value_Object[i];
            main_arr = keys_Object[i];
            document.getElementById('first_arr').innerHTML += main_arr;
        }
    }
    read_ele_arr();
}


function read_ele_arr () {
    const value_array = Object.values(ele_arr)
    let content_arr;

    for (var i = 0; i < value_array.length; i++) {
        if (typeof (value_array[i]) === "object") {
            content_arr = value_array[i]
            read_p_arr(content_arr)
        }
    }
}

function read_p_arr (arr) {
    // console.log("eeeee", arr);

    const value = Object.values(arr)
    const keys = Object.keys(arr)
    let res;
    let lba9i;

    // console.log('val', value);
    // console.log('key', keys);

    for (i= 0; i < value.length; i++) {
        if (typeof (value[i]) != "object") {
            res = keys[i] + " : " + value[i] + "<br>" 
            document.getElementById('content_arr').innerHTML += res;
        }
        else {
            last(value[i]);
            lba9i = keys[i] + "<br>"
            document.getElementById('another_arr').innerHTML += lba9i;
        }     
    }
}

function last (last) {
    const values = Object.values(last)
    let i;
    let res;
    
    for (i = 0; i < values.length; i++) {
        res = values[i] + "<br>"
        document.getElementById('last').innerHTML += res;
    }
}
