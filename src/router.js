import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import components below
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import Artwork from './components/Artwork';
import Resume from './components/Resume';
import Boomerang from './components/Boomerang';
import TrumpSpeechAnalysis from './components/TrumpSpeechAnalysis';
import NotFoundComponent from './components/NotFoundComponent';

// store router -> components mappings
const router = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/projects/boomerang',
        component: Boomerang
    },
    {
        path: '/projects/trump-speech-analysis',
        component: TrumpSpeechAnalysis
    },
    {
        path: '/artwork',
        component: Artwork
    },
    {
        path: '/resume',
        component: Resume
    },
    { 
        path: '/404', 
        component: NotFoundComponent
    },  
    {
        path: '*',
        redirect: '/404'
    }

];

const vueRouter = new VueRouter({
    mode: 'hash',
    routes: router
});

export default vueRouter;