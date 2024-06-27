$("textarea#output").on("evt", function (event, inp, ta) {
  $(this).text(allToResize(ta, inp));
});

$("button").click(function () {
  var inp = $("input#ip").val();
  var ta = $("textarea#input").val();
  $("textarea#output").trigger("evt", [inp, ta]);
});

function toHtml(url, size) {
  const re =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?[^)]/;

  const result = url.match(re) ? url.match(re)[0] : "";
  return (
    "<img src=" + result + ' width="' + size + '%" height="' + size + '%"/><br>'
  );
}

function allToResize(text, size) {
  var lines = text.split("\n");
  var result = "";
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].includes("![image]") || lines[i].includes("<img src=")) {
      result += toHtml(lines[i], size);
      result += "\n";
      continue;
    }
    result += lines[i];
    result += "\n";
  }

  return result;
}
