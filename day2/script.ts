
enum Status {
    Active,
    Inactive,
    Pending
}

//  tuples
const users: [string, number, Status, string?][] = []; 


// Function to render the list of users
function renderUsers() {
    const userList = document.getElementById("userList");
    if (!userList) return;

    userList.innerHTML = ""; // Clear the list

    // Add  user to the list
    users.forEach(([name, age, status, hobby], index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Name:</strong> ${name}, 
            <strong>Age:</strong> ${age}, 
            <strong>Status:</strong> ${Status[status]} 
            ${hobby ? `<span>(Hobby: ${hobby})</span>` : ""}
        `;
        userList.appendChild(listItem);
    });
}

//  form submission
document.getElementById("userForm")?.addEventListener("submit", event => {
    event.preventDefault();

    // Get form values
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const name = nameInput.value.trim();
    const age = parseInt((document.getElementById("age") as HTMLInputElement).value);
    const status = Status[(document.getElementById("status") as HTMLSelectElement).value as keyof typeof Status];
    const hobby = (document.getElementById("hobby") as HTMLInputElement).value.trim() || undefined;

   
    if (!isNaN(Number(name))) {
        alert("Please enter a valid name.");
        nameInput.focus();
        return;
    }

    // Add new user as a tuple
    users.push([name, age, status, hobby]);

    // Clear 
    (document.getElementById("userForm") as HTMLFormElement).reset();

    // Update the list
    renderUsers();
});


renderUsers();