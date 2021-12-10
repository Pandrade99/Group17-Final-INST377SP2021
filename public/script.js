// nav bar******************************************************************
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const { target } = el.dataset;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// form javascript******************************************************************
/* var app = new (function () {
  this.el = document.getElementById("tasks");

  this.tasks = [];

  this.FetchAll = function () {
    var data = "";

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += "<tr>";
        data += "<td>" + (i + 1) + ". " + this.tasks[i] + "</td>";
        data +=
          '<td><button onclick="app.Edit(' +
          i +
          ')"  class="btn btn-warning">Edit</button></td>';
        data +=
          '<td><button onclick="app.Delete(' +
          i +
          ')"  class="btn btn-danger">Delete</button></td>';
        data += "</tr>";
      }
    }

    this.Count(this.tasks.length);
    return (this.el.innerHTML = data);
  };

  this.Add = function () {
    el = document.getElementById("add-todo");
    // Get the value
    var task = el.value;

    if (task) {
      // Add the new value
      this.tasks.push(task.trim());
      // Reset input value
      el.value = "";
      // Dislay the new list
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var el = document.getElementById("edit-todo");
    // Display value in the field
    el.value = this.tasks[item];
    // Display fields
    document.getElementById("edit-box").style.display = "block";
    self = this;

    document.getElementById("save-edit").onsubmit = function () {
      // Get value
      var task = el.value;

      if (task) {
        // Edit value
        self.tasks.splice(item, 1, task.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    };
  };

  this.Delete = function (item) {
    // Delete the current row
    this.tasks.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };

  this.Count = function (data) {
    var el = document.getElementById("counter");
    var name = "Tasks";

    if (data) {
      if (data == 1) {
        name = "Task";
      }
      el.innerHTML = data + " " + name;
    } else {
      el.innerHTML = "No " + name;
    }
  };
})();

app.FetchAll();

function CloseInput() {
  document.getElementById("edit-box").style.display = "none";
} */

// display data******************************************************************
async function biomeFunction() {
  const biome = await fetch('./api/biome').then((response) => response.json());
  // console.log(biome);
  document.querySelector('.biomeData').innerHTML = `<table>
<tr><th>biome_id</th><th>biome</th><th>continent</th></tr> 

${biome.data
    .map(
      (elmt) => `<tr>
<td>${JSON.stringify(elmt.biome_id)}</td> 
<td>${JSON.stringify(elmt.Biome)}</td> 
<td>${JSON.stringify(elmt.Continent)}</td>
</tr>`
    )
    .join('')} 
  

</table>`;
}
biomeFunction();

async function lifestyleFunction() {
  const lifestyle = await fetch('./api/lifestyle').then((response) => response.json());
  // console.log(lifestyle);
  document.querySelector('.lifestyleData').innerHTML = `<table>
<tr><th>lifestyle_id</th><th>diet</th><th>pack</th></tr> 

${lifestyle.data
    .map(
      (elmt) => `<tr>
<td>${JSON.stringify(elmt.lifestyle_id)}</td> 
<td>${JSON.stringify(elmt.diet)}</td> 
<td>${JSON.stringify(elmt.pack)}</td>
</tr>`
    )
    .join('')} 
  

</table>`;
}
lifestyleFunction();

async function hierarchyFunction() {
  const hierarchy = await fetch('./api/hierarchy').then((response) => response.json());
  // console.log(hierarchy);
  document.querySelector('.hierarchyData').innerHTML = `<table>
<tr><th>hierarchy_id</th><th>class</th><th>phylum</th></tr> 

${hierarchy.data
    .map(
      (elmt) => `<tr>
          <td>${JSON.stringify(elmt.hierarchy_id)}</td> 
          <td>${JSON.stringify(elmt.class)}</td> 
          <td>${JSON.stringify(elmt.phylum)}</td>
          </tr>`
    )
    .join('')} 
  

</table>`;
}
hierarchyFunction();

async function extinctionFunction() {
  const extinction = await fetch('./api/extinction').then((response) => response.json());
  document.querySelector('.extinctionData').innerHTML = `<table>
<tr><th>extinction_id</th><th>cause</th><th>age extinct</th></tr> 

${extinction.data
    .map(
      (elmt) => `<tr>
<td>${JSON.stringify(elmt.extinction_id)}</td> 
<td>${JSON.stringify(elmt.cause)}</td> 
<td>${JSON.stringify(elmt.age_species_went_extinct)}</td>
</tr>`
    )
    .join('')} 
  

</table>`;
}
extinctionFunction();