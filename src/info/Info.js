import self from '../img/self.jpg';
import mockChat from '../img/mock-chat.png';
import mockFmll from '../img/mock-fmll.png';
import mockTbb from '../img/mock-tbb.png';
import mockNpm1 from '../img/mock-npm1.png';
import mockWubsub from '../img/mock-wubsub.png';
import mockThis from '../img/mock-portfolio.png';
import mockMarketplace from '../img/mock-marketplace.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export const colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: 'Justin',
    lastName: 'Durkes',
    initials: 'jd', // the example uses first and last, but feel free to use three or more if you like.
    position: 'a Full Stack Developer',
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
            text: 'based in the US'
        },
        {
            emoji: '📧',
            text: 'durkes@gmail.com'
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
    bio: 'Hello! I\'m Justin. I\'m a software developer specializing in React and Node.js. I love coding in JavaScript but TypeScript is growing on me and I\'m flexible with other languages as needed. I have a degree in IT/Web Design, received Node.js developer certification from StrongLoop, and completed LC101 through LaunchCode. I built my first website before CSS was a thing :) Over the years I\'ve tried countless frameworks and libraries, and like to keep a pulse on the latest and greatest.',
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
            label: 'finance /investing',
            emoji: '📈'
        },
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: 'React Marketplace MVP',
            description: 'More info on the project.',
            live: 'https://marketplace-demo.hostw.xyz/',
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
            live: 'https://thebackyardbutler.com/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: 'https://github.com/durkes/tbb-website', // this should be a link to the **repository** of the project, where the code is hosted.
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
        {
            title: 'Portfolio Homepage',
            description: 'More info on the project.',
            live: 'https://durkes.net/portfolio',
            source: 'https://github.com/durkes/portfolio',
            image: mockThis
        },
    ]
};