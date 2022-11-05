<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-8">  
            <h3>Image Analysis Module</h3>
        </div>
        <div class="col-12 col-md-10">
            <div id="ImageAnalysisCarousel" class="carousel slide">
                <ol class="carousel-indicators">
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="2"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="3"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="4"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="5"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="6"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="7"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="8"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="9"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="10"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="11"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="12"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="13"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="14"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="15"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="16"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="17"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="18"></li>
                    <li data-bs-target="#ImageAnalysisCarousel" data-bs-slide-to="19"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item cc-carousel-item active">
                        <div class="row align-items-center justify-content-center pb-5">
                            <div class="col-12 col-md-4 pt-3">
                                <img id="image-analysis-module" class="img-fluid" src="../../../../public/assets/image-analysis-module.png" alt="Second slide">
                            </div>
                            <div class="col-12 col-md-6 pt-3">
                                <h5>Image Analysis Module Overview</h5>
                                <h6>Aim</h6>
                                <p> 
                                    The aim of the Image Analysis Module is to utilize pretrained Convolutional Neural Network (CNN) models to yield
                                    efficient and accurate predictions from image data in crowdsourced crisis reports such as those on RiskMap & Twitter. The
                                    classification tasks of <strong>Damage Severity (DS), Humanitarian Categories (HC), Informativeness (IN)</strong>, and
                                    <strong>Flood Presence (FP)</strong> form a diverse suite of labels for the automatic categorization of crisis data, which can <strong>reduce the time necessary for manual assessment of reports; in a fraction of a second, the model
                                    predictions made for these tasks provide a series of categorizations for an individual
                                    report.</strong> We leverage state-of-the-art CNNs, which strike a necessary balance between
                                    model complexity, memory and storage constraints, and model performance to provide
                                    these predictions.
                                </p>
                                <h6>Methodology</h6>
                                <p>
                                    To achieve this aim, we use large, labeled, open-source datasets for training and
                                    evaluating the models. We formulate a new crisis image classification task for detecting flood presence in an image and construct
                                    a new dataset altogether using flood images from various open-source datasets, which contained
                                    flood-adjacent labels. <strong>We were given unlabeled flood crisis images from crisis managers in Fukuchiyama (FC), Japan.</strong> We devise an annotation procedure to label this data and analyze the results of human-annotations on the images. 
                                    <strong>Since this data was not used to train or develop the models, we aimed to see if our trained models could accurately classify unseen images from the FC context</strong>.
                                    <strong>We held various image annotation workshops with crisis managers</strong> to identify the <strong>limitations in our
                                    approach</strong> and understand <strong>how we could iterate on the design of our ML methodology.</strong> This procedure enabled us to evaluate the use of image classification models in assisting crisis managers
                                    using <strong>quantitative metrics</strong> as well as <strong>qualitatively through the feedback</strong> we received through image annotation workshops. 
                                    This evaluation directly influenced our approach for devising the Text Analysis Module.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around pb-5">
                            <div class="col-12 col-md-7">
                                <h5>Summary of Results</h5>
                                <h5>Development of Flood Presence Task, Open-source Dataset Creation, and Performance Benchmark</h5>
                                <p>
                                   In our research focus of flood-crisis events, we created a new crisis image classification task for predicting the presence of 
                                   flood in an image. We form a large, labeled dataset of approx. 23k images from smaller open-source Twitter crisis image datasets with flood-adjacent labels.
                                   We created randomized, non-overlapping train/dev/test splits, developed an EfficientNet-B1 CNN model to perform the task, and <strong>report a benchmark performance of 
                                   92.1% weighted F1 score</strong>. We open-source the dataset, the data splits, and the trained model weights.
                                </p>
                                <h5>Annotation, Ground-truthing of Fukuchiyama Crisis Images & Interannotator Agreement Analysis</h5>
                                <p>
                                    <strong>In an effort to involve crisis managers in the development of the ML methodology</strong> for mitigating information overload during crisis events, we were given
                                    a dataset of <strong>658 on-the-ground, unlabeled images from crisis managers in Fukuchiyama, Japan, a context which is suspectible to flooding, in order to evaluate the CNN models we trained on an unseen context.</strong>
                                </p>
                                <p>
                                    We developed an annotation guide for labeling these images for the image classification tasks of Damage Severity, Humanitarian Categories, Informativeness, and Flood Presence. Members of the 
                                    Urban Risk Lab labeled these images for each of these tasks.
                                </p>
                                <p>
                                    To understand how reproducible the labeling was for each of the tasks as well as to have a <strong>measure of the data quality</strong>, we computed the Fleiss' Kappa score
                                    for each task. <strong>We report Fleiss' Kappa scores of 0.413, 0.304, 0.313, and 0.829 for the Damage Severity, Humanitarian Categories, Informativeness, and Flood Presence tasks, respectively. </strong>This suggests that further investigation 
                                    should be conducted in refining the label definitions and the annotation guide for clarity for the Damage Severity, Humanitarian Categories, and Informativeness tasks.
                                <p>
                                    We use the most-frequent label provided for an image for a specific task as the ground-truth label. We thus create a ground-truth dataset for each task to evaluate the trained 
                                    CNN models on. We call these ground-truth datasets the Fukuchiyama Crisis Images.
                                </p>
                                <h5>Development of CNN Models for various Crisis Image Classification Tasks & Evaluation on Fukuchiyama Crisis Images</h5>
                                <p>
                                    Using large, open-source, <strong>labeled Twitter crisis image datasets, covering a variety of crisis and geographical contexts, we trained EfficientNet-B1 CNN models</strong> to perform the tasks of Damage Severity, 
                                    Humanitarian Categories, Informativeness, and Flood Presence. In order to understand how well the trained models would perform on the unseen Fukuchiyama context, we
                                    tested them on the Fukuchiyama Crisis Images previously mentioned. We investigated aggregate metrics such as those reported in the crisis informatics literature (e.g. weighted F1) and 
                                    per-class performance metrics (precision, recall, and F1). 
                                </p>
                                <p>
                                    Of all the models we 
                                    developed, we found that the <strong>Flood Presence model performed relatively well on the Fukuchiyama data</strong>, achieving a <strong>weighted F1 score of 82.5%</strong>, having scores <strong>at or above 0.793 on both the "Flood" & "Not Flood" classes by 
                                    precision, recall, and F1</strong>. Additionally, we note that the <strong>Flood Presence task</strong> had the highest Fleiss' Kappa score among the tasks, and with all of these measures considered, <strong>sets precedent for the development of crisis image classification
                                    tasks & corresponding models in future work.</strong>
                                </p>
                                <h5>Image Annotation Workshops for Insights from Crisis Managers</h5>
                                <p>
                                    From the image annotation workshops we held with crisis managers in various contexts, we began to understand limitations in the tasks we investigated in
                                    the image analysis module such as the <strong>Damage Severity, Humanitarian Categories, and Informativeness having class labels which were too subjective to be useful during crisis</strong>. The Humanitarian Categories task has the
                                    "Rescue, Volunteering, and Donation Effort" class which corresponds to the recovery phase of a crisis event and not the emergency phase which was more imperative to the crisis managers.
                                    Finally, <strong>the Flood Presence task has classes which are considered too simplistic to be useful during a crisis event</strong>.
                                </p>
                                <p>
                                    As we held workshops with crisis managers from both the Fukuchiyama context and the US, we came to understand <strong>cross-contextual and contextual insights</strong>.
                                </p>
                                <p>
                                    <strong>Cross-contextually, assessing the potential of human casualty in crisis imagery is considered a top priority.</strong> Furthermore, <strong>the cost of not investigating the potential for human casualty when there is actually
                                    human casualty (false negative) is considered more costly than investgating when there is NOT human casualty (false positive).</strong> The presence of people in crisis images should be assessed with high-priority and the insights derived from those images 
                                    should be <strong>specific</strong> as specific insights can help personnel assess crisis severity. Lastly, physical markers in images can often indicate to crisis managers broader crisis impact to an area, e.g. muddy water suggests potential 
                                    nearby landslide.
                                </p>
                                <p>
                                    The <strong>crisis managers in Fukuchiyama used contextual insights</strong>, namely they assessed flood impact severity using <strong>National Standards in Japan</strong>. Additionally, when
                                    assessing an image, the Fukuchyama crisis experts used both the image and their knowledge about the area where an image was taken, e.g. if an image shows flooding but the area
                                    in which that image was taken doesn't typically flood, this causes them more concern for that specific area.
                                </p>
                                <p>
                                    We determined that depending on the task, <strong>rather than using common metrics reported in the literature, we can integrate the priorities of crisis managers during crisis into our selection of
                                    an appropriate performance metric when developing an ML model</strong>, e.g. capturing a priority in the performance metric that for a specific task, a false negative is more costly than a false positive. We investigate this further in the Text Analysis Module.
                                </p>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5>Image Datasets & Train/Dev/Test Splits for Model Development & Evaluation</h5>
                            <div class="row justify-content-around">
                                <div class="col-12 col-md-6">
                                    <p>
                                        Since we used CNN models, specifically the <strong>EfficientNet-B1 architecture pretrained on ImageNet</strong>, we wanted to make use of <strong>large open-source Twitter crisis image datasets</strong>
                                        for <strong>finetuning</strong> the models to perform the classification tasks of Damage Severity (DS), Humanitarian Categories (HC), Informativeness (IN), and Flood Presence (FP).
                                    </p>
                                    <h6>Open-source Consolidated Crisis Image Datasets</h6>
                                    <p>
                                        For the DS, HC, and IN tasks, we made use of the open-source train/dev/test splits made available at 
                                        <a href="https://crisisnlp.qcri.org/crisis-image-datasets-asonam20" target="_blank">CrisisNLP</a>. We train the models for these tasks using
                                        the train and dev splits. For evaluation, we make use of the respective test splits for each task.
                                    </p>
                                    <h6>Flood Presence Task Creation and Dataset Formation</h6>
                                    <p>
                                        <strong>In this work we focus on flood-crisis events</strong>, thus we used various open-source image datasets which have flood-adjacent labels
                                        and map them to the <strong>binary labels of "Flood"/"Not Flood".</strong> Using the resulting dataset, <strong>we create randomized, non-overlapping Train/Dev/Test splits.</strong>
                                        Similar to the above, we use the train & dev splits to develop the FP model, and the test split to evaluate the model.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <div class="row align-items-center justify-content-around">
                                <div class="col-12 col-md-6 pb-4">
                                    <h5>Flood Presence Dataset Composition</h5>
                                    <h6>Composition of the Flood Presence (FP) dataset from the original data sources and the number of images for each label</h6>
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
                            <div class="row align-items-center justify-content-center">
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
                                <div class="col-12 col-md-8">
                                    <br>
                                    <p>
                                        As part of the framework we developed, we investigated the class imbalance for each of the
                                        image classification training sets. We observed <strong>significant imbalance in the label distributions for the Damage Severity</strong> 
                                        and the <strong>Humanitarian Categories tasks.</strong> We note that this imbalance <strong>could be problematic for the performance of the models on
                                        the minority classes</strong> for those tasks, e.g. the <strong>"Mild", "Rescue, Volunteering, or Donation Effort"</strong>, and <strong>"Affected, Injured, or Dead People"</strong> classes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-center pb-3">
                            <div class="col-12">
                                <h5>Model Evaluation on Test Splits & Flood Presence Benchmark Performance</h5>
                            </div>
                            <div class="col-12 col-md-6">
                                <h6 class="pb-2">
                                    Performance of image classification models on their respective test splits. [1] as referred to in the table can be found in the footnote below.<sup><a href="#fn1" id="ref1">1</a></sup>
                                </h6>
                                <img id="test-set-eval" src="../../../../public/assets/test-set-eval.png" class="img-fluid">
                            </div>
                            <div class="col-12 col-md-7">
                                <br>
                                <p>
                                        Similar to the authors in [1]<sup><a href="#fn1" id="ref1">1</a></sup>, we report overall model performance as
                                        <strong>weighted metrics in order to take into account the class imbalance</strong> which is present in the test splits.
                                        From the table above, we observe that the models we finetuned achieve a weighted F1 score within a 1% difference
                                        compared to the model performances reported in [1]. <strong>We report a benchmark performance of 92.1% weighted F1 for the Flood Presence (FP) task.</strong>
                                        We postulate the comparatively higher performance of for the FP task to be due to the task being binary, having relatively low class imbalance in the training and test sets, as well as being the most clear and objective task, thus being a comparatively
                                        simple task for a model to learn. We explore this more through interannotator agreement analysis discussed in the next few slides.
                                </p>
                                <hr>
                                <p>
                                    <sup id="fn1">1. Firoj Alam, Ferda Ofli, Muhammad Imran, Tanvirul Alam, Umair Qazi, 
                                        <a href="https://arxiv.org/abs/2011.08916" target="_blank">Deep Learning Benchmarks and Datasets for Social Media Image Classification for Disaster Response</a>, 
                                        In 2020 IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining (ASONAM), 2020.<a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a>
                                    </sup>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-center pb-3">
                            <div class="col-12 col-md-6 pb-3">
                            <h5>Annotating Fukuchiyama Crisis Images</h5>
                            <p>
                                To evaluate our developed models and framework in a context which is susceptible to flood events, we cooperated with <strong>crisis managers in 
                                Fukuchiyama (FC), Japan to attain 658 images</strong> from <strong>previous FC flood events</strong> as well as <strong>non-crisis normal days in FC</strong>, which were collected on the ground,
                                similar to RiskMap & Twitter crisis images. This evaluation enabled us to understand <strong>how well training the models on the large, consolidated crisis datasets</strong>, which cover a diverse set
                                geographical locations and a multitude of crisis events, would <strong>perform on the unseen
                                data from flood events in FC</strong>. However, in order to form evaluation/test sets from this data, we <strong>needed to label the images</strong> for each of the four image classification tasks we've discussed.
                            </p>
                            <p>
                                <ul>
                                    <li>The images were labeled independently by Urban Risk Lab researchers for each task. The researchers used <a href="https://github.com/dyllew/towards-automated-assessment-of-crowdsourced-crisis-reporting/blob/main/Image%20Analysis%20Module/Annotation/Image%20Labeling%20Guide.docx" target="_blank">this guide</a> to inform their decisions.</li>
                                    <li>Each image was <strong>independently</strong> provided a <strong>single label for each task</strong> by <strong>3 annotators</strong>.</li>
                                    <li><strong>We enforced independent labeling</strong> by hiding the labels given by the other labelers during someone's labeling.</li>
                                </ul>
                            </p>
                            <p>
                                Since each image was given three labels for a task, we use the plurality, or <strong>most frequent label</strong>, given to the image as the <strong>ground-truth label</strong> for that image. We chose this method of ground-truthing <strong>to minimize any specific person's contributed bias</strong> towards the ground-truth label.
                                If there was not a plurality label, we do not label the image and thus do not put that image in the test set for that task, but <strong>made note of the disagreement for later analysis</strong>.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Inter-Annotator Agreement Analysis on Annotated Fukuchiyama Images</h5>
                        <div class="row align-items-center justify-content-around pt-3">
                            <div class="col-12 col-md-6">
                                <h2>“... a computer cannot generally agree with annotators at a rate that is higher than the rate at which the annotators agree with each other."<sup><a href="#fn2" id="ref2">1</a></sup></h2>
                            </div>
                            <div class="col-12 col-md-6">
                                <p> 
                                    Since the data we have is <strong>human-annotated</strong> and thus permits <strong>subjectivity</strong>, we aimed to assess and make transparent <strong>the quality of the annotated datasets</strong>, thus we computed measures of <strong>inter-annotator agreement (IAA)</strong>.
                                    <br>
                                    <br>
                                    This IAA analysis enabled us to determine, for each task:
                                    <ul>
                                        <li>How reproducible labeling for the task is</li>
                                        <li>If our annotation procedure can be improved, such as by:</li>
                                            <ul>
                                                <li>Refinement of task label definitions</li>
                                                <li>Clarifying data points of disagreement between annotators</li>
                                                <li>Adding more illustrative examples for each class</li>
                                            </ul>
                                    </ul>
                                    This analysis has the advantage of happening <strong>before any model development</strong>, focusing on <strong>improvement of classification task formulation itself rather than building a model which will ultimately perform poorly on an ill-formed task.</strong>
                                </p>
                            </div>
                            <div class="col-12 col-md-9 pb-4">
                                <br>
                                <hr>
                                <p>
                                    <sup id="fn2">1. D. T. Nguyen, K. Al-Mannai, S. R. Joty, H. Sajjad, M. Imran, and P. Mitra, <a href="https://arxiv.org/abs/1608.03902" target="_blank">“Rapid classification of crisis-related data on social networks using convolutional neural networks,”</a> CoRR, vol. abs/1608.03902, 2016.<a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around pb-4">
                            <div class="col-12">
                                <h5>Inter-Annotator Agreement Analysis on Annotated Fukuchiyama Images</h5>
                            </div>
                            <div class="col-12 col-md-4">
                                <h6>Agreement Measures by Task for Labeled Fukuchiyama Images</h6>
                                <img src="../../../../public/assets/iaa.png" class="img-fluid">
                            </div>
                            <div col="col-12"></div>
                            <div class="col-12 col-md-6">
                                <br>
                                <p>
                                    <strong>Fleiss' Kappa</strong> [-1, +1] score incorporates the level of agreement attained if the annotators did not look at the data when labeling, i.e. 
                                    <strong>random chance agreement</strong>, which is an advantage over the complete agreement percentage ("Unanimous Agreement Percentage" pictured above), that is, the percentage of data points in which all annotators
                                    agree on the same label.
                                    <ul>
                                        <li>By Fleiss' Kappa, we observe smaller improvements over random chance agreement for Damage Severity (0.413), Humanitarian Categories (0.304), and Informativeness (0.313) as compared to Flood Presence (0.829)</li>
                                            <ul>
                                                <li>This <strong>suggests that further investigation should be conducted in refining the label definitions and the annotation guide for clarity</strong> by understanding potential causes for disagreement on the tasks with lower Fleiss' Kappa scores,
                                                    in order <strong>to improve agreement and thus the quality of the dataset</strong>.</li>
                                            </ul>
                                        <li>We use the <strong>plurality labels found for each task to form the ground-truth FC datasets</strong> for each of the tasks which we evaluate the previously mentioned trained CNN models on.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="col-12">
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
                        </div>
                        <div class="row align-items-center justify-content-center pb-5">
                            <div class="col-12 col-md-7">
                                <br>
                                <p>
                                    The ground-truth datasets are formed from the plurality labels found from the annotations given to the FC images.

                                    We again <strong>observe imbalance in the resulting datasets</strong>, albeit to varying degrees. Therefore, we again make <strong>use of weighted aggregate metrics for model evaluation</strong>,
                                    however, for a more granular insight into model performance, we <strong>also investigate the per-class performance of each model by precision, recall, 
                                    and F1</strong> score for each class and visualize the <strong>confusion matrix</strong>. Lastly, we <strong>establish a comparison to a baseline classifier</strong> using the <strong>Cohen's Kappa score</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Model Evaluation on Fukuchiyama Data - Per-Class Metrics</h5>
                        <div class="carousel-text">
                            <h5><strong>Damage Severity</strong></h5>
                            <div class="row align-items-center justify-content-center">
                                <div class="col-12 col-md-6 col-lg-4 pt-3">
                                    <img src="../../../../public/assets/damage_severity_confusion_matrix.png" class="img-fluid">
                                </div>
                                <div class="col-12 col-md-6 col-lg-5 pt-3">
                                    <img src="../../../../public/assets/damage_severity_per_class_metric.png" class="img-fluid">
                                </div>
                                <div class="col-12 col-md-7">
                                    <br>
                                    <p>
                                        For the damage severity model, we notice that when the model
                                        mispredicts the "Little or None" class (i.e. looking at the True Label row for "Little or None"), it predicts "Mild" far more than "Severe".
                                        Relatedly, when the damage severity model mispredicts the "Mild" class, it far more
                                        often predicts "Little or None" than "Severe". Finally, when the model mispredicts
                                        the "Severe" class, it predicts "Mild" more than either "Little or None" or "Severe".
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Model Evaluation on Fukuchiyama Data - Per-Class Metrics</h5>
                        <div class="carousel-text">
                            <h5><strong>Humanitarian Categories</strong></h5>
                            <div class="row align-items-center justify-content-center">
                                <div class="col-12 col-md-6 col-lg-4 pt-3">
                                    <img src="../../../../public/assets/humanitarian_categories_confusion_matrix.png" class="img-fluid">
                                </div>
                                <div class="col-12 col-md-6 col-lg-5 pt-3">
                                    <img src="../../../../public/assets/humanitarian_categories_per_class_metric.png" class="img-fluid">
                                </div>
                                <div class="col-12 col-md-7">
                                    <br>
                                    <p> 
                                        We observe from the per-class performance metrics that the <strong>humanitarian categories model performance varies greatly between the classes for the task</strong>. 
                                        Namely, we see that the <strong>"Affect, Injured, or Dead People" (AIDP) class has scores of 0 across all metrics</strong>. From the training set distributions discussed earlier, 
                                        we observe that the <strong>AIDP class is only 6.12% of the entire training set for the humanitarian categories task</strong>. 
                                        This is the smallest training set class proportion for any of the image classification tasks examined in this work, 
                                        with the next lowest training set class proportions being those for the RVDE class in the humanitarian categories task 
                                        and the "Mild" class of damage severity at 14.0% and 14.4%, respectively. 
                                        This <strong>suggests that the imbalance of the humanitarian categories training set impacts the performance of the humanitarian 
                                        categories severely on the minority classes</strong>, especially the AIDP class, the class with the lowest proportion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>                 
                    <div class="carousel-item cc-carousel-item">
                        <h5>Model Evaluation on Fukuchiyama Data - Per-Class Metrics</h5>
                        <div class="carousel-text">
                            <h5><strong>Informativeness</strong></h5>
                            <div class="row align-items-center justify-content-center">
                                <div class="col-12 col-md-4 pt-3">
                                    <img src="../../../../public/assets/informativeness_confusion_matrix.png" class="img-fluid">
                                </div>
                                <div class="col-12 col-md-4 pt-3">
                                    <img src="../../../../public/assets/informativeness_per_class_metric.png" class="img-fluid">
                                </div>
                                <div class="col-12 col-md-7">
                                    <br>
                                    <p>
                                        By nature of the labeled FC crisis image data being almost
                                        exclusively related to crisis events or "normal day" photos, the "Not Informative"
                                        class is only 69 images as opposed to the 589 "Informative" photos. We note that
                                        <strong>in the original conception of the informativeness task in [1]<sup><a href="#fn3" id="ref3">1</a></sup>, the informativeness classifier is intended
                                        to be used for filtering noisy tweets which are completely unrelated to crisis events
                                        from relevant tweets</strong>, however as we report, it is <strong>not an adequate classifier for filtering
                                        images indicative of crisis impact and those of "normal-day" scenes, because, as we
                                        have learned, that is a different task altogether</strong>. We observe that the model correctly
                                        classifies most of the images labeled "Informative" with a recall score of 0.781. When
                                        classifying the images labeled as "Not Informative", the classifier classifies 53.6% of
                                        these images incorrectly as "Informative" and 46.4% of these images correctly as
                                        "Not Informative". <strong>Across all per-class metrics, the model performs reasonably well on the
                                        "Informative" class, but significantly worse on the "Not Informative".</strong>
                                    </p>
                                    <hr>
                                    <p>
                                        <sup id="fn3">1. Firoj Alam, Ferda Ofli, Muhammad Imran, Tanvirul Alam, Umair Qazi, 
                                            <a href="https://arxiv.org/abs/2011.08916" target="_blank">Deep Learning Benchmarks and Datasets for Social Media Image Classification for Disaster Response</a>, 
                                            In 2020 IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining (ASONAM), 2020.<a href="#ref3" title="Jump back to footnote 1 in the text.">↩</a>
                                        </sup>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Model Evaluation on Fukuchiyama Data - Per-Class Metrics</h5>
                        <h5><strong>Flood Presence</strong></h5>
                        <div class="row align-items-center justify-content-center">
                            <div class="col-12 col-md-6 col-lg-4 pt-3">
                                <img src="../../../../public/assets/flood_confusion_matrix.png" class="img-fluid">
                            </div>
                            <div class="col-12 col-md-6 col-lg-5 pt-3">
                                <img src="../../../../public/assets/flood_presence_per_class_metric.png" class="img-fluid">
                            </div>
                            <div class="col-12 col-md-7 pb-4">
                                <br>
                                <p>
                                    Unlike the models for damage severity, humanitarian categories, and
                                    informativeness, the flood presence model <strong>performs consistently well (less variation
                                    and higher values) by all metrics across all classes in the task</strong>, attaining metric scores at or
                                    above 0.793 across all metrics for both classes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                            <div class="row align-items-center justify-content-around pb-5">
                                <div class="col-12">
                                    <h5>Model Evaluation on Fukuchiyama Data - Aggregate Metrics</h5>
                                </div>
                                <div class="col-12 col-md-5">
                                    <h6>Performance of Image Classification models on task-respective Fukuchiyama Data</h6>
                                    <img id="agg-metrics" src="../../../../public/assets/agg-metrics-fc.png" class="img-fluid">
                                </div>
                                <div class="col-12"></div>
                                <div class="col-12 col-md-7">
                                    <br>
                                    <p> 
                                        By Cohen's Kappa score, we see that the <strong>damage severity and informativeness</strong> tasks provide 
                                        a relatively <strong>small improvement over the random classifier</strong> for their corresponding datasets 
                                        as compared to the humanitarian categories model and far more so for the <strong>flood presence model, 
                                        which provides the most improvement over the random classifier</strong> for its dataset.
                                    </p>
                                    <p>
                                        We observe across all of the weighted metrics for all tasks, the performances of the models 
                                        on the Fukuchiyama data are lower than the performances achieved on the consolidated crisis image 
                                        test splits and flood presence test set reported earlier. This is most apparent for the damage severity model, 
                                        which achieves a weighted F1 score of 43.2% on the Fukuchiyama data. Similar to the
                                        performance of the flood presence model on flood presence test split, the <strong>flood presence model performs 
                                        relatively well on the Fukuchiyama flood presence task images achieving a weighted F1 of 82.5%</strong>.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Model Evaluation on Fukuchiyama Data - Discussion</h5>
                        <div class="row align-items-center justify-content-center pb-5">
                            <div class="col-12 col-md-7">
                                <h6>Performance on Fukuchiyama Data</h6>
                                <p>
                                    <ul>
                                        <li>
                                            Investigating the <strong>per-class performance</strong> allowed us to see which classes may be suffering from <strong>class imbalance issues</strong> 
                                            (e.g. "Affected, Injured, or Dead People") as well as the common mistakes a model makes when predicting, such as when the damage severity model 
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
                                            and by adding <strong>more clarification/examples</strong> where necessary in the annotation guide.
                                        </li>
                                        <li>
                                            We <strong>consider the performance of the Flood Presence model across the datasets to be robust</strong>, 
                                            which we theorize is due to the task is binary (as opposed to multiclass) and has classes which yield higher agreement between annotators.
                                        </li>
                                    </ul>
                                </p>
                                <h6>Importance of Selecting a Metric based on Crisis Management Priorities and the Nature of the Data</h6>
                                <p>
                                    <ul>
                                        
                                        <li>While the Flood Presence model may be performant, we aimed to understand if this task as well as the other tasks have <strong>informative utility to crisis managers during flood crisis</strong>.</li>
                                        <li>Although <strong>weighted F1</strong> is a popular metric reported in the literature, it is <strong>biased towards the model's performance on the majority classes.</strong></li>
                                        <li>Cohen's Kappa provides the level of accuracy achieved that is above the <strong>random classifier baseline.</strong></li>
                                        <li>Cohen’s Kappa can be a more appropriate metric to use in the case of multiclass classification tasks when the dataset is imbalanced, 
                                        but <strong>there is likely an even more appropriate metric depending on the task and the priorities of crisis managers</strong>.</li>
                                        <li>We have determined that selecting a model performance metric should be a process which both considers the <strong>nature of the data</strong> (i.e. class imbalance) & uses <strong>insights from crisis managers</strong>.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-center pt-3 pb-4">
                            <div class="col-12 col-md-6">
                                <h5>Understanding the Informative Utility of the Image Analysis Module</h5>
                                <p>
                                    To broaden the discussion of the efficacy the image analysis module has in mitigating information overload and enhancing situational awareness, we also <strong>qualitatively
                                    examine the informative utility the image models have in assisting crisis managers during a flood crisis event</strong>. 
                                </p>
                                <p>
                                    We held <strong>image annotation workshops</strong> with various crisis managers and aimed to
                                    understand <strong>what type of information they seek to gain from a crowdsourced image</strong> during a flood crisis event as well as <strong>what their priorities are</strong>. We iterate on our methodology
                                    by using insights we gained from the crisis managers in the development of the Text Analysis Module, exhibiting the <strong>principle of iterative development our framework intends to promote</strong>.
                                </p>
                            </div>
                            <h5> Image Annotation Workshops with EOC & Methodology Iteration </h5>
                            <div class="col-12 col-md-6">
                                <p>
                                    The Urban Risk Lab<sup><a href="#fn4" id="ref4">1</a></sup> held image annotation workshops in December 2021 with the following crisis experts in Fukuchiyama:
                                    <ul>
                                        <li><strong>Director of the Regional Disaster Management Research Center</strong>, Fukuchiyama Public University  and Former Crisis Management Supervisor of Fukuchiyama City</li>
                                        <li><strong>3 Crisis Managers</strong> at an EOC in Fukuchiyama</li>
                                        <li><strong>5 Associates</strong> (including Fire Department Director & 1 Firefighter) <strong>of the Fire Department</strong> in Fukuchiyama</li>
                                    </ul>
                                    In January 2022, the same workshop was held with a <strong>former Deputy Administrator</strong> of the Federal Emergency Management Agency <strong>(FEMA)</strong> in the US.
                                </p>
                                <p>
                                    Crisis experts were <strong>presented 25 images</strong> from past FC flood crises. The images represented various types of crisis impact.<sup><a href="#fn5" id="ref5">2</a></sup> A subset of the images were selected because they had <strong>disagreement between annotators</strong> & 
                                    were given <strong>a wrong prediction by the CNN model</strong> developed for a task.
                                </p>
                                <p>
                                    The <strong>crisis experts were tasked with labeling images with a variety of labels</strong> & <strong>identifying insights</strong> from an image that are <strong>useful for decision making and response</strong> during crisis events.
                                </p>
                                <hr>
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
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-12 col-md-7">
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
                                    often expanded beyond these questions, getting to the core of what their main insights would be through manual assessment of the image data and what their main decision priorities would be during a flood crisis event as it relates to analyzing the image data:
                                </p>
                            </div>
                            <div class="col-12 col-md-8 pb-5">
                                    <img src="../../../../public/assets/workshop-preface-questions.png" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around">
                            <div class="col-12 col-md-7">
                                <h5>Image Annotation Workshops with Crisis Experts - Results</h5>
                                <p>
                                    We report qualitative summaries describing the insights derived
                                    from manual assessment by crisis experts of the crisis report images and their
                                    expressed information needs. We used these summaries to compare how the
                                    insights the Image Analysis Module aims to automatically provide to crisis managers
                                    compares to the insights derived from manual assessment by crisis experts and their
                                    expressed information needs. This comparison allowed us to qualitatively assess the utility of the Image Analysis Module in attaining situational awareness as it was
                                    devised in this work, and helped us in determining ways to iterate on the module in the future to better accommodate the information needs of the crisis managers during
                                    a crisis event through new prediction tasks which align with their information needs.
                                </p>
                            </div>
                            <div class="col-12 col-md-7">
                                <h6>Cross-contextual Insights</h6>
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
                            <div class="col-12 col-md-7 pb-4">
                                <h6>Contextual Insights</h6>
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
                                                        <li>“Water reaches below floor level” → Minor Flooding/Destruction</li>
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
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around pb-4">
                            <div class="col-12 col-md-7">
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
                                    The insights and feedback provided by crisis experts enabled us to determine
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
    </div>
</template>

<script>
import { scrollUpFunc, enableSwipeOnCarousel } from '../../../constants';

export default {
  name: 'ImageAnalysisCarousel',
  mounted() {
    scrollUpFunc();
    enableSwipeOnCarousel('ImageAnalysisCarousel');
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