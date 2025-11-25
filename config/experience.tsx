import { Link } from '@chakra-ui/react'

export type Company = 'Liquid' | 'Blueleaf' | 'Rikkeisoft'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Liquid: {
    name: 'Liquid',
    longName: 'Liquid Group',
    subDetail: 'Vietnam',
    url: 'https://www.liquid.com/',
    position: 'Software AI Developer',
    duration: 'Jan 2022 - Aug 2025',
    logo: {
      light: '/worked_at_logos/liquid/liquid_logo.png',
      dark: '/worked_at_logos/liquid/liquid_logo.png',
    },
    roles: [
      <>
        Implemented a production-ready MCP system with LangChain, LangGraph, replacing a legacy forms-based chatbot while maintaining 100% unctional parity via parallel execution strategy.
      </>,
      <>
        Built seven specialized MCP tools (SQL generation, forecasting, weather) with sophisticated restaurant business logic for sales analytics, rojections, and operational intelligence.
      </>,
      <>
        Deployed XGBoost and statistical forecasting models, achieving a 56% accuracy improvement, integrated with the MCP agent for real-time sales predictions and impact analysis.
      </>,
      <>
        Developed a comprehensive event impact analyzer with service-type specific multipliers, location proximity effects, and 20+ event types affecting restaurant demand patterns.
      </>,
      <>
        Executed a zero-downtime "Parallel Evolution" approach with separate MCP processors, dedicated test suites, and deployment scripts enabling gradual production transition.
      </>,
    ],
  },
  Blueleaf: {
    name: 'Blueleaf',
    longName: 'Blueleaf',
    subDetail: 'United Kingdom',
    url: 'https://blueleaf.com',
    position: 'Backend Developer',
    duration: 'Jun 2020 - Dec 2021',
    logo: {
      light: '/worked_at_logos/blueleaf/blueleaf_logo.png',
      dark: '/worked_at_logos/blueleaf/blueleaf_logo.png',
    },
    roles: [
      <>
        Implemented a low-code SaaS MVP from scratch by developing a Kotlin back end and performing some React front-end prototyping. Helped to put the project team together. Assisted with setting up the infrastructure in Google Cloud.
      </>,
      <>
        Implemented a data integration solution for the largest Asian healthcare group transmitting and handling COVID-19-related test data during the pandemic.
      </>,
      <>
        Built back-end data integration projects for clients from various domains, such as digital media, research, retail, and IT. Helped with tackling intricate system issues. Got positive feedback on all the projects.
      </>,
      <>
        Hired and reviewed the performance of two front-end developers and one back-end developer. I coordinated the team and set and assessed the project milestones.
      </>,
    ],
  },
  Rikkeisoft: {
    name: 'Rikkeisoft',
    longName: 'Rikkeisoft',
    subDetail: 'Vietnam',
    url: 'https://rikkeisoft.com/',
    position: 'Full Stack Developer',
    duration: 'Mar 2016 - Jul 2020',
    logo: {
      light: '/worked_at_logos/rikkeisoft/rikkeisoft_logo.png',
      dark: '/worked_at_logos/rikkeisoft/rikkeisoft_logo.png',
    },
    roles: [
      <>
        Implemented several key DevOps functions to improve the development team's efficiency and code quality, such as automated deployments, code formatting, GitHub Actions to validate pull requests, codebase documentation, and persistent domains.
      </>,
      <>
        Secured pages and API routes using OAuth for authentication and authorization, with custom user groups and roles with different permissions, whitelisting, and user access expiry.
      </>,
      <>
        Built a tool enabling users to link to an external account and reliably export data to the external platform.
      </>,
      <>
        Implemented a location auto-complete feature using the Google Places API, with the MongoDB geospatial queries search feature.
      </>,
      <>
        Built a compensation data dashboard with interactive charts and tables.
      </>,
      <>
        Built several features allowing users to inject key data into Marovi's analytical tools, fetching up-to-date data from external APIs and refreshing stored data.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Liquid,
  Experiences.Blueleaf,
  Experiences.Rikkeisoft,
]
