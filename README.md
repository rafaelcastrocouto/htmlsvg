[1]: https://github.com/rafaelcastrocouto/htmlsvg/fork

[2]: https://github.com/rafaelcastrocouto/htmlsvg/archive/master.zip

[3]: https://github.com/rafaelcastrocouto/htmlsvg/issues

#htmlsvg.js

= Introduction =

Allows use of `<svg>` tags directly in html code. 
Can use an external svg file with "scr" attribute.

 1. Copy the file

Make a copy of htmlsvg.full.js [https://raw.githubusercontent.com/rafaelcastrocouto/htmlsvg/master/htmlsvg.full.js] to your project folder.

 2. Head section

Add this line in `<head>` section of your HTML:

    <script type="text/javascript" src="htmlsvg.full.js"></script>

 3. Body section

Write your `<svg>` tags in `<body>` section:

    <svg scr="file.svg"></svg>

All SVG tags will be converted to canvas elements.

Please [fork][1] or [download][2] and help!

*Report any [sugestion or issue][3]*

__[GPL License](http://opensource.org/licenses/gpl-3.0.html)__
