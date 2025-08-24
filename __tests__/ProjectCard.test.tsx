import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/ProjectCard";

describe("ProjectCard", () => {
  it("renders title, description, tech and links", () => {
    render(
      <ProjectCard
        title="Coffee Listing App"
        description="Searchable list of coffees"
        tech={["React", "TypeScript", "TailwindCSS"]}
        github="https://github.com/haroon-code-hub/coffee-listing"
        live="https://haroon-code-hub.github.io/coffee-listing/"
      />
    );

    expect(screen.getByText("Coffee Listing App")).toBeInTheDocument();
    expect(screen.getByText(/Searchable list of coffees/i)).toBeInTheDocument();

    // badges
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();

    // links
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/haroon-code-hub/coffee-listing"
    );
    expect(screen.getByRole("link", { name: /live/i })).toHaveAttribute(
      "href",
      "https://haroon-code-hub.github.io/coffee-listing/"
    );
  });
});
