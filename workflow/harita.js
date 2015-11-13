/*$(document).ready(function(){      
      var paths = $( "path[id^='path']")
      paths.attr("class","animated fadeInUp")
      //paths.css('cursor','pointer')	
      
      paths.on("mouseover",function(e){
            var clickTarget = e.target.id        
            $(function(){
                 $.getJSON('js/ilceler.json',function(data){
      		//var ilceJson = $.parseJSON(data)
      		$(data).each(function(index, value){
      			if(value.pathUrl == clickTarget )
      				//sadece bir kere yapıyor bu işlemi yenilemiyor. Çözüm???	
                    $('#ilceTitle').text(this.ilce)


              })
      	})
           })
      }) 
})   */
$(document).ready(function(){
        var paths = $( "path[id^='path']")
        paths.attr("class","animated fadeInUp")
        $(function(){
          $.getJSON('js/ilceler.json', function(data){
          $(data).each(function(index,value){
              paths.on("mouseover",function(e){
                var clickTarget = e.target.id
                if(value.pathUrl == clickTarget){
                  console.log(clickTarget)
                }
              })
        })
        })
      })//end of function     
        $("#open-menu").animatedModal({
          modalTarget:'modal-menu',
          animatedIn:'slideInLeft',
          animatedOut:'slideOutLeft'
        })//open menu
      })