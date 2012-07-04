(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  WS.Time = (function(_super) {

    __extends(Time, _super);

    function Time() {
      this.tickTock = __bind(this.tickTock, this);
      return Time.__super__.constructor.apply(this, arguments);
    }

    Time.prototype.defaults = {
      started: false,
      startMs: 0,
      secondsPassed: 0,
      secondsPassedEarlier: 0
    };

    Time.prototype.start = function() {
      if (this.get("started")) {
        return;
      }
      this.set({
        started: true,
        startMs: new Date().getTime(),
        secondsPassedEarlier: this.get("secondsPassed") + this.get("secondsPassedEarlier"),
        secondsPassed: 0
      }, {
        silence: true
      });
      return this.handle = setTimeout(this.tickTock, 1000);
    };

    Time.prototype.stop = function() {
      this.set({
        started: false
      }, {
        silence: true
      });
      return clearTimeout(this.handle);
    };

    Time.prototype.tickTock = function() {
      var msPassed, nowMs, secondsPassed, startMs, timeJustPassed, wholeTimePassed;
      if (!this.get("started")) {
        return;
      }
      startMs = this.get("startMs");
      secondsPassed = this.get("secondsPassed");
      msPassed = secondsPassed * 1000;
      nowMs = new Date().getTime();
      wholeTimePassed = nowMs - startMs;
      timeJustPassed = wholeTimePassed - msPassed;
      setTimeout(this.tickTock, 2000 - timeJustPassed);
      return this.set({
        secondsPassed: secondsPassed + 1
      });
    };

    Time.prototype.seconds = function() {
      return this.allSeconds() % 60;
    };

    Time.prototype.minutes = function() {
      return Math.floor((this.allSeconds() % 3600) / 60);
    };

    Time.prototype.hours = function() {
      return Math.floor(this.allSeconds() / 3600);
    };

    Time.prototype.allSeconds = function() {
      return this.get("secondsPassed") + this.get("secondsPassedEarlier");
    };

    return Time;

  })(Backbone.Model);

}).call(this);
