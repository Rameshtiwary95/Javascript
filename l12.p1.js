// async function greet() {
//     throw "404 page not found";
//     return "hello!"; //return a promise
// }
// greet()
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ",result);

// })
// .catch((err) => {
//     console.log("promise was rejected with err : ", err);
// });

// let demo = async ()  => {
//     return 5;
// };
 
// function getNum() {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//    let num = Math.floor(Math.random () *10) + 1;
//    console.log(num);
//      resolve();
//     },2000);
// });
// }
//  async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();

// }


// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//      return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*5)+1;
//             if (num>3) {
//                 reject("promise rejected")
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//                },delay);
//         });
//     }
    
//     async function demo() {
//         await changeColor("red",1000);
//         await changeColor("orange",1000);
//         await changeColor("green",1000);
//         await changeColor("blue",1000);
//         await changeColor("violet",1000);

//         let a = 5;
//         console.log(a);
//         console.log("new number =", a+3);

//     }
    // changeColor("red", 1000)
    // .then(() => {
    //     console.log ("red color was completed");
    //     return changeColor("orange",1000);
    // })
    // .then(() =>{
    //     console.log("orange color was completed ");
    //     return changeColor("green",1000);
    // })
    // .then(() =>{
    //     console.log("green color was completed ");
    //     return changeColor("yellow",1000);
    // })
    // .then(() =>{
    //     console.log("yellow color was completed ");
    //     return changeColor("yellow",1000);
    // })

    // let jsonRes ='{"fact":"According to Hebrew legend, Noah prayed to God for help protecting all the food he stored on the ark from being eaten by rats. In reply, God made the lion sneeze, and out popped a cat.","length":184}';
    
    // let validRes = JSON.parse(jsonRes);
    // console.log(validRes.fact);
    
    // let url ="https://catfact.ninja/fact";

    // fetch(url)
    // .then((res) => {
    //     console.log(res);
    //     return res.json();
    // })
    // .then((data) => {
    //     console.log("data1 =",data.fact);
    //     return fetch(url);
    // })
    // .then((data2) => {
    //     console.log("data2 = ",data2.fact)
    // })

    // .catch((err) => {
    //     console.log("ERROR - ",err);
    // });

    // console.log("i am Happy");

    // let url ="https://catfact.ninja/fact";

    // async function getFacts() {
    //     try {
    //     let res = await fetch(url);
    //     let data = await res.json();
    //     console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);

//     } catch (e) {
//         console.log("error -",e);
//     }
//     console.log("bye");
//}


  //  await get image 


// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click",async() => {
//     let link = await getImage();
//     // console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
//     console.log(link);
//  });
   
//  async function getImage() {
//      try {
//      let res = await axios.get(url2);
//      return res.data.message;
//      } catch (e) {
//          console.log("error -" ,e);
//          return "/";
//      }
//  }



 

// btn.addEventListener("click",async() => {
//    let fact = await getFacts();
//    let p =document.querySelector("#result");
//    p.innerText = fact;
// });
  
// let url = "https://catfact.ninja/fact";
// let url2 = "https://dog.ceo/api/breeds/image/random";

// async function getFacts() {
//     try {
//     let res = await axios.get(url);
//     return res.data.fact;
//     } catch (e) {
//         console.log("error -" ,e);
//         return "No fact found";
//     }
// }


// const url ="https://icanhazdadjoke.com/";
 
// async function getJokes() {
//     try {
//         const config = { headers: { Accept: "application/json"} };
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     } catch (err) {
//         console.log(err);
//     }
// }

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click",async () =>{
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    // console.log(colArr);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("error :",e);
        return [];
    }
}