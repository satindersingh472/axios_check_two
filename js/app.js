function success_function(response){

    for(let i = 0; i < response[`data`][`meals`].length; i++){
        box[`innerHTML`] += `<h1> Below is the Random meal</h1>`;
      box[`innerHTML`] += `<h2 id="place">This is ${response[`data`][`meals`][i][`strArea`]} dish</h1>`;
      box[`innerHTML`] += `<p id="name">The name of the dish is ${response[`data`][`meals`][i][`strMeal`]}</p>`;
      box[`innerHTML`] += `<h2 id="heading_instructions"> Step by step instructions to make ${response[`data`][`meals`][i][`strMeal`]}</h2>`;
      box[`innerHTML`] += `<blockquote id="instruction"> <h3>${response[`data`][`meals`][i][`strInstructions`]}</h3></blockquote>`;

    }
}
function failure_function(error){
box[`innerHTML`] = `<p>here is some error in getting photos try again </p>`;
}
axios.request({
    url: `https://www.themealdb.com/api/json/v1/1/random.php`
}).then(success_function).catch(failure_function);

let box= document.getElementById(`box`);