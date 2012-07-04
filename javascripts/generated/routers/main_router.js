(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  WS.MainRouter = (function(_super) {

    __extends(MainRouter, _super);

    function MainRouter() {
      return MainRouter.__super__.constructor.apply(this, arguments);
    }

    MainRouter.prototype.routes = {
      "": "index",
      "/web_stopper": "index"
    };

    MainRouter.prototype.index = function() {
      this.view = new WS.StopperView();
      return $("#main").html(this.view.render().el);
    };

    return MainRouter;

  })(Backbone.Router);

}).call(this);
