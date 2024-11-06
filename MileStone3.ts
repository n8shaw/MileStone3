// server.ts
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

const items = [
  { item_name: "Glazed Donut", url: "path_to_image1.jpg" },
  { item_name: "Chocolate Donut", url: "path_to_image2.jpg" },
  { item_name: "Strawberry Donut", url: "path_to_image3.jpg" },
];

function renderHTML(items: { item_name: string; url: string }[]) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Donut Gallery</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <div class="container mt-5">
    <h1 class="text-center mb-5">Donut Gallery</h1>
    <div class="row">
      ${items.map(item => `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="${item.url}" class="card-img-top" alt="${item.item_name}">
            <div class="card-body text-center">
              <h5 class="card-title">${item.item_name}</h5>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;
}

serve((req) => {
  const html = renderHTML(items);
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
});

console.log("Server running on http://localhost:8000");
