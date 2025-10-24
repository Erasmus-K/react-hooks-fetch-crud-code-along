import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";

test("renders all items initially", async () => {
  render(<ShoppingList />);
  const yogurt = await screen.findByText(/Yogurt/);
  expect(yogurt).toBeInTheDocument();
});

test("filters items by category", () => {
  render(<ShoppingList />);
  const select = screen.getByRole("combobox");

  // Select Dairy
  fireEvent.change(select, { target: { value: "Dairy" } });
  expect(screen.getByText(/Yogurt/)).toBeInTheDocument();
  expect(screen.getByText(/Milk/)).toBeInTheDocument();
  expect(screen.queryByText(/Apples/)).toBeNull();
});

test("deletes an item", async () => {
  render(<ShoppingList />);
  const deleteButtons = await screen.findAllByText(/Delete/);
  fireEvent.click(deleteButtons[0]); // delete first item
  expect(screen.queryByText(/Apples/)).toBeNull();
});

test("shows all items when filter is All", () => {
  render(<ShoppingList />);
  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: "All" } });
  expect(screen.getByText(/Apples/)).toBeInTheDocument();
  expect(screen.getByText(/Milk/)).toBeInTheDocument();
  expect(screen.getByText(/Yogurt/)).toBeInTheDocument();
  expect(screen.getByText(/Cake/)).toBeInTheDocument();
});
