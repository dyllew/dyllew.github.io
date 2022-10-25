import $ from 'jquery';

export const MAIN_PROJECTS = [
    {   
        id: "ml-for-crowdsourced-crisis-data",
        link: "/projects/ml-for-crowdsourced-crisis-data", 
        src: {imgFilename: "masters-thesis-overview.png"},
        title: "Towards Automated Assessment of Crowdsourced Crisis Reporting for Enhanced Crisis Awareness and Response", 
        desc: "Masters thesis/Research project on constructing labeled crowdsourced crisis datasets and developing machine learning models to assist crisis managers in gaining situational awareness from crowdsourced crisis data for enhanced crisis response.",
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
        desc: "NLP project which investigates Named Entity Recognition (NER) and K-means Clustering on a corpus of 244 documents of International Development literature papers for streamlining evidence synthesis process on international development gray literature.",
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
        desc: "ML Module focused on Constructing human-annotated datasets and assessing the quality of the annotations, developing CNN models to classify the crowdsourced crisis image data for various classification tasks, and conducting image annotation workshops with crisis managers from various contexts.",
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
        desc: "ML Module focused on Classification of crowdsourced crisis text (in JA) for Human Risk informed from the identified information needs and priorities of crisis managers and Clustering of crisis text data for uncovering semantic categories in the data.",
        projectBtnText: "See Module Details",
        projectWebsite: {
            id: "button-holder",
            btnText: "See Related Code",
            url: "https://github.com/dyllew/towards-automated-assessment-of-crowdsourced-crisis-reporting/tree/main/Text%20Analysis%20Module"
        }
    }
]

export function scrollUpFunc() {
    window.scrollTo(0, 0);
}

export function enableScrollUpOnCarousel(carouselID) {
    $(carouselID).on('slid.bs.carousel', function() {
        scrollUpFunc();
    });
}

export function enableSwipeOnCarousel(carouselID) {
    $(carouselID).on('touchstart', function(event){
        const xClick = event.originalEvent.touches[0].pageX;
        $(this).one('touchmove', function(event) {
            const xMove = event.originalEvent.touches[0].pageX;
            const sensitivityInPx = 5;
  
            if( Math.floor(xClick - xMove) > sensitivityInPx ){
                $(this).carousel('next')
            }
            else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
                $(this).carousel('prev')
            }
        });
        $(this).on('touchend', function(){
            $(this).off('touchmove');
        });
      });
}