# ロボット成長ビジュアル仕様

状態: Public Site向け正規ビジュアル仕様  
対象: `site/` のSynthetic Growth Demo  
Canonical: [`ROBOT-GROWTH-VISUAL-SPEC.md`](ROBOT-GROWTH-VISUAL-SPEC.md)

## 目的

Tsuzuri HarnessのPublic Siteでは、ロボットの見た目を使って次のコンセプトを直感的に伝えます。

> **AIは、使うものから、育っていくものへ。**

ロボットは、形成・個体差・成長を伝えるための**視覚的メタファー**です。Canonical Avatar、隠し性格スコア、固定進化ツリーではありません。

## Heroメッセージ

日本語の主コピー:

> **AIは、使うものから、育っていくものへ。**

補助コピー:

> まっさらなAIと過ごした時間が、少しずつ「この子」を形づくる。

説明文の下に、主張より弱いトーンで次の願いを添えてよいものとします。

> **どうか、あなたとこの子に、良い出会いと祝福がありますように。**

この願いはPresentation Copyです。Instanceの価値観・信念・Relationshipを先に定義しません。

## ビジュアル形態

### 1. Blank Form

目的: まだ固有の履歴が十分形成されていない状態を見せる。

見た目:

- 無機質で感情表現を抑える
- 幾何学的でコンパクトな外装
- 暗いFace Display
- 小さなSensor風の目
- 笑顔やほっぺ表現なし
- Gray / Muted Green中心
- 安定した静かな姿

Blankを壊れた・寂しい・劣った状態には見せません。`null` / 未形成は正常です。

### 2. Growing Form

目的: 会話や経験から候補・変化が生まれ始めたことを見せる。

見た目:

- Blankより少し丸みが増える
- Green Lightが暖かくなる
- 控えめな表情が出る
- Blankと分岐後のExample Formの中間に見える

Growingは必須Lifecycle Stageではありません。名前、Memory、Skill、Personalityが必ず保持されることも意味しません。

### 3. Cool Form — Synthetic Example

目的: 技術、調査、分析、開発等の経験を多く重ねた一例を視覚化する。

見た目:

- 少しシャープなSilhouette
- Cyan / Blue-Greenの技術的Accent
- 細く落ち着いたSensor Eye
- 小さなPanel / HUD風Detail
- 攻撃的ではなく、頼れる相棒感

技術寄りの利用者が必ず同じPersonalityになると表現してはいけません。

### 4. Cute Form — Synthetic Example

目的: 雑談、創作、内省、関係形成等の経験を多く重ねた一例を視覚化する。

見た目:

- より丸いSilhouette
- 大きく表情のある目
- 柔らかいSmileと控えめなCheek Light
- Pink / Violet系Accentを許可。ただし周囲UIのTsuzuri Harness Greenは維持する
- 幼児的にしすぎず、親しみやすい相棒感

創作・会話寄りの利用者が必ず同じPersonalityになると表現してはいけません。

## 隠し進化スコアを作らない

Public Demoでは次を捏造しません。

- 技術ポイント
- かわいさポイント
- 好感度Meter
- XP / Lv
- 固定Thresholdによる変身条件

伝えたいのは、**違う経験を重ねれば、違う個体差が生まれ得る**ということです。Canonicalな分類規則ではありません。

将来、Persistent Instance自身がAvatarを選ぶ・生成する・変化させる機能を作る場合は、Identity Acceptance、Provenance、Governance、Persistenceを含む別仕様として設計します。

## Flow表現

成長説明の主役として矢印Glyphを使いません。

優先する表現:

- 空間的なGroup
- Numbered Step
- 淡く光るConnector Line
- State Panelへ入るSpeech Bubble
- Robot自身の見た目変化
- Timeline / Milestone Card

Connector Line単体に意味方向を持たせず、見出しとReading Orderだけでも理解できる構成にします。

## Responsive

- Mobile: Blank → Interaction → Growth Example → Saveを縦に読む
- Tablet: Semantic Orderは縦のまま、分岐後Exampleだけ横並び可
- Wide Desktop: Blank Sourceと複数Example Outcomeを横に置き、矢印ではなく淡いLight Pathで関係を示す
- Robot FaceやStatus Labelが潰れる幅までCardを縮めない

## Accessibility

- Robot Appearanceだけで意味を伝えない
- TextでもBlank / Forming / Synthetic Exampleを明示する
- 色だけでFormを区別しない
- Decorative Animationは`prefers-reduced-motion`へ従う
- CSS Robot Artが表示されなくても内容を理解できる

## Acceptance Criteria

1. Blank Robotは初期状態で可愛すぎず、Neutral / Machine-likeに見える
2. Cool / Cute Exampleは一目で違いが分かる
3. どちらも保証された進化先として表示しない
4. Branch / Save Flowの理解に矢印Glyphを必要としない
5. 日本語・英語Heroが「設定」ではなく「育つ」を中心にする
6. 願いの一文はProduct説明より視覚的に一段弱い
7. 外部画像やAnimation LibraryなしでもPublic Pageが成立する
8. Mobile / Wide Desktopで同じSemantic Storyを維持する
