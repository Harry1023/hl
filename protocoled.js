<script>

    
    
    
    
    console.log("Working");
    
    
    
    function protocol(item, type, classes) {

        
    if (window.location.protocol === "https:") {
        console.log("This page is served over HTTPS.");
        turl = "" + item;
    
        
    } else {
        console.log("This page is not served over HTTPS.");
        turl = "file:///E:/SiteHarris/hl" + item;
    
        
    }
    


if (type === "img") {
document.write("<img src='" + turl + "' class='" + classes + "'/>");
 }

if (type === "script") {
document.write("<script src='" + turl + "'/>");
}

if (type === "href") {
document.write("<link rel='stylesheet' type='text/css' href='" + turl + "'/>");
}


if (type === "a") {
document.write("<a href='" + turl + "'/>");
}


if (type === "bg") {
document.write("<span style='background-image: url(" + turl + ")'></span>");
}

    }
    


//   Example Use:  <script>protocol("/assets/portfolio.css", "href", "");</script>



    </script>