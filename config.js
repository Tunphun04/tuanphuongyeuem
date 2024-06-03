// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
  // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
  // 每句话尽量不要超过15个字,不然展示效果可能不太好
  texts: [
    "生日快乐我的亲爱的", //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
    "我非常爱你", // 同上...
    "以后我会嫁给你",
    "你必须吃很多东西",
    "不要害怕发胖",
    "你要吃很多才有力气爱我",
    "尽管我们经常争论",
    "即使你很固执",
    "我依然喜欢你的固执",
    "所以",
    "让我们相爱长久",
  ],
  /**
   * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
   * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
   * 例如
   * "心爱的小可爱": "./imgs/xiaokeai.jpg"
   *
   * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
   * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
   */
  imgs: {
    生日快乐我的亲爱的: "./imgs/xiaokeai.png",
    我非常爱你: "./imgs/y1.jpg",
    以后我会嫁给你: "./imgs/y2.jpg",
    你必须吃很多东西: "./imgs/y4.jpg",
    不要害怕发胖: "./imgs/y5.jpg",
    你要吃很多才有力气爱我: "./imgs/y11.jpg",
    尽管我们经常争论: "./imgs/y6.jpg",
    即使你很固执: "./imgs/y7.jpg",
    我依然喜欢你的固执: "./imgs/y8.jpg",
    所以: "./imgs/y9.jpg",
    让我们相爱长久: "./imgs/y10.jpg",

    // "今天是你的生日": "./imgs/birthday.jpg",
  },
  // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
  desc: {
    turn_on: "yêu thì click",
    play: "yêu thì click",
    bannar_coming: "yêu nhiều thì click",
    balloons_flying: "yêu nhiều thì click",
    cake_fadein: "yêu nhiều nhiều thì click",
    light_candle: "yêu nhiều nhiều thì click",
    wish_message: "yêu rất rất nhiều thì click",
    story: "mai sau cưới thì click",
  },
};
