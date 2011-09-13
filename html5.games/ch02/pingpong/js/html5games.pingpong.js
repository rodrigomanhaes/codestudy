var KEY = {
  UP: 38,
  DOWN: 40,
  W: 87,
  S: 83
};

$(function() {
  $(document).keydown(function(e) {
    switch(e.which) {
      case KEY.UP:
        var top = parseInt($("#paddleB").css("top"));
        $("#paddleB").css("top", top - 5);
        break;
      case KEY.DOWN:
        var top = parseInt($("#paddleB").css("top"));
        $("#paddleB").css("top", top + 5);
        break;
      case KEY.W:
        var top = parseInt($("#paddleA").css("top"));
        $("#paddleA").css("top", top - 5);
        break;
      case KEY.S:
        var top = parseInt($("#paddleA").css("top"));
        $("#paddleA").css("top", top + 5);
        break;
    }
  });
});

