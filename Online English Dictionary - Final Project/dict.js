$(document).ready(function () {
  $("#submit").click(function () {
    $.ajax("http://localhost:8000/search", {
      method: "POST",
      data: JSON.stringify({
        lookup: document.getElementById("searchKey").value,
      }),
      contentType: "application/json; charset=utf-8",
      success: showSearchResult,
      error: function (err) {
        console.log(err);
      },
    });
  });

  function removePerviousResult() {
    $("#result").remove();
  }

  function showSearchResult(data) {
    removePerviousResult();
    if (data.length > 0) {
      var ol = `<ol id="result"></ol>`;
      $("#searchresult").append(ol);

      data.forEach(function (element) {
        $("#result").append(
          `<li>${element.word}(${element.wordtype})   :   ${element.definition}</li>`
        );
      });
    } else {
      alert(`No search result found!!`);
    }
  }
});
