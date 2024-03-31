function verifyOrder() {
  // Foods selected

  for (var i = 1; i <= 10; i++) {
    
    var foodCheckbox = document.getElementById("food" + i)
   
    var foodQuantityInput = document.getElementById("food" + i + "_q")

    // Check if the checkbox and quantity input elements exist
    if (foodCheckbox && foodQuantityInput) {
      // Create individual variables for each checked status and quantity
      window["food" + i] = foodCheckbox.checked
      window["food" + i + "_q"] = foodQuantityInput.value
    }
  }

  //alert massage when a input is invalid
  // Variable to track if at least one item is selected
  var atLeastOneSelected = false

  // Loop through each food element
  for (var i = 1; i <= 10; i++) {
    // Get the checkbox element
    var foodCheckbox = document.getElementById("food" + i)
    // Get the quantity input element
    var foodQuantityInput = document.getElementById("food" + i + "_q")

    // Check if the checkbox and quantity input elements exist
    if (foodCheckbox && foodQuantityInput) {
      // Check if the food is selected
      if (foodCheckbox.checked) {
        atLeastOneSelected = true
      }

      // Check if the quantity is negative or zero for the selected food
      if (foodCheckbox.checked && parseInt(foodQuantityInput.value) <= 0) {
        alert(
          "The NEGATIVE or ZERO amount is not valid for selected items. Please remove the selection or change the quantity to a POSITIVE number."
        )
        break // Exit the loop if invalid quantity found
      }
    }
  }

  // Check if at least one item is selected
  if (!atLeastOneSelected) {
    alert("Please select at least one item.")
  } else {
    var price
    var sum = 0

    //gen order number
    var orderNumber = generateRandomInt(1, 1000)

    var all = constructOrder(meal_list)

    document.location.href = "projectOrder.html"
  }
}

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
    !regex.test(LastName) ||
    !regex1.test(phone)
  ) {
    alert("please enter Valid data")
  } else {
    save_user_info(FirstName, LastName, phone)
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

// Function to prompt user for input until a 10-digit number is entered
function promptForNumber() {
  var cur_input = document.getElementById("phoneNumber")
  cur_input.addEventListener("input", () => {
    if (parseInt(cur_input.value.length) != 10) {
      document.getElementById("printmsg").innerText =
        "*Enter a 10 digit number!*"

      console.log("you didnt enter 10 digits")
    } else {
      document.getElementById("printmsg").innerText = ""
      console.log("Nice")
    }
  })
}
