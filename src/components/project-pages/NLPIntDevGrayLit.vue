<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-8">  
            <h3>Information Extraction and Unsupervised Methods for Streamlining Evidence Synthesis in International Development Gray Literature</h3>
        </div>
        <div class="col-md-8">
            <div id="NLPIntLitDevCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                <ol class="carousel-indicators">
                    <li data-target="#NLPIntLitDevCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#NLPIntLitDevCarousel" data-slide-to="1"></li>
                    <li data-target="#NLPIntLitDevCarousel" data-slide-to="2"></li>
                    <li data-target="#NLPIntLitDevCarousel" data-slide-to="3"></li>
                    <li data-target="#NLPIntLitDevCarousel" data-slide-to="4"></li>
                    <li data-target="#NLPIntLitDevCarousel" data-slide-to="5"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active int-dev-lit-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/int-dev-results.png" alt="First slide">
                        <div class="carousel-text">
                            <h5>Project Presentation, Report, and Code</h5>
                            <p>
                                This was a final project for 6.864: Advanced Natural Language Processing. This presentation focuses on
                                introducing the project, the specific parts I worked on, and the main results from our analysis.
                                <br>
                                A brief overview of the motivation, methods,
                                and results is available in this <a href="./assets/int-dev-gray-lit.pdf" target="_blank">presentation PDF.</a>
                                <br>
                                The more thorough report of our methodology, visualizations, and findings <a href="./assets/6_864_Project.pdf" target="_blank">here.</a>
                                <br>
                                The code for this project was written in Python. <a href="https://github.com/dyllew/6.864-fp" target="_blank">Here's the GitHub Repo.</a>
                            </p>
                            <p>
                                For this project, my main contributions were the supervised methodology/Named Entity Recognition stream discussed in the following slides
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item int-dev-lit-carousel-item">
                        <div class="carousel-text">
                            <h5>Abstract</h5>
                            <p>
                                In fields like international development, decision-makers prioritize making evidence-based decisions for funding and implementing future projects. 
                                This aim is made difficult because of the plethora of information being published each year, and the nature of the research corpus as unstructured 
                                text or grey literature. To make informed decisions and understand the growing corpus of research available, researchers have turned to evidence 
                                synthesis - the process of compiling information and knowledge from many sources and disciplines to inform decisions. However, the manual evidence 
                                synthesis process takes extensive time (often 18 months to 3 years) and effort, and may soon be impossible at the world’s increasing rate of research 
                                output. To address these problems, we employ natural language processing techniques on a international development literature corpus of 244 documents 
                                to extract information from the title and abstract of international development documents, and to automatically cluster documents based on their content. 
                                We classify documents by Country of Study using a pretrained transformer Named Entity Recognition model and achieve an accuracy of 91.0%. Using K-Means clustering, 
                                we uncover informative and distinctive groupings of the documents which share similar semantic content. These methods reduce the time it takes for manual evidence 
                                synthesis for international development grey literature by enabling country of study filtering and clustering documents by semantic similarity.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item int-dev-lit-carousel-item">
                        <div class="carousel-text">
                            <h5>Named Entity Recognition (NER) for Country of Study (CoS) Classification - Models</h5>
                            <p> 
                                The country of study (CoS) associated 
                                with each paper is quite pertinent to the international development domain. Our dataset is labeled 
                                with the CoS of each paper in our corpus. However, since our dataset is rather small (244 documents),
                                 we sought to evaluate whether pretrained NER models which extract a variety of entity types from text, 
                                 could accurately extract the CoS for the papers in our corpus, which have a variety of text fields.
                            </p>
                            <h6>Country of Study Extraction and Classification</h6>
                            <p> 
                                We create a lower-cased, alphabetically-ordered, list of countries, which we construct using countryinfo
                                <a href="https://pypi.org/project/countryinfo/" target="_blank">(Link to CountryInfo PyPI page)</a>, a Python package 
                                which contains a large dictionary of countries, their alternative names, and ISO information. We ensure 
                                the strings of the countries present in our corpus match their respective string in the alphabetically-sorted list of countries. 
                                We note that Myanmar and Kosovo are countries present in our corpus, but are not present in the countryinfo dictionary, so we add 
                                them to the final list of alphabetically-sorted countries. Since nationality is a type of named entity that NER models typically 
                                extract in addition to countries, using a comprehensive, open-source nationality-country mapping <a href="https://github.com/knowitall/chunkedextractor/blob/master/src/main/resources/edu/knowitall/chunkedextractor/demonyms.csv" target="_blank">(Demonym-Country Mapping Link)</a>, 
                                we construct a lower-cased, alphabetically-ordered list of nationalities as well as a dictionary mapping nationality to country. 
                                We note that we use the words nationality and demonym interchangeably. These lists and dictionary are useful for performing the country of study (CoS) 
                                classification using extracted entities from input text or determining if a nationality or country is a substring contained in the input text string.
                            </p>
                            <h6>Simple Substring Matcher (SSM) Algorithm Baseline & CoS Extraction & Classification</h6>
                            <p> 
                                As a baseline to our CoS prediction task, we devise a simple, non-ML, deterministic algorithm, called the Simple Substring Matcher (SSM) Algorithm. This 
                                method begins by making the input text lower-cased. To predict a CoS, it then scans through the alphabetically-sorted list of countries and classifies 
                                the first country which is a substring in the input text as the CoS. If no country is found as a substring in the text, the method then scans the alphabetically-sorted 
                                list of nationalities. If a nationality is found as a substring of the input, the method maps the nationality to the corresponding country and classifies the paper as 
                                having that country as the CoS. If neither country nor nationality is found as a substring in the text, the method classifies the paper's CoS as a <i>None</i> value. 
                                We refer to this classification model as the Simple Substring Matcher (SSM) model.
                            </p>
                            <h6>CoS Extraction & Classification by Pretrained NER Models</h6>
                            <p> 
                                Although we utilize different pretrained NER models in our experiments as shown in the next slide, the process for classifying CoS using predicted entities is the same. 
                                Each model takes the raw text as input, predicts various non-overlapping entities present in the text into one of several entity categories. For the CoS classification task, 
                                we only consider the predicted <b>NORP</b> (nationalities, or religious, or political groups) entities and the <b>GPE</b> (countries, cities, states) entities as we assume 
                                that these categories are the only ones which would contain the country or relevant demonym associated with the CoS. We now begin our discussion of the classification procedure 
                                for the pretrained NER models.

                                First, we make all NORP and GPE entities lower-cased. Next, we map any demonyms present among the NORP entities to their corresponding country. We then combine the resulting unique 
                                NORP and GPE entities into an alphabetically-ordered list. We scan this list of NORP and GPE entities checking if any of them exist in the countries list mentioned above, 
                                classifying the CoS as the first entity-country match found. If no match is found, we make a final attempt to determine the CoS by providing each of the entities as input to the GeoPy Geocoder <a href="https://geopy.readthedocs.io/en/stable/" target="_blank">(Link to GeoPy API)</a>
                                object, which provides an address-location object if a location is found for the provided entity or no value otherwise. We do this for each entity, and if a location is found for a particular entity, 
                                we classify the paper's CoS as the country associated with the found address-location. If no country is found for all the entities, we classify the paper's CoS as <i>None</i>.  
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item int-dev-lit-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/ner-results.png" alt="Second slide">
                        <div class="carousel-text">
                            <h5>NER for Country of Study Classification - Results</h5>
                            <p>
                                In addition to testing different classification models, 
                                I experimented with different input strings to see how results change with various text fields and concatenations between them. 
                                These various inputs to the models include the title, abstract, intervention description, outcome description, and various concatenations of these text fields.
                                
                            </p>
                            <p> 
                                All of the pretrained spaCy NER models have 0.0% accuracy when using the just the intervention description, 
                                however the SSM model achieves 13.9% accuracy on the intervention description. All models attain an accuracy of 
                                2.9% when using just the outcome description. The title and abstract individually appear to be good input fields 
                                for predicting the CoS, however the concatenation of title and abstract appears to be the most informative input, 
                                as this is the input that yields the highest performance across all of the models. Overall, we observe that the baseline 
                                simple substring checker is a fairly competitive model against the pretrained ML models, outperforming all the ML models
                                on intervention description, performing the same as the ML models on outcome description, and only falling a few percentage 
                                points below even the best ML model on the other inputs. With the exception of the title, intervention description, 
                                and outcome description, the ML models in increasing order of complexity, do increasingly better on the CoS extraction task, 
                                in the following order from least performant to most performant: ESMS, ESMM, ESML, and ESMT. With the exception of the 
                                intervention description and output description inputs, we observe that the ESMT model performs best across all other inputs. 
                                Furthermore, we see that the concatenated title and abstract input and the ESMT model combination performs the best across 
                                all input-model combinations with 91.0% accuracy. We use this top-performing model by accuracy to construct
                                AI-assisted tools which could assist researcher in the evidence in the following slide.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item int-dev-lit-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/ner-res-tools.png" alt="Second slide">
                        <div class="carousel-text">
                            <h5>Predictions by Pretrained Transformer NER Model for International Development Gray Literature Map and Filter Function</h5>
                            <h6>Map of International Development Literature Gray Corpus</h6>
                            <p> 
                                Using the CoS predictions from the pretrained NER transformer model on the concatenated title and abstract input,  
                                we construct a geographical map of the corpus as shown in the left image. For each paper, which had a non-null prediction 
                                by the ESMT model, we place a tooltip at location coordinate associated with the predicted CoS. These location coordinates 
                                were pulled using the GeoPy Geocoder object from the GeoPy Python package. We added slight, uniform random jitter to each of the coordinates, 
                                so papers with the same predicted CoS don't directly overlap. When a user hovers over the tooltip, they will see the title of the paper associated with that tooltip.
                                The webpage for this map can be downloaded <a href="https://drive.google.com/file/d/1Q2P6ouwcDWrnXsq8LMpa4YqCuD7qsbtO/view?usp=sharing" target="_blank">here</a> for view in a browser.
                            </p>
                            <h6>Filtering by Predicted CoS</h6>
                            <p> 
                                For large corpora of International Development Gray Literature, the utility of the CoS prediction task is most evident by the robust filtering capability it enables. For instance, by 
                                concatenating only the title and abstract of papers in the corpus, and using them as input to generate CoS predictions by the pretrained transformer model used in this study, this 
                                enables the ability for unlabeled papers in the corpus to be accurately filtered to identify studies which had a specific CoS. This method would greatly reduce the time necessary for 
                                manual CoS annotation while also yielding higher accuracy than a simple substring matcher, simplifying a step in the international literature review process with high accuracy. An example 
                                of this filtering functionality is shown in the right image for papers in the corpus, which were predicted as having Guatemala as the CoS. The CoS was predicted using the pretrained transformer 
                                NER model with the concatenated title and abstract as input. We display the corresponding title and abstract for quick scanning of results for relevancy to research topic. Additionally, we provide 
                                the option to filter the corpus for papers which had a predicted CoS as <i>None</i>.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item int-dev-lit-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/int-dev-results.png" alt="Second slide">
                        <div class="carousel-text">
                            <h5>Conclusion</h5>
                            <p> 
                                The manual evidence synthesis for international development gray literature is a time-consuming process. 
                                We have demonstrated that certain components of the evidence synthesis process in international development gray 
                                literature such as filtering corpora for papers which have a specific country of study or grouping similar documents 
                                together can benefit greatly from the use of methods of information extraction and unsupervised learning. More specifically, 
                                we have utilized a pretrained transformer NER model to accurately predict the country of study for the papers present in the corpus 
                                used in this study, thus enabling accurate filtering of the corpus for papers with a specific predicted country of study. After tuning 
                                to find the optimal number of clusters in K-Means clustering, we uncovered informative and distinctive clusters of documents with similar 
                                content in the corpus. The automation of these components in the evidence synthesis process for international development grey literature 
                                mitigates the effort and time that is required for manual evidence synthesis. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { scrollUpFunc, enableScrollUpOnCarousel, enableSwipeOnCarousel } from '../../constants';
export default {
  name: 'NLPIntDevGrayLit',
  mounted() {
    scrollUpFunc();
    enableScrollUpOnCarousel('#NLPIntLitDevCarousel');
    enableSwipeOnCarousel('#NLPIntLitDevCarousel');
  }
}
</script>

<style scoped>

p {
    text-align: left;
}

a {
    color: hotpink;
}

a:hover {
    color: white;
}

h1, h3, h5, h6 {
    color: white;
}

h6 {
    font-weight: bold;
}

.carousel-text {
    margin-top: 10px;
    margin-bottom: 40px;
}

.int-dev-lit-carousel-item img {
  height: 40vh;
  max-height: 500px;
}

@media (max-width: 500px) {
    h3 {
        font-size: 4vw;
    }
}

@media (max-width: 800px) {
    .int-dev-lit-carousel-item img {
        height: 450px;
        max-height: 200px;
    }
}

</style>
