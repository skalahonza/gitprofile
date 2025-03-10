// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'skalahonza', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'skalahonza/TidepoolToNightScoutSync',
          'skalahonza/github-star-search',
          'skalahonza/instagram-hashtag-preview',
          'skalahonza/InfHelper',
          'skalahonza/DriversBackup',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'slp.blue',
          description: 'Modern document and quality management system for laboratories. My position in the project is back-end developer and tech lead.',
          imageUrl: 'images/slp.blue.webp',
          link: 'https://slp.blue',
        },
        {
          title: 'Talxis (integrations)',
          description: 'Modular information system. My work was strictly back-end development focused on integrations with other systems.',
          imageUrl: 'https://www.talxis.com/assets/icons/talxis.svg',
          link: 'https://www.talxis.com/',
        },
        {
          title: 'HealthWarden',
          description: 'Remote patient care adaptable to life. My work was focused on back-end development and devops.',
          imageUrl: 'images/health-warden.webp',
          link: 'https://warden.health/en',
        },
        {
          title: 'Evidence of Innovative Medication',
          description: 'An application for the management and administration of innovative drugs. My work was focused on back-end development, devops and a little bit of angular.',
          imageUrl: 'images/ecl.webp',
          link: 'https://ecl.mild.blue/en',
        },
        {
          title: 'DataVID',
          description: 'Smart speech2text tool for medical report creation. My work was focused on back-end development and AI integration.',
          imageUrl: 'images/datavid.webp',
          link: 'https://datavid.org/en',
        },
        {
          title: 'Heart Rate Detector',
          description: 'Measure, evaluate and share heart rate detected by a smartphone camera. My work was focused on back-end development and FHIR integration.',
          imageUrl: 'images/heart-rate-detector.webp',
          link: 'https://heart.mild.blue/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jan Skála',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'jan-skala',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'skala.jg',
    dev: '',
    stackoverflow: '4438653/jan-skála', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://janskala.cz',
    phone: '',
    email: 'j.skala@hotmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'CSharp',
    'EF Core',
    'Blazor',
    'Open Telemetry',
    'Grafana',
    'Azure',
    'Azure Functions',
    'Docker',
    'Docker Compose',
    'TypeScript',
    'Python',
    'Java',
    'Kotlin',
    'MongoDB',
    'Redis',
    'Sentry',
    'PostgreSQL',
    'GitHub (actions)',
  ],  
  experiences: [
    {
      company: 'Mild Blue',
      position: 'Back-End Developer & Tech Lead',
      from: 'October 2021',
      to: 'Present',
      companyLink: 'https://mild.blue/',
    },
    {
      company: 'Networg',
      position: 'DevSecOps Engineer',
      from: 'April 2017',
      to: 'December 2021',
      companyLink: 'https://www.networg.com',
    },
    {
      company: 'Microsoft Learn Student Ambassador',
      position: 'Student Ambassador',
      from: '2016',
      to: 'December 2021',
      companyLink: 'https://mvp.microsoft.com/studentambassadors',
    },
    {
      company: 'nextap solutions s.r.o.',
      position: 'Junior Developer',
      from: 'February 2016',
      to: 'March 2017',
      companyLink: 'https://nextap.eu/',
    },
  ],  
  certifications: [
    {
      name: 'Microsoft Azure Developer Associate',
      body: 'Microsoft - ID I037-7694ID',
      year: 'November 2021',
      link: '',
    },
    {
      name: 'Azure Fundamentals',
      body: 'Microsoft - ID H551-7313',
      year: 'October 2020',
      link: '',
    },
  ],  
  educations: [
    {
      institution: 'CTU in Prague',
      degree: 'Master of Engineering (Ing.), Software Engineering',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'CTU in Prague',
      degree: 'Bachelor of Science (Bc.), Open Informatics (Programming)',
      from: '2016',
      to: '2019',
    }
  ],
  publications: [
/*    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },*/
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'skala.jg', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: false,
};

export default CONFIG;
