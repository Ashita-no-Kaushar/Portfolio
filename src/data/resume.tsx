import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kaushar Mehboob Halani",
  initials: "DV",
  url: "https://dillion.io",
  location: "Mumbai, MH",
  //locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "CSE (Data Science) student in pre-final year. Exploring data, coding solutions, and learning step-by-step to grow in the field of Data Science.",
  summary:
    "I'm a pre-final year student pursuing **Computer Science & Engineering** with a specialization in **Data Science**. I'm just getting started with my learning journey and currently focused on building a strong foundation in **Python**, **Machine Learning**, and **Data Analysis**. While I haven't built any projects yet, I'm actively learning every day and looking forward to applying my skills in **real-world problems** soon. My goal is to grow into a **confident data professional** – someone who can use data to solve **meaningful problems** and create **real impact**.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGJudI7Hg6Ejw/profile-displayphoto-shrink_800_800/B4DZa_fw_QHQAc-/0/1746969498003?e=1755129600&v=beta&t=ZbkG93XUuxJ_1jB03nAbyuScmVVY0GtBRz2EgBbVth4",
  skills: [
    "Python",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }, 
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "thekaushar.ds@gmail.com",
    //tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ashita-no-Kaushar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kaushar-halani-904804354/",
        icon: Icons.linkedin,

        navbar: true,
      },
     /* X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      }, */
      email: {
        name: "Send Email",
        url: "thekaushar.ds@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  /* work: [
   {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    }, 
  ], */
   education: [
    {
      school: "St. John College of Engineering and Management",
      href: "https://sjcem.edu.in/",
      degree: "B.Tech in Computer Science & Engineering (Data Science)",
      logoUrl: "data:image/jpeg;base64,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",
      start: "2022",
      end: "2027",
    },
   /* {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    }, 
  ], */
  /* projects: [
   {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    }, 
  ], */
 /* hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },*/
  ],
} as const; 
