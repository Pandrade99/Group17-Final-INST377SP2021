document.addEventListener('DOMContentLoaded', () => {
  console.log('Yay HTML is connecting to script');
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    console.log('form was submitted!');
  });
});
//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {
//     // Add a click event on each of them
//     $navbarBurgers.forEach((el) => {
//       el.addEventListener('click', () => {
//         // Get the target from the "data-target" attribute
//         const {target} = el.dataset;
//         const $target = document.getElementById(target);

//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         el.classList.toggle('is-active');
//         $target.classList.toggle('is-active');
//       });
//     });
//   }
// });

// const app = new (function () {
//   this.el = document.getElementById('tasks');

//   this.tasks = [];

//   this.FetchAll = function () {
//     let data = '';

//     if (this.tasks.length > 0) {
//       for (i = 0; i < this.tasks.length; i++) {
//         data += '<tr>';
//         data += `<td>${i + 1}. ${this.tasks[i]}</td>`;
//         data
//           += `<td><button onclick="app.Edit(${
//             i
//           })"  class="btn btn-warning">Edit</button></td>`;
//         data
//           += `<td><button onclick="app.Delete(${
//             i
//           })"  class="btn btn-danger">Delete</button></td>`;
//         data += '</tr>';
//       }
//     }

//     this.Count(this.tasks.length);
//     return (this.el.innerHTML = data);
//   };

//   this.Add = function () {
//     el = document.getElementById('add-todo');
//     // Get the value
//     const task = el.value;

//     if (task) {
//       // Add the new value
//       this.tasks.push(task.trim());
//       // Reset input value
//       el.value = '';
//       // Dislay the new list
//       this.FetchAll();
//     }
//   };
//   this.Edit = function (item) {
//     const el = document.getElementById('edit-todo');
//     // Display value in the field
//     el.value = this.tasks[item];
//     // Display fields
//     document.getElementById('edit-box').style.display = 'block';
//     self = this;

//     document.getElementById('save-edit').onsubmit = function () {
//       // Get value
//       const task = el.value;

//       if (task) {
//         // Edit value
//         self.tasks.splice(item, 1, task.trim());
//         // Display the new list
//         self.FetchAll();
//         // Hide fields
//         CloseInput();
//       }
//     };
//   };

//   this.Delete = function (item) {
//     // Delete the current row
//     this.tasks.splice(item, 1);
//     // Display the new list
//     this.FetchAll();
//   };

//   this.Count = function (data) {
//     const el = document.getElementById('counter');
//     let name = 'Tasks';

//     if (data) {
//       if (data == 1) {
//         name = 'Task';
//       }
//       el.innerHTML = `${data} ${name}`;
//     } else {
//       el.innerHTML = `No ${name}`;
//     }
//   };
// })();

// app.FetchAll();

// function CloseInput() {
//   document.getElementById('edit-box').style.display = 'none';