import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import type { ReactElement } from "react";
import Navbar from "../components/Navbar"; // adjust path

const renderWithTheme = (ui: ReactElement) => {
  return render(<ThemeProvider attribute="class">{ui}</ThemeProvider>);
};

describe("Navbar", () => {
  it("renders brand and nav links", () => {
    renderWithTheme(<Navbar />);

    expect(screen.getByText("Haroon Saeed")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
  });
});
