 var html = document.getElementById("code");
 var myCodeMirrorHtml = CodeMirror.fromTextArea(html, {
     tabSize: 4,
     mode: "xml",
     htmlMode: true,
     theme: 'dracula',
     styleActiveSelected: true,
     styleActiveLine: true,
     indentWithTabs: true,
     matchBrackets: true,
     highlightMatches: true,
     readOnly: true
 });
 var code = ['<!DOCTYPE', 'html>\n<html>\n<head>\n<title>Page', 'Title</title>\n</head>\n<body>\n\n<h1>This', 'is', 'a', 'Heading</h1>\n<p>This', 'is', 'a', 'paragraph.</p>\n\n</body>\n</html>'];
 var type_this = code.toString().replaceAll(",", " ");
 myCodeMirrorHtml.getDoc().setValue(type_this);
 //tab
 var i, tabcontent, tablinks;
 tablinks = document.getElementsByClassName("tablinks");
 tabcontent = document.getElementsByClassName("tabcontent");
 tablinks[0].classList.add("active");
 tabcontent[0].style.display = "block";

 function openCity(evt, cityName) {
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
     document.getElementById(cityName).style.display = "block";
     evt.currentTarget.className += " active";
 }