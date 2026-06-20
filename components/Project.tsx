import Image from "next/image";
import { ReactElement } from "react";
import github from "assets/github.gif";
import website from "assets/website.gif";
import SectionHeader from "@/components/SectionHeader";

interface ProjectProps {
  title: string;
  description: string;
  locale: string;
  dictionary: any;
  showArchive?: boolean;
}

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
  dictionary,
}: {
  project: any;
  aos: string;
  dictionary: any;
}): ReactElement {
  const statusLabel: Record<string, string> = {
    featured: dictionary.common.featured,
    "in-progress": dictionary.common.inProgress,
    archive: dictionary.common.archive,
  };

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
          {dictionary.common.whyItMatters}
        </p>
        <p className="mt-2 text-sm leading-7 text-brand-body">
          {project.outcome}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
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
            alt={`${dictionary.common.visitProject}: ${project.title}`}
            src={website}
            className="h-5 w-5"
          />
          <span>{dictionary.common.visitProject}</span>
        </a>

        {project.github && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.github}
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-link"
          >
            <Image
              alt={`${dictionary.common.viewSource}: ${project.title}`}
              src={github}
              className="h-5 w-5"
            />
            <span>{dictionary.common.viewSource}</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Project({
  title,
  description,
  locale,
  dictionary,
  showArchive = true,
}: ProjectProps): ReactElement {
  const { content } = dictionary;

  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow={dictionary.navigation.portfolio}
        title={title}
        description={description}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {content.featuredProjects.map((project: any, index: number) => (
          <ProjectCard
            key={project.title}
            project={project}
            aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            dictionary={dictionary}
          />
        ))}
      </div>

      {showArchive && (
        <div className="space-y-8">
          <SectionHeader
            eyebrow={dictionary.common.archive}
            title={
              locale === "id"
                ? "Proyek tambahan, eksperimen, dan eksplorasi produk."
                : "Additional projects, experiments, and product explorations."
            }
            description={
              locale === "id"
                ? "Gambaran yang lebih luas tentang karya yang membantu membentuk perspektif saya pada frontend, produk, dan pengembangan mobile dari waktu ke waktu."
                : "A broader view of the work that helped shape my frontend, product, and mobile development perspective over time."
            }
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {content.archiveProjects.map((project: any, index: number) => (
              <ProjectCard
                key={project.title}
                project={project}
                aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                dictionary={dictionary}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
