var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CarDeal = /** @class */ (function () {
    function CarDeal(name) {
        this.name = name;
    }
    return CarDeal;
}());
var SalesManage = /** @class */ (function (_super) {
    __extends(SalesManage, _super);
    // protected position: string; 
    function SalesManage(name, position) {
        return _super.call(this, name) || this;
        // this.position = position;
    }
    SalesManage.prototype.calculateTotalCost = function (cars) {
        return cars.reduce(function (sum, car) { return sum + car.cost; }, 0);
    };
    return SalesManage;
}(CarDeal));
// DOM Elements
var carModelInput = document.getElementById("car-model");
var carCostInput = document.getElementById("car-cost");
var addCarBtn = document.getElementById("add-car-btn");
var carTableBody = document.querySelector("#car-table tbody");
var calculateBtn = document.getElementById("calculate-btn");
var totalCostEl = document.getElementById("total-cost");
var cars = [];
// Function to render the table
function renderTable(cars) {
    carTableBody.innerHTML = ""; // Clear the table before rendering
    cars.forEach(function (car) {
        var row = document.createElement("tr");
        var modelCell = document.createElement("td");
        modelCell.textContent = car.model;
        var costCell = document.createElement("td");
        costCell.textContent = car.cost.toString();
        row.appendChild(modelCell);
        row.appendChild(costCell);
        carTableBody.appendChild(row);
    });
}
// Event listener for adding a new car
addCarBtn.addEventListener("click", function () {
    var model = carModelInput.value.trim();
    var cost = parseFloat(carCostInput.value);
    // Validate input
    if (!model || isNaN(cost) || cost <= 0) {
        alert("Please enter a valid car model and cost.");
        return;
    }
    // Add new car to the array
    cars.push({ model: model, cost: cost });
    // Clear input fields
    carModelInput.value = "";
    carCostInput.value = "";
    // Re-render the table
    renderTable(cars);
});
// Event listener for calculating the total cost
calculateBtn.addEventListener("click", function () {
    var salesManage = new SalesManage("John Doe", "Sales Manager");
    var totalCost = salesManage.calculateTotalCost(cars); // Calculate the total cost
    totalCostEl.textContent = totalCost.toString(); // Update the total cost in the DOM
});
