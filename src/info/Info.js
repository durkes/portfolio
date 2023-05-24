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
    position: 'a Front-End & Node.js Developer',
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '📜',
            text: 'certified Node.js Developer'
        },
        {
            emoji: '😎',
            text: 'JavaScript, React, HTML, CSS, Sass...'
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
    bio: 'Hello! I\'m Justin. I\'m a software developer specializing in React and Node.js. I love coding in JavaScript but TypeScript is growing on me and I\'m flexible with other languages as needed. I have a degree in IT/Web Design, received Node.js developer certification from StrongLoop, and completed LC101 through LaunchCode. I built my first website before CSS was a thing :) Over the years I\'ve worked with many frameworks and libraries, and like to keep a pulse on the latest and greatest tech and methodologies.',
    skills:
    {
        proficientWith: ['html', 'css', 'sass', 'javascript', 'sql', 'nosql', 'react', 'tailwind', 'bootstrap', 'node.js', 'express', 'nginx', 'redis', 'typescript', 'next.js', 'python', 'php'],
        exposedTo: []
    }
    ,
    hobbies: [
        {
            label: 'music and concerts',
            emoji: '🥁'
        },
        {
            label: 'hanging w/ friends & fam',
            emoji: '🍾'
        },
        {
            label: 'travel',
            emoji: '✈️'
        },
        {
            label: 'scuba diving',
            emoji: '🐡'
        },
        {
            label: 'finance / investing',
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
            image: mockMarketplace
        },
        {
            title: 'React Chat UI',
            description: 'More info on the project.',
            live: 'https://durkes.net/react-chat-ui/',
            source: 'https://github.com/durkes/react-chat-ui',
            image: mockChat
        },
        {
            title: 'Client Website (FMLL)',
            description: 'More info on the project.',
            live: 'https://durkes.net/fmll-website/',
            source: 'https://github.com/durkes/fmll-website',
            image: mockFmll
        },
        {
            title: 'Client Website (TBB)',
            description: 'More info on the project.',
            live: 'https://thebackyardbutler.com/',
            source: 'https://github.com/durkes/tbb-website',
            image: mockTbb
        },
        {
            title: 'node-router NPM Package',
            description: 'More info on the project.',
            live: 'https://www.npmjs.com/package/node-router',
            source: 'https://github.com/durkes/node-router',
            image: mockNpm1
        },
        {
            title: 'wubsub: Node.js PubSub Solution',
            description: 'More info on the project.',
            live: 'https://www.npmjs.com/package/wubsub',
            source: 'https://github.com/durkes/wubsub',
            image: mockWubsub
        },
    ]
};