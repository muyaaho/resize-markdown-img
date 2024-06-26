$("textarea#output").on("evt", function (event, inp, ta) {
  // <!--            $(this).text(toHtml(ta, inp));-->
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

  return (
    "<img src=" +
    url.match(re)[0] +
    ' width="' +
    size +
    '%" height="' +
    size +
    '%"/><br>'
  );
}

function allToResize(text, size) {
  var lines = text.split("\n");
  var result = "";
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].includes("![image]")) {
      result += toHtml(lines[i], size);
      result += "\n";
      continue;
    }
    result += lines[i];
    result += "\n";
  }

  return result;
}
