import wbuhHva from '../img/screens/wbuh-hva.jpg';
import imaginuity from '../img/screens/imaginuity.jpg';
import dallasMarketCenter from '../img/screens/dallas-market-center.jpg';
import dallasJet from '../img/screens/dallas-jet.jpg';
import mockChat from '../img/screens/mock-chat.jpg';
import mockFmll from '../img/screens/mock-fmll.jpg';
import mockTbb from '../img/screens/mock-tbb.jpg';
import mockNpm1 from '../img/screens/mock-npm1.jpg';
import mockWubsub from '../img/screens/mock-wubsub.jpg';
import mockMarketplace from '../img/screens/marketplace.jpg';

const colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
export const info = {
    firstName: 'Justin',
    lastName: 'Durkes',
    initials: 'jd',
    position: 'a Full-Stack & Generalist Developer',
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '📜',
            text: 'Certified Node.js developer'
        },
        {
            emoji: '💻',
            text: 'Kentico, WordPress, React, Astro, AWS...'
        },
        {
            emoji: '🌎',
            text: 'Based in Dallas, Texas'
        },
        {
            emoji: '🚀',
            text: 'Check out some of my work',
            link: '/projects'
        },
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: 'https://github.com/durkes',
            icon: 'fa fa-github',
            label: 'github'
        },
        {
            link: 'https://linkedin.com/in/durkes',
            icon: 'fa fa-linkedin',
            label: 'linkedin'
        },
        // {
        //     link: "https://x.com/",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
    ],
    bio: 'Hello, I\'m Justin! I build fast, scalable, and user-friendly web applications across the stack. I work with frameworks like React and Astro on the front end, Node.js and .NET on the back end, and providers like AWS and Cloudflare for infra and edge. I am Node.js certified and contributed some useful packages early on. I have hands-on experience with CMS migrations and development involving Kentico, WordPress, and custom proprietary solutions. In my current role, I lead the development for a multi-brand enterprise platform serving 900+ franchises, with a focus on performance, SEO, AEO, and conversion. Beyond code, I bring experience from leadership, operations, and project management roles. Lately, I\'ve fully adopted AI into my workflow and enjoy experimenting with new models and tools.',
    skills: {
        proficientWith: [
            // Backend
            'Node.js', 'Next.js', 'Astro', 'Express', 'Kentico', 'WordPress', '.NET', 'C#', 'PHP', 'Python',

            // Frontend
            'HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind', 'Bootstrap',

            // Databases & Storage
            'SQL', 'MongoDB', 'DynamoDB', 'Redis',

            // Server & DevOps
            'Nginx', 'Cloudflare', 'AWS', 'CI/CD'
        ],
        exposedTo: []
    },
    hobbies: [
        {
            label: 'music_&_concerts.mp3',
            emoji: '🥁'
        },
        {
            label: 'friends_&_fam.tar.gz',
            emoji: '🍾'
        },
        {
            label: 'travel.pdf',
            emoji: '✈️'
        },
        {
            label: 'scuba_diving.mp4',
            emoji: '🐡'
        },
        {
            label: 'investing.csv',
            emoji: '📈'
        },
    ],
    portfolio: [
        {
            title: 'Dallas Market Center',
            description: 'More info on the project.',
            site: 'https://dallasmarketcenter.com/',
            image: dallasMarketCenter,
            alt: 'Dallas Market Center website screenshot'
        },
        {
            title: 'HomeVestors',
            description: 'More info on the project.',
            site: 'https://www.webuyuglyhouses.com/',
            image: wbuhHva,
            alt: 'We Buy Ugly Houses website screenshot'
        },
        {
            title: 'Dallas Jet',
            description: 'More info on the project.',
            site: 'https://www.dallasjet.com/',
            image: dallasJet,
            alt: 'Dallas Jet International website screenshot'
        },
        {
            title: 'Imaginuity Marketing Agency',
            description: 'More info on the project.',
            site: 'https://www.imaginuity.com/',
            image: imaginuity,
            alt: 'Imaginuity website screenshot'
        },
        {
            title: 'React Marketplace MVP',
            description: 'More info on the project.',
            // demo: 'https://marketplace-demo.hostw.xyz/',
            demo: null,
            source: 'https://github.com/durkes/marketplace-mvp',
            image: mockMarketplace,
            alt: 'React Marketplace MVP screenshot'
        },
        {
            title: 'React Chat UI',
            description: 'More info on the project.',
            demo: 'https://durkes.net/react-chat-ui/',
            source: 'https://github.com/durkes/react-chat-ui',
            image: mockChat,
            alt: 'React Chat UI screenshot'
        },
        {
            title: 'FM Lawn & Landscape',
            description: 'More info on the project.',
            site: 'https://durkes.net/fmll-website/',
            source: 'https://github.com/durkes/fmll-website',
            image: mockFmll,
            alt: 'FMLL website screenshot'
        },
        {
            title: 'The Backyard Butler',
            description: 'More info on the project.',
            site: 'https://tbb.pages.dev/',
            source: 'https://github.com/durkes/tbb-website',
            image: mockTbb,
            alt: 'Client website screenshot'
        },
        {
            title: 'node-router: Node.js Middleware',
            description: 'More info on the project.',
            npm: 'https://www.npmjs.com/package/node-router',
            source: 'https://github.com/durkes/node-router',
            image: mockNpm1,
            alt: 'node-router NPM package screenshot'
        },
        {
            title: 'wubsub: Node.js PubSub Solution',
            description: 'More info on the project.',
            npm: 'https://www.npmjs.com/package/wubsub',
            source: 'https://github.com/durkes/wubsub',
            image: mockWubsub,
            alt: 'wubsub NPM package screenshot'
        },
    ]
};