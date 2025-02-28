// Referencias a los elementos del DOM
const form = document.getElementById("incidentForm");
const tableBody = document.querySelector("#incidentsTable tbody");

// Cargar incidentes guardados en localStorage (si existen)
let incidents = JSON.parse(localStorage.getItem("incidents")) || [];

// Función para renderizar los incidentes en la tabla
function renderTable() {
  // Limpiar la tabla antes de actualizar
  tableBody.innerHTML = "";

  incidents.forEach((incident) => {
    const row = document.createElement("tr");

    const dateCell = document.createElement("td");
    dateCell.textContent = incident.date;
    row.appendChild(dateCell);

    const timeCell = document.createElement("td");
    timeCell.textContent = incident.time;
    row.appendChild(timeCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = incident.location;
    row.appendChild(locationCell);

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = incident.description;
    row.appendChild(descriptionCell);

    const actionsCell = document.createElement("td");
    actionsCell.textContent = incident.actions;
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });
}

// Mostrar los incidentes que ya están en localStorage
renderTable();

// Manejo del evento "submit" del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar recarga de la página

  // Obtener valores del formulario
  const incidentDate = document.getElementById("incidentDate").value;
  const incidentTime = document.getElementById("incidentTime").value;
  const incidentLocation = document.getElementById("incidentLocation").value;
  const incidentDescription = document.getElementById("incidentDescription").value;
  const incidentActions = document.getElementById("incidentActions").value;

  // Crear objeto con los datos del incidente
  const newIncident = {
    date: incidentDate,
    time: incidentTime,
    location: incidentLocation,
    description: incidentDescription,
    actions: incidentActions,
  };

  // Agregar el nuevo incidente al array de incidentes
  incidents.push(newIncident);

  // Guardar en localStorage
  localStorage.setItem("incidents", JSON.stringify(incidents));

  // Actualizar la tabla
  renderTable();

  // Limpiar el formulario
  form.reset();
});
