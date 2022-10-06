// get data in file json
let main_object;

// tget file json
function goToBox() {

    fetch('../data/data.json')
        .then(res => res.json())
        .then(data => {
            main_object = data
            read_first_Object()
        })
}
goToBox()

// read two first ele
function read_first_Object() {
    const keys_Object = Object.keys(main_object);
    const value_Object = Object.values(main_object);
    let main_ele;
    let main_arr;
    let ele_arr;

    for (var i = 0; i < value_Object.length; i++) {
        if (typeof (value_Object[i]) !== "object") {
            if (typeof (value_Object[i]) !== "array") {
                main_ele = keys_Object[i] + " : " + value_Object[i] + "<br> "
                document.getElementById('first_ele').innerHTML += main_ele;
            }
        }
        else {
            ele_arr = value_Object[i];
            main_arr = keys_Object[i] + "<br>";
            read_ele_arr(ele_arr);
            document.getElementById('first_arr').innerHTML += main_arr;
        }
    }
    read_ele_arr();
}


function read_ele_arr(val_arr) {
    const keys = Object.keys(val_arr)
    const value = Object.values(val_arr)
    let res;

    for (var i = 0; i < value.length; i++) {
        if (typeof (value[i]) !== "object") {
            if (typeof (value[i]) !== "array") {
                // console.log("tt", value[i]);
                res = keys[i] + " : " + value[i] + "<br>"
                document.getElementById('content_arr').innerHTML += res;
            }
        }
        else {
            read_p_arr(value[i]);
        }
    }
}

function read_p_arr(arr) {

    const value = Object.values(arr)
    const keys = Object.keys(arr)
    // console.log(keys);
    console.log(value);
    let res;
    let module;

    for (i = 0; i < value.length; i++) {
        if (typeof (value[i]) !== "object") {
            if (typeof (value[i]) !== "array") {
                res = keys[i] + " : " + value[i] + "<br>"
                document.getElementById('content_arr').innerHTML += res;
            }
        }
        else {
            last(value[i]);
            module = keys[i] + "<br>"
            document.getElementById('another_arr').innerHTML += module;
        }
    }
}


function last(last) {
    const values = Object.values(last)
    const keys = Object.keys(last)
    let res;

    for (let i = 0; i < values.length; i++) {
        if (typeof (values[i]) != "object") {
            if (typeof (values[i]) != "array") {
                res = values[i] + "<br>"
                document.getElementById('last_o').innerHTML += res;
            }

        }
        else {
            res = values[i] + "<br>"
            document.getElementById('last').innerHTML += res;
        }
    }
}
