class Food {
  quantity = 0
  constructor(id, name, price, quantity) {
    this.id = id
    this.name = name
    this.price = price
  }
}

class Receipt {
  constructor(price) {
    if (Receipt.instance) {
      return Receipt.instance
    }

    this.price = price
    this.items = []
    this.quantities = []
    Receipt.instance = this
  }
}

class UserList {
  constructor() {
    if (UserList.instance) {
      return UserList.instance
    }
    this.userList = []
    UserList.instance = this
    return this
  }
  addUser(user) {
    this.userList.push(user)
  }
}

class user_info {
  constructor(Fname, Lname, phone) {
    this.Fname = Fname
    this.Lname = Lname
    this.phone = phone
  }
}

const receipt = new Receipt()
const food1 = new Food("food1", "Oven baked salmon", 90)
const food2 = new Food("food2", "Veal fillet", 120)
const food3 = new Food("food3", "Steak entrecote", 125)
const food4 = new Food("food4", "Fried shurmus", 85)
const food5 = new Food("food5", "Cooked calamari shurmus", 90)
const food6 = new Food("food6", "Fattoush", 60)
const food7 = new Food("food7", "One million", 55)
const food8 = new Food("food8", "Watercress", 65)
const food9 = new Food("food9", "Tabouleh", 45)
const food10 = new Food("food10", "White cabbage", 50)

window.meal_list = [
  food1,
  food2,
  food3,
  food4,
  food5,
  food6,
  food7,
  food8,
  food9,
  food10,
]
