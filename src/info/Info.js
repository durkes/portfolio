import self from '../img/self.jpg';
import mockChat from '../img/mock-chat.png';
import mockFmll from '../img/mock-fmll.png';
import mockTbb from '../img/mock-tbb.png';
import mockNpm1 from '../img/mock-npm1.png';
import mockWubsub from '../img/mock-wubsub.png';
import mockMarketplace from '../img/mock-marketplace.png';

export const colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
export const info = {
    firstName: 'Justin',
    lastName: 'Durkes',
    initials: 'jd',
    position: 'a Front-End & Generalist Developer',
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '📜',
            text: 'certified Node.js developer'
        },
        {
            emoji: '💻',
            text: 'React, JavaScript, HTML, SCSS, .NET, C#'
        },
        {
            emoji: '🌎',
            text: 'based in Dallas, Texas'
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
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
    ],
    bio: 'Hello, I\'m Justin! I build fast, scalable, and user-friendly web applications, working across the stack with React, Node.js, .NET, and more. I have hands-on experience with platforms like Kentico, Next.js, and custom proprietary solutions. I\'m a certified Node.js Developer (StrongLoop), hold a degree in IT/Web Design, and completed LC101 through LaunchCode. I started building websites before CSS was a thing :) These days, I enjoy building and experimenting with AI.',
    skills: {
        proficientWith: [
            // Backend
            'Node.js', 'Next.js', 'Express', 'Kentico', '.NET', 'C#', 'PHP', 'Python',

            // Frontend
            'HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind', 'Bootstrap',

            // Databases & Storage
            'SQL', 'NoSQL', 'Redis',

            // Server & DevOps
            'Nginx', 'Cloudflare', 'AWS'
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
            title: 'React Marketplace MVP',
            description: 'More info on the project.',
            // live: 'https://marketplace-demo.hostw.xyz/',
            live: null,
            source: 'https://github.com/durkes/marketplace-mvp',
            image: mockMarketplace,
            alt: 'React Marketplace MVP screenshot'
        },
        {
            title: 'React Chat UI',
            description: 'More info on the project.',
            live: 'https://durkes.net/react-chat-ui/',
            source: 'https://github.com/durkes/react-chat-ui',
            image: mockChat,
            alt: 'React Chat UI screenshot'
        },
        {
            title: 'Client Website (FMLL)',
            description: 'More info on the project.',
            live: 'https://durkes.net/fmll-website/',
            source: 'https://github.com/durkes/fmll-website',
            image: mockFmll,
            alt: 'FMLL website screenshot'
        },
        {
            title: 'Client Website (TBB)',
            description: 'More info on the project.',
            live: 'https://thebackyardbutler.com/',
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