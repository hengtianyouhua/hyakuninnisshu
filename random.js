$(function(){
    $("#board").click(function(){
        var math=Math.random();
        if(math<=0.1){
            $("#front").html("<h4>あきのたの<br>かりほのいほの<br>とまをあらみ<br>わがころもでは<br>つゆにぬれつつ</h4>");
            $("#flipped").html("<h4><span class='red'>あきの</span>たの<br>かりほのいほの<br>とまをあらみ<br><span class='blue'>わがころもでは</span><br>つゆにぬれつつ</h4>");
        }else if(math<=0.2){
            $("#front").html("<h4>はるすぎて<br>なつきにけらし<br>しろたへの<br>ころもほすてふ<br>あまのかぐやま</h4>");
            $("#flipped").html("<h4><span class='red'>はるす</span>ぎて<br>なつきにけらし<br>しろたへの<br><span class='blue'>ころもほ</span>すてふ<br>あまのかぐやま</h4>");
        }else if(math<=0.3){
            $("#front").html("<h4>あしびきの<br>やまどりのをの<br>しだりをの<br>ながながしよを<br>ひとりかもねむ</h4>");
            $("#flipped").html("<h4><span class='red'>あし</span>びきの<br>やまどりのをの<br>しだりをの<br><span class='blue'>ながな</span>がしよを<br>ひとりかもねむ</h4>");
        }else if(math<=0.4){
            $("#front").html("<h4>たごのうらに<br>うちいでてみれば<br>しろたへの<br>ふじのたかねに<br>ゆきはふりつつ</h4>");
            $("#flipped").html("<h4><span class='red'>たご</span>のうらに<br>うちいでてみれば<br>しろたへの<br><span class='blue'>ふじ</span>のたかねに<br>ゆきはふりつつ</h4>");
        }else if(math<=0.5){
            $("#front").html("<h4>おくやまに<br>もみぢふみわけ<br>なくしかの<br>こゑきくときぞ<br>あさはかなしき</h4>");
            $("#flipped").html("<h4><span class='red'>おく</span>やまに<br>もみぢふみわけ<br>なくしかの<br><span class='blue'>こゑ</span>きくときぞ<br>あさはかなしき</h4>");
        }else if(math<=0.6){
            $("#front").html("<h4>かささぎの<br>わたせるはしに<br>おくしもの<br>しろきをみれば<br>よぞふけにける</h4>");
            $("#flipped").html("<h4><span class='red'>かさ</span>さぎの<br>わたせるはしに<br>おくしもの<br><span class='blue'>しろ</span>きをみれば<br>よぞふけにける</h4>");
        }else if(math<=0.7){
            $("#front").html("<h4>あまのはら<br>ふりさけみれば<br>かすがなる<br>みかさのやまに<br>いでしつきかも</h4>");
            $("#flipped").html("<h4><span class='red'>あまの</span>はら<br>ふりさけみれば<br>かすがなる<br><span class='blue'>みか</span>さのやまに<br>いでしつきかも</h4>");
        }else if(math<=0.8){
            $("#front").html("<h4>わがいほは<br>みやこのたつみ<br>しかぞすむ<br>よをうぢやまと<br>ひとはいふなり</h4>");
            $("#flipped").html("<h4><span class='red'>わがい</span>ほは<br>みやこのたつみ<br>しかぞすむ<br><span class='blue'>よをう</span>ぢやまと<br>ひとはいふなり</h4>");
        }else if(math<=0.9){
            $("#front").html("<h4>はなのいろは<br>うつりにけりな<br>いたづらに<br>わがみよにふる<br>ながめせしまに</h4>");
            $("#flipped").html("<h4><span class='red'>はなの</span>いろは<br>うつりにけりな<br>いたづらに<br><span class='blue'>わがみよ</span>にふる<br>ながめせしまに</h4>");
        }else if(math<=1.0){
            $("#front").html("<h4>これやこの<br>ゆくもかへるも<br>わかれては<br>しるしもしらぬ<br>あふさかのせき</h4>");
            $("#flipped").html("<h4><span class='red'>これ</span>やこの<br>ゆくもかへるも<br>わかれては<br><span class='blue'>しる</span>しもしらぬ<br>あふさかのせき</h4>");
        }
    });
});