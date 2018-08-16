function tailletexte()
{
    var texte = document.getElementById('texte').value;
    alert(texte.length);
}
 
 function selectionnertexte()
{
     if( document.getElementById('texte').select())
     document.getElementById('texte').select();
}
 
  function italique()
   {
       if(document.getElementById('texte').style.fontStyle =='italic')
   document.getElementById('texte').style.fontStyle='normal';
   else
   document.getElementById('texte').style.fontStyle='italic';
   }
    
   function gras()
   {
       if(document.getElementById('texte').style.fontWeight=='bold')
    document.getElementById('texte').style.fontWeight='normal';
    else
        document.getElementById('texte').style.fontWeight='bold';
    
   }
   
   
    
   function souligne()
   {
       if(document.getElementById('texte').style.textDecoration=='underline')
   document.getElementById('texte').style.textDecoration='none';
   else
   document.getElementById('texte').style.textDecoration='underline';
   }
    
   function effacer()
   {
   document.getElementById('texte').value="";
   }
   var fontSizeDD = document.getElementById('fontSize');
   fontSizeDD.onchange = function () {
       var txtBox = document.getElementById("texte")
       txtBox.style.fontSize = this.value +"px";
   };
   
   function fontfamily(selectTag) {
       var listValue = selectTag.options[selectTag.selectedIndex].text;
       document.getElementById("texte").style.fontFamily = listValue;
   }
   function fontcolor(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("texte").style.color = listValue;
}
