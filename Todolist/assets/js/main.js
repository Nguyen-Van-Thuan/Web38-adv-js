/*
 - LocalStorage bao gom 2 phan: 
   + key: Do minh dat;
   + Value: Gia tri cua thong tin minh muon luu vao

  - Khai bao 1 gia tri localStorage cu phap:
    localStorage.setItem("KEY", "Value");

  - Lay 1 gia tu localStorage de su dung:
   localStorage.getItem("KEY");

   - Xoa 1 gia tri localStorage
    localStorage.removeItem("KEY");

  - Xoa nhieu gia tri localStorage
  localStorage.clear();

*/

// Khai bao 1 localStorage co gia tri web38
// localStorage.setItem("CLASS", "Web38");

// Lay gia tri localStorage voi Key "CLASS"
// let CLASS = localStorage.getItem("CLASS");


// Xoa 1 gia tri localStorage voi Key "CLASS"
// localStorage.removeItem("CLASS");



/*
  Thuc hanh ung dung Todolist
  - Database minh can luu tru no nhu nao ?
    [
      {
        "name": "Cong viec 1",
        "completed": "Hoan thanh"
      },
      {
        "name": "Cong viec 2",
        "completed": "chua hoan thanh"
      }
    ]
*/

// B1: Truy cap phan tu
let formElement = document.querySelector("#form");
let inputElement = document.querySelector("#input");
let ulElement = document.querySelector("#todos");

// B2: Thiet ke DB && Thuc hien chuong trinh -- Mockup
// let DB = [
//   {
//     "name": "Cong viec 1",
//     "completed": "Hoan thanh"
//   },
//   {
//     "name": "Cong viec 2",
//     "completed": "chua hoan thanh"
//   }
// ];

// Luu vao localStorage
// localStorage.setItem("TASK", JSON.stringify(DB));


// B3: Hien thi du lieu ra Giao dien nguoi dung

// B3.1: Get du lieu tu Database
let listTodo = JSON.parse(localStorage.getItem("TASK"));

// B3.2: Kiem tra listTodo ton tai hay khong

let updateStorage = () => {
  console.log("update");
}

let showTodo = (list) => {

  let nameTodo = inputElement.value; //value no cu phap

  if (list) {
    nameTodo = list.name; //in ra ten cong viec
  }

  if (nameTodo) {
    let liElement = document.createElement("li"); //<li></li>
    liElement.innerHTML = nameTodo; //gan li vs ten cong viec
    ulElement.appendChild(liElement); //in ra

    inputElement.value = '';

    updateStorage();

  }


}

// B3.2.1: ton ai
if (listTodo) {
  listTodo.forEach((value, index) => {
    showTodo(value);
  });
}

// B3.2.2: Khong ton tai
formElement.addEventListener('submit', (e) => {
  e.preventDefault(); //default

  showTodo();
});


