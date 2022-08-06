
function success_categories(response) {
    for (let i = 0; i < response[`data`][`meals`].length; i++) {
        box_category[`innerHTML`] += `<button class="item" id="button_${response[`data`][`meals`][i][`strArea`]}">${response[`data`][`meals`][i][`strArea`]}</button`;
    }
}
function failure_categories(error) {
    box_category[`innerHTML`] = `<p>here is some error in getting information try again </p>`;
}
axios.request({
    url: `https://www.themealdb.com/api/json/v1/1/list.php`,
    params: {
        a: `list`
    }
}).then(success_categories).catch(failure_categories);

function success_items(response) {
    box_item[`innerHTML`] = ``;
    for (let i = 0; i < response[`data`][`meals`].length; i++) {
        box_item[`innerHTML`] += `<div>${response[`data`][`meals`][i][`strMeal`]}</div>`;
    }
}
function failure_items(error) {
    box_item[`innerHTML`] = `<h2>An error occurred</h2>`;
}
function get_items(details) {
    let value_c = details[`target`][`innerHTML`];
    axios.request({
        url: `https://www.themealdb.com/api/json/v1/1/filter.php`,
        params: {
            a: value_c
        }
    }).then(success_items).catch(failure_items);
}



function success_id(response) {
    let obj = response[`data`][`meals`][0];
    box_item[`innerHTML`] = ``;
    box_item[`innerHTML`] = `<div class="ingredient">
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient1`]}.png"/> 
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient2`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient3`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient4`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient5`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient6`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient7`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient8`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient9`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient10`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient11`]}.png"/> 
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient12`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient13`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient14`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient15`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient16`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient17`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient18`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient19`]}.png"/>
<img class="ingredient_image" src="https://www.themealdb.com/images/ingredients/${obj[`strIngredient20`]}.png"/>
</div>`;
}

function failed_id(error) {
    box_item[`innerHTML`] += `there is some error in the process`;
}

function success_details(response) {
    let id_value;
    for (let i = 0; i < response[`data`][`meals`].length; i++) {
        id_value = response[`data`][`meals`][i][`idMeal`];
        axios.request({
            url: `https://www.themealdb.com/api/json/v1/1/lookup.php`,
            params: {
                i: id_value
            }
        }).then(success_id).then(failed_id);
    }
}
function failure_details(error) {
    box_item[`innerHTML`] = `There is an error in getting details of meals`;
}
function get_details(details) {
    if (details[`target`] !== details[`currentTarget`]) {
        let name_value = details[`target`][`innerHTML`];
        axios.request({
            url: `https://www.themealdb.com/api/json/v1/1/search.php`,
            params: {
                s: name_value
            }
        }).then(success_details).catch(failure_details);
    }
}


let box_category = document.getElementById(`box_categories`);
box_category.addEventListener(`click`, get_items);

let box_item = document.getElementById(`box_items`);
box_item.addEventListener(`click`, get_details);