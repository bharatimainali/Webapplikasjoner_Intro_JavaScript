const users = [
    { name: "Mainali", age: 25 },
    { name: "Bharati", age: 27 }
  ];
  
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const filterButton = document.getElementById("filter");
  const userListElement = document.getElementById("users");
  
  nameInput.addEventListener("keyup", () => {
    const searchQuery = nameInput.value.toLowerCase();
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery)
    );
    displayUsers(filteredUsers);
  });
  
  filterButton.addEventListener("click", () => {
    const minAge = parseInt(ageInput.value);
    const filteredUsers = users.filter((user) => user.age >= minAge);
    displayUsers(filteredUsers);
  });
  
  function displayUsers(userList) {
    userListElement.innerHTML = "";
    for (const user of userList) {
      const userItem = `<li>${user.name}, ${user.age}</li>`;
      userListElement.innerHTML += userItem;
    }
  }
  