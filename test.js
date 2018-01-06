$(document).ready(function(){
$bt = $("<nav />").attr('id','cb').text("Kopiuj").appendTo("article#copy-box-test");
$('#copy-box-test #cb').on("click", function(){
var z = $(this).parent("#copy-box-test").children("#copy-test").html();
var taghtml = [/<dl class="codebox"><dt>Kod: <a href="#" onclick="selectCode\(this\); return false;">Zaznacz ca�?y<\/a><\/dt><dd><code>(.+?)<\/code><\/dd><\/dl>/g,/<dl class="tab tab-jutsu">(.+?)<\/dl>$/g,/<dl class="tab tab-kg">(.+?)<\/dl>$/g,/<dl class="tab tab-kg2">(.+?)<\/dl>$/g,/<dl class="dl-table-dial" style="width: ([0-9]+?)%"><dt>(.+?)<\/dt><dd>(.+?)<\/dd><\/dl>/g,/<div class="dial">(.+?)<\/div>/g,/<dt>(.+?)<\/dt><dd>(.+?)<\/dd>/gi,/<dt class="min">(.+?) <span>Min.<\/span><\/dt><dd>(.+?)<\/dd>/g,/<dt class="max">(.+?) <span>Max.<\/span><\/dt><dd>(.+?)<\/dd>/g,/<dt class="opis-img" style="background-image: url\('(.+?)'\);"><\/dt><dd class="opis"><span class="opistxt">Opis<\/span>(.+?)<\/dd>/g,/<dd class="opis-solo"><span class="opistxt">(.+?)<\/span>\ (.+?)<\/dd>/g,/<dd class="opis-solo">(.+?)<\/dd>/g,/<dd class="img-solo" style="height:([0-9]+?)px; background-image: url\('(.+?)'\);(|.*)"><\/dd>/g,/<dd class="img-solo" style="background-image: url\('(.+?)'\);"><\/dd>/g,/<div class="table-box">(.+?)<\/div>/gi,/<br>/g,/<span style="font-weight: bold">(.+?)<\/span>/g,/<span style="font-style: italic">(.+?)<\/span>/g,/<span style="text-decoration: underline">(.+?)<\/span>/g,/<blockquote class="uncited"><div>(.+?)<\/div><\/blockquote>/g,/<blockquote><div><cite>(.+?) napisa�?\(a\):<\/cite>(.+?)<\/div><\/blockquote>/g,/<ul>/g,/(<\/ul>|<\/ol>)/g,/<ol style="list-style-type: decimal">/g,/<ol style="list-style-type: lower-alpha">/g,/<ol style="list-style-type: upper-alpha">/g,/<ol style="list-style-type: lower-roman">/g,/<ol style="list-style-type: upper-roman">/g,/<ul style="list-style-type: disc">/g,/<ul style="list-style-type: square">/g,/<ul style="list-style-type: circle">/g,/<li>(.+?)/g,/<\/li>/g,/<img src="(.+?)" alt="Obrazek">/g,/<img src="(?!http:\/\/)(.+?)" alt="(.+?)" title="(.+?)">/g,/<a href="(.+?)" class="postlink">(http:\/\/)+(.+?)<\/a>/g,/<a href="(.+?)" class="postlink">(?!http:\/\/)(.+?)<\/a>/g,/<span style="font-size: ([0-9]+?)%; line-height: 116%;">(.+?)<\/span>/g,/<span style="color: (.+?)">(.+?)<\/span>/g,/<span style="padding-left: 20px;">(.+?)<\/span>/g,/<span style="font-family:(.+?);">(.+?)<\/span>/g,/<fieldset(.*)>([\n\r]{0,1})<legend(.+?)>(.+?|)<\/legend>([\n\r]{0,1})(.+?)<\/fieldset>/g,/<span style="(.*)text-align: center;">(.+?)<\/span>/g,/<iframe src="http:\/\/www.youtube.com\/embed\/(.+?)"(.*)><\/iframe>/g,/<hr title="(.+?)">/g,/<hr class="dir(.+?)" title="(.+?)">/g,/<span style="(.*)text-align: justify;">(.+?)<\/span>/g,/<strike>(.+?)<\/strike>/g,/<div style="padd(.*)"><div style="text-transform: uppercase; (.*)"><span onclick="(.*)"><b>Spoiler: <\/b>(.*)<\/span><\/div><div class="quotecontent"><div(.*)>(.+?)<\/div><\/div><\/div>/g,/<div class="adapthide">(.+?)<\/div>/g,/<article id="copy-box-test"><section id="copy-test">([\n\r]{0,})(.*)<\/section><nav id="cb">Kopiuj<\/nav><\/article>/g];
var tagbb = ["[code]$1[/code]","[tab=jutsu]$1[/tab]","[tab=kg]$1[/tab]","[tab=kg2]$1[/tab]","[tdial=$2,$1]$3[/tdial]","[dial]$1[/dial]","[tname=$1]$2[/tname]","[tmin=$1]$2[/tmin]","[tmax=$1]$2[/tmax]","[topisimg=$1]$2[/topisimg]","[topis=$1]$2[/topis]","[topis]$1[/topis]","[timg=$1]$2[/timg]","[timg]$1[/timg]","[tbox]$1[/tbox]","\n","[b]$1[/b]","[i]$1[/i]","[u]$1[/u]","[quote]$1[/quote]","[quote=\"$1\"]$2[/quote]","[list]","[/list]","[list=1]","[list=a]","[list=A]","[list=i]","[list=I]","[list=disc]","[list=square]","[list=circle]","[*]$1","","[img]$1[/img]","$2","[url]$1[/url]","[url=$1]$2[/url]","[size=$1]$2[/size]","[color=$1]$2[/color]","[akap]$1[/akap]","[czcionka=$1]$2[/czcionka]","[fieldset=$4]$6[/fieldset]","[center]$2[/center]","[youtube]https://www.youtube.com/watch?v=$1[/youtube]","[hr]$1[/hr]","[hr=$1]$2[/hr]","[justify]$2[/justify]","[s]$1[/s]","[spoiler]$6[/spoiler]","","$2"];
z = z.replace(/([\n\r]+?)/g,"");
$.each(taghtml, function(i){
z = z.replace(taghtml[i],tagbb[i]);
});
$t = $("<textarea />",{val:z}).appendTo("body").select();
if(!document.execCommand('copy')){
$k = $("<div />").addClass("copyblock").attr("oncopy","$(this).fadeOut(function(){$(this).remove()})").appendTo("body");
$t2 = $("<textarea />",{val:z}).attr('readonly','readonly').attr("onblur","this.parentNode.remove()").attr("click","this.parentNode.remove()").appendTo(".copyblock").select();
} else {
$msg = $("<div />").addClass("copymsg").html("<b>Skopiowano</b> do schowka.").appendTo("body");
$msg.show().delay(1500).fadeOut(function(){$msg.remove()});
}
$t.remove();
});
});