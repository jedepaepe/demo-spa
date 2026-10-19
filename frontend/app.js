const div = document.getElementById('app');
buildPage(div);

async function buildPage(div) {
  const response = await fetch('http://localhost:3000/api/products');
  const products = await response.json();
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headers = ['ID', 'Nom', 'Prix'];

  headers.forEach((header) => {
    const cell = document.createElement('th');
    cell.appendChild(document.createTextNode(header));
    headerRow.appendChild(cell);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  products.forEach((product) => {
    const row = document.createElement('tr');
    const values = [product.id, product.name, `${product.price} €`];

    values.forEach((value) => {
      const cell = document.createElement('td');
      cell.appendChild(document.createTextNode(value));
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  div.appendChild(table);
}
