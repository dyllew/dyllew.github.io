import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import components below
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import Artwork from './components/Artwork';
import Resume from './components/Resume';
import MLForCrowdsourcedCrisisData from './components/project-pages/ml-for-crowdsourced-crisis-data/MLForCrowdsourcedCrisisData';
import ImageAnalysisCarousel from './components/project-pages/ml-for-crowdsourced-crisis-data/ImageAnalysisCarousel';
import TextAnalysisCarousel from './components/project-pages/ml-for-crowdsourced-crisis-data/TextAnalysisCarousel';
import NLPIntDevGrayLit from './components/project-pages/NLPIntDevGrayLit';
import GNNsTaxiPrediction from './components/project-pages/GNNsTaxiPrediction';
import TrumpSpeechAnalysis from './components/project-pages/TrumpSpeechAnalysis';
import ClimateChangeNews from './components/project-pages/ClimateChangeNews';
import Boomerang from './components/project-pages/Boomerang';
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
        path: '/projects/ml-for-crowdsourced-crisis-data',
        component: MLForCrowdsourcedCrisisData
    },
    {
        path: '/projects/ml-for-crowdsourced-crisis-data/image-analysis-module',
        component: ImageAnalysisCarousel
    },
    {
        path: '/projects/ml-for-crowdsourced-crisis-data/text-analysis-module',
        component: TextAnalysisCarousel
    },
    {
        path: '/projects/nlp-for-int-dev-gray-lit',
        component: NLPIntDevGrayLit
    },
    {
        path: '/projects/trump-speech-analysis',
        component: TrumpSpeechAnalysis
    },
    {
        path: '/projects/gnns-taxi-prediction',
        component: GNNsTaxiPrediction
    },
    {
        path: '/projects/climate-change-news',
        component: ClimateChangeNews
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