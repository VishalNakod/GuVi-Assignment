
// Task 2&3:Get the data using rest countries api

// 1.setup our http request

let xhr=new XMLHttpRequest()


// 2. Open the request

xhr.open('GET','https://restcountries.com/v3.1/all')

// 3.setup our listner to process  the complete request

xhr.onload=function(){
    // get the data

    console.log("All Details are given below:")
    if(xhr.status>=200 && xhr.status<300){
        // only if the request is ok and received the data
        let data=JSON.parse(this.response)
        // console.log(data);
        data.forEach(element => {
            console.log(element.flags.png)
            console.log(`Name:${element.name.common}
                         Regions:${element.region}
                         Sub-Regions:${element.subregion}
                         Population:${element.population}
                         `)
        });
    }
    else{
        console(error)
    }
    }

// send the data

xhr.send();


