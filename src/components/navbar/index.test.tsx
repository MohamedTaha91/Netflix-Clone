import { render, screen } from "@testing-library/react";
import Navbar from "./index";
import "@testing-library/jest-dom/extend-expect";

describe("Navbar Component", () => {
  test("renders Netflix logo with a link to the homepage", () => {
    render(<Navbar />);
    const logo = screen.getByAltText(/Netflix logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo.closest("a")).toHaveAttribute("href", "/");
  });

  test("renders navigation links correctly", () => {
    render(<Navbar />);
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Series")).toBeInTheDocument();
    expect(screen.getByText("Películas")).toBeInTheDocument();
    expect(screen.getByText("Novedades populares")).toBeInTheDocument();
    expect(screen.getByText("Mi lista")).toBeInTheDocument();
    expect(screen.getByText("Explora por idiomas")).toBeInTheDocument();
  });

  test("renders search, notifications, and profile icons", () => {
    render(<Navbar />);
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
    expect(screen.getByTestId("notification-icon")).toBeInTheDocument();
    expect(screen.getByTestId("profile-icon")).toBeInTheDocument();
  });
});
