<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-12">  
            <h3>Evolution of the U.S. TV News Narrative on Climate Change</h3>
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
                        <img class="rounded img-fluid" src="../../../public/assets/final-project-overview.png" alt="First slide">
                        <div class="carousel-text">
                            <h5>Project Code, Poster, and Report</h5>
                            <p>
                                This was a final project for IDS.131: Statistics, Computation, and Applications. This presentation focuses on
                                introducing the project, the specific parts I worked on, and the main findings from our analysis.
                                <br>
                                A brief overview of the methods, visualizations, 
                                and results is available in this <a href="./assets/IDS131_Poster.pdf" target="_blank">poster PDF.</a>
                                <br>
                                The more thorough report of our findings with all visualizations is <a href="./assets/IDS131_Final_Report.pdf" target="_blank">here.</a>
                                <br>
                                The code for this project was written in Python. <a href="https://github.com/dyllew/ids.131-fp" target="_blank">Here's the GitHub Repo.</a>
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <div class="carousel-text">
                            <h5><strong>Motivation & Research Question</strong></h5>
                            <p>
                                Print and televised media reporting on climate change influences 
                                the public perception of climate change, which in turn affects support for 
                                systemic policies to reduce greenhouse gas emissions and for individual actions to 
                                mitigate climate change. Over two thirds of Americans get their news often or 
                                sometimes from television. In this analysis, we looked at ten years of 
                                data from three television stations: CNN, Fox News, and MSNBC to address the 
                                following research question:
                            </p>
                            <br>
                            <strong id='research-question'>
                                How has the frequency and content of 
                                top American English-speaking news media coverage of climate change 
                                evolved in the past ten years (July 2009-January 2020)-and what environmental and political factors 
                                have influenced the trends?
                            </strong>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/network_tfidf_wordclouds.png" alt="First slide">
                        <div class="carousel-text">
                            <h5>Dataset, Exploration, and Preprocessing</h5>
                            <p>
                                The data used for this analysis includes text snippets of 15-seconds of TV news audio transcripts
                                of climate change mentions on CNN, MSNBC, and Fox News from 
                                July 2009-January 2020, provided by the <a href="https://blog.gdeltproject.org/a-new-dataset-for-exploring-climate-change-narratives-on-television-news-2009-2020/" target="_blank">GDELT Project.</a>
                                The features of the data points include time of day and date of the mention, 
                                the TV news network, the show, and the text snippet of the transcribed audio. 
                                This dataset provides the ability to compare the TV networks over time on the subject of 
                                climate change in order to answer the research question posed. 
                                We followed standard Natural Language Processing (NLP) text preprocessing by removing punctuation and numbers, 
                                converting all letters to lower-case (the data was already provided as lowercase), lemmatizing, removing standard English stopwords & 
                                corpus-specific stopwords, and tokenizing the data into words. We conducted our analysis with two distinct
                                analysis streams: Frequency Analysis and Content Analysis. Our Frequency Analysis entailed methods of time-series analysis of climate change mentions
                                by the different TV networks over time and dynamic time-warping & STL decomposition. Content Analysis used methods of TF-IDF document embeddings,
                                Cosine Similarity as a proxy for content similarity between documents, and Topic Modeling & Change-Point Detection. The above figure was created as part of 
                                an exploratory component of the TF-IDF Embedding analysis, in which we wished to extract the most important words to each of the networks across the entire corpus.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item cc-carousel-item">
                        <img class="rounded img-fluid" src="../../../public/assets/networks_and_years_cosine_similarity.png" alt="Second slide">
                        <div class="carousel-text">
                            <h5>Content Analysis: TF-IDF Document Embedding & Cosine Similarity</h5>
                            <p> 
                                My contribution to this project was primarly focused in the Content Analysis stream, specifically TF-IDF document embeddings & 
                                Cosine Similarity between documents. To conduct our content analysis, we needed to featurize the news snippets, or collections of snippets, 
                                which form the documents in our corpus. I first formed a document for each TV network in our dataset
                                (e.g. all snippets for CNN), and transformed the documents into a L2-normalized unit vector TF-IDF vector embedding. 
                                From this featurization, I formed a document-term matrix, where the rows correspond to the TF-IDF embedding of a document and the column 
                                represents a unique word in the corpus (~34,000 words). Thus, entry i, j corresponds to the normalized 
                                TF-IDF score of word j in document i (i.e. word j's relative importance for the ith document). I also constructed document-term matrices for documents representing each year of our dataset
                                (e.g. all snippets in 2009) as well as for documents constructed from networks in specific years (e.g. all CNN snippets in 2015). Finally, for each of the document-term matrices mentioned above, 
                                I calculated the pairwise cosine similarity between the document embeddings to yield a measure of content similarity between the documents. 
                                A heatmap constructed from the computed cosine similarities between the network & year documents is shown above. The main findings from my analysis were 
                                that the content of climate mentions in the latter years of the dataset, 2016-2020, are most dissimilar to earlier years in the dataset, 2009-2012. 
                                Additionally, in the years 2010 & 2018, the content of MSNBC differed greatly from the other news networks in those years and with other networks and itself in other years. 
                                This similarly occurred for CNN in 2012 & 2013. Lastly, with the exception of these years, the similarity of content of climate mentions between CNN and MSNBC, 
                                the liberal-leaning networks, has been increasing over the years, although the pairwise content similarity between all of the networks is fairly high over time.
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
  name: 'ClimateChangeNews'
}
</script>

<style scoped>

p {
    text-align: left;
}

#research-question {
    text-align: center;
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

@media (max-width: 800px) {
    .cc-carousel-item img {
        max-height: 80vw;
    }
}

</style>
