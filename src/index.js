import './style.css';
import './style.scss';
import 'bootstrap';

const toDolist = document.getElementById('toDoList');
const addBtn = document.getElementById('addBtn');
const inputs = document.getElementsByClassName('forminput');
let listArray = [
  {
    description: 'AddList',
    completed: false,
    index: 1,
  },
  {
    description: 'RemoveList',
    completed: true,
    index: 2,
  },
  {
    description: 'ClearAllList',
    completed: false,
    index: 3,
  },
  {
    description: 'reunServer',
    completed: true,
    index: 4,
  },
];

function addList() {
  const listarr = {
    name: toDolist.value,
  };
  listArray.push(listarr);
}

function displayData() {
  let trs = '';
  for (let i = 0; i < listArray.length; i += 1) {
    trs += `<tr>
     <td><input type="checkbox"></td>
    <td class="float-left">${listArray[i].name}</td>
    <td><button onclick="deleteList(${i})" class="float-right mt-lg-1"><i class="fa fa-ellipsis-v"></i></button></td>
    </tr>`;
  }
  document.getElementById('tableBody').innerHTML = trs;
}
function clearForm() {
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].value = '';
  }
}

addBtn.onclick = () => {
  addList();
  displayData();
  clearForm();
};

function deleteList(...index) {
  listArray.splice(...index, 1);
  localStorage.setItem('toDolist', JSON.stringify(listArray));
  displayData();
}
deleteList();

if (JSON.parse(localStorage.getItem('toDolist')) != null) {
  listArray = JSON.parse(localStorage.getItem('toDolist'));
  displayData();
}
