import { render, screen } from "@testing-library/react";
import Navbar from "./index";
import "@testing-library/jest-dom"; // for jest-dom matchers


// Mock the Next.js Image component and Link for testing
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: { src: string; alt: string }) => <img src={props.src} alt={props.alt} />,
}));

jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

jest.mock("../dropDown", () => {
  return function MockDropdown() {
    return <div data-testid="mock-dropdown">Dropdown</div>;
  };
});

 describe("Navbar Component", () => {
  it("renders the Netflix logo", () => {
    render(<Navbar />);
    
    const logo = screen.getByAltText("Netflix Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);

    const links = ["Home", "Series", "Films", "New & Popular", "My List", "Browse by languages"];
    links.forEach((linkText) => {
      const link = screen.getByText(linkText);
      expect(link).toBeInTheDocument();
    });
  });

  it("renders the dropdown component", () => {
    render(<Navbar />);

    const dropdown = screen.getByTestId("mock-dropdown");
    expect(dropdown).toBeInTheDocument();
  });

  it("renders bell and search icons", () => {
    render(<Navbar />);

    const bellIcon = screen.getByTestId("bell-icon");
    const searchIcon = screen.getByTestId("search-icon");

    expect(bellIcon).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  it("renders the profile image", () => {
    render(<Navbar />);

    const profileImage = screen.getByAltText("profile icon");
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute("src", "https://placehold.co/35");
  });
}); 
