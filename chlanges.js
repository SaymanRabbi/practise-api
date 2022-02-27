// ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।
//task one
const person = {
    name: "KeepRolling",
    age: 23,
    major: "Math",
    bestFriend: {
        name: "Rock",
        age: 23,
        major: "Math"
    },
    bikes: ['Honda', 'Discover', 'FZ-5'],
    method: function () {
        return this.name;
    }
}
// console.log(person.method())

// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।
// task tow
const template = `This is String and value form ${person.name} his age ${person.age} like to ${person.bikes[1]}`;
// console.log(template);

// শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 
// task there
const arrow = () => 89;
// console.log(arrow());

// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 
// task four
const division = (number) => number / 7;
// console.log(division(70))

// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।
// task five
const towPera = (x, y) => (x + y) / 2;
// console.log(towPera(2, 5));

// ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
// task six
const num = [1, 22, 33, 421, 123, 445, 67];
const returnNum = num.map(x => (x / 7).toFixed(2));
// console.log(returnNum);

// ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।
// task seven
/* array.map = this method works  loop all element in array and return value in array;
array.forEach = this method same ass array.map but nothing return anything;
array.filter = this method loop in array elemnt and find what element true as condition and return just this element;
array.find = this method loop in array elemnt and find what element true as condition and return just first true element; 
*/

// সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
// task eight
const obj = {
    name: "KeepRolling",
    job: "Teacher",
    age:23
}
const { name, age } = obj;
// console.log(name, age);
const [,personName] = [ 23,"KeepRolling", "Discover"] 
// console.log(personName);

// ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।
// task nine
// const url = `https://jsonplaceholder.typicode.com/photos`;
// const loadData = () => {
//     fetch(url)
//         .then(res => res.json())
//     .then(data => showData(data.slice(0,20)))
// }
// loadData();
// const showData = (data) => {
//     console.log(data)
//     const container = document.getElementById('Container')
//     data.forEach(x => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//             <div class="col">
//               <div class="card h-100">
//                 <img src="${x.url}" class="card-img-top" alt="">
//                 <div class="card-body">
//                   <h5 class="card-title">${x.title}</h5>
//                   <button class = "btn btn-danger" onclick="detail('${x.id}')">Show Details </button>
//                 </div>
                
//               </div>
//             </div>
//         `
//         container.appendChild(div);
//     })
// }

// ৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে।
// task ten
// const detail = (details) => {
//     const url = `https://jsonplaceholder.typicode.com/photos/${details}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => popupDetail(data));
// }
// const popupDetail = (popup) => {
//     const popupContainer = document.getElementById('popup');
//     popupContainer.innerHTML = `
//            <div class="card mx-auto" style="width: 18rem;">
//             <img src="${popup.url}" class="card-img-top" alt="">
//             <div class="card-body">
//               <h5 class="card-title">${popup.title}</h5>
//               </div>
//               </div>
//     `
// }

// ৯. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা।
// task eleven (solved)

// হয় মডিউল ৩৩ ভালো করে দেখে ফেলো। বিশেষ করে the meal db রিলেটেড ৩৩-৫ থেকে ৩৩-৮ পর্যন্ত। তারপরে আরো সময় থাকলে এর আরেকটা খালতো ভাই the coktaildb থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে।
// task twelve

const Input = document.getElementById('Input');
document.getElementById('basic-addon').addEventListener('click', () => {
    const inputText = Input.value;
    Input.value = '';
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`;
    fetch(url)
        .then(res => res.json())
    .then(data => showData(data.drinks))
}) 
const showData = (datas) => {
    datas.forEach(x => {
        const Parent = document.getElementById('Parent')
        const div = document.createElement('div');
        div.className = 'col';
        div.innerHTML = `<div class="card h-100">
        <img src="${x.strDrinkThumb}" class="card-img-top" alt="">
        <div class="card-body">
         <h5 class="card-title">${x.strCategory}</h5>
         <button class = "btn btn-danger" onclick="popup('${x.idDrink}')">Show Details</button>
        </div>
        </div>`
        Parent.appendChild(div);
      })  
}
const popup = async(popupData) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${popupData}`;
    const res = await fetch(url);
    const data = await res.json();
    popUpShow(data)
}

const popUpShow = (popup) => {
    const popupChild = document.getElementById('popup-container');
      popupChild.innerHTML = `
             <div class="popup-child justify-content-center align-items-center d-flex w-100 h-100" id = 'popup-child'>
             <div class="card mb-3 w-50 position-relative">
             <button class = "custom" id="close">X</button>
             <div class="row g-0">
               <div class="col-md-6">
                 <img src="${popup.drinks[0].strDrinkThumb}" class="img-fluid rounded-start" alt="">
               </div>
               <div class="col-md-6 py-2">
                 <div class="card-body">
                 <button class ="btn btn-danger mb-3">HOT</button>
                   <h5 class="card-title text-danger fw-bold">CockTale Name:${popup.drinks[0].strCategory}</h5>
                   <h5 class="card-title">CockTale Sub Name:${popup.drinks[0].strAlcoholic}</h5>
                   <p class="card-text">${popup.drinks[0].strInstructionsIT}</p>
                   <span>STRNG : ${popup.drinks[0].strIngredient1} </span>
                   <span> ${popup.drinks[0].strIngredient2} </span>
                   <span> ${popup.drinks[0].strIngredient3} </span>
                   <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                 </div>
               </div>
             </div>
           </div>
      </div>
    
    ` 
    document.getElementById('popup-container').style.display = 'block'
    document.getElementById('close').addEventListener('click', () => {
        document.getElementById('popup-container').style.display = 'none'
    })
}

