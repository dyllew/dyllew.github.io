<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-8">  
            <h3>Towards Automated Assessment of Crowdsourced Crisis Reporting for Enhanced Crisis Awareness and Response</h3>
        </div>
        <div class="col-md-10">
            <div id="ccCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                <ol class="carousel-indicators">
                    <li data-target="#ccCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#ccCarousel" data-slide-to="1"></li>
                    <li data-target="#ccCarousel" data-slide-to="2"></li>
                    <li data-target="#ccCarousel" data-slide-to="3"></li>
                    <li data-target="#ccCarousel" data-slide-to="4"></li>
                    <li data-target="#ccCarousel" data-slide-to="5"></li>
                    <li data-target="#ccCarousel" data-slide-to="6"></li>
                    <!-- <li data-target="#ccCarousel" data-slide-to="7"></li>
                    <li data-target="#ccCarousel" data-slide-to="8"></li>
                    <li data-target="#ccCarousel" data-slide-to="9"></li> -->
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active cc-carousel-item">
                        <img class="rounded img-fluid" id="overview-pic" src="../../../public/assets/masters-thesis-overview.png" alt="First slide">
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
                            <h5>Machine Learning Methodology</h5>
                            With our crisis management partners in Fukuchiyama (FC), Japan, we present our framework through two ML modules: Image Analysis Module & Text Analysis Module
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around">
                            <div class="col-6 pt-3 pb-5">
                                <img id="image-analysis-module" class="img-fluid" src="../../../public/assets/image-analysis-module.png" alt="Second slide">
                            </div>
                            <div class="carousel-text col-6">
                                <h5>Image Analysis Methodology Overview</h5>
                                <p> 
                                    The goal of the Image Analysis Module is to utilize pretrained Convolutional Neural Network models to yield
                                    efficient and accurate predictions from image data in crowdsourced crisis reports. The
                                    classification tasks of Damage Severity (DS), Humanitarian Categories (HC), Informativeness (IN), and
                                    Flood Presence (FP) form a diverse suite of labels. In a fraction of a second, the model
                                    predictions made for these tasks provide a series of categorizations for an individual
                                    report. We leverage state-of-the-art CNNs, which strike a necessary balance between
                                    model complexity, memory and storage constraints, and model performance to provide
                                    these predictions.
                                    <br>
                                    <br>
                                    To achieve this aim, we use large, labeled, open-source datasets for training and
                                    evaluating the models. We formulate a new crisis image classification task for detecting flood presence in an image and construct
                                    a new dataset altogether using flood images from various open-source datasets, which contained
                                    flood-adjacent labels. We additionally devise an annotation procedure and analyze the results of human-annotations on crisis images 
                                    provided to us by crisis managers in Fukuchiyama. We held various image annotation workshops with crisis managers to identify the limitations in our
                                    approach and understand how we could iterate on the design of our ML methodology. This evaluation procedure thus enabled us to evaluate the use of image classification models in assisting crisis managers
                                    using quantitative metrics as well as qualitatively through the feedback we got through the image annotation workshops. 
                                    This evaluation directly influenced our approach for devising the Text Analysis Module.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5>Image Datasets & Train/Dev/Test Splits for Model Development & Evaluation</h5>
                            <div class="row justify-content-around">
                                <div class="carousel-text col-9">
                                    <p>
                                        Since we used CNN models, specifically the EfficientNet-B1 architecture pretrained on ImageNet, we wanted to make use of large open-source image datasets
                                        for finetuning the models to perform the classification tasks of Damage Severity (DS), Humanitarian Categories (HC), Informativeness (IN), and Flood Presence (FP).
                                    </p>
                                    <h6>Open-source Consolidated Crisis Image Datasets</h6>
                                    <p>
                                        For the DS, HC, and IN tasks, we made use of the open-source train/dev/test splits made available at 
                                        <a href="https://crisisnlp.qcri.org/crisis-image-datasets-asonam20">CrisisNLP</a>. We train the models which perform these tasks using
                                        the train and dev splits. For evaluation, we make use of the respective test splits for each task.
                                    </p>
                                    <h6>Flood Presence Task Creation and Dataset Formation</h6>
                                    <p>
                                        In this work we focus on flood-crisis events, thus we used various open-source image datasets which have flood-adjacent labels
                                        and map them to the binary labels of "Flood"/"Not Flood". Using the resulting dataset, we create randomized, non-overlapping Train/Dev/Test splits.
                                        Similar to the above, we use the train & dev splits to develop the FP model, and the test split to evaluate the model.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <div class="row align-items-center justify-content-around">
                                <div class="col-8">
                                    <h5>Flood Presence Dataset Composition</h5>
                                    Composition of the Flood Presence dataset from the original datasets and the number of images for each label.
                                    <table id="fp-table">
                                        <tr>
                                            <th><strong>Dataset</strong></th>
                                            <th><strong>Flood</strong></th>
                                            <th><strong>Not Flood</strong></th>
                                            <th><strong>Total</strong></th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i>
                                                    <strong>Consolidated Disaster Types</strong>
                                                    <br>
                                                    (<a href="https://arxiv.org/abs/2011.08916" target="_blank">Alam et al. 2020</a>)
                                                </i>
                                            </td>
                                            <td>3201</td>
                                            <td>14310</td>
                                            <td>17511</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i>
                                                    <strong>Central European Floods 2013</strong>
                                                    <br>
                                                    (<a href="https://arxiv.org/abs/1908.03361" target="_blank">Barz et al. 2018</a>)
                                                </i>
                                            </td>
                                            <td>3151</td>
                                            <td>559</td>
                                            <td>3710</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i>
                                                    <strong>Harz Region Floods 2017</strong>
                                                    <br>
                                                    (<a href="https://arxiv.org/abs/2011.05756" target="_blank">Barz et al. 2020</a>)
                                                </i>
                                            </td>
                                            <td>264</td>
                                            <td>405</td>
                                            <td>669</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i>
                                                    <strong>Rhine River Floods 2018</strong>
                                                    <br>
                                                    (<a href="https://arxiv.org/abs/2011.05756" target="_blank">Barz et al. 2020</a>)
                                                </i>
                                            </td>
                                            <td>730</td>
                                            <td>1007</td>
                                            <td>1737</td>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <td>7346</td>
                                            <td>16281</td>
                                            <td>23627</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5>Model Evaluation on Test Splits & Flood Presence Benchmark Performance</h5>
                            <div class="row justify-content-around">
                                <div class="carousel-text col-9">
                                    <p>
                                        
                                    </p>
                                    <hr>
                                    <sup id="fn1">1. <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <div class="row align-items-center justify-content-around">
                                <div class="col-8">
                                    <h5>Model Evaluation on Test Splits & Flood Presence Benchmark Performance</h5>
                                    Composition of the Flood Presence dataset from the original datasets and the number of images for each label.
                                    <table id="fp-table">
                                        <tr>
                                            <th><strong>Dataset</strong></th>
                                            <th><strong>Flood</strong></th>
                                            <th><strong>Not Flood</strong></th>
                                            <th><strong>Total</strong></th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i>
                                                    <strong>Consolidated Disaster Types</strong>
                                                    <br>
                                                    (<a href="https://arxiv.org/abs/2011.08916" target="_blank">Alam et al. 2020</a>)
                                                </i>
                                            </td>
                                            <td>3201</td>
                                            <td>14310</td>
                                            <td>17511</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i>
                                                    <strong>Central European Floods 2013</strong>
                                                    <br>
                                                    (<a href="https://arxiv.org/abs/1908.03361" target="_blank">Barz et al. 2018</a>)
                                                </i>
                                            </td>
                                            <td>3151</td>
                                            <td>559</td>
                                            <td>3710</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i>
                                                    <strong>Harz Region Floods 2017</strong>
                                                    <br>
                                                    (<a href="https://arxiv.org/abs/2011.05756" target="_blank">Barz et al. 2020</a>)
                                                </i>
                                            </td>
                                            <td>264</td>
                                            <td>405</td>
                                            <td>669</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i>
                                                    <strong>Rhine River Floods 2018</strong>
                                                    <br>
                                                    (<a href="https://arxiv.org/abs/2011.05756" target="_blank">Barz et al. 2020</a>)
                                                </i>
                                            </td>
                                            <td>730</td>
                                            <td>1007</td>
                                            <td>1737</td>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <td>7346</td>
                                            <td>16281</td>
                                            <td>23627</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5>To Be Continued...</h5>
                            <img id="pika-gif" class="rounded img-fluid" src="../../../public/assets/pika-gif.gif">
                        </div>
                    </div>
                    <!-- <div class="carousel-item cc-carousel-item">
                        <div class="row justify-content-around">
                            <div class="col-6 pt-3 pb-5">
                                <img id="image-analysis-module" class="img-fluid" src="../../../public/assets/image-analysis-module.png" alt="Second slide">
                            </div>
                            <div class="carousel-text col-6">
                                <h5>Text Analysis Methodology Overview</h5>
                                <p> 
                                    The goal of the Image Analysis Module is to utilize pretrained Convolutional Neural Network models to yield
                                    efficient and accurate predictions from image data in crowdsourced crisis reports. The
                                    classification tasks of Damage Severity (DS), Humanitarian Categories (HC), Informativeness (IN), and
                                    Flood Presence (FP) form a diverse suite of labels. In a fraction of a second, the model
                                    predictions made for these tasks provide a series of categorizations for an individual
                                    report. We leverage state-of-the-art CNNs, which strike a necessary balance between
                                    model complexity, memory and storage constraints, and model performance to provide
                                    these predictions.
                                    <br>
                                    <br>
                                    To achieve this aim, we use large, labeled, open-source datasets for training and
                                    evaluating the models. We formulate a new crisis image classification task for detecting flood presence in an image and construct
                                    a new dataset altogether using flood images from various open-source datasets, which contained
                                    flood-adjacent labels. We additionally devise an annotation procedure and analyze the results of human-annotations on crisis images 
                                    provided to us by crisis managers in Fukuchiyama. We held various image annotation workshops with crisis managers to identify the limitations in our
                                    approach and understand how we could iterate on the design of our ML methodology. This evaluation procedure thus enabled us to evaluate the use of image classification models in assisting crisis managers
                                    using quantitative metrics as well as qualitatively through the feedback we got through the image annotation workshops. 
                                    This evaluation directly influenced our approach for devising the Text Analysis Module.
                                </p>
                            </div>
                        </div> -->
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

.carousel-text {
    margin-top: 10px;
    margin-bottom: 40px;
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

#image-analysis-module {
    width: 70vh;
    height: 80vh;
}

#pika-gif {
    margin-top: 10px;
    margin-bottom: 40px;
    width: 60vh;
    height: 40vh;
}

@media (max-width: 800px) {
    .cc-carousel-item img {
        max-height: 80vw;
    }
}

#fp-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  color: black;
  width: 100%;
}

#fp-table td, #fp-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#fp-table tr:nth-child(even){background-color: #f2f2f2;}
#fp-table tr:hover{background-color: #ddd;}
#fp-table tr:nth-child(odd) {background-color: #ddd;}

#fp-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: darkturquoise;
  color: white
}

</style>