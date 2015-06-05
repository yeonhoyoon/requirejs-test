requirejs(["kakao", "print"], function(Kakao, print) {
  Kakao.init('TGIF');
  print(Kakao.Auth.getAppKey());
});
