<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-12">  
            <h3>Towards Automated Assessment of Crowdsourced Crisis Reporting for Enhanced Crisis Awareness and Response</h3>
        </div>
        <div class="col-md-8">
            <div id="ccCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                <ol class="carousel-indicators">
                    <li data-target="#ccCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#ccCarousel" data-slide-to="1"></li>
                    <li data-target="#ccCarousel" data-slide-to="2"></li>
                    <li data-target="#ccCarousel" data-slide-to="3"></li>
                    <li data-target="#ccCarousel" data-slide-to="4"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active cc-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/masters-thesis-overview.png" alt="First slide">
                        <div class="carousel-text">
                            <h5>Thesis Document & Code and Related Open-source Python Packages</h5>
                            <p>
                                Master of Engineering in Electrical Engineering and Computer Science thesis I wrote as a research assistant at the Urban Risk Lab (URL) at MIT which investigates 
                                the development of machine learning models to assist crisis managers in gaining situational awareness from crowdsourced crisis data for enhanced crisis response.
                                This presentation introduces the motivation behind this work, explains how the investigation unfolded, and reports the main findings and implications from the research.
                                <br>
                                <br>
                                The published thesis document can be found <a href="https://dspace.mit.edu/handle/1721.1/144911" target="_blank">here.</a>
                                <br>
                                <br>
                                The code for this thesis was written in Python using Jupyter Notebooks. <a href="https://github.com/dyllew/towards-automated-assessment-of-crowdsourced-crisis-reporting" target="_blank">Here's the GitHub Repo.</a>
                                <br>
                                Relatedly, with this thesis, we produced two open-source Python packages to better enable readability, reusability, and reproducibility of the computational utilities derived 
                                for performing various experiments and analysis on crowdsourced crisis image and text data:
                                <ul>
                                    <li><a href="https://pypi.org/project/url-image-module/0.27.0/" target="_blank">URL Image Module</a> - Utilities for training, testing, and predicting with pretrained CNNs for classifying
                                        crowdsourced crisis image data and constructing & analyzing annotated datasets</li>
                                    <li><a href="https://pypi.org/project/url-text-module/0.6.1/" target="_blank">URL Text Module</a> - Utilities for featurizing crisis text data, training and testing with a variety of classification machine learning models, 
                                        and visualizing clusters of featurized text data</li>
                                </ul>
                                <br>
                                This research was supported by a grant from Google.org and the Tides Foundation.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5><strong>Abstract</strong></h5>
                            <p>
                               The availability of information during a climate crisis event is critical for crisis managers to assess and respond to crisis impact. 
                               During crisis events, affected residents post real-time crisis updates on platforms such as <a href="https://riskmap.mit.edu/japan.html" target="_blank">RiskMap</a> and <a href="https://twitter.com/?lang=en" target="_blank">Twitter</a>. 
                               These updates provide localized information, which has the potential to enhance crisis awareness and response. 
                               However, with limited resources, crisis managers may endure information overload from the inundation of these updates. 
                               Prior work has demonstrated the potential of machine learning (ML) methodologies to mitigate this problem. 
                               We have identified limitations in the prior work including the lack of involvement of crisis managers in the development and evaluation of a ML methodology.
                            </p>
                            <p>
                                To address these limitations, we propose a novel framework and ML methodology which investigate the efficacy of various ML methods in enhancing crisis awareness 
                                and response beyond model performance metrics. This framework aims to iteratively embed the information needs and priorities of crisis managers during crisis 
                                into the design of the ML methodology. We cooperated with crisis managers in Fukuchiyama City (FC), a city in Japan which is susceptible to flood events, and 
                                analyzed crowdsourced crisis image and text data from past FC flood events. We devised the Flood Presence image classification task, constructed Train/Dev/Test splits, 
                                and annotated images from FC. We report a weighted F1 score of 92.1% on the test split and 82.5% on the FC images. Using the results of our image analysis 
                                ML methodology and the insights we gained from crisis managers, we iterated on the design of our text analysis ML methodology. This led to the creation of the 
                                Human Risk text classification task which is tailored to a subset of the identified information needs of the crisis managers. 
                                To align with the priorities of crisis managers for this task, we determined the model evaluation metric to be the F2 score. 
                                We report an F2 score of 92.8% on an FC crisis text test dataset, which is a significant improvement over the baseline score of 43.4%. 
                            </p>
                            <h5><strong>Research Question</strong></h5>
                            <strong id="research-question">
                                In collaborating with crisis managers, how can machine learning methods be utilized and evaluated to effectively reduce the information overload of crowdsourced crisis data on
                                crisis managers during flood crisis events for enhanced crisis awareness and response?
                            </strong>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5>Main Research Aims</h5>
                            <p id="research-aims">
                                <ol>
                                    <li><strong>To reduce information overload during a crisis</strong> using accurate, efficient, automated image and text classification of crisis reports by machine learning (ML) models during crisis.</li>
                                    <li><strong>To embed tacit knowledge, information needs and decision-making priorities of emergency managers</strong> into the designed ML methodology.</li>
                                    <li><strong>To evaluate methodology in collaboration with crisis managers</strong>, e.g. crisis managers in Fukuchiyama, Japan.</li>
                                    <li><strong>To incorporate evaluation results and iterate on the ML methodology</strong> in order to better reach aim of using AI to assist crisis managers during crisis.</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/final-project-overview.png" alt="Second slide">
                        <div class="carousel-text">
                            <h5>Results</h5>
                            <p> 
                                Climate change TV news media coverage frequency and 
                                content appears to be significantly driven by political events
                                 more so than environmental factors. The frequency of climate change mentions 
                                 follow similar patterns by network, with clear influence of political events such as 
                                 the 2009 UNCCC, 2015 Paris Agreement, and 2019 Democratic primary debates driving 
                                 climate news coverage. This is reflected in the content of the 
                                 climate mentions over time as words describing the political events 
                                 occurring at the time tend to be the most important words for each of the networks 
                                 in that specific year coupled with the tendency of different networks in the same 
                                 year to have high content similarity. Topic analysis also finds that the majority of 15 topics 
                                 found in topic analysis had significant changes in mean on some of the topics at the time of 
                                 Donald Trump's inauguration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
  name: 'MLForCrowdsourcedCrisisData'
}
</script>

<style scoped>

p {
    text-align: left;
}

h1, h3, h5 {
    color: white;
}

a {
    color: hotpink;
}

a:hover {
    color: white;
}

h1, h3, h5 {
    color: white;
}

.carousel-text {
    margin-top: 10px;
    margin-bottom: 40px;
}

.cc-carousel-item img {
  max-height: 30vw;
}

#overview-pic {
    margin-top: 10px;
    margin-bottom: 40px;
    width: 90vh;
    height: 50vh;
}

#research-question {
    text-align: center;
    color: white;
}

#research-aims {

}

@media (max-width: 800px) {
    .cc-carousel-item img {
        max-height: 80vw;
    }
}
</style>