/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let item_obj = {}; // an object containing { category : totalSpent }.
  for (const obj of transactions) {
    if (!(Object.hasOwn(item_obj,obj['category']))){
      item_obj[obj['category']] = 0;
    }
  }
  for (const obj of transactions) {
    item_obj[obj['category']] += obj['price']
  }
  // converting our item_obj into required output structure.
  const result = [];
  const categoryKeys = Object.keys(item_obj);

  for (const key of categoryKeys) {
    let ex = {
      category: key,
      totalSpent: item_obj[key],
    };
    result.push(ex);
  }

  return result;
}


module.exports = calculateTotalSpentByCategory;
