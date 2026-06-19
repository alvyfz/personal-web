import Image from "next/image";
import { ReactElement } from "react";
import github from "assets/github.gif";
import website from "assets/website.gif";
import {
  archiveProjects,
  featuredProjects,
  ProjectItem,
} from "@/data/siteContent";
import SectionHeader from "@/components/SectionHeader";

interface ProjectProps {
  title?: string;
  description?: string;
  showArchive?: boolean;
}

const statusLabel: Record<NonNullable<ProjectItem["status"]>, string> = {
  featured: "Featured",
  "in-progress": "In Progress",
  archive: "Archive",
};

function Tag({ title }: { title: string }): ReactElement {
  return (
    <span className="rounded-full border border-brand-hairline bg-brand-surfaceSoft px-3 py-1 text-xs text-brand-body">
      {title}
    </span>
  );
}

function ProjectCard({
  project,
  aos,
}: {
  project: ProjectItem;
  aos: string;
}): ReactElement {
  return (
    <article
      data-aos={aos}
      className="flex h-full flex-col rounded-2xl border border-brand-hairline bg-brand-canvas p-6"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-brand-cream px-3 py-1 text-xs uppercase tracking-[0.18em] text-brand-ink">
          {project.category}
        </span>
        {project.status && (
          <span className="rounded-full border border-brand-hairline px-3 py-1 text-xs text-brand-muted">
            {statusLabel[project.status]}
          </span>
        )}
      </div>

      <h3 className="mt-5 font-primary text-2xl font-medium text-brand-ink">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-brand-body">
        {project.description}
      </p>

      <div className="mt-5 rounded-2xl bg-brand-surfaceSoft p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-brand-muted">
          Why it matters
        </p>
        <p className="mt-2 text-sm leading-7 text-brand-body">
          {project.outcome}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} title={tag} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-5">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.url}
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-link"
        >
          <Image
            alt={`website_${project.title}`}
            src={website}
            className="h-5 w-5"
          />
          <span>Visit project</span>
        </a>

        {project.github && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.github}
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-link"
          >
            <Image
              alt={`github_${project.title}`}
              src={github}
              className="h-5 w-5"
            />
            <span>View source</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Project({
  title = "Selected work that reflects my approach to product and interface delivery.",
  description = "These projects showcase how I handle product structure, responsive implementation, UI clarity, and practical delivery across different types of digital experiences.",
  showArchive = true,
}: ProjectProps): ReactElement {
  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Portfolio"
        title={title}
        description={description}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            aos={index % 2 === 0 ? "fade-up" : "fade-down"}
          />
        ))}
      </div>

      {showArchive && (
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Archive"
            title="Additional projects, experiments, and product explorations."
            description="A broader view of the work that helped shape my frontend, product, and mobile development perspective over time."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {archiveProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
