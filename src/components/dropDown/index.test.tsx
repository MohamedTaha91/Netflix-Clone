import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./index";

describe("Dropdown Component", () => {
  it("renders the dropdown button", () => {
    render(<Dropdown />);
    
    const button = screen.getByText("Browse");
    expect(button).toBeInTheDocument();
  });

  it("opens the dropdown menu when the button is clicked", () => {
    render(<Dropdown />);

    // Initially, the menu items should not be visible
    expect(screen.queryByText("Home")).toBeNull();

    // Click the dropdown button
    const button = screen.getByText("Browse");
    fireEvent.click(button);

    // Now the menu items should be visible
    expect(screen.getByText("Home")).toBeVisible();
    expect(screen.getByText("Series")).toBeVisible();
    expect(screen.getByText("Films")).toBeVisible();
  });

  it("renders all menu items", () => {
    render(<Dropdown />);

    // Click the dropdown button to show menu items
    const button = screen.getByText("Browse");
    fireEvent.click(button);

    // Check that all menu items are present
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Series")).toBeInTheDocument();
    expect(screen.getByText("Films")).toBeInTheDocument();
    expect(screen.getByText("New & Popular")).toBeInTheDocument();
    expect(screen.getByText("My List")).toBeInTheDocument();
    expect(screen.getByText("Browse by languages")).toBeInTheDocument();
  });
});
