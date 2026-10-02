import { animeTrendingUrl, projectLinks } from './shared'
import type { Content } from './types'

export const en: Content = {
  meta: {
    title: 'Jorden Carter-Whitbey - Software Engineer',
    description:
      'Software engineer in Nagoya, Japan with about six years of experience building web applications, APIs, ' +
      'and CI/CD pipelines. Currently searching for a software engineering role in Japan.',
  },
  nav: {
    goal: 'Goal',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    title: 'Software Engineer',
    location: 'Based in Nagoya, Japan',
    tagline:
      'Software engineer with about six years of experience building web applications, APIs, and CI/CD pipelines. ' +
      'Currently searching for a software engineering role in Japan.',
    contactCta: 'Contact me',
  },
  goal: {
    heading: 'Goal',
    paragraphs: [
      'For about six years I have worked as a software engineer on web applications, APIs, and CI/CD pipelines. ' +
        'I want to put my experience across Angular, Spring Boot, AWS, and Google Cloud to work as part of a team, ' +
        'improving both the quality of the service and how efficiently it gets built.',
      'I also want to use the experience I gained overseas together with my Japanese ability, and keep growing ' +
        'by learning new technologies and knowledge alongside a development team in Japan.',
    ],
  },
  experience: {
    heading: 'Experience',
    roles: [
      {
        company: 'Anime Trending',
        url: animeTrendingUrl,
        title: 'Contract Software Engineer',
        dates: 'Feb 2021 – Present',
        highlights: [
          'Main contributor to the public website, built with Next.js and TypeScript on Firebase and Firestore',
          'Built the backend API on Firebase Cloud Functions with Express, covering polls, voting, charts, and awards',
          'Develop the Angular admin tool used to manage polls, charts, news, and ads',
          'Replatformed the original site to Firebase with an Angular Universal front end used by an average of 5K users per day, then rebuilt it in Next.js starting in 2023',
          'Created a GitLab pipeline to build a Docker image, push it to GCP Container Registry, and deploy to Cloud Run',
          'Building the next version of the site on Next.js 16 and Supabase, migrating off Firebase',
          'Mentored new contractors, enabling them to onboard quickly and deliver value',
        ],
      },
      {
        company: 'State Farm',
        title: 'Lead Software Engineer',
        dates: 'Dec 2019 – Apr 2025',
        note: 'Joined as Software Engineer; promoted to Lead in Mar 2024',
        highlights: [
          'Created PWAs using Angular and deployed them to AWS, Cloud Foundry, and Firebase',
          'Created automated acceptance tests with CodeceptJS and REST APIs using Express',
          'Created REST APIs using the Spring Boot framework',
          'Created Jenkins pipelines for CI/CD of Angular and Spring Boot applications',
          'Created projects involving Kotlin, Groovy, Docker, and Kubernetes',
        ],
      },
      {
        company: 'Shelter Insurance',
        title: 'Software Developer II',
        dates: 'May 2019 – Dec 2019',
        highlights: [
          'Wrote unit and integration tests to provide complete code coverage for new and existing Spring Boot applications',
          'Translated business data retrieval requirements into DB2 SQL queries',
          'Created stories to implement user requirements on a hybrid Scrum-Kanban agile team',
          'Mentored junior developers and created documentation explaining product functionality',
          'Used Drools to implement new business rules in an existing claims processing application',
        ],
      },
      {
        company: 'Shelter Insurance',
        title: 'Junior Software Developer',
        dates: 'Apr 2018 – May 2019',
        highlights: [
          'Designed and implemented automated acceptance tests using Selenium and Appium for the policyholder Android app',
          'Created AWS Lambda functions using CloudWatch',
          'Wrote Groovy, Java, and Python scripts to aid in ETL processes',
          'Developed Salesforce Visualforce pages, triggers, and Apex classes',
        ],
      },
      {
        company: 'Shaffer & Associates',
        title: 'Legal Associate',
        dates: 'Aug 2015 – Apr 2018',
        highlights: [
          'Processed legal documentation and created new accounts in the system',
          'Filed court documents and transcribed conversations with attorneys',
          'Processed payments received from courts and employers',
        ],
      },
    ],
  },
  projects: {
    heading: 'Projects',
    liveLabel: 'Live site',
    sourceLabel: 'Source',
    items: [
      {
        name: 'Anime Trending',
        badge: 'Client work',
        description:
          'The website for Anime Trending: weekly anime popularity charts, fan polls, the Anime Trending Awards, and news. ' +
          'As a contract engineer I am the main contributor to the public Next.js site, which deploys to Cloud Run ' +
          'through a Docker and GitLab CI pipeline. I also built its API on Firebase Cloud Functions and work on the ' +
          'Angular admin tool. I am now building the next version on Next.js 16 and Supabase.',
        tech: ['Next.js', 'TypeScript', 'Firebase Cloud Functions', 'Cloud Run', 'Angular', 'Supabase'],
        ...projectLinks.animeTrending,
      },
      {
        name: 'Jojos Study Buddy',
        description:
          'A Japanese study app with vocabulary flashcards and example sentences, grammar points, lesson tests, ' +
          'a kanji dictionary, and JLPT N3 practice quizzes.',
        tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
        ...projectLinks.studyBuddy,
      },
      {
        name: 'Ledger of Days',
        description:
          'A mobile-first personal habit tracker for logging good habits and slips, with a streak view, ' +
          'a month calendar, per-attribute insights, and custom event types.',
        tech: ['Next.js', 'TypeScript', 'Supabase', 'Recharts'],
        ...projectLinks.ledgerOfDays,
      },
      {
        name: 'This portfolio',
        description:
          'This site: a bilingual English and Japanese static site built with Next.js and deployed on Vercel, ' +
          'rewritten from an earlier Angular version.',
        tech: ['Next.js', 'TypeScript', 'Sass', 'Vercel'],
        ...projectLinks.portfolio,
      },
    ],
  },
  skills: {
    heading: 'Skills',
    items: [
      { name: 'Java / Kotlin / Groovy', detail: 'Maintained and improved several Spring Boot applications' },
      { name: 'SQL', detail: 'Created and optimized queries to get requested data at Shelter Insurance' },
      {
        name: 'Web development',
        detail: 'Created web pages using CSS, HTML, JavaScript, jQuery, Angular, TypeScript, and PHP',
      },
      {
        name: 'C',
        detail:
          'Created programs using stacks, queues, binary search trees, binary trees, red-black trees, and graph algorithms',
      },
      {
        name: 'Amazon Web Services',
        detail: 'Worked with Redshift, S3, EC2, Lambda, CloudWatch, and EMR while at Shelter Insurance',
      },
      { name: 'Android', detail: 'As a side project, worked on a team developing a ridesharing app' },
    ],
  },
  certifications: {
    heading: 'Certifications',
    items: [
      { name: 'Japanese-Language Proficiency Test (JLPT) N3', date: 'Jul 2026' },
      { name: 'AWS Certified Cloud Practitioner', date: 'Feb 2025' },
    ],
  },
  education: {
    heading: 'Education',
    items: [
      {
        name: 'University of Missouri',
        detail: 'Bachelor of Science in Computer Science · Columbia, Missouri',
        date: 'Aug 2015 – May 2019',
      },
    ],
  },
  contact: {
    heading: 'Contact',
    body: 'I live in Nagoya and am currently searching for a software engineering role in Japan. Feel free to get in touch.',
    visa: 'I am in Japan on a student visa and would change to a work visa on joining a company.',
    emailLabel: 'Email',
  },
}
