import Image from "next/image";
import React, { FC, ReactElement } from "react";
import github from "assets/github.gif";
import website from "assets/website.gif";

const data: CardInterface[] = [
  {
    title: "My Property",
    description:
      "My Property is a web-based application that provides products and services for property purchases. My Property can facilitate property transactions that were previously complicated to become easier and more flexible. My Property is intended for millennials who have difficulty finding the property they want.",
    img: "https://www.linkpicture.com/q/Screenshot-2023-04-20-at-8.50.32-AM.png",
    tags: [
      "React JS",
      "Javascript",
      "GraphQL",
      "Boostrap React",
      "Responsive Design",
    ],
    github: "https://github.com/alvyfz/myproperty-react-with-graphql",
    url: "https://myproperty-six.vercel.app/",
  },
  {
    title: "goodJobs",
    description:
      "goodJobs is an web-based platform to rent office spaces across Jakarta. goodjobs aims for the convenience of user when searching for a suitable working space in Jakarta’s business district areas.",
    img: "https://raw.githubusercontent.com/alvyfz/frontend-goodjobs/master/user_interface.png",
    tags: [
      "React JS",
      "Echo Golang",
      "Javascript",
      "Go",
      "GraphQL",
      "Boostrap React",
      "Responsive Design",
    ],
    github: "https://github.com/alvyfz/frontend-goodjobs",
    url: "https://goodjobs-app.netlify.app/",
  },
  {
    title: "Bacotan Native",
    description:
      "bacotan is a App Android with React Native with a group chat app feature with your friends.",
    img: "https://i.postimg.cc/DzPWxk29/Screenshot-2023-04-20-at-10-48-54-AM.png",
    tags: ["React Native", "Javacript", "GraphQL", "Android"],
    github: "https://github.com/alvyfz/bacotan-react-native",
    url: "https://expo.dev/@alvyfz/bacotan?serviceType=classic&distribution=expo-go",
  },
  {
    title: "Bacotan",
    description:
      "bacotan is a PWA-based web-app with a group chat app feature with your friends.",
    img: "https://i.postimg.cc/pVm5xj01/Screenshot-2023-04-20-at-9-37-26-AM.png",
    tags: ["React JS", "Typescript", "GraphQL", "Material UI", "PWA"],
    github: "https://github.com/alvyfz/bacotan-reactts-pwa-",
    url: "https://bacotan.vercel.app/",
  },
  {
    title: "Wedding Invitation",
    description:
      "Wedding solutions are more economical, practical and up to date with e-invitations that are distributed automatically.",
    img: "https://i.postimg.cc/W1BX6jds/Screenshot-2023-04-20-at-9-45-12-AM.png",
    tags: [
      "Vue JS",
      "Nuxt JS",
      "Javascript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    github: "https://github.com/alvyfz/wedding-invitation-nuxt",
    url: "https://wedding-invitation-alvyfz.netlify.app/",
  },
];

interface CardInterface {
  title: string;
  description: string;
  img: string;
  tags: string[];
  github: string;
  url: string;
}

interface CardProps extends CardInterface {
  aos: string;
}
interface BreadCumbInterface {
  title: string;
}

const BreadCumb = ({ title }: { title: string }): ReactElement => {
  return (
    <div className="text-center px-2 text-sm bg-white border-primary border text-primary rounded-full">
      {title}
    </div>
  );
};
const Card = (props: CardProps): ReactElement => {
  return (
    <div
      className="max-w-[700px] grid grid-cols-1 lg:grid-cols-2 gap-6 w-full "
      data-aos={props.aos}
    >
      <div className="flex-col gap-3">
        <div className="flex flex-row gap-4 items-center">
          <h2 className="text-left text-primary font-semibold">
            {props.title}
          </h2>
          <div className="flex flex-row items-center gap-1">
            <a target="_blank" rel="noopener noreferrer " href={props.url}>
              <Image
                alt={`website_${props.title}`}
                src={website}
                className="w-5 h-5"
              />
            </a>
            <a target="_blank" rel="noopener noreferrer " href={props.github}>
              <Image
                alt={`github_${props.title}`}
                src={github}
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>

        <p className="text-left text-sm">{props.description}</p>
        <div className="flex flex-row flex-wrap gap-1 mt-3">
          {props.tags.map((v, i) => (
            <BreadCumb key={i} title={v} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          alt={props.title}
          src={props.img}
          height={200}
          width={300}
          className="object-cover border border-primary rounded-lg"
        />
      </div>
    </div>
  );
};

function Project(): ReactElement {
  return (
    <div>
      <h2
        data-aos="fade-right"
        className="font-bold font-secondary text-xl text-center uppercase"
      >
        {" "}
        Projects I&apos;ve Worked On
      </h2>{" "}
      <div className="flex flex-col justify-center items-center w-full gap-8 mt-8">
        {data.map((v, i) => (
          <Card
            key={v.title}
            aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            {...v}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
