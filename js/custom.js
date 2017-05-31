/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function () {
    //call API
    getData();

});
function getData() {
    var apiUrl = 'https://api.zype.com/videos/?api_key=H7CF2IHbEc6QIrMVwb2zfd9VI14HHGAfYax1eHEUsJ4voYuqWF2oWvByUOhERva_'
    $.getJSON(apiUrl, function (data) {
        // Get the element with id summary and set the inner text to the result.
        var imgThumb;
        var imgWidth;
        var imgHeight;
        var result;
        var title;
        var totalVideos = data.response.length;
        for (i = 0; i < totalVideos; i++) {
            //Title of video
            title = data.response[i].title;
            //When image is not avaliable show other image
            if (typeof data.response[i].thumbnails[i] === 'undefined') {
                //do print thumb              
                imgThumb = './images/sddefault.jpg';
            } else {
                //Get image size for mobile devices
                imgThumb = data.response[i].thumbnails[3].url;
                imgWidth = data.response[i].thumbnails[3].width;
                imgHeight = data.response[i].thumbnails[3].height;
            }
            //create html and display on front page
            result = '';
            result += ' <section class="section col-sm-12 col-md-12 col-lg-12" >';
            result += '<div class="video-img" style="background-image: url(' + imgThumb + ')" ></div>';
            result += '<h2>' + title + '</h2>';
            result += '</section>';
            $(".container").append(result);

        }

    });
}
//change background position on scroll
var bgPosition = 0;
$(window).scroll(function () {
    var currentPosition = $(this).scrollTop();
    if (currentPosition > bgPosition) {
        $(".video-img").stop().animate({
            'background-position-y': '12px'
        }, 800);
    } else {
        $(".video-img").stop().animate({
            'background-position-y': '-12px'
        }, 800);
    }
    bgPosition = currentPosition;
});