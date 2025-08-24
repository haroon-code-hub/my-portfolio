import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "@/components/ThemeToggle";

// Mock the module locally in this test file
jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

import { useTheme } from "next-themes";

describe("ThemeToggle", () => {
  it("toggles theme between light and dark", async () => {
    const setTheme = jest.fn();

    // Make our mock return a "light" theme initially
    (useTheme as jest.Mock).mockReturnValue({
      resolvedTheme: "light",
      theme: "light",
      setTheme,
    });

    render(<ThemeToggle />);

    // Component renders null until mounted; await the button
    const button = await screen.findByRole("button", {
      name: /toggle dark mode/i,
    });
    fireEvent.click(button);

    expect(setTheme).toHaveBeenCalledWith("dark");
  });
});
