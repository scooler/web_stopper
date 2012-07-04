(function() {

  window.WS = {};

  WS.App = (function() {

    function App() {
      this.setupRouters();
    }

    App.prototype.routers = {};

    App.prototype.setupRouters = function() {
      return this.addRouter(new WS.MainRouter());
    };

    App.prototype.addRouter = function(name, router) {
      return this.routers[name] = router;
    };

    App.prototype.start = function() {
      return Backbone.history.start();
    };

    return App;

  })();

  $(function() {
    window.app = new WS.App;
    return app.start();
  });

}).call(this);
