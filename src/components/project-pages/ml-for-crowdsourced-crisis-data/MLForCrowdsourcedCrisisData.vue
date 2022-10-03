<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-8">  
            <h3>Towards Automated Assessment of Crowdsourced Crisis Reporting for Enhanced Crisis Awareness and Response</h3>
        </div>
        <div class="col-md-10">
            <div id="ccCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                <ol class="carousel-indicators">
                    <li data-target="#ccCarousel" data-slide-to="0" class="active" @click="scrollUp"><div class="tooltip"><span class="tooltiptext">Thesis Document & Code</span></div></li>
                    <li data-target="#ccCarousel" data-slide-to="1" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="2" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="3" @click="scrollUp"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active cc-carousel-item">
                        <img class="rounded img-fluid" id="overview-pic" src="../../../../public/assets/masters-thesis-overview.png" alt="First slide">
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
                                    <li><a href="https://pypi.org/project/url-image-module/0.27.0/" target="_blank">URL Image Module</a> - Utilities for training, testing, and predicting with pretrained Convolutional Neural Networks for classifying
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
                                In collaborating with crisis managers, how can machine learning methods be utilized and evaluated to effectively reduce the information overload of crowdsourced data on
                                crisis managers during flood events for enhanced crisis awareness and response?
                            </strong>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5>Main Research Aims</h5>
                            <p id="research-aims">
                                <ol>
                                    <li><strong>To reduce information overload during a crisis</strong> using accurate, efficient, automated image and text classification of crisis reports by machine learning (ML) models during crisis.</li>
                                    <li><strong>To embed tacit knowledge, information needs, and decision-making priorities of crisis managers</strong> into the designed ML methodology.</li>
                                    <li><strong>To evaluate methodology in collaboration with crisis managers</strong>, e.g. crisis managers in Fukuchiyama, Japan.</li>
                                    <li><strong>To incorporate evaluation results and iterate on the ML methodology</strong> in order to better reach aim of using AI to assist crisis managers during crisis.</li>
                                </ol>
                                We investigate various ML techniques
                                that can be applied to mitigate information overload for crisis managers during crisis
                                events while also assessing if those techniques can satisfy the information needs and
                                priorities of crisis managers through qualitative and quantitative evaluation.
                            </p>
                            <h5>Novel Framework</h5>
                            <p>
                                To achieve the aims above we develop a novel framework in the crisis informatics community consisting of the following components:
                                <ul>
                                    <li><strong>Classification Task Creation</strong> - We develop new classification tasks using labels provided to us by crisis managers
                                        and labels present in open-source datasets</li>
                                    <li><strong>Data Annotation Procedure</strong> - We open-souce the annotation guide we develop for greater transparency into the procurement of human-annotated
                                        that is used to train and evaluate ML models</li>
                                    <li><strong>Interannotator Agreement/Data Reliability Analysis</strong> - After performing an annotation effort on data provided by crisis managers, we analyze the quality
                                        of the annotations through interannotator agreement analysis to demonstrate the importance of understanding data quality prior to using it for ML purposes</li>
                                    <li><strong>Model Development and Evaluation; Per-Class Performance Analysis</strong> - The metrics we used to evaluate models are derived either from metrics reported in the literature or, more notably, metrics determined from insights 
                                        provided by crisis managers directly. Additionally, we consider issues of class imbalance and report per-class performance and confusion matrices to provide more granular insight
                                        into model performance. Finally, we establish baselines to compare against the models we develop to assess the degree to which the models we develop outperform the baseline</li>
                                    <li><strong>Qualitative Analysis through Workshops with Crisis Managers</strong> - We sought to cooperate with crisis managers with the intent of using this framework to
                                        iteratively design ML systems, such as the specific classification tasks performed by the models and their associated performance metric, by iteratively incorporating feedback and insights form
                                        crisis managers, so that the system better aligns with their information needs and decision-making priorities</li>
                                </ul>
                                This framework situates <i>Model Development and Evaluation</i>, which is commonplace in prior work, as part of a larger, contextualized analysis. On that note, we
                                expand on the notion of <i>Model Development and Evaluation</i> beyond what is typically seen in the prior work.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Machine Learning Methodology</h5>
                            With crisis management partners in Fukuchiyama (FC), Japan, we present our framework through two ML modules:<br> Image Analysis Module & Text Analysis Module<br>
                        <br>
                        <p>
                            We note that our findings from the Image Analysis Module influenced the design of the Text Analysis Module in order to meet our aim of
                            developing machine learning systems for crisis management which iteratively incorporate the feedback received from crisis managers.
                        </p>
                        <div class="row align-items-center justify-content-center pb-5">
                            <div class="col-6 col-md-6 col-lg-6 pt-3" v-for="module in modules" :key="module.link">
                                <ProjectCard :project="module"></ProjectCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCard from '../../ProjectCard.vue';
import { ML_MODULES, scrollUpFunc } from '../../../constants.js';

export default {
  name: 'MLForCrowdsourcedCrisisData',
  components: {
    ProjectCard
  },
  data() {
    return {
        modules: ML_MODULES
    }
  },
  methods: {
    scrollUp() {
        scrollUpFunc();
    }
  }
}
</script>

<style scoped>

p {
    text-align: left;
}

h1, h3, h5, h6 {
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

#overview-pic {
    margin-top: 10px;
    margin-bottom: 40px;
    width: 90vh;
    height: 40vh;
}

#research-question {
    text-align: center;
    color: white;
}

</style>