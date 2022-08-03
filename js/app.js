
// function success_function(response){

//     for(let i = 0; i < response[`data`][`meals`].length; i++){
//         box[`innerHTML`] += `<h1> Below is the Random meal</h1>`;
//       box[`innerHTML`] += `<h2 id="place">This is ${response[`data`][`meals`][i][`strArea`]} dish</h1>`;
//       box[`innerHTML`] += `<p id="name">The name of the dish is ${response[`data`][`meals`][i][`strMeal`]}</p>`;
//       box[`innerHTML`] += `<h2 id="heading_instructions"> Step by step instructions to make ${response[`data`][`meals`][i][`strMeal`]}</h2>`;
//       box[`innerHTML`] += `<blockquote id="instruction"> <h3>${response[`data`][`meals`][i][`strInstructions`]}</h3></blockquote>`;

//     }
// }
// function failure_function(error){
// box[`innerHTML`] = `<p>here is some error in getting information try again </p>`;
// }
// axios.request({
//     url: `https://www.themealdb.com/api/json/v1/1/random.php`
// }).then(success_function).catch(failure_function)

function success_categories(response) {
    for (let i = 0; i < response[`data`][`meals`].length; i++) {
        box_category[`innerHTML`] += `<button class="item" id="button_${response[`data`][`meals`][i][`strCategory`]}">${response[`data`][`meals`][i][`strCategory`]}</button`;
    }

}
function failure_categories(error) {
    box_category[`innerHTML`] = `<p>here is some error in getting information try again </p>`;
}
axios.request({
    url: `https://www.themealdb.com/api/json/v1/1/list.php`,
    params: {
        c: `list`
    }
}).then(success_categories).catch(failure_categories);


function success_items(response) {

}
function failure_items(error) {
    box_items[`innerHTML`] = `<h2>An error occurred</h2>`;
}
function get_items(details) {
    axios.request({
        url: `https://themealdb.com/api/json/v1/1/random.php`
    }).then(success_items).catch(failure_items);
}

let item = document.getElementsByClassName(`item`);
for (let i = 0; i < item.length; i++) {
item[i].addEventListener(`click`,get_items);
}
let box_category = document.getElementById(`box_categories`);
let box_items = document.getElementById(`box_items`);



