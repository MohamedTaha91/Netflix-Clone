import { render, screen } from "@testing-library/react";
import Navbar from "./index";
import "@testing-library/jest-dom";

// Mock the Image component from next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { alt, width, height, className } = props;
    return (
      <img
        src={props.src.src || props.src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  },
}));

// Mock the next/link component
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

describe("Navbar", () => {
  test("renders Netflix logo", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("Netflix Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/img.jpg"); // Now, this should work with the updated mock
  });

  test("renders menu items", () => {
    render(<Navbar />);
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Series")).toBeInTheDocument();
    expect(screen.getByText("Peliculas")).toBeInTheDocument();
    expect(screen.getByText("Novedades Populares")).toBeInTheDocument();
    expect(screen.getByText("Mi Lista")).toBeInTheDocument();
    expect(screen.getByText("Explora por idiomas")).toBeInTheDocument();
  });

  test("renders bell and search icons", () => {
    render(<Navbar />);
    const bellIcon = screen.getByTestId("bell-icon");
    const searchIcon = screen.getByTestId("search-icon");

    expect(bellIcon).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  test("renders profile image", () => {
    render(<Navbar />);
    const profileIcon = screen.getByAltText("profile icon");
    expect(profileIcon).toBeInTheDocument();
    expect(profileIcon).toHaveAttribute("src", "https://placehold.co/35");
  });
});
