function verifyOrder() {
  localStorage.clear()

  // Foods selected
  var food1 = document.getElementById("food1").checked
  var food2 = document.getElementById("food2").checked
  var food3 = document.getElementById("food3").checked
  var food4 = document.getElementById("food4").checked
  var food5 = document.getElementById("food5").checked
  var food6 = document.getElementById("food6").checked
  var food7 = document.getElementById("food7").checked
  var food8 = document.getElementById("food8").checked
  var food9 = document.getElementById("food9").checked
  var food10 = document.getElementById("food10").checked

  // Amount of food
  var food1_q = document.getElementById("food1_q").value
  var food2_q = document.getElementById("food2_q").value
  var food3_q = document.getElementById("food3_q").value
  var food4_q = document.getElementById("food4_q").value
  var food5_q = document.getElementById("food5_q").value
  var food6_q = document.getElementById("food6_q").value
  var food7_q = document.getElementById("food7_q").value
  var food8_q = document.getElementById("food8_q").value
  var food9_q = document.getElementById("food9_q").value
  var food10_q = document.getElementById("food10_q").value

  //alert massage when a input is invalid
  if (
    !(
      food1 ||
      food2 ||
      food3 ||
      food4 ||
      food5 ||
      food6 ||
      food7 ||
      food8 ||
      food9 ||
      food10
    )
  )
    alert("Please select at least one item.")
  else if (
    (food1_q < 1) & food1 ||
    (food2_q < 1) & food2 ||
    (food3_q < 1) & food3 ||
    (food4_q < 1) & food4 ||
    (food5_q < 1) & food5 ||
    (food6_q < 1) & food6 ||
    (food7_q < 1) & food7 ||
    (food8_q < 1) & food8 ||
    (food9_q < 1) & food9 ||
    (food10_q < 1) & food10
  )
    alert(
      "the NEGATIVE or ZERO amount is not valid,remove the select or change the value of amount to POSITIVE number"
    )
  else {
    var price
    var sum = 0
    //gen order number
    var orderNumber = generateRandomInt(1, 1000)
    //save order and amount in a string

    var all = constructOrder()
    /*
    order = all[0]
    sum = all[1]
    //save order in database
    localStorage.setItem("order", order)
    localStorage.setItem("orderNumber", order) //needs to go in database folder
    localStorage.setItem("price", sum)
    */
    document.location.href = "projectOrder.html"
  }
}
//random number gen

// check the output in page 2
function verifyData() {
  var FirstName = document.getElementById("fname").value
  var LastName = document.getElementById("lname").value
  var phone = document.getElementById("phoneNumber").value
  var regex = /^[a-zA-Z]+$/ //regex to test if input type of name is valid
  var regex1 = /^\d{10}$/
  if (
    !FirstName ||
    !LastName ||
    !phone ||
    !regex.test(FirstName) ||
    !regex.test(FirstName) ||
    !regex1.test(phone)
  ) {
    alert("please enter Valid data")
  } else {
    // Play audio
    var audio = document.getElementById("audioPlayer")
    audio.play()
    setTimeout(function () {
      // Execute save_info() and sendGmail() after the delay
      save_info()
      sendGmail()
      // Open a new page after the delay
      window.location.href = "done.html"
    }, 3000)
  }
}

function game() {
  document.location.href = "game.html"
}