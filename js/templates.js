// Generated by CoffeeScript 1.6.2
if (window.eur00t == null) {
  window.eur00t = {};
}

if (window.eur00t.templates == null) {
  window.eur00t.templates = {};
}

if (window.eur00t.templates.jewels == null) {
  window.eur00t.templates.jewels = {};
}

/*
  Board template.
  
  width, height: size in pixels
*/


eur00t.templates.jewels.board = "<div class=\"board\" style=\"width: <%=width %>px; height: <%=height %>px;\">\n</div>";

/*
  Scores template.
*/


eur00t.templates.jewels.scores = "<div class=\"caption\">\n  <h2 class=\"scores\"></h2>\n</div>";

/*
  Jewel template.
  
  color: 'orange', 'blue', 'yellow', 'brown'
  size:   a size of jewel
  i,j:    position of jewel
  i:      row coordinate 0,1,...
  j:      column coordinate 0,1,...
  gap:    a gap between items
  border: border for each gem
*/


eur00t.templates.jewels.item = "<div class=\"jewel <%=color %>\" style=\"width: <%=size %>px; height: <%=size %>px; left: <%=gap+j*(size+2*gap)-border %>px; top: <%=gap+i*(size+2*gap)-border %>px;\">\n</div>";

/*
  Message template.
  
  text: information to be displayed
  size: a value of font-size for text
*/


eur00t.templates.jewels.message = "<div class=\"message-container\" style=\"font-size: <%=size %>px;\">\n  <div class=\"message\">\n    <%=text %>\n  </div>\n</div>";
