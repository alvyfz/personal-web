import Image from 'next/image'
import React, { FC, ReactElement } from 'react'
import github from 'assets/github.gif'
import website from 'assets/website.gif'

const data: CardInterface[] = [
  {
    title: 'Inkwells',
    description:
      'Inkwells is a platform for writing, reading, and sharing ideas. Find inspiring stories, share your thoughts, and join a community of passionate writers and readers.',
    tags: ['Next JS', 'Typescript', 'Express JS', 'MongoDB'],
    github: 'https://github.com/alvyfz/inkwell-web',
    url: 'https://inkwells.vercel.app/',
    isInProgress: true
  },
  {
    title: 'INICS',
    description:
      'Inics is a powerful, cloud-based Software-as-a-Service (SaaS) platform designed to streamline and modernize healthcare clinic management. Our intuitive system helps medical practitioners, clinics, and healthcare facilities automate administrative tasks, enhance patient care, and optimize operations—all in one secure, easy-to-use platform.',
    tags: ['Next JS', 'Typescript'],
    github: undefined,
    url: 'https://inics-dev.vercel.app/',
    isInProgress: true
  },
  {
    title: 'My Property',
    description:
      'My Property is a web-based application that provides products and services for property purchases. My Property can facilitate property transactions that were previously complicated to become easier and more flexible. My Property is intended for millennials who have difficulty finding the property they want.',
    tags: ['React JS', 'Javascript', 'GraphQL', 'Boostrap React', 'Responsive Design'],
    github: 'https://github.com/alvyfz/myproperty-react-with-graphql',
    url: 'https://myproperty-six.vercel.app/'
  },
  {
    title: 'goodJobs',
    description:
      'goodJobs is an web-based platform to rent office spaces across Jakarta. goodjobs aims for the convenience of user when searching for a suitable working space in Jakarta’s business district areas.',
    tags: [
      'React JS',
      'Echo Golang',
      'Javascript',
      'Go',
      'GraphQL',
      'Boostrap React',
      'Responsive Design'
    ],
    github: 'https://github.com/alvyfz/frontend-goodjobs',
    url: 'https://goodjobs-app.netlify.app/'
  },
  {
    title: 'Bacotan Native',
    description:
      'bacotan is a App Android with React Native with a group chat app feature with your friends.',
    tags: ['React Native', 'Javacript', 'GraphQL', 'Android'],
    github: 'https://github.com/alvyfz/bacotan-react-native',
    url: 'https://expo.dev/@alvyfz/bacotan?serviceType=classic&distribution=expo-go'
  },
  {
    title: 'Bacotan',
    description: 'bacotan is a PWA-based web-app with a group chat app feature with your friends.',
    tags: ['React JS', 'Typescript', 'GraphQL', 'Material UI', 'PWA'],
    github: 'https://github.com/alvyfz/bacotan-reactts-pwa-',
    url: 'https://bacotan.vercel.app/'
  },
  {
    title: 'Wedding Invitation',
    description:
      'Wedding solutions are more economical, practical and up to date with e-invitations that are distributed automatically.',
    tags: ['Vue JS', 'Nuxt JS', 'Javascript', 'Tailwind CSS', 'Responsive Design'],
    github: 'https://github.com/alvyfz/wedding-invitation-nuxt',
    url: 'https://wedding-invitation-alvyfz.netlify.app/'
  }
]

interface CardInterface {
  title: string
  description: string
  tags: string[]
  github?: string
  url: string
  isInProgress?: boolean
}

interface CardProps extends CardInterface {
  aos: string
}
interface BreadCumbInterface {
  title: string
}

const BreadCumb = ({ title }: { title: string }): ReactElement => {
  return (
    <div className="text-center px-2 text-sm bg-white border-primary border text-primary rounded-full">
      {title}
    </div>
  )
}
const Card = (props: CardProps): ReactElement => {
  return (
    <div className="max-w-[700px]" data-aos={props.aos}>
      <div className="flex-col gap-3">
        <div className="flex flex-row gap-4 items-center">
          <h2 className="text-left text-primary font-semibold">{props.title}</h2>
          <div className="flex flex-row items-center gap-5">
            <a target="_blank" rel="noopener noreferrer " href={props.url}>
              <div className="flex flex-row gap-1 items-center">
                <Image alt={`website_${props.title}`} src={website} className="w-5 h-5" />
                <span className="text-primary text-sm font-medium underline">Visit</span>
              </div>
            </a>

            {props.github && (
              <a target="_blank" rel="noopener noreferrer " href={props.github}>
                <div className="flex flex-row gap-1 items-center">
                  <Image alt={`github_${props.title}`} src={github} className="w-5 h-5" />
                  <span className="text-primary text-sm font-medium underline">Github</span>
                </div>
              </a>
            )}
          </div>
        </div>

        <p className="text-left text-sm">{props.description}</p>
        <div className="flex flex-row flex-wrap gap-1 mt-3">
          {props.tags.map((v, i) => (
            <BreadCumb key={i} title={v} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Project(): ReactElement {
  return (
    <div>
      <h2 data-aos="fade-right" className="font-bold font-secondary text-xl text-center uppercase">
        Projects I&apos;ve Worked On
      </h2>
      <div className=" justify-center items-center w-full gap-8 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {data.map((v, i) => (
          <Card key={v.title} aos={i % 2 === 0 ? 'fade-right' : 'fade-left'} {...v} />
        ))}
      </div>
    </div>
  )
}

export default Project
