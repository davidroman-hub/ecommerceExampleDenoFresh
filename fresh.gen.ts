// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $api_orders_create from "./routes/api/orders/create.tsx";
import * as $checkout_index from "./routes/checkout/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $orders_index from "./routes/orders/index.tsx";
import * as $products_index from "./routes/products/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $Navbar_index from "./islands/Navbar/index.tsx";
import * as $ShowProducts_index from "./islands/ShowProducts/index.tsx";
import * as $cart_index from "./islands/cart/index.tsx";
import * as $checkout_index_1 from "./islands/checkout/index.tsx";
import * as $modal_index from "./islands/modal/index.tsx";
import * as $showOrders_showOrders from "./islands/showOrders/showOrders.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/api/orders/create.tsx": $api_orders_create,
    "./routes/checkout/index.tsx": $checkout_index,
    "./routes/index.tsx": $index,
    "./routes/orders/index.tsx": $orders_index,
    "./routes/products/index.tsx": $products_index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/Navbar/index.tsx": $Navbar_index,
    "./islands/ShowProducts/index.tsx": $ShowProducts_index,
    "./islands/cart/index.tsx": $cart_index,
    "./islands/checkout/index.tsx": $checkout_index_1,
    "./islands/modal/index.tsx": $modal_index,
    "./islands/showOrders/showOrders.tsx": $showOrders_showOrders,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
