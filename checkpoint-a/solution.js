// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";


// 1. Load every order from the database
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Return orders from Alexandria with paid status
export function myOrders(orders) {
  return orders.filter(order =>
    order.city === "Alexandria" && order.status === "paid"
  );
}

// 3. Add up the quantity of all orders
export function summarize(orders) {
  return orders.reduce((total, order) => total + order.quantity, 0);
}

// 4. Find one order and describe it

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch (error) {
    return `Could not find order ${id}`;
  }
}

// 5. Keep only student and city, then convert to JSON
export function toJsonLines(orders) {
  const simplifiedOrders = orders.map(order => ({
    student: order.student,
    city: order.city
  }));

  return JSON.stringify(simplifiedOrders);
}

