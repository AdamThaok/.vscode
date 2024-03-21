//Data access tier

function save_info() {
  var fname = document.getElementById("fname").value
  var lname = document.getElementById("lname").value
  var phoneNumber = document.getElementById("phoneNumber").value
  var msg = document.getElementById("msg").value
  var order = localStorage.getItem("orderNumber") //change key to order after this line
  var dbStr = stringify(fname, lname, phoneNumber, msg, order)
  localStorage.setItem("orderNumber", dbStr)
}

//save order and amount as a string
function constructOrder() {
  {
    var order = ""
    var sum = 0
    // Define an array to store your Food objects

    // Iterate over the foods array
    for (let i = 0; i < meal_list.length; i++) {
      if (document.getElementById(`food${i + 1}`).checked) {
        meal_list[i].quantity =
          document.getElementById(`food${i + 1}_q`).value || 0
        sum += meal_list[i].quantity * meal_list[i].price
      }
    }
  }

  // Define an array to store your Salad objects

  make_receipt(sum) //
}
//this function to send the order that the user has ordered in email to the chef
function sendGmail() {
  var email = "adamm3002@gmail.com"
  var subject = "NewOrder"
  var price = localStorage.getItem("price")
  var clean = localStorage.getItem("order")

  const order_det = clean.replace(/[{}[\]"]/g, "")

  var body =
    "Name: " +
    document.getElementById("fname").value +
    " " +
    document.getElementById("lname").value +
    "\nPhone Number:" +
    document.getElementById("phoneNumber").value +
    "\nDetails: " +
    order_det +
    "\nTotal cost: " +
    price +
    " NS" +
    "\nNotes: " +
    document.getElementById("msg").value
  // Construct the mailto link
  var mailtoLink =
    "mailto:" +
    email +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body)
  // Open the default email client to send the email
  window.location.href = mailtoLink //redirect to mail
  document.location.href = "done.html" //redirect to done.html
}

function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function stringify(fname, lname, phoneNumber, msg, order) {
  var nameStr = "name: " + fname
  var lastNameStr = "lastName: " + lname
  var phoneNumberStr = "phone Number: " + phoneNumber
  var msgStr = "massage: " + msg
  var orderStr = "order: " + order
  var dbStr =
    "{" +
    nameStr +
    "," +
    lastNameStr +
    "," +
    phoneNumberStr +
    "," +
    msgStr +
    "," +
    orderStr +
    "}"
  return dbStr
}

function make_receipt(sum, food_name_list) {
  const order = []
  const quantity = []
  for (let i = 0; i < meal_list.length; i++) {
    if (document.getElementById(`food${i + 1}`).checked) {
      //push to order if quianty is  not zero
      order.push(meal_list[i].name) //local order
      quantity.push(meal_list[i].quantity) //local array
    }
  }

  receipt.items = order
  receipt.quantity = quantity
  receipt.prices = sum
  localStorage.setItem("order", JSON.stringify(receipt))
}
kjhk
