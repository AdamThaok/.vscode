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
function constructOrder(meal_list) {
  {
    var sum = 0
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

  make_receipt(sum, meal_list) //
}
//this function to send the order that the user has ordered in email to the chef
function sendGmail() {
  var email = "adamm3002@gmail.com"
  var subject = "NewOrder"
  var price = localStorage.getItem("price")

  var order_from_db = localStorage.getItem("order")
  /*
  const order_det = clean.replace(/[{}[\]"]/g, "")
*/
  var order_obj = str_to_obj(order_from_db)
  var order_to_print = print_inmail(order_obj)

  var body =
    "Name: " +
    document.getElementById("fname").value +
    " " +
    document.getElementById("lname").value +
    "\nPhone Number: " +
    document.getElementById("phoneNumber").value +
    "\nDetails: " +
    order_to_print +
    "\nTotal price: " +
    order_obj.prices +
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

function make_receipt(sum, meal_list) {
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

function clear_order() {
  localStorage.clear()
}
//turn string to object using JS parse function
function str_to_obj(order) {
  order_str = localStorage.getItem("order")
  order_obj = JSON.parse(order_str)
  return order_obj
}
//recive an object of order and makes it as a string that we can print in mail
function print_inmail(order_obj) {
  var order_str = ""
  for (let i = 0; i < order_obj.items.length; i++) {
    order_str =
      order_str + order_obj.items[i] + " " + order_obj.quantity[i] + ", "
  }
  order_str = order_str.slice(0, -2)
  order_str = order_str + "."
  return order_str
}

function save_user_info(Fname, Lname, phone) {
  // Retrieve the current user information from the database

  const user_list = new UserList()

  //for the first time
  const userList_str = getCurrentUserInfoFromDatabase()
  if (userList_str.length != 0) {
    user_list.addUser(userList_str)
  }

  // Create a new user instance
  const user = new user_info(Fname, Lname, phone)
  user_info_str = JSON.stringify(user)
  // Add the new user to the current user list
  user_list.addUser(user)
  // Update the database with the updated user list
  updateUserInfoInDatabase(userList_str, user_info_str)
}

function getCurrentUserInfoFromDatabase() {
  const inputString = localStorage.getItem("userList")
  if (inputString != null) {
    var prefix = '{"userList":"'
    return inputString.startsWith(prefix)
      ? inputString.substring(prefix.length)
      : inputString
  } else {
    return []
  }
}

function updateUserInfoInDatabase(userList_str, user_info_str) {
  userList_str = userList_str + user_info_str
  localStorage.setItem("userList", userList_str) // Access userList property
}
