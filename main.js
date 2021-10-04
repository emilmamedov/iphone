var clock;
clock = $(".clock").FlipClock({
  clockFace: "HourlyCounter",
  autoStart: false,
});

clock.setTime(43199);
clock.setCountdown(true);
clock.start();
