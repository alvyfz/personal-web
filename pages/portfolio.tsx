import { ReactElement } from "react";
import PageHead from "@/components/PageHead";
import Project from "@/components/Project";
import SiteLayout from "@/components/SiteLayout";

export default function PortfolioPage(): ReactElement {
  return (
    <>
      <PageHead
        title="Portfolio"
        description="Selected projects and product explorations by M. Alvy Eka Fauzi."
        path="/portfolio"
      />
      <SiteLayout currentPath="/portfolio">
        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <Project
            title="Portfolio content structured around relevance, outcomes, and engineering range."
            description="The portfolio is grouped to make featured work more visible first, while still preserving supporting projects and experiments that demonstrate breadth."
            showArchive
          />
        </section>
      </SiteLayout>
    </>
  );
}
