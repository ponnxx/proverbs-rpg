const A='assets/';

const state={
hp:5,
stageIndex:0,
questionIndex:0,
key:false
};

//
// ふりがな用
// 例：R('主','しゅ') → 「主」に「しゅ」のふりがなが付く
//
function R(kanji,kana){
return `<ruby>${kanji}<rt>${kana}</rt></ruby>`;
}

const stages=[

// =========================
// 1. 怒りの森
// =========================
{
name:`${R('怒','いか')}りの${R('森','もり')}`,
bg:'backgrounds/Forest of Anger 1.jpg',
emoji:'🌲',
item:false,

```
questions:[
  {
    text:`
      たいせつなものを、${R('友','とも')}だちが
      かってに ${R('使','つか')}いました。<br>
      <b>まず、どうする？</b>
    `,
    choices:[
      [`「どうして かってに ${R('使','つか')}ったの？」と おちついて ${R('聞','き')}く`,true],
      [`すぐに おこって「${R('返','かえ')}して！」と いう`,false],
      [`${R('自分','じぶん')}も ${R('友','とも')}だちのものを かってに ${R('使','つか')}る`,false]
    ]
  },

  {
    text:`
      ${R('友','とも')}だちが「ごめんね」と ${R('謝','あやま')}りました。<br>
      <b>そのあと、どうする？</b>
    `,
    choices:[
      [`「まだ おこっているから、${R('許','ゆる')}さない」と いう`,false],
      [`「いいよ。つぎからは ${R('使','つか')}うまえに ${R('聞','き')}いてね」と いう`,true],
      [`なにも ${R('言','い')}わずに、そのまま ${R('帰','かえ')}る`,false]
    ]
  }
],

msg:`
  ${R('柔','やわ')}らかな ${R('答','こた')}えには、
  けんかを ${R('止','と')}める ${R('力','ちから')}が あるよ。
`,

verse:`
  「${R('柔','やわ')}らかな ${R('答','こた')}えは、
  ${R('憤','いきどお')}りを とどめる。」—
  ${R('箴言','しんげん')}15:1
`
```

},

// =========================
// 2. 迷いの洞窟
// =========================
{
name:`${R('迷','まよ')}いの${R('洞窟','どうくつ')}`,
bg:'backgrounds/Wayward Cave 1.jpg',
emoji:'🕳️',
item:true,

```
questions:[
  {
    text:`
      どうしたら いいか、わからなくなりました。<br>
      <b>まず、どうする？</b>
    `,
    choices:[
      [`${R('急','いそ')}いで ${R('自分','じぶん')}だけで ${R('決','き')}める`,false],
      [`おいのりして、${R('天','てん')}の お${R('父様','とうさま')}に ${R('助','たす')}けを もとめる`,true],
      [`${R('友','とも')}だちが ${R('決','き')}めるまで、なにもしない`,false]
    ]
  },

  {
    text:`
      おいのりを したあとも、まだ まよっています。<br>
      <b>つぎは どうする？</b>
    `,
    choices:[
      [`「おいのりしたから、もう ${R('考','かんが')}えなくていい」と する`,false],
      [`先に ${R('答','こた')}えを ${R('決','き')}めて、あとで ${R('考','かんが')}える`,false],
      [`${R('教','おし')}えてもらったことを ${R('考','かんが')}えて、${R('正','ただ')}しいことを ${R('選','えら')}ぶ`,true]
    ]
  }
],

msg:`
  わからないときは、
  ${R('天','てん')}の お${R('父様','とうさま')}に
  ${R('助','たす')}けを もとめられるよ。
  ${R('祈','いの')}ったあと、${R('自分','じぶん')}でも
  ${R('考','かんが')}えてみよう。
`,

verse:`
  「${R('心','こころ')}を つくして
  ${R('主','しゅ')}に ${R('信頼','しんらい')}せよ。」—
  ${R('箴言','しんげん')}3:5
`
```

},

// =========================
// 3. 誘惑の町
// =========================
{
name:`${R('誘惑','ゆうわく')}の${R('町','まち')}`,
bg:'backgrounds/Town of Temptation.jpg',
emoji:'🏘️',
item:false,

```
questions:[
  {
    text:`
      3つの ${R('宝','たから')}ばこが あります。<br>
      ひとつには ほしいものが 入っています。<br>
      <b>${R('正','ただ')}しい ${R('方法','ほうほう')}で ${R('手','て')}に ${R('入','い')}れるには？</b>
    `,
    choices:[
      [`だれにも ${R('見','み')}られていなければ、もらう`,false],
      [`${R('時間','じかん')}が かかっても、ルールを ${R('守','まも')}る`,true],
      [`みんなが やっているなら、${R('自分','じぶん')}も やる`,false]
    ]
  },

  {
    text:`
      ほしいものが ${R('目','め')}のまえに あります。<br>
      でも、${R('今','いま')}は もらえません。<br>
      <b>どうする？</b>
    `,
    choices:[
      [`ほしいから、こっそり ${R('持','も')}っていく`,false],
      [`あきらめて、${R('正','ただ')}しい ${R('方法','ほうほう')}を ${R('探','さが')}す`,true],
      [`${R('友','とも')}だちに ${R('持','も')}ってきてもらう`,false]
    ]
  }
],

msg:`
  だれも ${R('見','み')}ていなくても、
  ${R('主','しゅ')}は ${R('知','し')}っておられるよ。
  ${R('正','ただ')}しい ${R('道','みち')}を ${R('選','えら')}ぼう。
`,

verse:`
  ${R('正','ただ')}しいことを する
  ${R('心','こころ')}を ${R('大切','たいせつ')}に しよう。
`
```

},

// =========================
// 4. 分かれ道
// =========================
{
name:`${R('分','わ')}かれ${R('道','みち')}`,
bg:'scenes/Fork in the road.jpg',
emoji:'🛤️',
item:false,

```
questions:[
  {
    text:`
      3${R('本','ぼん')}の ${R('道','みち')}が あります。<br>
      <b>どの ${R('道','みち')}を ${R('選','えら')}ぶ？</b>
    `,
    choices:[
      [`みんなが ${R('行','い')}く ${R('道','みち')}`,false],
      [`${R('自分','じぶん')}が いちばん ${R('好','す')}きな ${R('道','みち')}`,false],
      [`おいのりして、${R('主','しゅ')}に ${R('助','たす')}けを もとめて ${R('考','かんが')}える`,true]
    ]
  },

  {
    text:`
      ${R('主','しゅ')}に ${R('助','たす')}けを もとめました。<br>
      でも、${R('友','とも')}だちは
      「こっちに ${R('行','い')}こう！」と いっています。<br>
      <b>どうする？</b>
    `,
    choices:[
      [`${R('友','とも')}だちが いうなら、すぐに ついていく`,false],
      [`${R('祈','いの')}ったことを おぼえて、${R('正','ただ')}しいと ${R('思','おも')}うことを ${R('選','えら')}ぶ`,true],
      [`どちらも ${R('嫌','いや')}なので、なにもしない`,false]
    ]
  }
],

msg:`
  ${R('祈','いの')}って ${R('主','しゅ')}を ${R('信頼','しんらい')}すると、
  ${R('正','ただ')}しい ${R('道','みち')}が ${R('見','み')}えてくるよ。
`,

verse:`
  「すべての ${R('道','みち')}で ${R('主','しゅ')}を
  ${R('認','みと')}めよ，そうすれば，
  ${R('主','しゅ')}は あなたの ${R('道','みち')}を
  まっすぐにされる。」—
  ${R('箴言','しんげん')}3:6
`
```

}
];

// ======================================
// 最後のボス
// ======================================

const bossQuestions=[

{
text:`       👿「${R('自分','じぶん')}だけで ${R('決','き')}めれば いいよ！」<br>       <b>どうする？</b>
    `,

```
choices:[
  [`「そうだね！」と、すぐに ${R('決','き')}める`,false],
  [`ちょっと ${R('待','ま')}って、おいのりして ${R('考','かんが')}える`,true],
  [`${R('友','とも')}だちに ぜんぶ ${R('決','き')}めてもらう`,false]
]
```

},

{
text:`       👿「みんなが やってるよ！<br>
      だから ${R('自分','じぶん')}も やっていいよ！」<br>       <b>どうする？</b>
    `,

```
choices:[
  [`みんなが やっていても、${R('正','ただ')}しいか ${R('考','かんが')}える`,true],
  [`みんなが やっているなら、やってみる`,false],
  [`なにも ${R('考','かんが')}えずに にげる`,false]
]
```

},

{
text:`       👿「${R('祈','いの')}らなくても、
      ${R('自分','じぶん')}で わかるでしょ？」<br>       <b>さいごに、どうする？</b>
    `,

```
choices:[
  [`${R('自分','じぶん')}の ${R('知識','ちしき')}だけを ${R('信頼','しんらい')}する`,false],
  [`${R('祈','いの')}って ${R('主','しゅ')}を ${R('信頼','しんらい')}してから、${R('自分','じぶん')}でも ${R('考','かんが')}える`,true],
  [`${R('友','とも')}だちが ${R('決','き')}めるまで ${R('待','ま')}つ`,false]
]
```

}
];

const screen=document.getElementById('screen');
const hp=document.getElementById('hp');
const stage=document.getElementById('stage');

function hud(){

hp.textContent=
'❤️'.repeat(state.hp)+
'🖤'.repeat(5-state.hp);

if(state.stageIndex===0){

```
stage.textContent='ぼうけんの はじまり';
```

}else if(state.stageIndex<=4){

```
stage.innerHTML=
  stages[state.stageIndex-1].name;
```

}else if(state.stageIndex===5){

```
stage.textContent='まよわせモンスター';
```

}else{

```
stage.textContent='クリア';
```

}
}

// ======================================
// 画面表示
// ======================================

function render(content,buttons=[],bg=''){

screen.style.backgroundImage=
bg
? `url("${encodeURI(A+bg)}")`
: 'none';

screen.innerHTML=
`<div class="panel">
      ${content}       <div class="choices"></div>     </div>`;

const box=
screen.querySelector('.choices');

buttons.forEach(x=>{

```
const b=document.createElement('button');

// HTMLとして表示する
b.innerHTML=x.t;

b.onclick=x.f;

box.appendChild(b);
```

});

hud();
}

// ======================================
// 選択肢をランダムに並べ替える
// ======================================

function shuffledChoices(choices){

return choices
.map(choice=>({
t:choice[0],
ok:choice[1]
}))
.sort(()=>Math.random()-0.5);

}

// ======================================
// タイトル
// ======================================

function title(){

state.hp=5;
state.stageIndex=0;
state.questionIndex=0;
state.key=false;

render(

```
`
<div class="emoji">🛤️✨</div>

<h1>
  イエス${R('様','さま')}の
  ${R('道','みち')}を ${R('進','すす')}め！
</h1>

<p>
  <b>
    ${R('主','しゅ')}は あなたの ${R('道','みち')}を<br>
    まっすぐにされる
  </b>
</p>

<div class="quote">
  ${R('箴言','しんげん')}3:5–6
</div>

<p class="small">
  ${R('小学','しょうがく')}1～2${R('年生','ねんせい')}
  Primary RPG
</p>
`,

[
  {
    t:'▶ ぼうけんを はじめる',
    f:start
  }
],

'Starting Field.jpg'
```

);
}

// ======================================
// ゲーム開始
// ======================================

function start(){

state.hp=5;
state.stageIndex=1;
state.questionIndex=0;
state.key=false;

showQuestion();
}

// ======================================
// 問題表示
// ======================================

function showQuestion(){

const s=
stages[state.stageIndex-1];

const q=
s.questions[state.questionIndex];

const choices=
shuffledChoices(q.choices);

render(

```
`
<div class="emoji">${s.emoji}</div>

<div class="progress">
  ${state.questionIndex+1} / ${s.questions.length}
</div>

<h2>${s.name}</h2>

<p>${q.text}</p>
`,

choices.map(choice=>({

  t:choice.t,

  f:()=>answer(choice.ok)

})),

s.bg
```

);
}

// ======================================
// 回答
// ======================================

function answer(ok){

const s=
stages[state.stageIndex-1];

// -------------------------------
// 正解
// -------------------------------

if(ok){

```
state.hp=
  Math.min(5,state.hp+1);


// まだ問題が残っている
if(
  state.questionIndex <
  s.questions.length-1
){

  state.questionIndex++;

  render(

    `
    <div class="emoji">✨</div>

    <h2>${R('正解','せいかい')}！</h2>

    <p>
      よく ${R('考','かんが')}えたね。<br>
      ${R('次','つぎ')}の もんだいへ！
    </p>
    `,

    [
      {
        t:'▶ つぎの もんだい',
        f:showQuestion
      }
    ],

    s.bg
  );

  return;
}


// ステージクリア
stageClear();

return;
```

}

// -------------------------------
// 不正解
// -------------------------------

state.hp=
Math.max(1,state.hp-1);

render(

```
`
<div class="emoji">💭</div>

<h2>
  ちょっと ${R('待','ま')}って！
</h2>

<p>
  ${R('急','いそ')}いで
  ${R('決','き')}めなくても だいじょうぶ。
</p>

<p>
  <b>
    「ちょっと ${R('待','ま')}って！
    イエス${R('様','さま')}なら どうする？」
  </b>
</p>

<p class="small">
  もう ${R('一度','いちど')},
  よく ${R('考','かんが')}えてみよう。
</p>
`,

[
  {
    t:`↩ もう ${R('一度','いちど')} えらぶ`,
    f:showQuestion
  }
],

s.bg
```

);
}

// ======================================
// ステージクリア
// ======================================

function stageClear(){

const s=
stages[state.stageIndex-1];

if(s.item){

```
state.key=true;
```

}

const next=
state.stageIndex <
stages.length;

render(

```
`
<div class="emoji">✨</div>

<h2>
  ${R('道','みち')}を ${R('進','すす')}んだ！
</h2>

<p>
  ${s.msg}
</p>

${
  s.item
    ? `<div class="item">
         🔑 おいのりのカギ GET！
       </div>`
    : ''
}

<div class="quote">
  ${s.verse}
</div>
`,

[
  {
    t:
      next
        ? `▶ ${R('次','つぎ')}の ${R('場所','ばしょ')}へ`
        : '▶ まよわせモンスターへ',

    f:()=>{

      state.stageIndex++;
      state.questionIndex=0;

      if(
        state.stageIndex <=
        stages.length
      ){

        showQuestion();

      }else{

        boss();

      }

    }
  }
],

s.bg
```

);
}

// ======================================
// ボス
// ======================================

function boss(){

state.stageIndex=5;
state.questionIndex=0;

showBossQuestion();

}

function showBossQuestion(){

const q=
bossQuestions[state.questionIndex];

const choices=
shuffledChoices(q.choices);

render(

```
`
<div class="emoji">👿</div>

<div class="progress">
  ${state.questionIndex+1} /
  ${bossQuestions.length}
</div>

<h2>まよわせモンスター</h2>

<p>
  ${q.text}
</p>

${
  state.key && state.questionIndex===2
    ? `<div class="item">
         🔑 おいのりのカギを もっている！
       </div>`
    : ''
}
`,

choices.map(choice=>({

  t:choice.t,

  f:()=>bossAnswer(choice.ok)

})),

'monsters/Last Boss.jpeg'
```

);
}

function bossAnswer(ok){

// -------------------------------
// 正解
// -------------------------------

if(ok){

```
state.hp=
  Math.min(5,state.hp+1);


if(
  state.questionIndex <
  bossQuestions.length-1
){

  state.questionIndex++;

  render(

    `
    <div class="emoji">
      💥✨
    </div>

    <h2>
      ${R('攻撃','こうげき')}を
      はねかえした！
    </h2>

    <p>
      「ちょっと ${R('待','ま')}って！<br>
      イエス${R('様','さま')}なら
      どうする？」
    </p>
    `,

    [
      {
        t:'▶ つぎの たたかいへ',
        f:showBossQuestion
      }
    ],

    'monsters/Last Boss.jpeg'
  );

  return;
}


clear();

return;
```

}

// -------------------------------
// 不正解
// -------------------------------

state.hp=
Math.max(1,state.hp-1);

render(

```
`
<div class="emoji">💭</div>

<h2>
  まよわされている！
</h2>

<p>
  <b>
    ちょっと ${R('待','ま')}って！
  </b>
</p>

<p>
  ${R('祈','いの')}って
  ${R('主','しゅ')}を ${R('信頼','しんらい')}してから、
  ${R('考','かんが')}えてみよう。
</p>
`,

[
  {
    t:`↩ もう ${R('一度','いちど')} ${R('考','かんが')}える`,
    f:showBossQuestion
  }
],

'monsters/Last Boss.jpeg'
```

);
}

// ======================================
// クリア
// ======================================

function clear(){

state.stageIndex=6;
state.hp=5;

render(

```
`
<div class="emoji">
  ✨🛤️✨
</div>

<h1>
  QUEST CLEAR!
</h1>

<p>
  <b>
    まっすぐな ${R('道','みち')}を
    ${R('見','み')}つけた！
  </b>
</p>

<div class="quote">

  「${R('心','こころ')}を つくして
  ${R('主','しゅ')}に ${R('信頼','しんらい')}せよ。<br>

  ${R('自分','じぶん')}の ${R('知識','ちしき')}に
  たよっては ならない。<br>

  すべての ${R('道','みち')}で
  ${R('主','しゅ')}を ${R('認','みと')}めよ，
  そうすれば，${R('主','しゅ')}は
  あなたの ${R('道','みち')}を
  まっすぐにされる。」

  <br><br>

  — ${R('箴言','しんげん')}3:5–6

</div>

<p>
  ${R('自分','じぶん')}で
  ${R('考','かんが')}えることは ${R('大切','たいせつ')}。<br>

  でも、ひとりだけに たよらず、<br>

  <b>
    ${R('祈','いの')}って
    ${R('主','しゅ')}を
    ${R('信頼','しんらい')}しよう！
  </b>
</p>
`,

[
  {
    t:`🏠 ${R('家族','かぞく')}と やってみる`,
    f:family
  },

  {
    t:`🔁 もう${R('一度','いちど')} あそぶ`,
    f:title
  }
],

'scenes/Straight Path.jpg'
```

);
}

// ======================================
// 家族モード
// ======================================

function family(){

state.stageIndex=7;

render(

```
`
<div class="emoji">
  🏠👨‍👩‍👧‍👦
</div>

<h2>
  ${R('家族','かぞく')}と
  やってみよう！
</h2>

<p>
  <b>
    こんどは、あなたが
    ${R('先生','せんせい')}です。
  </b>
</p>

<p>
  ${R('家族','かぞく')}に
  もんだいを ${R('出','だ')}して、<br>

  「どうして その
  ${R('答','こた')}えを ${R('選','えら')}んだの？」と
  ${R('聞','き')}いてみよう。
</p>

<div class="quote">
  <b>
    「ちょっと ${R('待','ま')}って！<br>
    イエス${R('様','さま')}なら
    どうする？」
  </b>
</div>
`,

[
  {
    t:`▶ ${R('家族','かぞく')}モードを はじめる`,
    f:familyQ
  },

  {
    t:'🏠 おわる',
    f:end
  }
]
```

);
}

// ======================================
// 家族クイズ
// ======================================

function familyQ(){

render(

```
`
<div class="emoji">🤔</div>

<h2>
  ${R('家族','かぞく')}に
  ${R('聞','き')}いてみよう
</h2>

<p>
  <b>
    いやなことが あったとき、<br>
    どうしたら いいかな？
  </b>
</p>

<div class="quote">

  「ちょっと ${R('待','ま')}って！<br>

  イエス${R('様','さま')}なら
  どうする？」

</div>

<p class="small">
  ${R('家族','かぞく')}の
  ${R('答','こた')}えを
  ${R('聞','き')}いてみよう。
</p>
`,

[
  {
    t:'▶ おわる',
    f:end
  }
]
```

);
}

// ======================================
// 終了
// ======================================

function end(){

render(

```
`
<div class="emoji">
  🙏✨
</div>

<h2>
  ${R('今日','きょう')}の ぼうけんは、これで<br>
  おしまい
</h2>

<p>
  ${R('主','しゅ')}は、あなたを
  ${R('正','ただ')}しい ${R('道','みち')}へ
  ${R('導','みちび')}いてくださいます。
</p>

<p>
  <b>
    おいのりを してみよう。
  </b>
</p>
`,

[
  {
    t:`🔁 もう${R('一度','いちど')} あそぶ`,
    f:title
  }
]
```

);
}

title();
