# SVG MAP JSON integration


Installation:
```cd workflow```
```npm install```

### index.jade
put your links in href 

``` a(xlink:href="javascript:alert('replace this message with your link in editor');" id="pathCatalcaLink")```

```javascript
$(document).ready(function(){
          var paths = $( "path[id^='path']")
          paths.attr("class","animated fadeInUp")
          
        $(function(){
          $.getJSON('js/ilceler.json', function(data){
          $(data).each(function(index,value){
              paths.on("mouseover",function(e){
                var clickTarget = e.target.id
                
                $('.haritaprop').addClass('visible animated fadeInRight')
                $('#ilceTitle').addClass('visible animated fadeInLeft')
                if(value.pathUrl == clickTarget){
                                    
                  $('#ilceTitle').text(value.ilce)
                  $('#ilceTitle2').text(value.ilce)
                  $('#nufus').text(value.nufus)
                  $('#mah_sayi').text(value.mahalle)
                }
              })//end of mouseover

               
        })
        })
      })//end of function     
      })      
```

in build/js/ilceler.json

```json
[
  {
    "ilce": "Çatalca",
    "mahalle": "15",
    "nufus": "26.560",
    "pathUrl": "pathCatalca"
  },
  {
    "ilce": "Silivri",
    "mahalle": "10",
    "nufus": "20.658",
    "pathUrl": "pathSilivri"
  },
  {
    "ilce": "Arnavutköy",
    "mahalle": "6",
    "nufus": "5.900",
    "pathUrl": "pathArnavutkoy"
  },
  {
    "ilce": "Başakşehir",
    "mahalle": "4",
    "nufus": "6700",
    "pathUrl": "pathBasaksehir"
  },
  {
    "ilce": "Eyüp",
    "mahalle": "5",
    "nufus": "10.648",
    "pathUrl": "pathEyup"
  },
  {
    "ilce": "Sarıyer",
    "mahalle": "7",
    "nufus": "2.458",
    "pathUrl": "pathSariyer"
  },
  {
    "ilce": "Beykoz",
    "mahalle": "52",
    "nufus": "18.580",
    "pathUrl": "pathBeykoz"
  },
  {
    "ilce": "Çekmeköy",
    "mahalle": "12",
    "nufus": "4000",
    "pathUrl": "pathCekmekoy"
  },
  {
    "ilce": "Sancaktepe",
    "mahalle": "6",
    "nufus": "5400",
    "pathUrl": "pathSancaktepe"
  },
  {
    "ilce": "Pendik",
    "mahalle": "4",
    "nufus": "6000",
    "pathUrl": "pathPendik"
  },
  {
    "ilce": "Şile",
    "mahalle": "12",
    "nufus": "26.560",
    "pathUrl": "pathSile"
  }
]
```

in main.styl
```css
path[id^="path"]:hover,
path[id^="path"]:active
	cursor pointer
	fill url(#redGradient)
```




