<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-8">  
            <h3>Text Analysis Module</h3>
        </div>
        <div class="col-md-10">
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
                            <div class="col-12 col-md-7 pt-3 pb-2">
                                <img id="text-analysis-module" class="img-fluid" src="../../../../public/assets/text-analysis-module.png" alt="Second slide">
                            </div>
                            <div class="carousel-text col-12">
                                <h5>Text Analysis Methodology Overview</h5>
                                <p> 
                                    The Text Analysis Module aims to provide accurate and efficient classifications of
                                    crisis reports using the text modality that is often present in the reports. Another aim
                                    was to incorporate the insights we gained from the results of our qualitative analysis
                                    on the Image Analysis Module that were transferable
                                    between the data modalities, i.e. the importance of identifying potential for human
                                    casualty or risk to humans. We did this to exemplify our framework’s intention of
                                    producing iteratively developed ML methodologies and AI systems to enhance crisis
                                    awareness and response using insights gained from crisis managers.
                                </p>
                                <h6>Incorporating Crisis Expert Insights into Model Development & Performance Metric Selection</h6>
                                <p>
                                    To incorporate the insights of the crisis managers into the design and development
                                    of a new text classification model, we first created a classification task and associated
                                    classes that align with the expressed information needs of crisis managers during a
                                    crisis event. Then, we selected a performance evaluation metric that aligns with
                                    priorities of the crisis managers for that task, finally developing a model that is
                                    evaluated using the selected performance metric.
                                </p>
                                <h6>Human Risk Text Classification Experiments</h6>
                                <p>
                                    In the process of conducting this exercise, we performed various classification 
                                    experiments, experimenting with various text featurizations, classical machine learning
                                    algorithms, and importantly, we deliberated on the selection of a performance 
                                    evaluation metric based on our findings from the qualitative analysis of the image annotation
                                    workshops.
                                </p>
                                <h6>Preprocessing & Featurization of Japanese Text</h6>
                                <p>
                                    We note that since this study focused exclusively on Japanese crisis text, we
                                    constructed a preprocessing pipeline that uses open-source Japanese tokenizers, 
                                    stop-words, and a lemmatizer to preprocess the Japanese text. Additionally, we 
                                    investigated the use of text embeddings of the Japanese crisis text that are created by
                                    applying CLS pooling, a process which creates a contextualized numerical embedding
                                    of inputted text, using a pretrained Japanese Masked Language Modeling (MLM)
                                    BERT model in both our supervised and unsupervised learning experiments.
                                </p>
                                <h6>Clustering Data to Uncover Semantically-similar Groupings</h6>
                                <p>
                                    Finally, we conclude the development of this ML module on an exploratory note,
                                    devising a pipeline that evaluates a combination of text featurizations, dimensionality
                                    reduction techniques, and clustering algorithms to provide intuitive groupings of text
                                    to help inform the development of text classification tasks in future work.
                                </p>
                                <h6>Evaluation</h6>
                                <p>
                                    In our evaluation of our text classification experiments, we perform quantitative
                                    evaluation, assessing the performance of the model for the task based on the 
                                    determined evaluation metric mentioned above in addition to other metrics, e.g. per-class
                                    performance metrics. For our unsupervised experiments, we include both 
                                    quantitative and qualitative evaluation. Using the Within-Cluster Sum of Squares (WCSS)
                                    metric, we determine a set of optimal clustering pipeline configurations and their
                                    corresponding optimal number of clusters to use for further investigation. We assess
                                    qualitatively by investigating the resulting clusters and determining for each cluster,
                                    whether or not the representative documents within that cluster have a cohesive,
                                    interpretable label, and if they do, what that label is.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around">
                            <div class="carousel-text col-12">
                                <h5>Summary of Results</h5>
                                <h5>Iterating on ML Methodology based on Crisis Managers Insights</h5>
                                <p>
                                    Our framework was developed to both highlight the importance of involving crisis
                                    managers in the process of developing a ML methodology and contextualize model
                                    performance among other measures of efficacy for the ML methodology. Since our
                                    framework seeks to be used in the development and iteration of an ML methodology
                                    based on the insights gained from crisis managers, we iterated on the Text Analysis
                                    Module using insights we had gained from our results on the Image Analysis Module.
                                </p>
                                <h5>Developing the Human Risk Task</h5>
                                <p>
                                    Using labels provided directly to us by crisis managers, we created a new text
                                    classification task in an effort to better fulfill their information needs during a crisis
                                    event. Using insights gained from the results of image annotation workshops of the
                                    Image Analysis Module, we determined F2 score to be an appropriate
                                    performance metric for model performance evaluation as false negatives are more
                                    costly than false positives for assessing human risk from text reports. <strong>To the best
                                    of our knowledge, the exercises of creating a classification task from labels provided
                                    directly by EOC and formulating an appropriate model performance metric informed
                                    from crisis expert insights are novel contributions of this work.</strong> These exercises follow
                                    directly inline with our framework, <strong>using the results
                                    from the Image Analysis Module to iteratively design and develop ML models for the
                                    Text Analysis Module.</strong>
                                </p>
                                <h5>Human Risk Task Model Evaluation</h5>
                                <p>
                                    Using F2 as the metric to optimize for during 5 x 5 Nested CV, we were able to
                                    identify the SVM algorithm and its corresponding hyperparameter grid as achieving a
                                    relatively high mean F2 performance with low variance. To assess the model’s ability
                                    to perform the human risk classification task, we found the tuned SVM model to
                                    achieve an F2 score of 92.8%, which is a substantial improvement over the baseline
                                    model’s F2 score of 43.4%. Having a baseline is an important aspect of our framework
                                    as it enables us the ability to determine if a developed model is performing the task
                                    well, i.e. if it does not perform the task better than the baseline, it is not a useful
                                    model for the task. This suggests the tuned SVM model is a useful classifier for
                                    the task and performs the task reasonably well. This is further evidenced from the
                                    Precision-Recall curve, where the tuned SVM model achieved an AUCPR score of
                                    0.919, which is a significant improvement over the typical baseline classifier used for
                                    that metric which achieves an AUCPR of 0.133. We note that recall for the "Human
                                    Risk" class is higher than precision likely being a result of using F2 as the performance
                                    metric to optimize in the classification experiments. Lastly, when looking at the per-
                                    class performance metrics for each class, we see that the model performs reasonably
                                    well on both classes achieving scores at or above 0.857 for the "Human Risk" class
                                    and at or above 0.976 for the "Not Human Risk" class.
                                </p>
                                <h5>Clustering of Firefighter Crisis Text Reports</h5>
                                <p>
                                    From our preliminary clustering assessments, we observed that clustering using
                                    K-medoids rather than K-means with all else equal (i.e. text featurization and dimensionality reduction technique), 
                                    typically yielded lower WCSS scores across all 𝐾 values between 2-20. This is likely due to the K-medoids algorithm’s robustness to
                                    outliers and noise, suggesting that there may exist some reports in the corpus which
                                    are quite different from the rest.
                                </p>
                                <p>
                                    We note that since the corpus we studied was specific to flood and typhoon crisis events, 
                                    it is no surprise that many of the identified cluster labels are geared
                                    towards flood-related information such as "Areas with Flood Risk", "River Water
                                    Level and Corresponding Warning for EOC/FD", "Residential Areas/Buildings in
                                    Flood (Risk)", and "Landslide/Fallen Tree". Although some of the categories are
                                    quite general such as "Rescue (Activities/Requests)", "Closed Roads by the City",
                                    and "Impassable Roads (due to Flood/Obstacles/Damage)", we also see that some
                                    of the cluster labels are specific to the fire department such as "Areas where FD is
                                    active" and "FD Activities/Weather Warning/Flood Control Alert".
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Fukuchiyama Flood Text Reports Data Collection</h5>
                        <div class="row align-items-center justify-content-center">
                            <div class="col-12 col-md-4 pt-1 pb-md-5">
                                <img id="text-data-collection" class="img-fluid" src="../../../../public/assets/txt-data-collection.png" alt="Second slide">
                            </div>
                            <div class="col-12 pt-2 pb-4 col-md-6">
                                <p>
                                    Our crisis management partners in Fukuchiyama City (FC) compiled <strong>716 Japanese (JA) text transcripts</strong>
                                    of radio communications from <strong>on-the-ground firefighters</strong> which occurred during the following past FC flood events:
                                    <ul>
                                        <li>Typhoon Manyi in 2013</li>
                                        <li>Heavy Rain Event in August 2014</li>
                                        <li>Typhoon Lan in 2017</li>
                                        <li>Heavy Rain Event in July 2018</li>
                                    </ul>
                                    The data collection process for during these events is depicted in the neighbouring figure.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Fukuchiyama Flood Text Reports Dataset Characteristics</h5>
                        <div class="row align-items-center justify-content-center">
                            <div class="col-12 col-md-7 pt-3 pb-2">
                                <table id="text-characteristics-table">
                                        <tr>
                                            <th><strong>Total Reports</strong></th>
                                            <th><strong>Reports Labeled for Human Risk</strong></th>
                                            <th><strong>Reports Labeled for Emergency Operation Center (EOC) Humanitarian Categories</strong></th>
                                            <th><strong>Unique EOC Humanitarian Categories</strong></th>
                                        </tr>
                                        <tr>
                                            <td>716</td>
                                            <td>715</td>
                                            <td>584</td>
                                            <td>108</td>
                                        </tr>
                                    </table>
                            </div>
                            <div class="col-12">
                                <p>
                                    We use all 716 reports in our clustering experiments. Since 715 out of the total 716 reports are labeled for Human Risk, we 
                                    use those labeled reports in our classification experiments. 
                                    <br>
                                    <br>
                                    To understand how these firefighter crisis text reports compare to other Japanese crisis reports, we compare the FC firefighter reports character length distribution against another Japanese
                                    crisis text report corpus, the text of Tokyo crisis reports received by RiskMap (RM)
                                    during Typhoon Hagibis in 2019. We note that there are 68 reports in total for the
                                    Typhoon Hagibis RM reports dataset. 
                                </p>
                            </div>
                            <div class="col-10">
                                <img id="dataset-comparison" src="../../../../public/assets/character_box_and_whisk_fc_rm.png" class="img-fluid" alt="First slide">
                            </div>
                            <div class="col-6 col-lg-4 pt-3">
                                <h6>FC Firefighter Reports Characteristics</h6>
                                <div>
                                    <p>
                                        <ul>
                                            <li>N = 716 Reports</li>
                                            <li>Median = 22 Characters</li>
                                        </ul> 
                                    </p>
                                </div>
                            </div>
                            <div class="col-6 col-lg-4 pt-3">
                                <h6>Typhoon Hagibis RM Reports Characteristics</h6>
                                <p id="hagibis-details">
                                    <ul>
                                        <li>N = 68 Reports</li>
                                        <li>Median = 14 Characters</li>
                                    </ul> 
                                </p>
                            </div>
                            <div class="col-12">
                                <p>
                                    Most Japanese (JA) crisis text reports are between only a <strong>few characters</strong> to about <strong>50 characters</strong>. We also observe that each distribution is right-skewed. This is further seen by Twitter research, which 
                                    finds that <strong>JA tweets</strong> have a mode of <strong>15 characters</strong>, with a character distribution exhibiting right-skew. It is noted
                                    that <strong>English (EN) tweets</strong> have a mode of <strong>34 characters</strong>, which as the authors state,
                                </p>
                            </div>
                            <div class="col-12">
                                <h6>
                                    “This is because in languages like Japanese, Korean, 
                                    and Chinese you can convey about double the amount of 
                                    information in one character as you can in many other languages, 
                                    like English, Spanish, Portuguese, or French"<sup><a href="#fnA" id="refA">1</a></sup>
                                </h6>
                            </div>
                            <div class="carousel-text col-12">
                                <p>
                                    <strong>Comparing these various dataset distributions suggests that the FC firefighter text reports are of similar character length to RM JA reports and JA tweets.</strong>
                                </p>
                            </div>
                        </div>
                        <p>
                            <sup id="fnA">1. A. Rosen and I. Ihara, “Giving you more characters to express yourself.” <a href="https://blog.twitter.com/en_us/topics/product/2017/Giving-you-more-characters-to-express-yourself" target="_blank">https://blog.twitter.com/en_us/topics/product/2017/Giving-you-more-characters-to-express-yourself</a>, Sept. 2017.<a href="#refA" title="Jump back to footnote 1 in the text.">↩</a></sup>
                        </p>
                        <br>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Text Preprocessing & Featurization Pipeline</h5>
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-9 pb-2">
                                <img id="text-pipeline" class="img-fluid" src="../../../../public/assets/text-preprocessing.png" alt="Second slide">
                            </div>
                            <div class="carousel-text col-12">
                                <p>
                                    In order to use the FC firefighter report text data in our classification and clustering experiments, we needed to featurize, or construct
                                    numerical representations (feature vectors) of the text to use as input to a ML model. In the pipeline we developed for the featurization of Japanese text, <strong>we investigate 4 different featurizations of the text</strong>, namely,
                                    <strong>Bag-of-Words (BOW)</strong> based on unigram & bigram representations, <strong>Term-Frequency Inverse-Document-Frequency (TF-IDF)</strong> based on unigram, and finally <strong>pretrained BERT embeddings using CLS Pooling</strong>.
                                </p>
                                <p>
                                    Depending on the featurization, we integrate various preprocessing steps in order to perform commonplace Natural Language Processing (NLP) preprocessing
                                    steps. Due to our limited knowledge of the Japanese language, we make use of popular tokenizers & a lemmatizer pretrained on Japanese text as well as an open-source Japanese stopwords list for preprocessing the JA text.
                                </p>
                                <p>
                                    In the following slide we describe the preprocessing and featurization steps of our pipeline as applied to the input data in order to yield the featurizations we have mentioned. Additionally,
                                    we note the associated pros and cons of the featurizations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Text Preprocessing & Featurization Pipeline</h5>
                        <h5><u>BOW & TF-IDF Preprocessing & Featurization</u></h5>
                        <div class="col-12 pb-2 pt-2">
                            <img id="n-gram-preprocessing" class="img-fluid" src="../../../../public/assets/n-gram-preprocessing.png" alt="Second slide">
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <h6>Preprocessing</h6>
                            </div>
                            <div class="col-12">
                                <p>
                                    For the BOW based on unigram, BOW based on bigram, and TF-IDF (based on unigram) featurizations, we leverage a popular, open-source JA tokenizer,
                                    stopwords list, and lemmatizer to <strong>preprocess the raw input text</strong><sup><a href="#fnB" id="refB">1</a></sup>, these steps can be seen in the figure above:
                                    <ol>
                                        <li>
                                            Break up raw report text into <strong>word tokens</strong>, i.e. tokenize:
                                            <ul>
                                                <li>E.g. “the road is submerged.” → [“the”, “road”, “is”, “submerged”, “.”]</li>
                                            </ul>
                                        </li>
                                        <li>
                                            We remove stopwords (e.g. “the”, “as”, “it”, “is”, “.”) → otherwise could add noise to the input:
                                            <ul>
                                                <li>E.g. [<strong>“the”</strong>, “road”, <strong>“is”</strong>, “submerged”, “.”] → [“road”, “submerged”]</li>
                                            </ul>
                                        </li>
                                        <li>
                                            We <strong>lemmatize</strong> word tokens, i.e. convert word to its lemma, or dictionary form:
                                            <ul>
                                                <li>E.g. [“road”, <strong>“submerged”</strong>] → [“road”, <strong>“submerge”</strong>] </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </p>
                            </div>
                            <h6>Featurization</h6>
                            <div class="col-12">
                                <p>
                                    After preprocessing the raw text, we then use the preprocessed input to form an n-gram representation, which in our work was limited to unigram and bigram representations, but we note our pipeline generalizes to produce n-gram representations. For example, 
                                    the unigram representation of the processed example used above ["road", "submerge"] would be
                                    as ["road", "submerge"] and the bigram representation would be ["road submerge"]. Once the n-gram representation is computed from the preprocessed input, we convert the preprocessed word tokens into the BOW or TF-IDF feature vector representations, or featurizations, which can be used as inputs to ML models.
                                    The values of the <strong>BOW n-gram features</strong> are simply their associated <strong>frequency</strong> in a text report. We show the resulting feature vector for BOW based on unigram for the ["road", "submerge"] example below:
                                </p> 
                            </div>
                            <div class="col-12 pb-2">
                                <img id="bow-unigram-ex" class="img-fluid" src="../../../../public/assets/bag-of-word-features.png" alt="Second slide">
                            </div>
                            <div class="col-12">
                                <p>
                                    For the TF-IDF featurizations based on unigrams, the feature values are computed by considering both the <strong>frequency</strong> of the unigrams in the report as well as the <strong>occurence
                                    of the unigram across all reports</strong>. This value gives a relative importance to a unigram that considers the unigram in a specific report and across all reports. We show the resulting feature vector for TF-IDF based on unigram for the ["road", "submerge"] example below as if it were part of a collection of reports, or a text corpus:
                                </p>
                            </div>
                            <div class="col-12 pb-2">
                                <img id="tfidf-unigram-ex" class="img-fluid" src="../../../../public/assets/tfidf-features.png" alt="Second slide">
                            </div>
                            <div class="col-7 col-md-3 pt-3 pl-md-5">
                                <h6><u>Pros:</u></h6>
                                <div>
                                    <p>
                                        <ul>
                                            <li>Interpretable</li>
                                            <li><strong>Language-agnostic</strong></li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4 pt-3">
                                <h6><u>Cons:</u></h6>
                                <p>
                                    <ul>
                                        <li>Sparse (many 0's) & High-Dimensional</li>
                                        <li>Doesn't do well for <strong>Out-of-Vocab (OOV)</strong> word tokens</li>
                                        <li><strong>Language-agnostic</strong> (i.e. inability to capture specificity to a particular language)</li>
                                        <li><strong>Severely limited ability</strong> to capture <strong>token similarity, long-range dependencies, and understanding of a language</strong></li>
                                    </ul> 
                                </p>
                            </div>
                            <div class="col-12">
                                <p>
                                    Although these n-gram-based featurizations have the benefit of being language-agnostic, we note that they have the limitations
                                    of being high-dimensional and sparse in which most entries of the feature vector are zero, an inability to model long-range dependencies between tokens in the context of a
                                    document, and a severely limited ability to capture token similarity and understanding of a language. Therefore, we investigate a featurization strategy that yields
                                    dense, contextualized document representations specific to Japanese text documents. This strategy uses a pretrained Japanese Masked Language Modeling (MLM) Bidirectional Encoder Representations from Transformers (BERT) model and the CLS pooling
                                    technique.
                                </p>
                            </div>
                        </div>
                        <p>
                            <sup id="fnB">1. We note that in this work we make use of the <a href="https://pypi.org/project/fugashi/1.1.2/" target="_blank">fugashi</a> (version: 1.1.2) open-source morphological tool for <strong>tokenizing and lemmatizing</strong> Japanese text. Since fugashi requires a dictionary to operate, we use the <a href="https://pypi.org/project/unidic-lite/1.0.8/" target="_blank">Unidic Lite</a> dictionary (version: 1.0.8). Finally, for the stopwords list, we use a versioned, open-source list available <a href="https://raw.githubusercontent.com/stopwords-iso/stopwords-ja/5a000f6a62f9e3a12f436f36d168e2fcd2fb1878/stopwords-ja.json" target="_blank">here</a>.<a href="#refB" title="Jump back to footnote 1 in the text.">↩</a></sup>
                        </p>
                        <br>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Text Preprocessing & Featurization Pipeline</h5>
                        <h5><u>Pretrained Japanese MLM BERT Model Embeddings Preprocessing & Featurization</u></h5>
                        <div class="col-12 pb-2 pt-2">
                                <img id="bert-features-preprocessing" class="img-fluid" src="../../../../public/assets/bert-preprocessing.png" alt="Second slide">
                            </div>
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <h6>Preprocessing</h6>
                            </div>
                            <div class="col-12">
                                <p>
                                    The BERT MLM Deep learning (NN) model is optimized to <strong>predict</strong> a randomly <strong>masked words</strong> by using the <strong>context</strong>, 
                                    or the words that surround them. 
                                </p>
                                <p>
                                    Tohoku University Researchers <strong>pretrained a MLM BERT</strong> model using a dataset of approx. <strong>30M sentences</strong> of the 
                                    <strong>Japanese version of Wikipedia</strong>. 
                                </p>
                                <p>
                                    Raw text data is word tokenized using Fugashi & Unidic Lite library. Word tokens are further split into subwords 
                                    using the <strong>WordPiece algorithm</strong>, yielding a token vocabulary of <strong>32768 unique tokens.</strong><sup><a href="#fnC" id="refC">1</a></sup>
                                </p>
                            </div>
                            <h6>Featurization</h6>
                            <div class="col-12">
                                <p>
                                    The text input tokens from resulting from the preprocessing steps are prepended with a <strong>“[CLS]”</strong> token, 
                                    the “Classification” token. Deep in the BERT model, we extract a <strong>contextualized numerical 
                                    representation</strong> of the report for classification tasks by grabbing the <strong>final hidden state</strong> 
                                    corresponding to this token. This is <strong><i>CLS Pooling</i></strong>, yielding a dense, contextualized feature vector of 768 dimensions. 
                                    We refer to these feature vectors as BERT embeddings. We show an example of a featurized text report below:
                                </p> 
                            </div>
                            <div class="col-12 pb-2">
                                <img id="bert-features-ex" class="img-fluid" src="../../../../public/assets/bert-features.png" alt="Second slide">
                            </div>
                            <div class="col-12 col-md-5 pt-3 pl-md-5">
                                <h6><u>Pros:</u></h6>
                                <div>
                                    <p>
                                        <ul>
                                            <li><strong>Optimized for the Japanese language</strong></li>
                                            <li><strong>Dense features </strong> (i.e. lower dimensions than previous n-gram based features & not sparse)</li>
                                            <li>
                                                <strong>Contextualized representations</strong>, which can better capture long-range dependencies between words in a 
                                                report & State-of-the-art <strong>language understanding</strong>
                                            </li>
                                            <li>
                                                Better-equipped to handle <strong>OOV tokens</strong> due to the use of the WordPiece algorithm
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4 pt-3">
                                <h6><u>Cons:</u></h6>
                                <p>
                                    <ul>
                                        <li>Features are <strong>NOT interpretable</strong></li>
                                        <li><strong>Specific to JA</strong></li>
                                        <li><strong>Not finetuned to crisis text corpus</strong>, although we note this could be done in a future work</li>
                                    </ul> 
                                </p>
                            </div>
                            <div class="col-12">
                                <p>
                                    Having preprocessed the text and produced various featurizations with various pros and cons, we utilized all of the featurizations in our 
                                    classification experiments discussed in the next slides and TF-IDF based on unigram features as well as BERT embeddings in our clustering experiments.
                                </p>
                            </div>
                        </div>
                        <p>
                            <sup id="fnC">1. <a href="https://huggingface.co/cl-tohoku/bert-base-japanese-v2" target="_blank">Link to Pretrained Japanese BERT MLM Model</a><a href="#refC" title="Jump back to footnote 1 in the text.">↩</a></sup>
                        </p>
                        <br>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <h5>Human Risk Text Classification</h5>
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <p>
                                    Since 715 out of the 716 firefighter text reports were labeled for the binary <strong>Human Risk/No Human Risk classes</strong>, we chose to focus our text classification
                                    experiments on this classification task. Additional with the text analysis module, we aimed to develop a task that <strong>better met the information needs</strong> of crisis managers during
                                    a crisis event. We did this by using the labels our crisis management partners in Fukuchiyama provided to us directly.
                                </p>
                            </div>
                            <h6>Task Description</h6>
                            <div class="col-12">
                                <p>
                                    <i>
                                        The Human Risk text classification task 
                                        <strong>determines whether or not a crisis text report indicates if 
                                        there are people in need of rescue from a crisis.</strong> This includes people 
                                        being unable to evacuate due to physical disability (such as unable to use stairs), surrounding conditions (such as being trapped in a submerged car), 
                                        and/or being in need of life-saving emergency medical care.
                                    </i>
                                </p>
                                <p>
                                    In an effort to transition from abstract class descriptions to something more specific, e.g. a checklist, we choose to both provide a definition of the task and further detail the Human Risk classes as 
                                    bulleted lists containing the specific traits/descriptors contained in a text report which are characteristic of each class with the aim of enhancing the clarity of each class and the task overall:
                                </p>
                            </div>
                            <div class="col-12 col-md-7 pt-3 pl-md-5">
                                <h6><strong>Human Risk</strong> Class Descriptors</h6>
                                <div>
                                    <p>
                                        <ul>
                                            <li>Rescue being requested (to the Fire Department (FD))</li>
                                            <li>Evacuation support being requested (to the FD)</li>
                                            <li>Human missed the chance to evacuate from their own house, at work, shopping center, etc.</li>
                                            <li>Vulnerable population (elderly, disabled, small children) being left in the house in the flooding area</li>
                                            <li>Water rising inside the house above the floor (human inside)</li>
                                            <li>Water current is fast inside the house and hard to move upstairs (human inside)
                                            <li>Sediment flowing into the house (human inside)</li>
                                            <li>Human being trapped in elevator, submerged car, or a car which is not submerged yet</li>
                                            <li>Human being washed away in a river</li>
                                            <li>Rescue team dispatched</li>
                                            <li>Rescue team in activity (such as helping evacuation, rescuing, etc.)</li>
                                            <li>Rescue activity completed</li>
                                            <li>Landslide occurrence on the highway - possible vehicle being involved</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 pt-3">
                                <h6><strong>No Human Risk</strong> Class Descriptors</h6>
                                <p>
                                    <ul>
                                        <li>Dam Discharge</li>
                                        <li>Meteorological Information</li>
                                        <li>River Water Level Information</li>
                                        <li>Weather Alert</li>
                                        <li>Road Closure</li>
                                        <li>Road Flood Risk (not flooded yet)</li>
                                        <li>Area Flood Risk (not flooded yet)</li>
                                    </ul> 
                                </p>
                            </div>
                            <div class="col-12 pb-2">
                                <img id="human-risk-classification" class="img-fluid" src="../../../../public/assets/human-risk-diagram.png" alt="Second slide">
                            </div>
                            <div class="col-12">
                                <p>
                                    In addition to using labels/classes which better meet the information needs of crisis managers during crisis, 
                                    we aimed to develop the classification model for this task <strong>using a performance metric which better aligns with the priorities of the crisis managers</strong>
                                    as it pertains to this task and also <strong>considers the nature of the data (i.e. class imbalance)</strong>. We discuss these considerations and how we <strong>determined the
                                    performance metric</strong> for this task in the next slides. We note that <strong>this process</strong> of constructing a task from <strong>crisis manager's labels</strong> to determining the appropriate 
                                    performance metric to utilize for developing a model which considers both the <strong>properties of the data</strong> and the <strong>insights we gained from crisis managers</strong> is a <strong>novel contribution of this research.</strong>
                                </p>
                            </div>
                        </div>
                        <p>
                            <sup id="fnD">1. We acknowledge Saeko Baird of the Urban Risk Lab at MIT who determined these class definitions from examining the original Japanese reports.<a href="#refD" title="Jump back to footnote 1 in the text.">↩</a></sup>
                        </p>
                        <br>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around">
                            <h5>Human Risk Classification - Determination of the Performance Evaluation Metric</h5>
                            <div class="col-12">
                                <p>
                                    In our determination of the performance metric to use for assessing the performance of the Human Risk classifier we consider both the class imbalance of the task
                                    and insights we gained from the workshops conducted in the image analysis module.
                                </p>
                            </div>
                            <div class="col-12 col-md-6 pt-3 pb-md-5">
                                <img id="human-riks-label-distribution" class="img-fluid" src="../../../../public/assets/human-risk-label-distribution.png" alt="Second slide">
                            </div>
                            <div class="col-12 pt-3 col-md-6">
                                <h5>Substantial Class Imbalance</h5>
                                <p>
                                   <ul>
                                        <li>
                                            Across the 715 reports labeled for Human Risk, we observe that there are disporportionately more 
                                            "No Human Risk" data points than "Human Risk" data points, thus the <strong>"Human Risk" class is the minority class</strong> for this task.
                                        </li>
                                        <li>
                                            <strong>Accuracy</strong> of the classifier which always predicts "No Human Risk": <strong>86.7%</strong>, i.e. the percentage of
                                            "No Human Risk" labels in the dataset 
                                        </li>
                                        <li>
                                            Need to account for this imbalance in the metric, otherwise conclusions about the model's ability to perform the task can be
                                            misleading, as seen with using accuracy as the performance metric
                                        </li>
                                   </ul> 
                                </p>
                            </div>
                            <div class="col-12 col-md-6 pt-md-3 pb-md-5">
                                <img id="insights-from-workshops" class="img-fluid" src="../../../../public/assets/workshop-insights.png" alt="Second slide">
                            </div>
                            <div class="carousel-text col-12 col-md-6">
                                <h5>Insights from Image Annotation Workshops</h5>
                                <p>
                                   <ul>
                                        <li>
                                            From the workshops, we understand that in assessing the potential for human casualities, the cost associated with 
                                            <strong>NOT investigating the potential for human casualities when there ARE human casualities (False Negative (FN))</strong> is considered <strong>higher</strong> than the cost
                                            of <strong>investigating potential human casualities when there ARE NONE (False Positive (FP))</strong> → <strong>Performance on "Human Risk" class is paramount</strong>.
                                        </li>
                                        <li>
                                            <strong>Accuracy</strong> does NOT tell us how well the model performs on the <strong>"Human Risk"</strong> class 
                                            <strong>→ Although Recall (Minimizing FNs)</strong> & <strong>Precision (Minimizing FPs)</strong> have different priorities, both focus
                                            on the performance of the "Human Risk" class
                                        </li>
                                        <li>
                                            Ideally, we'd like to minimize both FN & FP, which is captured in the <strong>F1 score</strong>, however F1 score treats recall as equally as important as precision
                                        </li>
                                        <li>
                                            <strong>F2 score</strong> treats recall as 2x as important as precision, i.e. <strong>the relative cost of FN 
                                                is twice as much as the cost of FP</strong>
                                        </li>
                                   </ul> 
                                </p>
                            </div>
                            <div class="col-12 pb-5">
                                <p>
                                    ⇒ We thus used the <strong>properties of the data</strong> (i.e. class imbalance) & 
                                    <strong>the insights we gained from crisis experts</strong> to determine the performance metric to evaluate the model we develop for the Human Risk task 
                                    → the <strong>F2 score</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around">
                            <h5>Human Risk Classification - Data Splits & Algorithm Selection</h5>
                            <div class="col-12 col-md-6 pt-3">
                                <h5>Train/Test Splits</h5>
                                <p>
                                    We split the full dataset of 715 reports into non-overlapping train and test splits in percentages of 80%/20%, respectively. Additionally, we preserve
                                    the class imbalance using stratified splitting. 
                                </p>
                            </div>
                            <div class="col-12 col-md-4 pt-3 pb-md-5">
                                <img id="data-splitting" class="img-fluid" src="../../../../public/assets/human-risk-data-splits.png" alt="Second slide">
                            </div>
                            <div class="col-12">
                                <h5>Nested Cross Validation for Algorithm Selection</h5>
                                <p>
                                    We were interested in investigating multiple ML algorithms for the Human Risk classification task, each with their own set of tunable hyperparameters. We aimed to determine which
                                    algorithm paired with a corresponding hyperparameter grid search procedure (e.g. Grid Search), i.e. fitting a model to each unique hyperparameter combination in the grid, had the best estimated generalization
                                    performance and use that algorithm for the final model evaluation. We note that since we had insufficient data to use train/dev/test splits, we used a variation of K-fold Cross Validation (CV).
                                </p>
                                <p>
                                    Since using the same K-fold CV procedure
                                    for both performing hyperparameter tuning and estimating generalization performance can yield an estimated generalization performance that is biased and overly-optimistic, we elected
                                    to use <strong>Nested CV</strong>. Nested CV is typically inpractical in large data settings as it is substantially more computationally expensive to perform as compared to K-fold CV; for our low-data setting it was feasible to use. Nested CV is a useful variation of CV as it mitigates the bias in the
                                    generalization performance estimate of the algorithm and its corresponding search procedure by nesting the hyperparameter optimization within the generalization performance estimation procedure. 
                                </p>
                                <p>
                                    For the algorithm selection procedure, we investigated the following classification algorithms:
                                </p>
                            </div>
                            <div class="col-8 col-md-4">
                                <p>
                                    <ul>
                                        <li>Logistic Regression</li>
                                        <li>Decision Tree</li>
                                        <li>Random Forest</li>
                                        <li>Support Vector Machine</li>
                                        <li>Multinomial Naive Bayes</li>
                                        <li>K-Nearest Neighbors</li>
                                    </ul>
                                </p>
                            </div>
                            <div class="col-12">
                                <p>
                                    We note that we perform 5 x 5 Nested CV on the train split data & treat the various text featurizations offered by our featurization pipeline as hyperparameters in the hyperparameter grid for each
                                    algorithm.
                                </p>
                                <p>
                                    For the model evaluation on the test set, we select the algorithm (and corresponding search procedure) which 
                                    had the highest relative mean F2 score with the lowest variance across fold (low standard deviation) from the nested CV procedure.
                                </p>
                            </div>
                            <div class="col-12 col-md-8 pt-3 pb-5">
                                <img id="nested-cv" class="img-fluid" src="../../../../public/assets/nested-cv.png" alt="Second slide">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around">
                            <div class="col-12">
                                <h5>Human Risk Classification</h5>
                                <h5>Algorithm Selection Results</h5>
                            </div>
                            <div class="col-12 col-md-6 pt-3 pb-md-5">
                                <img id="algo-selection-table" class="img-fluid" src="../../../../public/assets/nested-cv-table.png" alt="Second slide">
                            </div>
                            <div class="col-12 col-md-6 pt-3 pb-md-5 pb-3">
                                <img id="algo-selection-graph" class="img-fluid" src="../../../../public/assets/nested-cv-graph.png" alt="Second slide">
                            </div>
                            <div class="col-12">
                                <p>
                                    The results presented above are determined from the generalization performance estimation found from 
                                    the performance (by F2 score) on the outer loop 5-fold CV in Nested CV. We make available the intermediate and final results of Nested CV for each algorithm and
                                    corresponding hyperparameter grid.<sup><a href="#fnD" id="refD">1</a></sup>
                                </p>
                                <p>
                                    From the results, we determined that the performance of the <strong>Support Vector Machine (SVM)</strong> algorithm with its
                                    corresponding hyperparameter search procedure yielded the highest mean F2 score,
                                    82.0%, and the lowest standard deviation, 4.22%. We therefore select the Support
                                    Vector Machine (SVM) algorithm and its corresponding hyperparameter grid for the
                                    final human risk model evaluation on the test set.
                                </p>
                            </div>
                        </div>
                        <p>
                            <sup id="fnD">1. <a href="https://github.com/dyllew/towards-automated-assessment-of-crowdsourced-crisis-reporting/tree/main/Text%20Analysis%20Module/Classification/Nested%20CV" target="_blank">Link to Results & Hyperparameters of Nested CV</a><a href="#refD" title="Jump back to footnote 1 in the text.">↩</a></sup>
                        </p>
                        <br>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around">
                            <div class="col-12">
                                <h5>Human Risk Classification</h5>
                                <h5>Final Model Evaluation</h5>
                            </div>
                            <div class="col-12 col-md-6 pt-3 pb-3">
                                <img id="model-evalution-diagram" class="img-fluid" src="../../../../public/assets/human-risk-model-evaluation.png" alt="Second slide">
                            </div>
                            <div class="col-12">
                                <h5>Tuning the SVM Model</h5>
                                <p>
                                    Prior to performing the final evaluation of the SVM on the test split data, we performed 5-fold CV on the full train split data, applying grid search with the hyperparameter
                                    grid associated with the SVM algorithm to find optimal hyperparameter values. The optimal hyperparameter values found for the SVM are shown in the table below:
                                </p>
                            </div>
                            <div class="col-12 col-md-6 pt-3 pb-3">
                                <img id="svm-hyperparameters" class="img-fluid" src="../../../../public/assets/svm-hyperparameters.png" alt="Second slide">
                            </div>
                            <div class="col-12 pb-5">
                                <p>
                                    We report the estimated generalization performance of the tuned SVM found
                                    from the 5-fold CV mentioned above, noting that this is <strong>likely a biased estimate of
                                    generalization performance</strong> as the 5-fold CV procedure was also used to tune the
                                    model. The <strong>tuned SVM model</strong> achieves a <strong>mean F2 score of 85.0%</strong> and has
                                    a <strong>standard deviation of 7.40%</strong>.
                                </p>
                                <p>
                                    After tuning the SVM model to find the optimal hyperparameters above, we fit the SVM algorithm using those optimal hyperparameters on the <strong>entire train split data</strong>.
                                    We then use this <strong>fitted SVM model to predict on the unseen test split data</strong>. The model's predictions on the test split yield the final evaluation of 
                                    the model's generalization performance. As part of our framework, we report aggregate metrics including the F2 and Area Under the Precision-Recall Curve (AUCPR) score and compare our trained model to baseline scores.
                                    Lastly, we report per-class performance metrics and the confusion matrix of the model's predictions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around">
                            <div class="col-12">
                                <h5>Human Risk Classification</h5>
                                <h5>Final Model Evaluation - Results</h5>
                            </div>
                            <div class="col-12">
                                <h5>Aggregate Metrics & Comparison to Baseline Scores</h5>
                            </div>
                            <div class="col-12">
                                <p>
                                    We report an <strong>F2 score of 92.8% on the test split data.</strong> The baseline classifier which always predicts "Human Risk", has an F2 score of
                                    43.4%, so the <strong>trained classifier is a significant improvement over the baseline classifier</strong>.
                                </p>
                                <p>
                                    In addition to F2, we plot the Precision-Recall curve, visualizing the tradeoff between precision and recall for different classification thresholds used by the classifier
                                    when classifying the data. It is advised to use the PR curve over the Receiver Operating Characteristic (ROC) curve in the case of imbalanced data, as ROC can give an optimistic estimate of the classifier’s output
                                    quality by considering true negatives in the computation, which in high quantity can dramatically lessen the effect of the false positives, false negatives, and true positives
                                    in the performance estimate, giving a misleadingly high estimate of performance.
                                </p>
                            </div>
                            <div class="col-12 col-md-4 pt-3 pb-3">
                                    <img id="aucpr-curve" class="img-fluid" src="../../../../public/assets/human-risk-aucpr.png" alt="Second slide">
                            </div>
                            <div class="col-12 col-md-8">
                                <p>
                                    The better the classifier (higher recall and higher precision), the closer the AUCPR score is to 1.
                                    For AUCPR, the performance of a <strong>baseline model has a score which is given by the proportion of positive samples to the total number
                                    of samples</strong> in the test dataset, which in this case is <strong>0.133</strong>.
                                </p>
                                <p>
                                    We report an <strong>AUCPR of 0.919 for the SVM model</strong> on the test split data, a significant improvement over the baseline score.
                                </p>
                            </div>
                            <div class="col-12">
                                <h5>Confusion Matrix & Per-Class Metrics</h5>
                            </div>
                            <div class="col-12 col-md-5 pt-3 pb-5">
                                <img id="human-risk-confusion-matrix" class="img-fluid" src="../../../../public/assets/human-risk-cm-svm.png" alt="Second slide">
                            </div>
                            <div class="col-12 col-md-5 pt-3 pb-md-5">
                                <img id="human-risk-per-class" class="img-fluid" src="../../../../public/assets/human-risk-per-class-metric.png" alt="Second slide">
                            </div>
                            <div class="col-12 pb-5">
                                <p>
                                    From the confusion matrix, we see that the model made very few
                                    misclassifications on the test split data. Specifically, the model only misclassified one
                                    data point which was labeled as "Human Risk" as "No Human Risk" out of all 19
                                    data points labeled as "Human Risk", thus the model had <strong>low false negatives</strong>. The
                                    model misclassified 3 "No Human Risk" data points as "Human Risk" out of a total
                                    of 124 "No Human Risk" data points, thus the model predicted <strong>3 false positives</strong>. We
                                    note that the model had more false positives than false negatives, but <strong>few of each</strong>.
                                </p>
                                <p>
                                    The model performs well by all per-class metrics on the "No
                                    Human Risk" class achieving scores at and above 0.976. Comparatively lower
                                    performance is observed across all metrics for the "Human Risk" class with precision,
                                    recall, and F1 scores of 0.857, 0.947, and 0.9, respectively.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row justify-content-around">
                            <div class="carousel-text col-12">
                                <h5>Human Risk Text Classification - Discussion</h5>
                                <p>
                                    <ul>
                                        <li>
                                            When determing the performance metric for the human risk task, we asked the following technical questions:
                                            <ol>
                                                <li><strong>Does the metric account for imbalance present in the data distribution?</strong></li>
                                                <li><strong>Once the metric is determined, what is the performance of the baseline model for the task?</strong></li>
                                            </ol>
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    While these technical questions are no doubt important for assessing model efficacy for the task, 
                                    we underscore that there were other questions we asked which <strong><u>could only be answered by our engagement with crisis managers.</u></strong>
                                </p>
                                <p>
                                    <ul>
                                        <li>
                                            Before we began developing the human risk model, we asked a question about the task itself: 
                                            <strong>Do the classes for the task sufficiently capture the expressed information needs of crisis managers during a crisis?</strong>
                                            <ul>
                                                <li>
                                                    Since these <strong>labels were provided directly by crisis managers</strong> and given the <strong>crisis manager's insight into 
                                                    the importance of assessing the potential of human casualty</strong>, we determined that these classes sufficiently capture
                                                    an important information need of crisis managers during crisis.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            For the determining the performance metric for the task, questions which required crisis manager engagement included:
                                            <ul>
                                                <li>
                                                    <strong>
                                                        Does the metric incorporate the priorities of the crisis managers as
                                                        it relates to the task, e.g. the cost of a false negative is significantly higher than
                                                        the cost of a false positive for assessing human risk?
                                                    </strong>
                                                </li>
                                                <li>
                                                    <strong>
                                                        Are there multiple metrics that should considered in assessing model efficacy in performing the classification task,
                                                        e.g. precision and recall, or F2?
                                                    </strong>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    Asking these questions allowed us to both consider the technical intricacies for
                                    the task (i.e. data imbalance and baseline performance) and directly embed the
                                    information needs and priorities of crisis managers into our text ML methodology
                                    and evaluation, which are important aims of our framework.
                                </p>
                                <p>
                                    The <strong>significant improvement over the baseline classifier by F2</strong> suggests the tuned <strong>SVM model is a useful classifier for
                                    the human risk task and performs the task reasonably well</strong>. This is further evidenced from the
                                    Precision-Recall curve, where the tuned SVM model achieved an AUCPR score of
                                    0.919, a significant improvement over the typical baseline classifier used for
                                    that metric which achieves an AUCPR of 0.133
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around">
                            <div class="col-12">
                                <h5>Clustering of Crowdsourced Japanese Crisis Text Data</h5>
                                <h5>Overview</h5>
                            </div>
                            <div class="col-12">
                                <p>
                                    Beyond investigating the human risk classification task, we aimed to explore the
                                    Fukuchiyama firefighter flood crisis report corpus to see if we could uncover other
                                    coherent categories which may exist in the data. These uncovered categories could
                                    inform the development of classification tasks in future work, in addition to any
                                    of the humanitarian categories provided by crisis managers.
                                </p>
                                <p>
                                    This exploration is powered by a series of unsupervised learning techniques including dimensionality reduction and clustering. 
                                    We developed a pipeline that utilizes these unsupervised techniques to perform the clustering experiments we conducted
                                    to uncover coherent categories in the data.
                                </p>
                                <p>
                                    For our clustering experiments, we note that we use <strong>all 716 FC firefighter crisis reports</strong>. Additionally, we focus on using the <strong>TF-IDF based on unigrams embeddings</strong> and 
                                    <strong>Pretrained Japanese BERT embeddings</strong>, which we refer to as BERT embeddings for brevity. Since these featurizations are 1489 and 768 dimensions respectively, this
                                    motivated our incorporation of dimensionality reduction techniques into our clustering pipeline.
                                </p>
                                <div class="col-12 pt-3 pb-3">
                                    <img id="clustering-features" class="img-fluid" src="../../../../public/assets/text-features-for-clustering.png" alt="Second slide">
                                </div>
                            </div>
                            <div class="col-12">
                                <h6>Evaluation Overview</h6>
                            </div>
                            <div class="col-12 pb-5">
                                <p>
                                    The evaluation of our clustering experiments consisted of multiple stages. <strong>First, we perform quantitative analysis</strong>, producing <strong>Within-Cluster Sum of Squares (WCSS)</strong>, or "Elbow" plots for each combination of
                                    featurization type, dimensionality reduction technique, and clustering algorithm (12 combos in total). We refer to these as configuration combinations. Using these plots, we identify <strong>a query subset</strong> of the combinations to further investigate for our
                                    <strong>qualitative evaluation</strong>. In the first stage of our qualitative evaluation we used the <strong>english translations of the closest documents to each cluster center</strong> to select a configuration combination from the query subset 
                                    for the <strong>final stage of qualitative assessment</strong>. In the final stage, a <strong>fluent Japanese speaker</strong> investigated the raw Japanese reports in the clusters made by the selected configuration combination and 
                                    <strong>determined a human-interpretable label to describe the cluster overall</strong> for each cluster. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row align-items-center justify-content-around">
                            <div class="col-12">
                                <h5>Clustering Pipeline & Experiments</h5>
                            </div>
                            <div class="col-12 col-md-5 pt-3 pb-3">
                                    <img id="clustering-pipeline" class="img-fluid" src="../../../../public/assets/clustering-pipeline.png" alt="Pipeline for Clustering">
                            </div>
                            <div class="col-12 col-md-7 pb-5">
                                <h6>Featurize, Reduce Dimensions, and Cluster</h6>
                                <p>
                                    Using the devised clustering pipeline, we can sequentially reduce the dimensions of the input features to <strong>2-dimensions</strong>, using
                                    <strong>Principle Component Analysis (PCA)</strong>, <strong>t-distributed Stochastic Neighbor Embedding (t-SNE)</strong>, or we <strong>do not apply dimensionality reduction</strong> at all. 
                                    We finally cluster the reduced data using either <strong>K-means</strong> or <strong>K-medoids</strong>, which is more robust to outliers present in the data. These hyperparameters to 
                                    the clustering pipeline are summarized in the neighboring figure.
                                </p>
                                <div class="row justify-content-center pb-3">
                                    <img id="clustering-hyperparameters" class="img-fluid" src="../../../../public/assets/clustering-hyperparameters.png" alt="Hyperparameters for Clustering">
                                </div>
                                <h6>Outputs of Clustering Pipeline</h6>
                                <p>
                                    <strong>Having selected a configuration to use and a K-value to use</strong>, our clustering pipeline produces the clustered data points, the text associated with
                                    the <strong>20 closest documents to the cluster center (in JA & EN translations)</strong> for each cluster, and the top 20 unigrams (in JA) by TF-IDF score for the 
                                    document formed from concatenating the documents in a cluster, for each cluster, forming a cluster-level document corpus. We note that our pipeline can take any positive values x & y for displaying the 
                                    top x unigrams or top y documents in a cluster.
                                </p>
                            </div>
                            <div class="col-12 pb-5">
                                <h5>Clustering Experiments - Identifying the Query Subset</h5>
                                <p>
                                    <ol>
                                        <li>
                                            <p>
                                                We investigated all 12 featurization, dimensionality reduction, and clustering algorithm combinations by investigating the corresponding 
                                                <strong>WCSS or “Elbow” plot</strong> for <strong>K = 2, …, 20 clusters</strong>
                                            </p>
                                            <p>
                                                <strong>WCSS</strong> captures extent to which data points within a cluster are at a close distance to each other, ideally we want this to be low, 
                                                but not too low. Minimizing WCSS is the same as maximizing the distance between data points in different clusters.
                                            </p>
                                        </li>
                                    </ol>
                                </p>
                                <div class="pb-3">
                                    <img id="elbow-plot" class="img-fluid" src="../../../../public/assets/elbow-plot.png" alt="Second slide">
                                </div>
                                <p>
                                    <ol>
                                        <li value="2">
                                            Select a subset of combinations which have <strong>relatively lower WCSS scores</strong> across 
                                            all K values and <strong>have an “elbow” in the “elbow” plot</strong> to qualitatively investigate further. We call this the <strong>query subset</strong>.
                                        </li>
                                    </ol>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row justify-content-around">
                            <div class="col-12">
                                <h5>Clustering Qualitative Evaluation & Results</h5>
                                <h5>Preliminary Qualitative Assessment (in EN): Investigating the Query Subset</h5>
                            </div>
                            <div id="workflow-and-configs" class="col-12 col-md-6 pt-3 pb-5">
                                <h6>Preliminary Assessment Workflow</h6>
                                <img id="qualitative-evaluation-workflow" class="img-fluid" src="../../../../public/assets/preliminary-assessment.png" alt="Second slide">
                                <br>
                                <br>
                                <h6>Query Subset</h6>
                                <img id="query-subset" class="img-fluid" src="../../../../public/assets/query-subset.png" alt="Configuration Combinations in the Query Subset">
                                <br>
                                <br>
                                <h6>Qualitative Summaries of Clusters and Possible Labels</h6>
                                <img id="qualitative-summaries" class="img-fluid" src="../../../../public/assets/qualitative-summaries.png" alt="Qualitative Summaries of Resultant Clustering for Each Cluster">
                            </div>
                            <div id="workflow" class="col-12 col-md-6 pt-3 pb-1">
                                <h6>Preliminary Assessment Workflow</h6>
                                <img id="qualitative-evaluation-workflow" class="img-fluid" src="../../../../public/assets/preliminary-assessment.png" alt="Second slide">
                            </div>
                            <div class="col-12 col-md-6 pt-2 pb-md-5">
                                <p>
                                    <ol>
                                        <li>
                                            <p>
                                                <strong>For each combination in the subset, we determine an “elbow”</strong> from the corresponding “elbow” 
                                                plot as the K value to use in our qualitative analysis.
                                            </p>
                                        </li>
                                    </ol>
                                </p>
                                <img id="identified-elbow" class="img-fluid pb-3" src="../../../../public/assets/identified-elbow.png" alt="Second slide">
                                <p>
                                    <ol>
                                        <li value="2">
                                            <p>
                                                For each cluster, we investigate the <strong>top 20 reports within a cluster which were closest to the cluster center</strong>. 
                                                We note that for the <strong>preliminary assessment</strong>, we used <strong>English translations of the reports given by DeepL neural translation.</strong><sup><a href="#fnE" id="refE">1</a></sup>
                                            </p>
                                            <p>
                                                When investigating the representative reports in each cluster, we answered the question: 
                                            </p>
                                        </li>
                                    </ol>
                                </p>
                                <p id="research-question">
                                    <strong>When looked at together, does the content of the representative reports in a cluster elicit an interpretable label? If so, what is it?</strong>
                                </p>
                                <p>
                                    <ol>
                                        <li value="3">
                                            <p>
                                                We then identified the configuration combination in the query subset which yielded <strong>the most interpretable labels across combinations</strong>,
                                                i.e. selected the combination which had the highest number of clusters that had
                                                representative documents which elicited an interpretable label.
                                            </p>
                                            <p>
                                                In the neighboring graphics, we showcase the configuration combinations in the query subset and
                                                we report qualitative summaries for each of the cluster configurations. We note that the configuration combination which gave the highest number of clusters which had a coherent, interpretable label (9 in total)
                                                was the <strong>BERT embedding, t-SNE (2 components), and K-medoids clustering</strong> combination, which is <strong>bolded</strong>.
                                            </p>
                                        </li>
                                    </ol>
                                </p>
                            </div>
                            <div id="configs" class="col-12 pt-3 pb-5">
                                <h6>Query Subset</h6>
                                <img id="query-subset" class="img-fluid" src="../../../../public/assets/query-subset.png" alt="Configuration Combinations in the Query Subset">
                                <br>
                                <br>
                                <h6>Qualitative Summaries of Clusters and Possible Labels</h6>
                                <img id="qualitative-summaries" class="img-fluid" src="../../../../public/assets/qualitative-summaries.png" alt="Qualitative Summaries of Resultant Clustering for Each Cluster">
                            </div>
                        </div>
                        <p>
                            <sup id="fnE">1. <a href="https://www.deepl.com/en/translator" target="_blank">Link to DeepL.</a> We acknowledge Saeko Baird of the Urban Risk Lab at MIT who cleaned these translations of their inaccuracies.<a href="#refE" title="Jump back to footnote 1 in the text.">↩</a></sup>
                        </p>
                        <br>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row justify-content-around">
                            <div class="col-12">
                                <h5>Clustering Qualitative Evaluation & Results</h5>
                                <h5>Final Qualitative Assessment (in JA): Investigating the Optimal Configuration Combination determined from the Preliminary Assessment</h5>
                            </div>
                            <div id="workflow-and-clusters" class="col-12 col-md-6 pt-3 pb-0">
                                <h6>Final Assessment Workflow</h6>
                                <img id="qualitative-final-evaluation-workflow" class="img-fluid" src="../../../../public/assets/final-assessment.png" alt="Final Qualitative Assessment Workflow">
                                <br>
                                <br>
                                <h6>Unlabeled Clusters</h6>
                                <img id="unlabled-clusters-img" class="img-fluid" src="../../../../public/assets/unlabeled-clusters.png" alt="Unlabeled Clusters">
                            </div>
                            <div id="final-assessment-workflow" class="col-12 col-md-6 pt-3 pb-1">
                                <h6>Final Assessment Workflow</h6>
                                <img id="qualitative-final-evaluation-workflow" class="img-fluid" src="../../../../public/assets/final-assessment.png" alt="Final Qualitative Assessment Workflow">
                            </div>
                            <div id="steps-with-unlabeled-clusters" class="col-12 col-md-6 pt-2">
                                <p>
                                    <ol>
                                        <li>
                                            <p>
                                                Using the selected optimal combination, for each resulting cluster found, we produce auxiliary outputs showing the 
                                                <strong>top 20 closest reports</strong> within the cluster to the cluster center & the <strong>top 20 unigrams in by TF-IDF score for cluster-level document corpus</strong>.
                                            </p>
                                            <p>
                                                Since dimensionality reduction was applied to 2-dimensions, we can visualize the clusters.
                                            </p>
                                        </li>
                                    </ol>
                                </p>
                                <div class="row justify-content-center pb-4">
                                    <h6>Unlabeled Clusters</h6>
                                    <img id="unlabeled-clusters-img" class="img-fluid" src="../../../../public/assets/unlabeled-clusters.png" alt="Unlabeled Clusters">
                                </div>
                                <p>
                                    <ol>
                                        <li value="2">
                                            <p>
                                                Using the auxiliary outputs in JA, a member of the Urban Risk Lab who is fluent in EN & JA<sup><a href="#fnF" id="refF">1</a></sup> investigated each cluster and assigned an interpretable label to it.
                                            </p>
                                            <p>
                                                The interpretable label given for each cluster is depicted in the figure below:
                                            </p>
                                        </li>
                                    </ol>
                                </p>
                                <div class="col-12">
                                    <img id="cluster-labels" class="img-fluid" src="../../../../public/assets/cluster-labels.png" alt="Cluster Labels">
                                </div>
                            </div>
                            <div id="steps-without-unlabeled-clusters" class="col-12 col-md-6">
                                <p>
                                    <ol>
                                        <li>
                                            <p>
                                                Using the selected optimal combination, for each resulting cluster found, we produce auxiliary outputs showing the 
                                                <strong>top 20 closest reports</strong> within the cluster to the cluster center & the <strong>top 20 unigrams in by TF-IDF score for cluster-level document corpus</strong>.
                                            </p>
                                            <p>
                                                Since dimensionality reduction was applied to 2-dimensions, we can visualize the clusters.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Using the auxiliary outputs in JA, a member of the Urban Risk Lab who is fluent in EN & JA<sup><a href="#fnF" id="refF">1</a></sup> investigated each cluster and assigned an interpretable label to it.
                                            </p>
                                            <p>
                                                The interpretable label given for each cluster is depicted in the figure below:
                                            </p>
                                        </li>
                                    </ol>
                                </p>
                                <div class="col-12">
                                    <img id="cluster-labels" class="img-fluid" src="../../../../public/assets/cluster-labels.png" alt="Cluster Labels">
                                </div>
                            </div>
                            <div id="labeled-clusters" class="col-12 col-md-7 pb-3">
                                <p id="process-arrow">&#8595;</p>
                                <h6>Labeled Clusters</h6>
                                <img id="labeled-clusters-img" class="img-fluid" src="../../../../public/assets/labeled-clusters.png" alt="Labeled Clusters">
                            </div>
                        </div>
                        <p>
                            <sup id="fnF">1. We acknowledge Saeko Baird of the Urban Risk Lab at MIT who assigned an interpretable label
                                to each cluster.<a href="#refF" title="Jump back to footnote 1 in the text.">↩</a>
                            </sup>
                        </p>
                        <br>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="row justify-content-around">
                            <div class="carousel-text col-12 col-md-7">
                                <h5>Clustering Firefighter Flood Crisis Reports - Discussion</h5>
                                <p>
                                    <ul>
                                        <li>
                                            Suggests what is deemed important to report during flood crisis by FC firefighters on-the-ground.
                                        </li>
                                        <li>
                                            Since we applied the clustering on-the-ground firefighter reports, these results can be used to devise <strong>classification tasks with labels which better embed the information needs of EOC</strong> & can be cross-referenced with EOC.
                                        </li>
                                        <li>
                                            Experiment can also be applied on Japanese RiskMap reports or crisis tweets to see if similar cluster labels are unveiled by resident reporting.
                                        </li>
                                        <li>
                                            This method has the <strong>drawback of permitting data points to be in only one cluster (hard clustering)</strong>, and 
                                            we observed that some of the data points have content which is indicative of multiple of the unveiled interpretable labels.
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
import { scrollUpFunc } from '../../../constants';

export default {
  name: 'TextAnalysisCarousel',
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

.characteristics {
    text-align: center;
}
.carousel-text {
    margin-top: 10px;
    margin-bottom: 40px;
}

#hagibis-details {
    color: palevioletred;
}

#twitter-quote {
    text-align: left;
}

#pika-gif {
    margin-top: 10px;
    margin-bottom: 40px;
    width: 60vh;
    height: 40vh;
}

#identified-elbow {
    max-height: 40vh;
}

#research-question {
    text-align: center;
    color: white;
}

#workflow-and-configs {
    display: none;
}

#workflow-and-clusters {
    display: none;
}

#steps-without-unlabeled-clusters {
    display: none;
}

#process-arrow {
    font-size: 6vh;
    text-align: center;
}

@media (min-width: 768px) {
    
    #clustering-hyperparameters {
        max-width: 40vw;
    }

    #workflow-and-configs {
        display: inline;
    }

    #workflow {
        display: none;
    }

    #configs {
        display: none;
    }

    #workflow-and-clusters {
        display: inline;
    }

    #final-assessment-workflow {
        display: none;
    }

    #steps-without-unlabeled-clusters {
        display: inline;
    }

    #steps-with-unlabeled-clusters {
        display: none;
    }

    #process-arrow {
        font-size: 10vh;
        text-align: center;
    }

}

@media (max-width: 800px) {
    .cc-carousel-item img {
        max-height: 80vw;
    }
}

#text-characteristics-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  color: black;
  width: 100%;
}

#text-characteristics-table td, #text-characteristics-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#text-characteristics-table tr:nth-child(even){background-color: #f2f2f2;}
#text-characteristics-table tr:hover{background-color: #ddd;}
#text-characteristics-table tr:nth-child(odd) {background-color: #ddd;}

#text-characteristics-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: darkturquoise;
  color: white
}

</style>