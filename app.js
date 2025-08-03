let friends = [];
let friendsList = document.getElementById("listaAmigos");
let sort_friends = document.querySelector(".button-draw");
let result = document.getElementById("resultado");
function addFriends() {
  let input_friends = document.getElementById("input_amigo");
  if (input_friends.value == "") {
    alert("Por favor, insira um nome.");
  } else {
    friends.push(input_friends.value);
    friendsList.innerHTML = friends
      .map(
        (item) => `<li>
        ${item}
        </li>`
      )
      .join("");
    input_friends.value = "";
    result.innerHTML = "";
  }
}

function drawFriend() {
  let indice_sort = parseInt(Math.random() * friends.length);
  result.innerHTML = `<li>
    ${friends[indice_sort]}
  </li>`;
  friendsList.innerHTML = "";
}
