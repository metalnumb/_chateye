
module.exports = {
    returnData:function(data){
        return data;                
    },

getVideo: function(request, keywords, limit, callback){
        var keywords = encodeURIComponent(keywords);        
        var options = {
                url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyD_cG0i-KHnuVJ2HorENASSz9F0pI5dkl4&part=snippet\
&q='+keywords+'&order=viewCount&maxResults='+limit,
                method: 'GET' }; 

                request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {

                var choice = Math.floor(Math.random() * (limit-1));          // + 0 (from zero to limit)

                var url;
                var videoId;  

                var object = JSON.parse(body);

                object.items[choice]? videoId = object.items[choice].id.videoId:console.log("VIDEO NOT FOUND!");                 
                url = "https://www.youtube.com/watch?v="+videoId ;

                console.log("=== suggested video ===");
                callback(module.exports.returnData(url));

            }

       else
       {        
            console.log(body);
       }


        
    

}
            );


}
// OUTPUT IS A YT LINK: https://www.youtube.com/watch?v=videoId



};

