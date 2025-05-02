
interface Vehicle {
  model: string;
  cost: number;

  // //  display vehicle details
  // displayDetails(): void;
}


class Car implements Vehicle {
  model: string;
  cost: number;

  constructor(model: string, cost: number) {
    this.model = model;//converts the vehicle model to car class
    this.cost = cost;
  }

  // // Implementing the displayDetails method from the Vehicle interface
  // displayDetails(): void {
  //   console.log(`Car Model: ${this.model}, Cost: ${this.cost}`);
  // }
}


class CarDeal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class SalesManage extends CarDeal {
  constructor(name: string) {
    super(name); //cardeal
  }

  public calculateTotalCost(cars: Vehicle[]): number {
    return cars.reduce((sum, car) => sum + car.cost, 0);
  }
}

const carModelInput = document.getElementById("car-model") as HTMLInputElement;
const carCostInput = document.getElementById("car-cost") as HTMLInputElement;
const addCarBtn = document.getElementById("add-car-btn")!;
const carTableBody = document.querySelector("#car-table tbody")!;
const calculateBtn = document.getElementById("calculate-btn")!;
const totalCostEl = document.getElementById("total-cost")!;

const cars: Vehicle[] = []; 

// Function to render the table with car details
function renderTable(cars: Vehicle[]): void {
  carTableBody.innerHTML = ""; 
  cars.forEach((car) => {
    const row = document.createElement("tr");

    const modelCell = document.createElement("td");
    modelCell.textContent = car.model;

    const costCell = document.createElement("td");
    costCell.textContent = car.cost.toString();

    row.appendChild(modelCell);
    row.appendChild(costCell);
    carTableBody.appendChild(row);
  });
}

//  adding a new car
addCarBtn.addEventListener("click", (): void => {
  const model = carModelInput.value.trim();
  const cost = parseFloat(carCostInput.value);


  if (!model || isNaN(cost) || cost <= 0) {
    alert("Please enter a valid car model and cost.");
    return;
  }

  
  const newCar = new Car(model, cost);
  cars.push(newCar);


  carModelInput.value = "";
  carCostInput.value = "";


  renderTable(cars);
});


calculateBtn.addEventListener("click", (): void => {
  const salesManage = new SalesManage("ABC Branch");
  const totalCost = salesManage.calculateTotalCost(cars);
  totalCostEl.textContent = totalCost.toString(); // Update the total cost in the DOM
});
