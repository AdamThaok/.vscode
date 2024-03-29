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

//singleton class to save all users info in the same object
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

class Semaphore {
  constructor(initialCount) {
    this.count = initialCount
    this.waitingList = []
  }

  acquire() {
    return new Promise((resolve, reject) => {
      if (this.count > 0) {
        this.count--
        resolve()
      } else {
        this.waitingList.push(resolve)
      }
    })
  }

  release() {
    this.count++
    const nextProcess = this.waitingList.shift()
    if (nextProcess) {
      nextProcess()
    }
  }
}
class ChefPool {
  constructor() {
    this.available = true // Indicates whether the chef is available
  }

  async assignChef() {
    if (!this.available) {
      throw new Error("Chef is busy")
    }

    this.available = false // Mark the chef as busy
  }

  releaseChef() {
    this.available = true // Mark the chef as available
  }
}

class Restaurant {
  constructor() {
    this.numTables = 3 // Maximum number of tables
    this.tableSemaphores = Array.from(
      { length: this.numTables },
      () => new Semaphore(1)
    )
  }

  async makeReservation() {
    const availableTables = []
    for (let i = 0; i < this.numTables; i++) {
      if (
        await this.tableSemaphores[i]
          .acquire()
          .then(() => true)
          .catch(() => false)
      ) {
        availableTables.push(i)
      }
    }

    if (availableTables.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableTables.length)
      const tableNumber = availableTables[randomIndex]
      console.log(`Table ${tableNumber + 1} reserved successfully.`)
    } else {
      console.log("Sorry, no tables are available at the moment.")
    }
  }

  releaseTable() {
    let assignedTable = -1
    for (let i = 0; i < this.numTables; i++) {
      if (this.tableSemaphores[i].count === 0) {
        assignedTable = i
        break
      }
    }

    if (assignedTable !== -1) {
      this.tableSemaphores[assignedTable].release()
      alert(`You have been released from Table ${assignedTable + 1}.`)
    } else {
      alert("You are not currently assigned to any table.")
    }
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
