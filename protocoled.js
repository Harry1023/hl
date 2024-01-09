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



if(type === "meta") {
    
    document.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta name='title' content='Harris - UX/UI Designer, Mentor & Entrepreneur'>
    <meta name='description' content='Harris is a UX/UI Designer dedicated to end problems as Norman's Door. Explore my journey of 10+ Years worked with top notch brands.'>
    <meta name='keywords' content='harris, ux ui, designer, harris larry'>
    <meta name='robots' content='index,follow'>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
    <meta name='language' content='English'>
");

}

    }
    


//   Example Use:  <script>protocol("/assets/portfolio.css", "href", "");</script>



</script>