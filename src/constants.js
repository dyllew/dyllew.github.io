import { Carousel } from 'bootstrap';

export const MAIN_PROJECTS = [
    {   
        id: "ml-for-crowdsourced-crisis-data",
        link: "/projects/ml-for-crowdsourced-crisis-data", 
        src: {imgFilename: "masters-thesis-overview.png"},
        title: "Towards Automated Assessment of Crowdsourced Crisis Reporting for Enhanced Crisis Awareness and Response", 
        desc: "Research project focused on developing machine learning methodologies to assist crisis managers in gaining situational awareness from crowdsourced crisis data for enhanced crisis response.",
        projectWebsite: {
            id: "button-holder",
            btnText: "See Thesis Document",
            url: "https://dspace.mit.edu/handle/1721.1/144911"
        }
    },
    {   
        id: "nlp-for-int-dev-gray-lit",
        link: "/projects/nlp-for-int-dev-gray-lit", 
        src: {imgFilename: "int-dev-results.png"},
        title: "Information Extraction and Unsupervised Methods for Streamlining Evidence Synthesis in International Development Gray Literature", 
        desc: "NLP project which investigates Named Entity Recognition (NER) and K-means Clustering on a corpus of 244 documents of International Development literature papers for streamlining the evidence synthesis process on international development gray literature.",
        projectWebsite: {
            id: "button-holder",
            btnText: "Presentation PDF",
            url: "./assets/int-dev-gray-lit.pdf"
        }
    },
    {   
        id: "climate-change-news",
        link: "/projects/climate-change-news", 
        src: {imgFilename: "final-project-overview.png"},
        title: "Evolution of the U.S. TV News Narrative on Climate Change", 
        desc: "Data Science & NLP project in Python that investigated the evolution of climate change coverage frequency & content between popular U.S. TV News Networks CNN, Fox News, and MSNBC over July 2009-January 2020.",
        projectWebsite: {
            id: "button-holder",
            btnText: "Poster PDF",
            url: "./assets/IDS131_Poster.pdf"
        }
    },
    {   
        id: "taxi-pred-img",
        link: "/projects/gnns-taxi-prediction", 
        src: {imgFilename: "fare-surge-graph-pred.png"},
        title: "Graph Neural Networks for NYC Taxi Fare & Demand Surge Prediction", 
        desc: "Machine Learning project in Python which investigated graph neural networks (GNNs) for the tasks of NYC taxi fare and demand surge prediction."
    },
    {   
        id: "trump-img",
        link: "/projects/trump-speech-analysis", 
        src: {imgFilename: "FrequencyPlot.png", sizeClass: 'w-75'},
        title: "Trump Campaign Speech Analysis", 
        desc: "Data Science project in R which investigated how Donald Trump's 2016 campaign speeches may have influenced public sentiment on a regional level.",
        projectWebsite: {
            id: "button-holder",
            btnText: "Poster PDF",
            url: "./assets/17_835_Poster.pdf"
        }
    },
    {   
        id: "boomerang-img",
        link: "/projects/boomerang", 
        src: {imgFilename: "boomerang-home.jpg"},
        title: "Boomerang",
        desc: "Boomerang is a full-stack web application where users can efficiently and reliably borrow items from others within their communities.",
        projectWebsite: {
            id: "button-holder",
            btnText: "Go to the Boomerang website",
            url: "https://team-aesthetech-boomerang.herokuapp.com/"
        }
    },
]

export const ML_MODULES = [
    {   
        id: "image-module-img",
        link: "/projects/ml-for-crowdsourced-crisis-data/image-analysis-module", 
        src: {imgFilename: "image-analysis-module-modified.png"},
        title: "Image Analysis Module", 
        desc: "ML Module focused on constructing human-annotated image datasets and assessing the quality of the annotations, developing Convolutional Neural Network (CNN) models to classify the crowdsourced crisis image data for various classification tasks, and conducting image annotation workshops with crisis managers from various contexts for focus-group research / qualitative evaluation.",
        projectBtnText: "See Module Details",
        projectWebsite: {
            id: "button-holder",
            btnText: "See Related Code",
            url: "https://github.com/dyllew/towards-automated-assessment-of-crowdsourced-crisis-reporting/tree/main/Image%20Analysis%20Module"
        }
    },
    {   
        id: "text-module-img",
        link: "/projects/ml-for-crowdsourced-crisis-data/text-analysis-module", 
        src: {imgFilename: "text-analysis-module.png"},
        title: "Text Analysis Module", 
        desc: "ML Module focused on the classification of crowdsourced crisis text (in Japanese (JA)) for assessing Human Risk informed from the identified information needs and priorities of crisis managers and Clustering of crisis text data for uncovering semantic categories in the data for future classification tasks.",
        projectBtnText: "See Module Details",
        projectWebsite: {
            id: "button-holder",
            btnText: "See Related Code",
            url: "https://github.com/dyllew/towards-automated-assessment-of-crowdsourced-crisis-reporting/tree/main/Text%20Analysis%20Module"
        }
    }
]

export function scrollUpFunc(behavior = 'smooth') {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: behavior
    })
}

export function enableSwipeOnCarousel(carouselID) {
    const carouselElem = document.getElementById(carouselID);
    const carousel = new Carousel(`#${carouselID}`);
    carouselElem.addEventListener('slid.bs.carousel', () => {
        scrollUpFunc();
    });
    carouselElem.addEventListener('touchstart', function(event){
        const xClick = event.touches[0].pageX;
        const touchMoveHandler = makeTouchMoveHandler(carousel, xClick);
        carouselElem.addEventListener('touchmove', touchMoveHandler, {once: true});
        carouselElem.addEventListener('touchend', function(){
            carouselElem.removeEventListener('touchmove', touchMoveHandler, {once: true});
        });
      });
}

function makeTouchMoveHandler(carousel, xClick) {
    const touchMoveHandler = event => {
        const xMove = event.touches[0].pageX;
        const sensitivityInPx = 10;
        if ( Math.floor(xClick - xMove) > sensitivityInPx ) {
            carousel.next();
        }
        else if ( Math.floor(xClick - xMove) < -sensitivityInPx ) {
            carousel.prev();
        }
    }
    return touchMoveHandler;
}
