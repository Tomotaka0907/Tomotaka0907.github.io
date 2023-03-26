"use strict";
// イベントハンドラ
function keyUp(e) {
  // console.log('keyUp');
  // console.log(inputText.value);
  // console.log(inputText.value.length);
  // 入力された値を取得
  let str = inputText.value;
  str = str.replace(/\r?\n/g, ""); //javascript 改行で検索
  // 残りの文字数
  let num = 10 - str.length;
  console.log(num);
  //文字数表示部分の要素取得
  const characterCount = document.getElementById("characterCount");
  //残りの文字数をセットして表示
  characterCount.textContent = num;
  //残り文字数のｐ要素取得
  const characterCountWarp = document.getElementById("characterCountWarp");
  //文字色の設定
  if (num >= 10) {
    characterCountWarp.style.color = "black";
  } else {
    characterCountWarp.style.color = "red";
  }
  if (num <= 0) {
    alert("課金が必要です");
    window.location = "https://unsplash.com/ja";

  }
}

const inputText = document.getElementById("inputText");
inputText.addEventListener("keyup", keyUp, false);

/////////////////////////////////////////////////////////////////////////

function randomCharactor(c) {
  //跳ねさせる要素をすべて取得
  let randomChar = document.getElementsByClassName(c);

  //for で総当たり
  for (let i = 0; i < randomChar.length; i++) {
    //クロージャー
    (function (i) {
      //i 番目の要素、テキスト内容、文字列の長さを取得
      let randomCharI = randomChar[i];
      let randomCharIText = randomCharI.textContent;
      let randomCharLength = randomCharIText.length;

      //何番目の文字を跳ねさせるかをランダムで決める
      let Num = ~~(Math.random() * randomCharLength);

      //跳ねさせる文字を span タグで囲む、それ以外の文字と合わせて再び文字列を作る
      let newRandomChar =
        randomCharIText.substring(0, Num) +
        "<span>" +
        randomCharIText.charAt(Num) +
        "</span>" +
        randomCharIText.substring(Num + 1, randomCharLength);
      randomCharI.innerHTML = newRandomChar;

      //アニメーションが終わったら再び関数を動作させる
      document.getElementsByClassName(c)[0].children[0].addEventListener(
        "animationend",
        function () {
          randomCharactor(c);
        },
        false
      );
    })(i);
  }
}

//クラス名が pyonpyon のクラスを跳ねさせる
randomCharactor("pyonpyon");
