var happyImages = [
    "http://thesource.com/wp-content/uploads/2018/01/pharrell-2.jpg",
    "https://i.cbc.ca/1.4986551.1548087152!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/smile-emoji.jpg",
    ];
    
var sadImages= [
        "http://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_grande.png?v=1480481019",
        "https://i.pinimg.com/originals/da/8c/21/da8c2163061be58d770f6f9af78258e8.png"
        ];
        
 var angryImages= [
            "https://cdn.shopify.com/s/files/1/1061/1924/products/Very_Angry_Emoji_7f7bb8df-d9dc-4cda-b79f-5453e764d4ea_large.png?v=1480481058",
            "https://static.tvtropes.org/pmwiki/pub/images/inside_out_anger_fullbody.png"
            ];
    
$("button").click(function () {
	var color = $(".personality").val();
	var mood = $(".emotions").val();
	if (mood==="happy") {
  changeHappy();
	}
	else if (mood==="angry") {
	   $("body").css("background-color","red");
		
	}
	
	else if (mood==="sad" ) {
	$("body").css("background-color","#99ccff" );
	
	}
	
	
	});
	function changeHappy() {
	    changebackgroundColor("yellow");
	    happyImages.forEach(function(element){
	        $(".allimages").append(element);
	    });
	}
	 function changebackgroundColor(color) {
	    $("body").css("background-color",color);
	    
	 }
	    
	