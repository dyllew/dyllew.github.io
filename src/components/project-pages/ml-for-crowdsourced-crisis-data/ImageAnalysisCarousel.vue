<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-8">  
            <h3>Image Analysis Module</h3>
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
                    <li data-target="#ccCarousel" data-slide-to="7"></li>
                    <li data-target="#ccCarousel" data-slide-to="8"></li>
                    <li data-target="#ccCarousel" data-slide-to="9"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item cc-carousel-item active">
                        <div class="row align-items-center justify-content-around">
                            <div class="col-6 pt-3 pb-5">
                                <img id="image-analysis-module" class="img-fluid" src="../../../../public/assets/image-analysis-module.png" alt="Second slide">
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
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5>Image Training Sets</h5>
                            <div class="row align-items-center justify-content-between">
                                <div class="col-12 col-md-6 col-lg-3 pt-3">
                                    <img src="../../../../public/assets/ds-train.png" class="img-fluid"/>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 pt-3">
                                    <img src="../../../../public/assets/hc-train.png" class="img-fluid"/>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 pt-3">
                                    <img src="../../../../public/assets/in-train.png" class="img-fluid"/>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 pt-3">
                                    <img src="../../../../public/assets/fp-train.png" class="img-fluid"/>
                                </div>
                            </div>
                            <p>
                                As part of the framework we developed, we investigated the class imbalance for each of the
                                image classification training sets. We observed significant imbalance in the label distributions for the Damage Severity 
                                and the Humanitarian Categories tasks. We note that this imbalance could be problematic for the performance of the models on
                                the minority classes for those tasks, e.g. the "Mild", "Rescue, Volunteering, or Donation Effort", and "Affected, Injured, or Dead People" classes.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <div class="row align-items-center justify-content-around">
                                <h5>Model Evaluation on Test Splits & Flood Presence Benchmark Performance</h5>
                                <div class="col-8">
                                    Performance of image classification models on their respective test splits. [1] as referred to in the table can be found in the footnote below.<sup><a href="#fn1" id="ref1">1</a></sup>
                                    <img src="../../../../public/assets/test-set-eval.png" class="img-fluid">
                                </div>
                            </div>
                            <p>
                                    Similar to the authors in [1]<sup><a href="#fn1" id="ref1">1</a></sup>, we report overall model performance as
                                    weighted metrics in order to take into account class imbalance present in the test splits.
                                    From the table above, we observe that the models we finetuned achieve a weighted F1 score within a 1% difference
                                    compared to the model performances reported in [1]. <strong>We report a benchmark performance of 92.1% weighted F1 for the Flood Presence (FP) task.</strong>
                                    We postulate the comparatively higher performance of FP task to be due to the task being binary as well as being the most clear and objective task, thus being a comparatively
                                    simipler task for the model to learn. We explore this more through interannotator agreement analysis discussed in the next slides.
                            </p>
                            <hr>
                            <p>
                                <sup id="fn1">1. Firoj Alam, Ferda Ofli, Muhammad Imran, Tanvirul Alam, Umair Qazi, 
                                    <a href="https://arxiv.org/pdf/2011.08916.pdf" target="_blank">Deep Learning Benchmarks and Datasets for Social Media Image Classification for Disaster Response</a>, 
                                    In 2020 IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining (ASONAM), 2020.<a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a>
                                </sup>
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5>Annotating Fukuchiyama Crisis Images</h5>
                            <p>
                                To evaluate our developed models and framework in a context which is susceptible to flood events, we cooperated with crisis managers in 
                                Fukuchiyama, Japan to attain <strong>658 images</strong> from previous flood events as well as non-crisis normal days in Fukuchiyama, which were collected on the ground,
                                similar to RiskMap images. To form evaluation/test sets from this data, we needed to label the images for each of the four image classification tasks we've discussed.
                            </p>
                            <p>
                                <ul>
                                    <li>The images were labeled independently by Urban Risk Lab researchers for each task. The researchers used <a href="https://github.com/dyllew/towards-automated-assessment-of-crowdsourced-crisis-reporting/blob/main/Image%20Analysis%20Module/Annotation/Image%20Labeling%20Guide.docx" target="_blank">this guide</a> to inform their decisions.</li>
                                    <li>Each image was independently provided a <strong>single label for each task</strong> by 3 annotators.</li>
                                    <li>We enforced independent labeling by hiding the labels given by the other labelers while someone was labeling.</li>
                                </ul>
                            </p>
                            <p>
                                Since each image was given three labels for a task, we use the plurality, or most frequent label, given to the image as the ground-truth label for that image. We chose this method of ground-truthing to minimize any specific person's contributed bias towards the ground-truth label.
                                If there was not a plurality label, we do not label the image and thus do not put that image in the test set for that task, but did make note of the disagreement for later analysis.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Inter-Annotator Agreement Analysis on Annotated Fukuchiyama Images</h5>
                        <div class="row align-items-center justify-content-around">
                                <div class="col-6 pt-3 pb-5">
                                    <h2>“... a computer cannot generally agree with annotators at a rate that is higher than the rate at which the annotators agree with each other."<sup><a href="#fn2" id="ref2">2</a></sup></h2>
                                </div>
                                <div class="carousel-text col-6">
                                    <p> 
                                        Since the data we have is <strong>human-annotated</strong> and thus introduces subjectivity, we aimed to assess and make transparent <strong>the quality of the annotated datasets</strong>, thus we computed measures of inter-annotator agreement (IAA).
                                        <br>
                                        <br>
                                        This IAA analysis enabled us to determine, for each task:
                                        <ul>
                                            <li>How reproducible labeling for the task is</li>
                                            <li>How are annotation procedure can be improved:</li>
                                                <ul>
                                                    <li>Refinement of task label definitions</li>
                                                    <li>Clarifying data points of disagreement between annotators</li>
                                                    <li>Adding more examples for each class</li>
                                                </ul>
                                        </ul>
                                        This analysis has the advantage of happening before any model development, focusing on <strong>improvement of classification task formulation itself rather than building a model which will likely perform poorly on an ill-formed task.</strong>
                                    </p>
                                </div>
                        </div>
                        <hr>
                        <p>
                            <sup id="fn2">2. D. T. Nguyen, K. Al-Mannai, S. R. Joty, H. Sajjad, M. Imran, and P. Mitra, <a href="https://arxiv.org/abs/1608.03902" target="_blank">“Rapid classification of crisis-related data on social networks using convolutional neural networks,”</a> CoRR, vol. abs/1608.03902, 2016.<a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>
                        </p>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <div class="row align-items-center justify-content-around">
                                <h5>Inter-Annotator Agreement Analysis on Annotated Fukuchiyama Images</h5>
                                <div class="col-8">
                                    Agreement Measures by Task for Labeled Fukuchiyama Images
                                    <img src="../../../../public/assets/iaa.png" class="img-fluid">
                                </div>
                            </div>
                            <br>
                            <p>
                                <strong>Fleiss' Kappa</strong> score incorporates the level of agreement attained if the annotators did not look at the data when labeling, i.e. 
                                <strong>random chance agreement</strong>, which is an advantage over the complete agreement percentage ("Unanimous Agreement Percentage" pictured above), in which all annotators
                                agree on the same label for an image.
                                <ul>
                                    <li>By Fleiss' Kappa, we observe smaller improvements over random chance agreement for Damage Severity (0.413), Humanitarian Categories (0.304), and Informativeness (0.313) as compared to Flood Presence (0.829)</li>
                                        <ul>
                                            <li> This suggests that further investigation should be conducted in refining the label definitions and the annotation guide for clarity by understanding potential causes for disagreement on the tasks with lower Fleiss' Kappa scores,
                                                in order to improve agreement and thus the quality of the dataset.</li>
                                        </ul>
                                    <li>We use the plurality labels found for each task to form the ground-truth Fukuchiyama datasets for each of the tasks which we evaluate the trained CNN models on.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5>Annotated Fukuchiyama Image Test Sets</h5>
                            <div class="row align-items-center justify-content-between">
                                <div class="col-12 col-md-6 col-lg-3 pt-3">
                                    <img src="../../../../public/assets/ds-fc.png" class="img-fluid"/>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 pt-3">
                                    <img src="../../../../public/assets/hc-fc.png" class="img-fluid"/>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 pt-3">
                                    <img src="../../../../public/assets/in-fc.png" class="img-fluid"/>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 pt-3">
                                    <img src="../../../../public/assets/fp-fc.png" class="img-fluid"/>
                                </div>
                            </div>
                            <p>
                                The ground-truth datasets are formed from the plurality labels found from the annotations given to the Fukuchiyama images.

                                We again observe imbalance in the resulting datasets, albeit to varying degrees. Therefore, we again make use of weighted aggregate metrics for model evaluation,
                                however, for a more granular insight into model performance, we also investigate the per-class performance of each model by precision, recall, 
                                and F1 score for each class and visualize the confusion matrix. Lastly, we establish a comparison to a baseline classifier using the Cohen's Kappa score.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5> To be continued... </h5>
                            <img id="pika-gif" src="../../../../public/assets/pika-gif.gif">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ImageAnalysisCarousel'
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