import type { ReactNode } from 'react'
import Card from '@/components/Card'
import Tabs from '@/components/Tabs'

type Experience = {
  title: string
  subtitle?: string
  description: ReactNode
}

const softwareEngineering: Experience[] = [
  {
    title: 'State Farm - Software Engineer',
    subtitle: 'Digital Auto Quote and Buy Team',
    description: (
      <>
        {`I am on the API side of this team, where we have multiple Spring Boot APIs that are written in Java and hosted on
        PCF. These APIs power the new digital experience for getting a quote and purchasing auto insurance online
        (in certain states, check if it's available in your state `}
        <a target="_blank" rel="noopener noreferrer" href="https://auto.statefarm.com/quote" style={{ color: 'white' }}>
          here
        </a>
        {` ). I enjoy the work on this team because of the impact that it has on the business and the recognition
        from executives. In addition to working on the APIs, I work on our automated acceptance tests, utilizing CodeceptJS.
        I handle the process of building, testing, scanning, and deploying via Gitlab CI.`}
      </>
    ),
  },
  {
    title: 'State Farm - Software Engineer',
    subtitle: 'P&C Claims Team',
    description: `When I first came to State Farm, I was on Property and Casualty Claims team, where my primary job was to re-platform
      current applications to be on the cloud. My first job was to take a legacy desktop app, refactor it, and put it onto
      PCF so that users would no longer need to download and install the app to their machine. We decided to go for an Angular 2
      front end with a Spring Boot Java rest API as the backend with IBM DB2 as the database. At this point, I had only done
      basic things with Angular (created a portfolio and pushed it to firebase), so this was a large journey, where I learned
      about created, building, and testing of an Angular app as well as hosting and deploying it to PCF via Jenkins pipelines.
      I also learned a lot about the pipeline process, learning about building pipelines to build, test, mutation test,
      dependency scan, deploy, and end to end tests. After successfully deploying this to production, I moved on to
      replatform old batch jobs onto PCF, utilizing Spring Integration for moving files using SFTP streaming.`,
  },
  {
    title: 'Shelter Insurance - Software Developer II',
    subtitle: 'Claims Team',
    description: `I worked on the main claims application that the claims customer service representatives depended on, as well as
      a few Spring Boot microservices and batch jobs. We had a great emphasis on agile methodology, so we regularly
      had spring planning, sprint reviews, daily scrum, etc. I was also helped and mentored new hires.`,
  },
  {
    title: 'Shelter Insurance - Junior Developer',
    subtitle: 'Customer Service & Business Intelligence teams',
    description: `I worked on the business intelligence team working with big data. I primarily worked with Amazon Web Services,
      utilizing EC2 instances, cloudwatch, S3, lambda functions, redshift, and EMR. I also used Apache Nifi to route
      data to different destinations and to automate reports. I also worked with Google Analytics and Google Tag
      Manager. To grab data from various sources, I queried using HiveQL, PostgresQL, NoSQL, and SQL.
      I worked as a part time software developer on the customer service team for Say Insurance 40 hours a week during
      school breaks and around 17 to 25 hours during the school year. I participated in an agile work environment taking
      part in daily scrum, sprint retrospectives and sprint planning. On this team, I worked on the salesforce
      application, writing code in Apex and running SOQL statements. Besides that, I also worked on different
      Spring Boot applications. We use Jira to keep track of sprint information and used Jenkins for deployments
      into our different environments. Once I completed a story I wrote testing plans for another member in my
      team to verify that my change or fix worked the way it should’ve.`,
  },
  {
    title: 'University of Missouri - Computer Science',
    subtitle: 'Student',
    description: `For my capstone project, two other devs and I worked on creating a ride share app for a local company. I worked on
      the android app side, connecting the prototype one member created with a rest api another member created as well
      as integrated the google maps api.`,
  },
]

const other: Experience[] = [
  {
    title: 'Shaffer and Associates - Legal Assistant',
    description: `At this job, I started out in data entry, entering information from clients and court documents into our
      debtmaster software. I then became the bankruptcy expert for the legal department, processing different
      bankruptcy court documents while also handling the bankruptcy queue, monitoring the status of around 20 to
      50 accounts per day. On certain bankruptcy cases, I needed to be in contact with attorneys, clients, and
      courts to make sure our company can make the most money in the situations where we were usually unable to
      collect. I also got to process payments and file garnishments. Finally, I trained all new hires in the legal
      department on any of the previous tasks mentioned.`,
  },
  {
    title: 'Hy-Vee - Deli Clerk/Cashier/Bagger',
    description: `The majority of what I did was customer service, making sure that the customer is happy and content with their
      order and experience because that is what we take pride in. I trained new people, giving them direction on how
      to use their time efficiently while giving the customer proper service.`,
  },
]

function ExperienceList({ items }: { items: Experience[] }) {
  return items.map((item) => (
    <Card key={`${item.title}-${item.subtitle}`} title={item.title} subtitle={item.subtitle}>
      {item.description}
    </Card>
  ))
}

export default function AboutMe() {
  return (
    <>
      <Card title="About me:">
        I am currently a full time full stack software engineer that works at State Farm.
      </Card>
      <Tabs
        tabs={[
          { label: 'Software Engineering Related', content: <ExperienceList items={softwareEngineering} /> },
          { label: 'Other', content: <ExperienceList items={other} /> },
        ]}
      />
    </>
  )
}
