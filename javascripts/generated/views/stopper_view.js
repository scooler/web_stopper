(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  WS.StopperView = (function(_super) {

    __extends(StopperView, _super);

    function StopperView() {
      return StopperView.__super__.constructor.apply(this, arguments);
    }

    StopperView.prototype.template = function() {
      return $("#stopper_template").html();
    };

    StopperView.prototype.events = {
      "click .start": "start",
      "click .stop": "stop"
    };

    StopperView.prototype.initialize = function() {
      this.model = new WS.Time;
      return this.model.on("change", this.updateClock, this);
    };

    StopperView.prototype.render = function() {
      $(this.el).append(this.template());
      return this;
    };

    StopperView.prototype.start = function(e) {
      e.preventDefault();
      return this.model.start();
    };

    StopperView.prototype.stop = function(e) {
      e.preventDefault();
      return this.model.stop();
    };

    StopperView.prototype.updateClock = function() {
      this.updateSeconds();
      this.updateMinutes();
      return this.updateHours();
    };

    StopperView.prototype.updateSeconds = function() {
      return this.$(".seconds").html(this.zeroFill(this.model.seconds()));
    };

    StopperView.prototype.updateMinutes = function() {
      return this.$(".minutes").html(this.zeroFill(this.model.minutes()));
    };

    StopperView.prototype.updateHours = function() {
      return this.$(".hours").html(this.zeroFill(this.model.hours()));
    };

    StopperView.prototype.zeroFill = function(nr) {
      if (nr < 10) {
        return "0" + nr;
      } else {
        return "" + nr;
      }
    };

    return StopperView;

  })(Backbone.View);

}).call(this);
