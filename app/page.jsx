import { ArrowDown, ArrowRight, Mail, MapPin, Download, Code2, Server, Database, Cloud, FileCodeCorner } from "lucide-react";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import Image from "next/image";
import ExpProSlider
  from "../components/ExpProSlider";

const skills = [
  { icon: Code2, title: "Backend Development", items: ["Java", "Spring Boot", "Node.js", "Express.js", "PHP", "Laravel, Yii, CodeIgniter", "REST API", "Microservices"] },
  { icon: Database, title: "Database", items: ["Oracle", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"] },
  { icon: Server, title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { icon: Cloud, title: "DevOps & Cloud", items: ["Docker", "Nginx", "GitLab CI/CD", "Kafka", "RabbitMQ", "Monitoring", "AWS S3", "Azure"] },
  { icon: FileCodeCorner, title: "Other", items: ["Magento 2", "WordPress", "Drupal", "Ms.Word", "Photoshop", "CorelDraw", "Trello", "Jira"] },
];

const projects = [
  {
    id: "wdm",

    icon: "/images/icon-pam.png",

    period: "Enterprise Application",

    title: "Water Distribution Management",

    category: "Enterprise Application",

    summary:
      "Management platform for monitoring water distribution, operational data, reporting and business workflows.",

    description:
      "A centralized enterprise application designed to manage water distribution operations, business workflows, operational monitoring and reporting.",

    tags: [
      "Java",
      "Spring Boot",
      "laravel",
      "Oracle",
      "Redis",
    ],

    responsibilities: [
      "Designed REST APIs and backend business services.",
      "Implemented operational dashboards and reporting workflows.",
      "Designed database queries and optimized data access.",
      "Integrated application deployment with containerized infrastructure.",
    ],

    achievements: [
      "Improved visibility of operational data.",
      "Centralized business workflows.",
      "Created maintainable service architecture.",
    ],

    demo: "#",

    github: "#",
  },

  {
    id: "99usahaku",

    icon: "/images/icon-usahaku.png",

    period: "Backend Architecture",

    title: "99Usahaku",

    category: "E-Commerce",

    summary:
      "E-commerce platform built with Magento, featuring third-party payment and shipping integrations, digital product management, and automated product renewal.",

    description:
      "A scalable e-commerce platform developed with Magento as the core commerce backend, integrated with third-party services for payment processing, shipping and delivery, and digital product renewal. The platform supports product management, customer transactions, order processing, digital products, and automated renewal workflows.",

    tags: [
      "Magento 2",
      "PHP",
      "MySQL",
      "REST API",
      "Redis",
      "RabbitMQ",
      "AWS S3",
      "Java Springboot",
      "Elastic Search"
    ],

    responsibilities: [
      "Developed and customized the e-commerce backend using Magento.",
      "Integrated third-party payment gateway services for secure and reliable transaction processing.",
      "Integrated shipping and delivery services through third-party APIs.",
      "Implemented digital product purchasing and renewal workflows.",
      "Developed API integrations between Magento and external third-party services.",
      "Implemented order, payment, and transaction processing workflows.",
      "Configured product and customer management features within the Magento ecosystem.",
    ],

    achievements: [
      "Successfully built an e-commerce platform using Magento as the core commerce backend.",
      "Integrated multiple third-party services for payment, shipping, and digital product renewal.",
      "Streamlined order and payment processing through API-based integrations.",
      "Supported automated renewal workflows for digital products.",
      "Created a scalable backend architecture for integrating additional third-party services.",
    ],

    demo: "#",

    github: "#",
  },

  {
    id: "qapm",

    icon: "/images/icon-qapm.jpeg",

    period: "Web Application",

    title: "QA Management Projects",

    category: "Web Application",

    summary:
      "End-to-end quality assurance management platform designed and developed from database architecture and application design to implementation.",

    description:
      "A comprehensive QA Management platform developed to support quality assurance processes, project management, test planning, test execution, issue tracking, and reporting. The project was built end-to-end, covering database architecture, system and application design, backend and frontend development, business process implementation, and system integration.",

    tags: [
      "PHP",
      "Laravel",
      "Redis",
      "MySQL",
      "REST API",
      "JavaScript",
    ],

    responsibilities: [
      "Designed the overall database architecture, including tables, relationships, indexes, constraints, and data structures.",
      "Designed the application architecture and technical components based on business and QA management requirements.",
      "Designed end-to-end application workflows and business processes for QA project management.",
      "Developed backend services and REST APIs to support QA management functionality.",
      "Implemented database integration and data access using MyBatis.",
      "Developed application features for managing QA projects, test plans, test cases, test execution, and issue tracking.",
      "Implemented validation, business rules, transaction processing, and data management across the application.",
      "Designed and developed the application interface to provide an efficient user experience for QA teams.",
      "Performed system integration, debugging, testing, and performance optimization.",
    ],

    achievements: [
      "Successfully designed and developed the application from the ground up, covering database, system architecture, application design, and implementation.",
      "Delivered an integrated QA management platform to centralize project, testing, execution, and issue management processes.",
      "Established a structured and scalable database architecture to support complex QA management workflows.",
      "Improved the efficiency and traceability of QA processes through centralized project and testing management.",
      "Created a maintainable application architecture that supports future feature enhancements and system integration.",
    ],

    demo: "#",

    github: "#",
  },
];

const experiences = [
  {
    id: "exp-1",

    icon: "/images/icon-pam.png",

    period: "march 2025 — Present",

    title:
      "Senior Software Engineer / Technical Lead",

    company:
      "PT PAM Jaya",

    summary:
      "Leading backend engineering, architecture and technical delivery for enterprise applications.",

    description:
      "Responsible for technical direction, Frontend development, backend architecture, development standards and delivery of scalable enterprise software.",

    tags: [
      "Java",
      "Spring Boot",
      "Architecture",
      "Leadership",
      "Microservices",
      "Laravel",
      "React.js",
      "Project management",
      "Redis",
      "Git"
    ],

    responsibilities: [
      "1. Led 6 developers across backend and frontend development",
      "2. Reduced Oracle query execution time by 30% through indexing strategy and SQL optimization",
      "3. Built interactive dashboards for transaction monitoring and reporting",
      "4. Presented technicalsolutions and project progressto stakeholders and clients",
      "5. Conducted thorough code reviews to identify potential areas for improvement, ultimately enhancing code quality across all projects handled by the team."
    ],

    achievements: [
      "Improved maintainability through cleaner architecture.",
      "Standardized development practices.",
    ],
  },

  {
    id: "exp-2",

    icon: "/images/icon-infomedia.png",

    period: "August 2023 — march 2025",

    title:
      "Senior Software Engineer",

    company:
      "PT Infomedia Nusantara",

    summary:
      "Developed web application, enterprise APIs, integrations and backend services.",

    description:
      "Focused on web development, database integration, API design and implementation of enterprise business processes.",

    tags: [
      "PHP",
      "Laravel",
      "MySQL",
      "Redis",
      "REST API",
      "Node.js",
      "Express.js",
      "Git"
    ],

    responsibilities: [
      "1. Designed system architecture for internal applications",
      "2. Improved data quality by performing data cleansing, transformation, and SQL optimization",
      "3. Developed robust, scalable, and modular API-centric infrastructures",
      "4. Maintained clear communication with stakeholders to ensure project transparency",
      "5. Improved data processing performance by 45%",
      "6. Conducted thorough code reviews to identify potential areas for improvement, ultimately enhancing code quality across all projects handled by the team",
      "7. Supported applications used by 5,000+ users"
    ],

    achievements: [
      "Delivered multiple enterprise modules.",
      "Improved API reliability and performance.",
      "Developed Applicataion with high performance"
    ],
  },

  {
    id: "exp-3",

    icon: "/images/icon-dans.png",

    period: "August 2021 — August 2023",

    title:
      "Lead Magento Developer",

    company:
      "PT DAnS Multi Pro",

    summary:
      "Built web applications and backend services for business users.",

    description:
      "Worked across application development, API integration, database implementation and frontend interfaces.",

    tags: [
      "PHP",
      "Laravel",
      "java",
      "SpringBoot",
      "Magento 2",
      "Redis",
      "MySQL",
      "Elastic Search",
      "RabbitMQ",
      "Git"
    ],

    responsibilities: [
      "1. Fixing bug and develop new feature",
      "2. Integrated third-party APIs for seamless payment processing, shipping, and inventory management solutions.",
      "3. Improved application performance through SQL tuning and code optimization.",
      "4. Collaborated with cross-functional teams to design, develop, and launch new e-commerce websites using Magento.",
      "5. Led a Magento development team consisting of X developers.",
      "6. Mentored developers in resolving technical issues and conducting technical discussions.",
      "7. Create report for monitoring task of member developer magnto to project manager Managed multiple projects simultaneously while adhering to strict deadlines and budgets constraints.",
    ],

    achievements: [
      "Delivered end-to-end web applications.",
      "Built reusable application components.",
      "Improved API reliability and performance."
    ],
  },

  {
    id: "exp-4",

    icon: "/images/icon-nadyne.png",

    period: "April 2015 — August 2021",

    title:
      "Senior Developer",

    company:
      "PT Nadyne Media Tama",

    summary:
      "Designed, developed, optimized, and deployed scalable web applications and enterprise systems.",

    description:
      "Worked across system and database design, application development, performance optimization, code review, deployment, and technical mentoring while collaborating with stakeholders and development teams.",

    tags: [
      "PHP",
      "Node.js",
      "Magento 2",
      "Express.js",
      "Laravel",
      "Yii",
      "CodeIgniter",
      "MySQL",
      "PostgreSQL",
      "Linux",
      "Git",
      "SVN",
      "Redis",
      "RabbitMQ",
      "Elasticsearch",
      "Docker",
      "WordPress",
      "Drupal",
      "CI/CD",
      "Google Maps"
    ],

    responsibilities: [
      "Optimized database structures and queries for high-demand applications.",
      "Conducted code reviews to ensure code quality and adherence to development best practices.",
      "Designed application systems and database architectures based on business requirements.",
      "Developed interactive dashboards for processing and monitoring transaction data.",
      "Tested and deployed scalable and highly available software applications.",
      "Provided technical guidance and mentoring to junior developers.",
      "Collaborated with stakeholders and development teams to ensure project requirements and progress were properly communicated.",
    ],

    achievements: [
      "Improved application scalability and reliability for high-demand business applications.",
      "Delivered interactive dashboards for transaction data processing and monitoring.",
      "Improved development quality through code reviews and technical guidance.",
      "Successfully supported the deployment of scalable and highly available software products."
    ],
  },

  {
    id: "exp-5",

    icon: "/images/icon-goc.png",

    period: "October 2014 — April 2015",

    title:
      "IT Developer",

    company:
      "PT Gloria Origita Cosmetics",

    summary:
      "Developed internal applications and automation solutions to improve operational efficiency and data quality.",

    description:
      "Responsible for developing internal applications, designing database structures, automating repetitive tasks, and optimizing database queries to improve system responsiveness and transaction performance.",

    tags: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "Gammu",
      "Wammu",
      "RabbitMQ",
      "Linux",
      "Git"
    ],

    responsibilities: [
      "Designed and developed internal applications based on business requirements.",
      "Designed and implemented database structures to support internal business processes.",
      "Developed automation scripts to reduce repetitive manual tasks.",
      "Optimized database queries to improve application responsiveness and transaction performance.",
      "Performed data cleansing and transformation to improve data accuracy and quality.",
      "Collaborated with cross-functional teams to develop and maintain reliable software solutions."
    ],

    achievements: [
      "Reduced repetitive manual work through application and process automation.",
      "Improved system responsiveness through database query optimization.",
      "Improved data accuracy and quality through data cleansing and transformation.",
      "Supported the development of reliable internal software applications."
    ],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="container-page min-h-screen py-32">
          <div className="grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">

            {/* LEFT */}
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 text-sm text-violet-200">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available for opportunities
              </div>

              <p className="mb-4 text-lg text-gray-400">
                Hello, I&apos;m
              </p>

              <h1 className="text-5xl font-black leading-tight sm:text-7xl">
                Hasbi <span className="gradient-text">Ali Firdaus</span>
              </h1>

              <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">
                Senior Software Engineer & Technical Lead
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                I build scalable web applications, backend services and
                distributed systems with a strong focus on clean architecture,
                performance and maintainability.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
                >
                  View Projects
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white hover:bg-white/5"
                >
                  Contact Me
                  <Mail size={18} />
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-gray-300 hover:bg-white/5"
                >
                  <Download size={17} />
                  CV
                </a>
              </div>

              <div className="mt-10 flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={16} />
                Indonesia
              </div>
            </div>

            {/* RIGHT - PROFILE */}
            <div className="relative flex justify-center lg:justify-end">

              {/* Glow */}
              <div className="absolute h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

              {/* Image container */}
              <div className="relative">

                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 opacity-20 blur-xl" />

                <div className="relative h-72 w-72 overflow-hidden rounded-full border border-white/10 bg-white/5 p-2 shadow-2xl sm:h-96 sm:w-96">
                  <Image
                    src="/images/foto_profile.png"
                    alt="Hasbi Ali Firdaus"
                    width={500}
                    height={500}
                    priority
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                {/* Experience Badge */}
                <div className="glass absolute -bottom-4 -left-6 rounded-2xl px-5 py-4 shadow-xl">
                  <div className="text-2xl font-black gradient-text">
                    10+
                  </div>
                  <div className="text-xs text-gray-400">
                    Years Experience
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section id="about" className="border-y border-white/5 bg-white/[.015] py-24">
          <div className="container-page">
            <SectionTitle eyebrow="About Me" title="Engineering with business impact." description="Replace this paragraph with your professional summary, years of experience, leadership experience, and the type of problems you enjoy solving." />
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                ["10+", "Years Experience"],
                ["30+", "Projects Delivered"],
                ["10+", "Technologies"],
              ].map(([value, label]) => (
                <div key={label} className="glass rounded-2xl p-7">
                  <div className="text-4xl font-black gradient-text">{value}</div>
                  <div className="mt-2 text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="container-page py-24">
          <SectionTitle eyebrow="Skills" title="My technical toolbox" description="Organize your skills around the kind of work you want recruiters and clients to notice." />
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map(({ icon: Icon, title, items }) => (
              <div key={title} className="glass rounded-2xl p-7">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl bg-violet-400/10 p-3 text-violet-300"><Icon size={22}/></div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => <span key={item} className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-300">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="border-y border-white/5 bg-white/[.015]"
        >
          <ExpProSlider
            eyebrow="Portfolio"
            title="Selected Projects"
            description="Click any project to explore the details, responsibilities and technologies used."
            items={projects}
            accent="cyan"
          />
        </section>

        <section id="experience">
          <ExpProSlider
            eyebrow="Experience"
            title="Professional Journey"
            description="Explore my professional experience, responsibilities and key achievements."
            items={experiences}
            accent="violet"
          />
        </section>

        <section id="contact" className="py-24">
          <div className="container-page">
            <div className="overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 to-cyan-400/5 p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[.25em] text-violet-300">Contact</p>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">Let&apos;s build something great.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-gray-400">
                Available for senior engineering, technical lead and software architecture opportunities.
              </p>
              <a href="mailto:hasbialifirdaus001@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black">
                <Mail size={18}/> hasbialifirdaus001@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8">
        <div className="container-page flex flex-col justify-between gap-3 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 Your Name. All rights reserved.</p>
          <a href="#" className="hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}