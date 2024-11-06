// server.ts

import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { Client } from "https://deno.land/x/mysql/mod.ts";

// Database connection configuration
const client = await new Client().connect({
  hostname: "your-rds-endpoint.amazonaws.com",
  username: "your-username",
  db: "icecreamdonuts",
  password: "your-password",
  port: 3306,
});

// Initialize Oak application and router
const app = new Application();
const router = new Router();

// Serve static files (CSS, images) from the "public" folder
app.use(async (ctx, next) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/public`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});

// Route to display donuts
router.get("/", async (ctx: Context) => {
  try {
    const items = await client.query("SELECT url, item_name FROM items");
    const html = renderHTML(items);
    ctx.response.body = html;
  } catch (err) {
    console.error(err);
    ctx.response.status = 500;
    ctx.response.body = "Error retrieving items";
  }
});

// Function to render HTML with items
function renderHTML(items: { url: string; item_name: string }[]) {
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

// Register router middleware
app.use(router.routes());
app.use(router.allowedMethods());

// Start server
console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });
