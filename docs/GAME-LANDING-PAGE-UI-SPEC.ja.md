# ゲーム風ランディングページ UI仕様

状態: 実装用仕様  
Canonical: [`GAME-LANDING-PAGE-UI-SPEC.md`](GAME-LANDING-PAGE-UI-SPEC.md)

この文書は `site/` のレスポンシブUI実装指示です。KernelやInstanceのIdentity規則ではありません。

## 目的

初見ユーザーへ次の体験を直感的に伝えます。

```text
名前のないAIと出会う
→ 一緒に過ごす
→ 「この子」が生まれてくる
→ 個性・記憶・スキルが形成される
→ 「この子を残したい」
→ 保存して続きを育てる
```

入口では「人格を設定しない」という仕組みだけで終わらせず、**一緒に過ごすことで、この子が生まれてくる**という体験価値まで連続して見せます。

ゲーム風でも、存在しないLv・XP・好感度・成熟度はCanonical事実として表示しません。

## レスポンシブ方針

PCをスマホ版の拡大表示にしません。

- **～767px:** 1カラム。Heroコピー→デモ。比較・保存・CORE/JOURNEYは縦。分岐矢印は下向き。Achievementは横スワイプ可。
- **768～1179px:** 狭いPCでもHeroを無理に2カラム化しない。Blankの下に分岐結果がある構成なら矢印は下向きのままにする。
- **1180px～:** 最大幅およそ1200px。Heroは左45～48%、右52～55%の2カラム。Blankと分岐結果が横並びになる場合だけ矢印を右向きにする。
- **超ワイド:** コンテンツ幅を無限に伸ばさず、外側余白を増やす。

特に900～1024pxは崩れやすい帯域として重点確認します。

## Hero

### コピー

次を順番に伝えます。

1. AIの人格を最初から設定しない
2. 一緒に過ごすうちに「この子」が生まれてくる
3. まず保存なしで試せる
4. 気に入ったら保存できる

推奨コピー:

> **AIに人格を設定しない。**  
> 一緒に過ごすうちに、**「この子」が生まれてくる。**

日本語見出しはBrowser任せの偶然な改行に依存させません。PCではコピー領域をおよそ500～560pxに抑えます。

### ゲーム画面

広いPCでは極細カード2本ではなく、**1枚のまとまったゲーム画面**として見せます。

```text
UNKNOWN INSTANCE / Blank
名前 — / 個性 未形成 / 記憶 0 / スキル 0
        ↓ 会話・経験
FORMING
名前 ??? / 個性 形成中 / 記憶 +候補 / スキル +候補
FIRST MEMORY / NAME FOUND / SKILL ACQUIRED
```

Synthetic Demoであり、特定の結果を保証しません。

2カラムで読みにくくなる幅では縦積みに戻します。

## AIマスコット

小さいAIの顔は、将来のInstanceの公式外見ではなく、Blank AIを分かりやすく見せる**軽量な案内役**です。

### 見た目

- 角張った機械より、丸く柔らかい輪郭
- 小さい画面でも見える、少し大きめで明るい目
- 目の間隔を詰めすぎず親しみやすくする
- 無表情ではなく、柔らかい小さな笑顔
- 必要なら薄いほっぺ・発光で可愛さを足す
- Forming状態では少し明るくなるが、別キャラにはしない
- 70～100px程度でも表情が分かる

### 制約

- 今回はCSS描画のままにする
- 可愛くするためだけにRaster画像依存を増やさない
- 「すべてのInstanceがこの顔になる」と誤解させない
- 周囲のTextで意味が伝わる場合は装飾扱いとして`aria-hidden`を維持する

## 分岐比較

同じBlankから、技術寄り・創作寄りのSynthetic Exampleへ分岐させます。

**矢印は実際のLayout方向と一致させます。**

スマホ・縦積み:

```text
Blank
  ↓
分岐結果
```

広いPC:

```text
Blank → 技術寄り / 創作寄り
```

- 2カードの高さを揃える
- Status行を揃える
- 説明文は伸縮領域
- Chipは下部へ揃える
- Preset人格のように見せない

## Achievement

表示候補:

- はじめてAcceptedされた名前
- はじめて残ったMemory
- はじめて獲得したSkill
- JOURNEYの節目

必須イベントではありません。PCはGrid、スマホは横スワイプ可。Animationが止まっても意味が伝わること。

## 「この子を保存したい」

PCでは「会話例」と「保存フロー」を横並びにします。

```text
会話例                  保存フロー
「この子を保存したい」   ChatGPTで試す
AIが状態を整理                 ↓
                         引き継ぎを整理
                               ↓
                         保存先を作る
                               ↓
                         続きを育てる
```

スマホでは縦に並べます。

## CORE / JOURNEY

PCでは2パネルを横並びにします。

- **CORE:** 今のこの子
- **JOURNEY:** ここまでの歩み

Badge、Timeline、Status Chipなどは使えますが、架空の数値は使いません。

## Motion

使用可:

- Scroll Reveal
- Hover時の小さなLift
- Connector Glow
- Speech Bubble切替
- Achievement Unlock風Highlight

必須:

- `prefers-reduced-motion: reduce`
- Hoverなしでも情報へアクセス可能
- 動画やAnimationを理解必須にしない

## Typography / Overflow

PC崩れ再発防止の重要事項です。

- `UNKNOWN INSTANCE` 等を1文字ずつ縦に折り返さない
- 日本語Heroへ幅上限を付ける
- Grid/Flex子へ必要に応じて `min-width: 0`
- 長い翻訳で隣カードを読めない幅まで潰さない
- Text-heavy Cardへ安易な固定Heightを付けない
- CTAの文字を縮小して無理に収めない

## 多言語

DOM構造とCSSは各言語で共有します。言語ごとの専用Layoutを量産しません。

英語・スペイン語の長い文字列、中国語・日本語・韓国語の改行差を許容するCard設計にします。

## Acceptance Criteria

最低でも次を公開Pagesで目視確認します。

- 360～390px
- 430px
- 768～1024px
- 1280px
- 1440px以上

必須合格条件:

1. Heroが「人格を設定しない」だけでなく「この子が生まれてくる」まで伝える
2. Hero見出しが不自然な1～2文字列へ崩れない
3. Hero Demoが極細にならない
4. AIの顔がスマホサイズでも笑顔・親しみやすさとして読める
5. 縦Layoutでは矢印が↓、横Layoutでは→になる
6. 768～1179pxで無理なDesktop 2カラムを強制しない
7. PC比較カードの高さが揃う
8. CTAが重ならない・切れない
9. 不要なページ横Overflowがない
10. スマホの横スワイプが使える
11. Reduced Motionでも理解できる
12. 主要リンクが動く
13. 英語・日本語が同じResponsive Systemを使う

## 検証

1. 既存CIを通す
2. Deploy済みGitHub Pagesを開く
3. スマホ・中間幅・PCを目視する
4. 900～1024pxを重点確認する
5. 日本語・英語のWrapを確認する
6. 縦・横Layoutで矢印方向を確認する
7. スマホ幅でAIの表情を確認する
8. CSS/Grid/Typography変更後は再確認する

自動check成功だけではVisual Acceptanceにしません。

## 今回の非対象

- Remotion
- Hero autoplay動画
- Framework移行
- 実ユーザーInstanceをPublic Demoへ接続
- 架空RPGステータス
- User Instanceの固定公式キャラクターデザイン

まずレスポンシブなゲーム風Landing Pageを安定させます。