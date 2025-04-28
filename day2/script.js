var _a;
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
//  tuples
var users = [];
// Function to render the list of users
function renderUsers() {
    var userList = document.getElementById("userList");
    if (!userList)
        return;
    userList.innerHTML = ""; // Clear the list
    // Add  user to the list
    users.forEach(function (_a, index) {
        var name = _a[0], age = _a[1], status = _a[2], hobby = _a[3];
        var listItem = document.createElement("li");
        listItem.innerHTML = "\n            <strong>Name:</strong> ".concat(name, ", \n            <strong>Age:</strong> ").concat(age, ", \n            <strong>Status:</strong> ").concat(Status[status], " \n            ").concat(hobby ? "<span>(Hobby: ".concat(hobby, ")</span>") : "", "\n        ");
        userList.appendChild(listItem);
    });
}
//  form submission
(_a = document.getElementById("userForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form values
    var nameInput = document.getElementById("name");
    var name = nameInput.value.trim();
    var age = parseInt(document.getElementById("age").value);
    var status = Status[document.getElementById("status").value];
    var hobby = document.getElementById("hobby").value.trim() || undefined;
    if (!isNaN(Number(name))) {
        alert("Please enter a valid name.");
        nameInput.focus();
        return;
    }
    // Add new user as a tuple
    users.push([name, age, status, hobby]);
    // Clear 
    document.getElementById("userForm").reset();
    // Update the list
    renderUsers();
});
renderUsers();
