


// function that updates dashboard

//function that populates meta data

//function that builds graphs

// function that initializes dashboard
function initialize()
{
     // load data from j.son file
    let data = d3.json("samples.json");
    console.log(data);
 
     // access the dropdown selector from the index.html file
    var select = d3.select("#selDataset");
 
     // use d3.json in order to get the data
 
    let sampleNames =
}        


// call the intialize function
initialize();