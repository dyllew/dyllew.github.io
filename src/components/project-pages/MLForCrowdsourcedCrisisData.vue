<template>
    <div class="row align-items-center justify-content-center">
        <div class='align-items-center col-md-8'>
            <div class="col-12 pt-3">  
                <h3>Automating Crowdsourced Crisis Report Assessment for Enhanced Crisis Awareness and Response</h3>
            </div>
            <img id='pika-gif' src='../../../public/assets/pika-gif.gif'>
            <p>
                    The availability of information in all stages of a crisis is critical for crisis managers to assess and respond to the impact of the crisis. 
                    With the increased use of smartphones and social media in recent years, many residents have provided real-time disaster updates that has 
                    potential to enhance situational awareness and response for other residents and crisis managers. An effective information system for aggregating 
                    these crowd-sourced crisis reports in real-time and thus making them quickly available is the RiskMap platform developed by the Urban Risk Lab at MIT. 
                    Though the availability of this data is invaluable, as reports come in, crisis managers must manually sift through and assess all of these reports in 
                    addition to other streams of data in order to understand the evolution and impact of the crisis. Analyzing the large volume of reports that come in 
                    during crisis results in information overload and time-consuming manual assessment by crisis managers, especially when their resources are constrained and 
                    their decisions are time-critical. This severely limits the potential of disaster information systems that utilize crowd-sourced disaster data to enable 
                    efficient and effective disaster awareness and response. 

                    This work presents a novel system that augments crowdsourced disaster information systems such as RiskMap by utilizing state-of-the-art machine learning 
                    methologies (e.g. Deep Learning methods) in an effort to provide crisis managers with an automated analysis of individual crisis reports as well as 
                    summarization of the unfolding situation in real-time while also incorporating human intelligence to iteratively improve the system over time. The system 
                    presented herein is evaluated using simulated flood crisis events in different cities in Japan including Fukuchiyama, Kyoto.
            </p>
     </div>
    </div>
</template>

<script>

export default {
  name: 'MLForCrowdsourcedCrisisData'
}
</script>

<style scoped>

h1, h3, h5 {
    color: white;
}

#pika-gif {
    margin-top: 10px;
    margin-bottom: 40px;
    width: 40vh;
    height: 30vh;
}

</style>
