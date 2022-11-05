<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-8">  
            <h3>Towards Automated Assessment of Crowdsourced Crisis Reporting for Enhanced Crisis Awareness and Response</h3>
        </div>
        <div class="col-md-8">
            <div id="MLForCrowdsourcedCrisisDataCarousel" class="carousel slide">
                <ol class="carousel-indicators">
                    <li data-bs-target="#MLForCrowdsourcedCrisisDataCarousel" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#MLForCrowdsourcedCrisisDataCarousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#MLForCrowdsourcedCrisisDataCarousel" data-bs-slide-to="2"></li>
                    <li data-bs-target="#MLForCrowdsourcedCrisisDataCarousel" data-bs-slide-to="3"></li>
                    <li data-bs-target="#MLForCrowdsourcedCrisisDataCarousel" data-bs-slide-to="4"></li>
                    <li data-bs-target="#MLForCrowdsourcedCrisisDataCarousel" data-bs-slide-to="5"></li>
                    <li data-bs-target="#MLForCrowdsourcedCrisisDataCarousel" data-bs-slide-to="6"></li>
                    <li data-bs-target="#MLForCrowdsourcedCrisisDataCarousel" data-bs-slide-to="7"></li>
                    <li data-bs-target="#MLForCrowdsourcedCrisisDataCarousel" data-bs-slide-to="8"></li>
                    <li data-bs-target="#MLForCrowdsourcedCrisisDataCarousel" data-bs-slide-to="9"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active cc-carousel-item">
                        <div class="row align-items-center justify-content-around pb-4">
                            <div class="col-12">
                                <img class="rounded img-fluid" id="overview-pic" src="../../../../public/assets/masters-thesis-overview.png" alt="First slide">
                            </div>
                            <div class="col-12 col-md-9 pb-4">
                                <h5>Thesis Document & Code and Related Open-source Python Packages</h5>
                                <p>
                                    This was a project I worked on as part of my thesis that I wrote as a research assistant at the Urban Risk Lab (URL) at MIT for my Master of Engineering in Electrical Engineering and Computer Science degree. This research investigated 
                                    the development of machine learning models for assisting crisis managers in gaining situational awareness from crowdsourced crisis data for enhanced crisis response.
                                    This presentation briefly introduces the motivation behind this work, explains how the investigation unfolded (i.e. methodology), and discusses the main findings and implications from the research for the broader 
                                    crisis informatics community. 
                                    Added bonus at the end featuring an overview of adjacent work done conducted by undergrads that I supervised during my time on this
                                    project.
                                    <br>
                                    <br>
                                    The published thesis document can be found <a href="https://dspace.mit.edu/handle/1721.1/144911" target="_blank">here.</a>
                                    <br>
                                    <br>
                                    The code for this thesis was written in Python as packages we developed as well as Jupyter Notebooks. <a href="https://github.com/dyllew/towards-automated-assessment-of-crowdsourced-crisis-reporting" target="_blank">Here's the GitHub Repo.</a>
                                    <br>
                                    With this thesis, we produced two open-source Python packages to better enable readability, reusability, and reproducibility of the computational utilities derived 
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
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around pb-5">
                            <div class="col-12 col-md-9">
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
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around pb-5">
                            <div class="col-12 col-md-9">
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
                                        <li><strong><u>Classification Task Creation</u></strong> - We develop new classification tasks using labels provided to us by crisis managers
                                            and labels present in open-source datasets</li>
                                        <li><strong><u>Data Annotation Procedure</u></strong> - We open-souce the annotation guide we develop for greater transparency into the procurement of human-annotated data
                                            that is used to train and evaluate ML models</li>
                                        <li><strong><u>Interannotator Agreement/Data Reliability Analysis</u></strong> - After performing an annotation effort on data provided by crisis managers, we analyze the quality
                                            of the annotations through interannotator agreement analysis to demonstrate the importance of understanding data quality prior to using it for ML purposes</li>
                                        <li><strong><u>Model Development and Evaluation; Per-Class Performance Analysis</u></strong> - The metrics we used to evaluate models are derived either from metrics reported in the literature or, more notably, <strong>metrics determined from insights 
                                            provided by crisis managers directly</strong>. Additionally, we consider issues of class imbalance and report per-class performance and confusion matrices to provide more granular insight
                                            into model performance. Finally, we establish baselines to compare against the models we develop to assess the degree to which the models we develop outperform the baseline</li>
                                        <li><strong><u>Qualitative Analysis through Workshops with Crisis Managers</u></strong> - We sought to cooperate with crisis managers with the intent of using this framework to
                                            iteratively design ML systems, such as the specific classification tasks performed by the models and their associated performance metric(s), by iteratively incorporating feedback and insights from
                                            crisis managers, so that the system better aligns with their information needs and decision-making priorities</li>
                                    </ul>
                                    This framework situates <i>Model Development and Evaluation</i>, which is commonplace in prior work, as part of a larger, contextualized analysis. On that note, we
                                    expand on the notion of <i>Model Development and Evaluation</i> beyond what is typically seen in the prior work.
                                </p>
                            </div>   
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-center pb-4">
                            <div class="col-12 col-md-9">
                                <h5>Machine Learning Methodology</h5>
                                    With crisis management partners in Fukuchiyama (FC), Japan, we present our framework through two ML modules:<br> Image Analysis Module & Text Analysis Module<br>
                                <br>
                                <p>
                                    We note that our findings from the Image Analysis Module influenced the design of the Text Analysis Module in order to meet our aim of
                                    developing machine learning systems for crisis management which iteratively incorporate the feedback received from crisis managers.
                                </p>
                                <p>
                                    The presentations below describe details of the ML methodologies we developed and their associated results and discussions.
                                </p>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 pt-3" v-for="module in modules" :key="module.link">
                                <ProjectCard :project="module"></ProjectCard>
                            </div>
                            <div class="col-12 col-md-9 pt-4">
                                <p>
                                    In the next slides, we discuss the important implications of this study overall and summarize our contributions to the field of Crisis Informatics.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-center pb-4">
                            <div class="col-12 col-md-9">
                                <h4>Discussion & Implications of Study</h4>
                                <h5>Involvement of Crisis Managers in the development & iteration of ML methodology</h5>
                                <p>
                                    While crisis classification tasks have been published in the literature, to the best of our knowledge, <strong>this work is the first of its kind 
                                    to both involve & incorporate the insights of crisis managers into an ML methodology</strong> to reduce information overload during crisis. 
                                    This is best seen from the image annotation workshops we held with EOC and the incorporation of those results into our text analysis ML methodology.
                                </p>
                                <h5>Investigation of Non-English Crisis Text </h5>
                                <p>
                                    While we have developed the infrastructure to develop machine learning text models for any language, 
                                    <strong><u>we underscore our investigation of Japanese crisis text</u> as prior work has focused on applying NLP techniques to <u>predominantly English crisis text.</u></strong>
                                </p>
                                <h5>Contextualized Framework towards better human-centered design of an AI system</h5>
                                <p>
                                    <strong>Our novel framework contextualizes model performance (e.g. F1, F2, precision, etc.) as part of a broad approach to assessing the efficacy of using ML in 
                                    reducing information overload.</strong> That is, we consider other important aspects in the design of our system in order to better serve those 
                                    we aim to assist, crisis managers. We investigate classification task creation, data quality & interannotator agreement analysis,
                                    issues of class imbalance, involving crisis managers in the development process, and the determination of a performance metric 
                                    & corresponding performance baselines
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-center pb-4">
                            <div class="col-12 col-md-9">
                                <h4>Summary of Main Contribution</h4>
                                <p>
                                    With this thesis, we have introduced and exemplified a framework which aims to
                                    embed all of the mentioned considerations into the process of designing, developing,
                                    and iterating on a ML methodology for enhancing crisis awareness and
                                    response. <strong>Most notably, this framework situates model development and evaluation,
                                    which is commonplace in prior work, as one piece of a broader, contextualized understanding
                                    of the efficacy ML methodologies can have for crisis managers in mitigating
                                    information overload from crowdsourced crisis reports.</strong> Additionally, this framework
                                    <strong>promotes the iterative development of AI systems</strong> which is
                                    informed <strong>from the insights gained from engaging with crisis managers, aiming to
                                    address this gap in prior work.</strong>
                                </p>
                                <p>
                                    This framework is only the beginning for similar work in this domain, as the development
                                    of AI systems and ML methodologies for mitigating information overload
                                    of crisis managers has many complex intricacies for which we only scratch the surface
                                    in our attempt to broaden this discussion within the crisis informatics field. <strong>We contribute this
                                    framework and the full exhibition of the principles and analyses contained within it to
                                    work closer towards a goal worth striving for: enhanced crisis awareness and response
                                    from automated assessment of crowdsourced crisis reporting.</strong>
                                </p>
                                <p>
                                    In the next slides, we further detail the specifics of the other contributions of this thesis. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-center pb-4">
                            <div class="col-12 col-md-9">
                                <h4>Contributions 1/3</h4>
                                <h5>Open-source Python Packages/Code</h5>
                                <p>
                                    To ensure the reuse of the analysis conducted in this work, we release two open-source
                                    Python packages: One for the <a href="https://pypi.org/project/url-image-module/0.27.0/" target="_blank">Image Analysis Module</a> and the other for the <a href="https://pypi.org/project/url-text-module/0.6.1/" target="_blank">Text
                                    Analysis Module</a>. These packages include utilities for training, testing, and prediction using the models presented in this work, computing statistics for interannotator
                                    agreement, and computing metrics for model performance. For text data, there are also utilities for featurization of text, performing nested cross validation, and clustering.
                                    We note that there are utilities for plotting such as methods for producing the plots shown throughout this project.
                                </p>
                                <p>
                                    In addition to these packages, we release an <a href="https://github.com/dyllew/towards-automated-assessment-of-crowdsourced-crisis-reporting" target="_blank">open-source repository</a> containing
                                    Jupyter notebooks, relevant documents (e.g. the mentioned annotation guide), and other code required to reproduce the experiments and reuse the analysis
                                    conducted in this work.
                                </p>
                                <h5>Flood Presence Task Creation, Labeled Image Dataset, and Performance Benchmark</h5>
                                <p>
                                    Since we focused on flood crises, we defined the image prediction task of Flood Presence classification. 
                                    The Flood Presence task is the binary classification task of determining whether or not there is presence of flood in an image. We construct a
                                    labeled dataset for the task consisting of approx. 23.6𝑘 images by combining various open-source datasets which were labeled with labels useful for this task, although they
                                    were originally developed for other adjacent tasks. We contribute this dataset for
                                    further research in crisis informatics. In addition, we provide Train/Dev/Test splits
                                    and an associated benchmark performance on the test split using a state-of-the-art
                                    Convolutional Neural Network (CNN) model, EfficientNet-B1.
                                </p>
                                <h5>Data Annotation Procedure and Analysis of Interannotator Agreement</h5>
                                <p>
                                    We developed a procedure for annotating images in order to label the unlabeled image
                                    data provided to us by our partners in Fukuchiyama, Japan. This procedure included creating
                                    an annotation guide to assist annotators in their labeling. This guide included the
                                    name of each task, the names of the mutually-exclusive classes associated with each
                                    task, and an associated description and an example image for each class. We then had
                                    annotators from the Urban Risk Lab independently annotate the images using this
                                    guide.
                                </p>
                                <p>
                                    After the annotation effort was completed, we were able analyze the interannotator
                                    agreement between the annotators and construct ground-truth labels for these images.
                                    We computed interannotator reliability statistics to get a sense of how reproducible
                                    the annotation procedure was for each task as well as to have transparency of the
                                    data quality prior to using it for ML purposes. Finally, we created ground-truth
                                    datasets using these labels for the Fukuchiyama images to use in evaluating the image
                                    classification models we developed.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-center pb-4">
                            <div class="col-12 col-md-9">
                                <h4>Contributions 2/3</h4>
                                <h5>Classification and Clustering of Crowdsourced Japanese Crisis Text</h5>
                                <p>
                                    Research in crisis informatics on crowdsourced crisis data focuses mostly on English, 
                                    and thus research on crowdsourced Japanese crisis text is sparse. The Text Analysis 
                                    Module developed in this work focused exclusively on Japanese text data. We explored 
                                    various numerical representations of the Japanese crisis text reports provided by our 
                                    partners and developed a pipeline for preprocessing the raw text and producing the numerical representations. 
                                    Additionally, our partners provided labels along with the text reports, so we experimented with classifying the
                                    text. Lastly, we explored the text data using unsupervised learning, specifically, we
                                    employed clustering methods to help inform development of classification tasks in
                                    future work
                                </p>
                                <h6>Pipeline for Japanese Crisis Text Preprocessing, Tokenization, and Featurization</h6>
                                <p>
                                    In order to use the text reports as input to the various ML models employed in
                                    this work, we represent the raw text string of each report as a numerical vector, or featurization. 
                                    Depending on the featurization we choose to use for a text
                                    report, we may first preprocess the text. This preprocessing included various steps
                                    including tokenization, stopword removal, and lemmatization, which we performed
                                    using open-source software (i.e. tokenizer and lemmatizer) and publicly available
                                    data (i.e. stopwords list) for the Japanese language.
                                    We provide a pipeline for preprocessing and performing the following featurizations
                                    on Japanese text:
                                    <ul>
                                        <li>n-gram Bag-of-Words (BOW)</li>
                                        <li>n-gram Term Frequency-Inverse Document Frequency (TF-IDF)</li>
                                        <li>Pretrained Japanese Masked Language Modeling (MLM) BERT Model with Classification (CLS) Pooling Embedding</li>
                                    </ul>
                                    The resultant feature vectors representing the text enabled us to use them as input
                                    to ML models. Thus, we can then employ classification and clustering techniques on
                                    the text data.
                                </p>
                                <h6>Human Risk Task Creation and Performance Metric Determination</h6>
                                <p>
                                    We devised a new text classification task, Human Risk classification. The human
                                    risk text classification task determines whether or not a crisis text report indicates if
                                    there are people in need of rescue from a crisis. This includes people being unable
                                    to evacuate due to physical disability (such as unable to use stairs), surrounding
                                    conditions (such as being trapped in a submerged car), and/or being in need of
                                    life-saving emergency medical care. This classification task was unique among the
                                    classification tasks presented in this work because it was devised using labels that
                                    came with the text reports given to us by our crisis management partners. Relatedly,
                                    we determine the metric to use in model performance evaluation using the insights
                                    we gained from our partners.
                                </p>
                                <h6>Exploratory Analysis of Japanese Crisis Text using Unsupervised Learning</h6>
                                <p>
                                    With the intention of finding cohesive groupings within the Japanese crisis text corpus, which can inform the development of future text classification tasks, we devise
                                    a pipeline for featurizing Japanese crisis text, reducing the high-dimensional text feature vector to 2 dimensions, and clustering the data. We evaluate this pipeline
                                    both quantitatively and qualitatively, experimenting with various text featurizations
                                    including unigram TF-IDF features and pretrained Japanese MLM BERT with CLS
                                    Pooling embeddings mentioned above, t-Distributed Stochastic Neighbor Embedding
                                    (t-SNE) and Principle Component Analysis (PCA) for dimensionality reduction, and finally K-means and K-medoids for the algorithm which clusters
                                    the data.
                                </p>
                                <p>
                                    After we determine the optimal combination of text embedding, dimensionality
                                    reduction technique, and clustering algorithm, we create brief summaries of each
                                    cluster using the unigrams with highest TF-IDF score for each cluster and the closest
                                    reports (by euclidean distance) within each cluster to the cluster center to help in the
                                    determination of a human-interpretable label for each cluster. Lastly, a member of the Urban Risk Lab at
                                    MIT who is fluent in Japanese used these summaries to determine an interpretable
                                    label to accompany each cluster found. We thus provide various labels which can be
                                    used for classification experiments and analysis in a future work.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-center pb-4">
                            <div class="col-12 col-md-9">
                                <h4>Contributions 3/3</h4>
                                <h6>Quantitative and Qualitative Evaluation in Japanese Flood Crisis Context</h6>
                                <p>
                                    Prior work has typically evaluated ML methods using quantitative measures, mainly
                                    classification performance metrics, e.g. accuracy, precision, recall, F1, and AUROC
                                    (Area Under the Receiver Operating Characteristic Curve) and their macro and micro
                                    variants. However, <strong>with the framework we present in this thesis, we aimed to expand
                                    the evaluation of the efficacy ML models have in reducing information overload to
                                    not only include similar quantitative measures mentioned above, but also qualitative
                                    evaluation derived from engaging with our crisis management partners.</strong> Beyond having good performance, we hoped to use the qualitative evaluation used in this study
                                    to gain a broader understanding of the efficacy a model can provide crisis managers
                                    in mitigating information overload and gaining situational awareness.
                                </p>
                                <p>
                                    We held image annotation workshops with various crisis managers and aimed to
                                    understand what type of information they seek to gain from a crowdsourced image
                                    during a flood crisis event. With their insights, we began to understand how our
                                    models can be refined or improved, or how new models can be created in order to
                                    better serve the information needs of crisis managers more effectively, such as by
                                    tailoring the labels and their associated meanings to the information needs of crisis
                                    managers suggested from their annotations. Additionally, we gained more insight
                                    into the appropriate metrics to use when evaluating models based on the priorities of
                                    crisis managers as it relates to the task. From these workshops, we share key lessons
                                    that can influence the design of this framework and AI-augmented crisis information
                                    systems of the future. In fact, within this work, we used the lessons learned from
                                    the image analysis workshops to assist us in determining the performance metric to
                                    use when developing models for the human risk text classification task. This exercise
                                    exhibited the principle of iterative development our framework intends to promote.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-center pb-4">
                            <div class="col-12 col-md-9">
                                <h4>Adjacent Projects</h4>
                                <img class="rounded img-fluid" id="overview-pic" src="../../../../public/assets/adjacent-projects.png" alt="First slide">
                                <p>
                                    During my time on this project, I defined and mentored undergraduate research projects that were adjacent to my research.

                                    These projects included novel topics in the field of Crisis Informatics such as: 
                                    <ul>
                                        <li>
                                            <strong><u>Interpretability in Image and Text Classification Models:</u></strong>
                                            <p>
                                                Investigated interpretability algorithms such as GradCAM (Class Activation Mapping) on image classification models used to classify crisis report images and Local Interpretable Model-Agnostic Explaination
                                                (LIME) on text classification models used to classify report text in an effort to increase the interpretability of the models which would be employed during crisis and potentially 
                                                improve model performance through relabeling & retraining.
                                            </p>
                                        </li>
                                        <li>
                                            <strong><u>Multilabel Image Classification:</u></strong>
                                            <p>
                                                Investigated CNNs for image classification tasks which can perform multilabel classification (as opposed to single label classification) in the crisis informatics context as
                                                most classification tasks in the literature were single-label.
                                            </p>
                                        </li>
                                        <li>
                                            <strong><u>Towards Establishing Interannotator Agreement Standards & Tools in the Crisis Informatics Community:</u></strong>
                                            <p>
                                                Investigated the establishment of standards and analysis tools for understanding interannotator agreement (and disagreement) on human-annotated datasets in the crisis informatics community for
                                                both single-label and multilabel classification tasks as such standards and tools did not exist in the crisis informatics community.
                                            </p>
                                        </li>
                                        <li>
                                            <strong><u>Development of a Crisis Management Dashboard and Simulations using ML Models and their Predictions:</u></strong>
                                            <p>
                                                Investigated the development of an interactive dashboard for crisis managers to use during a crisis event that visualizes the predictions of
                                                various machine learning models on a map to provide situational summarization on individual report and aggregate report levels. 
                                                A simulation was constructed using past citizen crisis reports and predictions on those reports by trained machine learning models.
                                            </p>
                                        </li>
                                    </ul>
                                </p>
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
import { ML_MODULES, scrollUpFunc, enableSwipeOnCarousel } from '../../../constants.js';

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
  mounted() {
    scrollUpFunc();
    enableSwipeOnCarousel('MLForCrowdsourcedCrisisDataCarousel');
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

h1, h3, h4, h5 {
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

@media (max-width: 500px) {

    #overview-pic {
        max-height: 50vw;
    }

    h3 {
        font-size: 4.5vw;
    }

}

</style>