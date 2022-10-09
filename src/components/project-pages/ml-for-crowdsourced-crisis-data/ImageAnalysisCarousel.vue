<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-8">  
            <h3>Image Analysis Module</h3>
        </div>
        <div class="col-12 col-md-10">
            <div id="ccCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                <ol class="carousel-indicators">
                    <li data-target="#ccCarousel" data-slide-to="0" class="active" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="1" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="2" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="3" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="4" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="5" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="6" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="7" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="8" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="9" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="10" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="11" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="12" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="13" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="14" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="15" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="16" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="17" @click="scrollUp"></li>
                    <li data-target="#ccCarousel" data-slide-to="18" @click="scrollUp"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item cc-carousel-item active">
                        <div class="row align-items-center justify-content-around">
                            <div class="col-12 col-md-6 pt-3 pb-5">
                                <img id="image-analysis-module" class="img-fluid" src="../../../../public/assets/image-analysis-module.png" alt="Second slide">
                            </div>
                            <div class="carousel-text col-12 col-md-6">
                                <h5>Image Analysis Methodology Overview</h5>
                                <p> 
                                    The goal of the Image Analysis Module is to utilize pretrained Convolutional Neural Network models to yield
                                    efficient and accurate predictions from image data in crowdsourced crisis reports such as those on RiskMap & Twitter. The
                                    classification tasks of Damage Severity (DS), Humanitarian Categories (HC), Informativeness (IN), and
                                    Flood Presence (FP) form a diverse suite of labels for assisting crisis managers in automatically classifying the data. In a fraction of a second, the model
                                    predictions made for these tasks provide a series of categorizations for an individual
                                    report. We leverage state-of-the-art CNNs, which strike a necessary balance between
                                    model complexity, memory and storage constraints, and model performance to provide
                                    these predictions.
                                    <br>
                                    <br>
                                    To achieve this aim, we use large, labeled, open-source datasets for training and
                                    evaluating the models. We formulate a new crisis image classification task for detecting flood presence in an image and construct
                                    a new dataset altogether using flood images from various open-source datasets, which contained
                                    flood-adjacent labels. We were given unlabeled flood crisis images from crisis managers in Fukuchiyama (FC), Japan. We devise an annotation procedure to label this data and analyze the results of human-annotations on the images. 
                                    Since this data was not used to train or develop the models, we aimed to see if our trained models could accurately classify unseen images from the FC context.
                                    We held various image annotation workshops with crisis managers to identify the limitations in our
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
                                <div class="carousel-text col-12 col-md-9">
                                    <p>
                                        Since we used CNN models, specifically the EfficientNet-B1 architecture pretrained on ImageNet, we wanted to make use of large open-source Twitter crisis image datasets
                                        for finetuning the models to perform the classification tasks of Damage Severity (DS), Humanitarian Categories (HC), Informativeness (IN), and Flood Presence (FP).
                                    </p>
                                    <h6>Open-source Consolidated Crisis Image Datasets</h6>
                                    <p>
                                        For the DS, HC, and IN tasks, we made use of the open-source train/dev/test splits made available at 
                                        <a href="https://crisisnlp.qcri.org/crisis-image-datasets-asonam20" target="_blank">CrisisNLP</a>. We train the models which perform these tasks using
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
                                <div class="col-12 col-md-8">
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
                            <br>
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
                                <div class="col-12">
                                    <h5>Model Evaluation on Test Splits & Flood Presence Benchmark Performance</h5>
                                </div>
                                <div class="col-12 col-md-8">
                                    <p>
                                        Performance of image classification models on their respective test splits. [1] as referred to in the table can be found in the footnote below.<sup><a href="#fn1" id="ref1">1</a></sup>
                                    </p>
                                    <br>
                                    <img id="test-set-eval" src="../../../../public/assets/test-set-eval.png" class="img-fluid">
                                </div>
                            </div>
                            <br>
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
                                similar to RiskMap & Twitter crisis images. This evaluation enabled us to understand how well training the models on the large, consolidated crisis datasets, which cover a diverse set
                                geographical locations and a multitude of crisis events, would perform on the unseen
                                data from flood events in Fukuchiyama. To form evaluation/test sets from this data, we needed to label the images for each of the four image classification tasks we've discussed.
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
                                <div class="col-12 col-md-6 pt-3 pb-2">
                                    <h2>“... a computer cannot generally agree with annotators at a rate that is higher than the rate at which the annotators agree with each other."<sup><a href="#fn2" id="ref2">1</a></sup></h2>
                                </div>
                                <div class="carousel-text col-12 col-md-6">
                                    <p> 
                                        Since the data we have is <strong>human-annotated</strong> and thus permits subjectivity, we aimed to assess and make transparent <strong>the quality of the annotated datasets</strong>, thus we computed measures of inter-annotator agreement (IAA).
                                        <br>
                                        <br>
                                        This IAA analysis enabled us to determine, for each task:
                                        <ul>
                                            <li>How reproducible labeling for the task is</li>
                                            <li>If our annotation procedure can be improved:</li>
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
                        <p>
                            <sup id="fn2">1. D. T. Nguyen, K. Al-Mannai, S. R. Joty, H. Sajjad, M. Imran, and P. Mitra, <a href="https://arxiv.org/abs/1608.03902" target="_blank">“Rapid classification of crisis-related data on social networks using convolutional neural networks,”</a> CoRR, vol. abs/1608.03902, 2016.<a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>
                        </p>
                        <br>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <div class="row align-items-center justify-content-around">
                                <div class="col-12">
                                    <h5>Inter-Annotator Agreement Analysis on Annotated Fukuchiyama Images</h5>
                                </div>
                                <div class="col-12 col-md-6">
                                    Agreement Measures by Task for Labeled Fukuchiyama Images
                                    <img src="../../../../public/assets/iaa.png" class="img-fluid">
                                </div>
                            </div>
                            <br>
                            <p>
                                <strong>Fleiss' Kappa</strong> [-1, +1] score incorporates the level of agreement attained if the annotators did not look at the data when labeling, i.e. 
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
                            <br>
                            <p>
                                The ground-truth datasets are formed from the plurality labels found from the annotations given to the Fukuchiyama images.

                                We again observe imbalance in the resulting datasets, albeit to varying degrees. Therefore, we again make use of weighted aggregate metrics for model evaluation,
                                however, for a more granular insight into model performance, we also investigate the per-class performance of each model by precision, recall, 
                                and F1 score for each class and visualize the confusion matrix. Lastly, we establish a comparison to a baseline classifier using the Cohen's Kappa score.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Model Evaluation on Fukuchiyama Data - Per-Class Metrics</h5>
                        <div class="carousel-text">
                            <h5>Damage Severity</h5>
                            <div class="row align-items-center justify-content-center">
                                <div class="col-12 col-md-6 col-lg-4 pt-3">
                                    <img src="../../../../public/assets/damage_severity_confusion_matrix.png" class="img-fluid">
                                </div>
                                <div class="col-12 col-md-6 col-lg-5 pt-3">
                                    <img src="../../../../public/assets/damage_severity_per_class_metric.png" class="img-fluid">
                                </div>
                            </div>
                            <br>
                            <p>
                                For the damage severity model, we notice that when the model
                                mispredicts the "Little or None" class it predicts "Mild" far more than "Severe".
                                Relatedly, when the damage severity model mispredicts the "Mild" class, it far more
                                often predicts "Little or None" than "Severe". Finally, when the model mispredicts
                                the "Severe" class, it predicts "Mild" more than either "Little or None" or "Severe".
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Model Evaluation on Fukuchiyama Data - Per-Class Metrics</h5>
                        <div class="carousel-text">
                            <h5>Humanitarian Categories</h5>
                            <div class="row align-items-center justify-content-center">
                                <div class="col-12 col-md-6 col-lg-4 pt-3">
                                    <img src="../../../../public/assets/humanitarian_categories_confusion_matrix.png" class="img-fluid">
                                </div>
                                <div class="col-12 col-md-6 col-lg-5 pt-3">
                                    <img src="../../../../public/assets/humanitarian_categories_per_class_metric.png" class="img-fluid">
                                </div>
                            </div>
                            <br>
                            <p> 
                                When analyzing the per-class performance for each of the models on the Fukuchiyama datasets, 
                                we observe that the humanitarian categories model performance varies greatly between the classes for the task. 
                                Namely, we observed that the AIDP class has scores of 0 across all metrics. From the training set distributions discussed earlier, 
                                we observe that the AIDP class is only 6.12% of the entire training set for the humanitarian categories task. 
                                This is the smallest training set class proportion for any of the image classification tasks examined in this work, 
                                with the next lowest training set class proportions being those for the RVDE class in the humanitarian categories task 
                                and the "Mild" class of damage severity at 14.0% and 14.4%, respectively. 
                                This suggests that the imbalance of the humanitarian categories training set impacts the performance of the humanitarian 
                                categories severely on the minority classes, especially the AIDP class, the class with the lowest proportion.
                            </p>
                            <br>
                        </div>
                    </div>                 
                    <div class="carousel-item cc-carousel-item">
                        <h5>Model Evaluation on Fukuchiyama Data - Per-Class Metrics</h5>
                        <div class="carousel-text">
                            <h5>Informativeness</h5>
                            <div class="row align-items-center justify-content-center">
                                <div class="col-12 col-md-6 col-lg-4 pt-3">
                                    <img src="../../../../public/assets/informativeness_confusion_matrix.png" class="img-fluid">
                                </div>
                                <div class="col-12 col-md-6 col-lg-5 pt-3">
                                    <img src="../../../../public/assets/informativeness_per_class_metric.png" class="img-fluid">
                                </div>
                            </div>
                            <br>
                            <p>
                                By nature of the labeled Fukuchiyama crisis image data being almost
                                exclusively related to crisis events or "normal day" photos, the "Not Informative"
                                class is only 69 images as opposed to the 589 "Informative" photos. We note that
                                in the original conception of the task in [1]<sup><a href="#fn3" id="ref3">1</a></sup>, the informativeness classifier is intended
                                to be used for filtering noisy tweets which are completely unrelated to crisis events
                                from relevant tweets, however as we report, it is not an adequate classifier for filtering
                                images indicative of crisis impact and those of "normal-day" scenes, because, as we
                                have learned, that is a different task altogether. We observe that the model correctly
                                classifies most of the images labeled "Informative" with a recall score of 0.781. When
                                classifying the images labeled as "Not Informative", the classifier classifies 53.6% of
                                these images incorrectly as "Informative" and 46.4% of these images correctly as
                                "Not Informative". Across all metrics, the model performs reasonably well on the
                                "Informative" class, but significantly worse on the "Not Informative".
                            </p>
                            <hr>
                            <p>
                                <sup id="fn3">1. Firoj Alam, Ferda Ofli, Muhammad Imran, Tanvirul Alam, Umair Qazi, 
                                    <a href="https://arxiv.org/pdf/2011.08916.pdf" target="_blank">Deep Learning Benchmarks and Datasets for Social Media Image Classification for Disaster Response</a>, 
                                    In 2020 IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining (ASONAM), 2020.<a href="#ref3" title="Jump back to footnote 1 in the text.">↩</a>
                                </sup>
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Model Evaluation on Fukuchiyama Data - Per-Class Metrics</h5>
                        <div class="carousel-text">
                            <h5>Flood Presence</h5>
                            <div class="row align-items-center justify-content-center">
                                <div class="col-12 col-md-6 col-lg-4 pt-3">
                                    <img src="../../../../public/assets/flood_confusion_matrix.png" class="img-fluid">
                                </div>
                                <div class="col-12 col-md-6 col-lg-5 pt-3">
                                    <img src="../../../../public/assets/flood_presence_per_class_metric.png" class="img-fluid">
                                </div>
                            </div>
                            <br>
                            <p>
                                Unlike the models for damage severity, humanitarian categories, and
                                informativeness, the flood presence model performs consistently well (less variation
                                and higher values) by all metrics across all classes in the task, attaining metric scores at or
                                above 0.793 across all metrics for both classes.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <div class="row align-items-center justify-content-around">
                                <div class="col-12">
                                    <h5>Model Evaluation on Fukuchiyama Data - Aggregate Metrics</h5>
                                </div>
                                <div class="col-12 col-md-8">
                                    Performance of Image Classification models on task-respective Fukuchiyama Data
                                    <img id="agg-metrics" src="../../../../public/assets/agg-metrics-fc.png" class="img-fluid">
                                </div>
                            </div>
                            <br>
                            <p> 
                                By Cohen's Kappa score, we see that the damage severity and informativeness tasks provide 
                                a relatively small improvement over the random classifier for their corresponding datasets 
                                as compared to the humanitarian categories model and far more so for the flood presence model, 
                                which provides the most improvement over the random classifier for its dataset.
                            </p>
                            <p>
                                We observe across all of the weighted metrics for all tasks, the performances of the models 
                                on the Fukuchiyama data are lower than the performances achieved on the consolidated crisis image 
                                test splits and flood presence test set reported earlier. This is most apparent for the damage severity model, 
                                which achieves a weighted F1 score of 43.2% on the Fukuchiyama data. Similar to the
                                performance of the flood presence model on flood presence test split, the flood presence model performs 
                                relatively well on the Fukuchiyama flood presence task images achieving a weighted F1 of 82.5%.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5>Model Evaluation on Fukuchiyama Data - Discussion</h5>
                            <br>
                            <h6>Performance on Fukuchiyama Data</h6>
                            <p>
                                <ul>
                                    <li>
                                        Investigating the <strong>per-class performance</strong> allowed us to see which classes may be suffering from <strong>class imbalance issues</strong> 
                                        (e.g. Affect, Injured, or Dead People) as well as the common mistakes a model makes when predicting, such as when the damage severity model 
                                        commonly mispredicts "mild" for actual "little-or-none" images.
                                    </li>
                                    <li>There are likely multiple reasons why the model performance is comparatively lower
                                        for the Fukuchiyama data as compared to the test splits for the consolidated crisis image datasets and the flood presence dataset:
                                        <ul>
                                            <li>May be in part due to <strong>concept drift</strong> between the data the models were <strong>trained on</strong> and the Fukuchiyama data which the models were <strong>evaluated on</strong></li>
                                            <li>Labeled Fukuchiyama data may have been of <strong>poorer data quality</strong> as suggested from the relatively <strong>low Fleiss’ Kappa coefficients</strong> for the damage
                                        severity, humanitarian categories, and informativeness tasks</li>
                                        </ul>
                                    </li>
                                    <li>
                                        The <strong>low Fleiss' Kappa scores</strong> for the damage severity, humanitarian categories, 
                                        and informativeness tasks can <strong>potentially be improved</strong> by converting the abstract <strong>definitions</strong> 
                                        of different classes <strong>into checklists</strong>, understanding common <strong>annotator disagreements</strong>, 
                                        and adding <strong>more clarification/examples</strong> where necessary in the annotation procedure.
                                    </li>
                                    <li>
                                        We consider the performance of the Flood Presence model across the datasets to be robust, 
                                        which we attribute to the task being binary (as opposed to multiclass) and to the task having classes which yield higher agreement between annotators.
                                    </li>
                                </ul>
                            </p>
                            <h6>Importance of Selecting a Metric based on Crisis Management Priorities and the Nature of the Data</h6>
                            <p>
                                <ul>
                                    
                                    <li>While the Flood Presence model may be performant, we aimed to understand if this task as well as the other tasks have informative utility to crisis managers during flood crisis.</li>
                                    <li>Although <strong>weighted F1</strong> is a popular metric reported in the literature, it is <strong>biased towards the model's performance on the majority classes.</strong></li>
                                    <li>Cohen's Kappa provides the level of accuracy achieved that is above the <strong>random classifier baseline.</strong></li>
                                    <li>Cohen’s Kappa can be a more appropriate metric to use in the case of multiclass classification tasks when the dataset is imbalanced, 
                                    but there is likely an even more appropriate metric depending on the task and the priorities of crisis managers.</li>
                                    <li>We have determined that selecting a model performance metric should be a process which both considers the <strong>nature of the data</strong> (i.e. class imbalance) & uses <strong>insights from crisis managers</strong>.</li>
                                </ul>
                            </p>
                            <h6>Understanding the Informative Utility of the Image Analysis Module</h6>
                            <p>
                                To broaden the discussion of the efficacy the image analysis module has in mitigating information overload and enhancing situational awareness, we also qualitatively
                                examine the informative utility the image models have in assisting crisis managers during a flood crisis event. We held image annotation workshops with various crisis managers and aimed to
                                understand what type of information they seek to gain from a crowdsourced image during a flood crisis event as well as what their priorities are. We iterate on our methodology
                                by using insights we gained from the crisis managers into the Text Analysis Module, exhibiting the principle of iterative development ou framework intends to promote.
                            </p>
                            
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5> Image Annotation Workshops with EOC & Methodology Iteration </h5>
                            <p>
                                The Urban Risk Lab<sup><a href="#fn4" id="ref4">1</a></sup> held image annotation workshops in December 2021 with the following crisis experts in Fukuchiyama:
                                <ul>
                                    <li>Director of the Regional Disaster Management Research Center, Fukuchiyama Public University  and Former Crisis Management Supervisor of Fukuchiyama City</li>
                                    <li>3 Crisis Managers at an EOC in Fukuchiyama</li>
                                    <li>5 Associates (including Fire Department Director & 1 Firefighter) of the Fire Department in Fukuchiyama</li>
                                </ul>
                                In January 2022, the same workshop was held with a former Deputy Administrator of the Federal Emergency Management Agency (FEMA) in the US
                            </p>
                            <br>
                            <p>
                                Crisis experts were <strong>presented 25 images</strong> from past FC flood crises. The images represented various types of crisis impact.<sup><a href="#fn5" id="ref5">2</a></sup> A subset of the images were selected because they had <strong>disagreement between annotators</strong> & 
                                were given <strong>a wrong prediction by the CNN model</strong> developed for a task.
                            </p>
                            <br>
                            <p>
                                The <strong>crisis experts were tasked with labeling images with a variety of labels</strong> & <strong>identifying insights</strong> from an image that are <strong>useful for decision making and response</strong> during crisis events.
                            </p>
                            <br>
                            <p>
                                <sup id="fn4">
                                        1. We acknowledge Saeko Baird of the Urban Risk Lab at MIT who conducted the qualitative focus-group research in the form of interviews, workshops, and general interfacing with our partners
                                        in Fukuchiyama and in the US, provided the translations of the results from Japanese to
                                        English to enable the analysis of those results as it relates to the work presented in this thesis, and assisted in the synthesis of the main
                                        findings from the observations and discourse that occurred during the image annotation workshops. We
                                        note that Saeko Baird has formal training in Human-Computer Interaction (HCI) research.<a href="#ref4" title="Jump back to footnote 1 in the text.">↩</a>
                                </sup>
                                <br>
                                <sup id="fn5">
                                        2. <strong>Crisis Impact Types:</strong> river flood, rock-fall, landslide, residential housing damage, blocked roads, agricultural land damage, submerged residential areas, and damaged infrastructure.<a href="#ref5" title="Jump back to footnote 2 in the text.">↩</a>
                                </sup>
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5>Image Annotation Workshop & Methodology Iteration - Aims</h5>
                            <p>
                                With these workshops, we aimed to:
                                <ul>
                                    <li>Understand <strong>cross-contextual insights</strong>, i.e. information needs and decision-making priorities common to both Fukuchiyama & US crisis management</li>
                                    <li><strong>Compare our devised image analysis ML methodology</strong> for automatic insights to the insights gained from <strong>manual assessment</strong> of crisis images <strong>by crisis experts.</strong></li>
                                    <li>Use results to <strong>iterate on design of ML methodology</strong> to better embed information needs and priorities of crisis managers.</li>
                                </ul>
                            </p>
                            <p>
                                The following questions were posed for each of the images to actively engage crisis managers in the annotation process. We note, however, that the conversations
                                often expanded beyond these questions, getting to the core of what their main insights would be through manual assessment of the image data and what their main decision priorities would be during a flood crisis event as it related to analyzing the image data:
                            </p>
                            <br>
                            <div class="row align-items-center justify-content-around">
                                <div class="col-12 col-md-8">
                                        <img src="../../../../public/assets/workshop-preface-questions.png" class="img-fluid">
                                </div>
                            </div>
                            <br>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5>Image Annotation Workshops with Crisis Experts - Results</h5>
                            <p>
                                We report qualitative summaries describing the insights derived
                                from manual assessment by domain experts of the crisis report images and their
                                expressed information needs. We used these summaries to compare how the
                                insights the Image Analysis Module aims to automatically provide to crisis managers
                                compares to the insights derived from manual assessment by crisis experts and their
                                expressed information needs. This comparison allowed us to qualitatively assess the utility of the Image Analysis Module in attaining situational awareness as it was
                                devised in this work, and helped us in determining ways to iterate on the module in the future to better accommodate the information needs of the crisis managers during
                                a crisis event through new prediction tasks which align with their information needs.
                            </p>
                            <h6>Cross-contextual Insights</h6>
                            <div class="row align-items-center justify-content-around">
                                <div class="col-12">
                                    <p>
                                        <ul>
                                            <li>
                                                <strong><u>Potential of Human Casualties in Crisis Imagery</u></strong>
                                                <ul>
                                                    <li>Possibility of Human Casualty is <strong>Top Priority</strong></li>
                                                    <li>
                                                        <strong>Identified physical markers</strong> suggesting <strong>potential for human casualty:</strong>
                                                        <ul>
                                                            <li>Submerged Vehicles</li>
                                                            <li>Collapsed Buildings</li>
                                                            <li>Housing in Close Proximity to Rockfall or Landslide</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Not investigating when there is actually human casualty (False Negative) <strong>is more costly</strong> 
                                                        than investigating when there is not actually human casualty (False Positive)
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong><u>Presence of People in Crisis Imagery</u></strong>
                                                <ul>
                                                    <li><strong>People in crisis imagery</strong> is important and should be <strong>assessed with high priority</strong></li>
                                                    <li><strong>Insights should be specific,</strong> e.g. people laying down vs. people standing casually/walking about - can indicate crisis impact
                                                        severity to personnel
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong><u>Insights of Broader Impact derived from Physical Markers in Images:</u></strong>
                                                <ul>
                                                    <li>
                                                        Experts <strong>identified physical markers</strong> which suggest <strong>potential broader impact to area</strong>, including:
                                                        <ul>
                                                            <li>Muddy Water → potential nearby landslide</li>
                                                            <li>Fallen Power Pole → potential power outage</li>
                                                            <li>Road Passability → possibility of emergency vehicle use & isolated residential areas</li>
                                                        </ul>
                                                    </li>
                                                    
                                                </ul>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <h6>Contextual Insights</h6>
                            <div class="row align-items-center justify-content-around">
                                <div class="col-12">
                                    <p>
                                        <ul>
                                            <li>
                                                <strong><u>National Standards in Japan for Assessing Impact Severity</u></strong>
                                                <ul>
                                                    <li>
                                                        Standards for Flood Impact Severity on Housing used in Fukuchiyama:
                                                        <ul>
                                                            <li>“Water reaches up to the first-floor ceiling” → Severe Flooding/Destruction</li>
                                                            <li>“Water reaches 1m above first-floor level” →  Partial Flooding/Destruction</li>
                                                            <li>“Water reaches below flood level” → Minor Flooding/Destruction</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong><u>Insights Derived from both the Image and Contextual-Knowledge:</u></strong>
                                                <ul>
                                                    <li>
                                                        <strong>FC crisis experts used contextual knowledge</strong> of the area where the image was taken in gaining insights
                                                        <ul>
                                                            <li>E.g. Image showing flooding in an area that doesn’t typically flood causes more concern for that area</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5>Image Annotation Workshop & Methodology Iteration - Discussion</h5>
                            <p>
                                <ul>
                                    <li>
                                        From crisis expert insights and feedback, we have determined that the tasks as
                                        presented in this work have classes with interpretations that are either <strong>too
                                        vague and subjective (damage severity, humanitarian categories, and informativeness)</strong>
                                        or <strong>too simplistic (flood presence)</strong> to be useful for them in gaining situational awareness
                                        about an unfolding crisis event.
                                    </li>
                                    <li>
                                        The humanitarian categories task has the "Rescue, Volunteering,
                                        or Donation Effort" class, which has insights for the <strong>recovery phase of a crisis
                                        event rather than the emergency phase. Since our ML methodology aims to assist
                                        crisis managers during the emergency phase of a crisis event, such classes should be
                                        revised or replaced with classes which have insights directly for the emergency phase.</strong>
                                    </li>
                                    <li>
                                        Although the <strong>flood presence task</strong> has classes with interpretations which are too simple for attaining situational awareness, we note that the <strong>relatively high performance,
                                        high consistency between independent annotators, and clarity</strong> in the interpretation
                                        of the classes associated with the flood presence task <strong>sets precedent for task creation and model performance for the future tasks</strong> developed from the insights and
                                        feedback received from the workshops discussed in this work and future workshops.
                                    </li>
                                </ul>
                            </p>
                            <p> 
                                The insights and feedback provided by the domain experts enabled us to determine
                                how the Image Analysis Module we have developed in this work is limited in helping
                                to gain insights about the unfolding crisis event. <strong>Where our ML methodology falls
                                short in meeting their information needs, their feedback will assist in developing new
                                classification tasks which would be informative enough to assist them during a crisis
                                event and clear enough to yield more consistent labels between annotators, ensuring
                                better quality data to train and evaluate models.</strong> The development of new image
                                prediction tasks and associated models will be conducted in a future work. However,
                                we were able to apply some of these insights to inform the ML methodology of the
                                <a href="#/projects/ml-for-crowdsourced-crisis-data/text-analysis-module">Text Analysis Module</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { scrollUpFunc } from '../../../constants';

export default {
  name: 'ImageAnalysisCarousel',
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

@media (min-width: 501px) and (max-width: 800px) {
    .cc-carousel-item img {
        max-height: 80vw;
    }
}

@media (max-width: 500px) {

    #test-set-eval {
        height: 42vw;
    }

    #agg-metrics {
        height: 42vw;
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