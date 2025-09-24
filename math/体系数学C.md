# 平面ベクトル
> 求値: 内積 \
> 証明: 内積以外

## 基本計算
- 文字式と同様に方程式を解く
- 単位ベクトル → 大きさで割る
- 文字に別の多項式を代入

## ベクトルを求める
- 一次独立 $( \vec{a} \not\parallel \vec{b},　\vec{a} \neq \vec{0},　 \vec{b} \neq \vec{0} )$ → $\vec{p} = s\vec{a} + t\vec{b}$ となるs,tはただ一通りある。
- $ AP:PB = t:1-t $ → $ \vec{a} = (1-t)\vec{a} + t\vec{b} $
- 位置ベクトル → 点を表す文字が減るよう、基点を慎重に考える
  - 基本 → 原点, 点A
  - $ \vec{AP}+\vec{BP}, \vec{AP}\cdot\vec{BP} $ など → ABの中点M
- 分点の公式
- $ \vec{AB} = \vec{OB} - \vec{OA} $
- ～の位置 → (左辺)と(右辺)を、同じ基点の位置ベクトル表す
- ～の軌跡 → 基本は位置と同じ考え方、$t, k$など変数は多項式から分離する
- 交点の位置ベクトル
  - $ AR:RP = s:(1-s) \\ BR:RQ = t:(1-t) $ とおき、$ \alpha\vec{OA} + \beta\vec{OB}$ の形で表し一次独立から係数の比較を行う
  - 一直線上 → $ \vec{OB} = k\vec{OB} $
  - 比でおき、2つ式を作って係数比較
  - 一直線上より $ \vec{OP} = k{OA} $ とおき、係数の特徴から文字を消す
- 係数比較 → 一次独立が条件
- $\vec{a}と\vec{b}$を用いて表せ(一次独立) → $\vec{p} = s\vec{a} + t\vec{b}$ (答えの形から考える)
- 線分AB上 → $\vec{p} = s\vec{a}+t\vec{b}　(s+t=1)$
- ベクトルの分解
- 平行
  - $\vec{b} = k\vec{a}$ となる $k$ が存在
  - $ a_1:b_1 = a_2:b_2 $
  - $ a_1 b_2 = a_2 b_1 $

## 量を求める
### 大きさ$|\overrightarrow{OA}|$
- 基本 → 2乗する
- 条件が与えられている → 与えられたベクトルをそのまま文字で置き、その文字で求めたいベクトルを表してから2乗する

### 内積
- 内積
  - $ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| cos\theta $
  - $ \vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2 $
- $ |\vec{a}-\vec{b}| $ → 2乗して内積を取り出す
- 内積の最大・最小 → $ cos\theta, |\vec{a}|, |\vec{b}|$ の最大・最小
- なす角 $ cos\theta = \frac{ \vec{a} \cdot \vec{b} }{|\vec{a}| |\vec{b}|} $

### 面積
- $\triangle{OAB}$ の面積S
  - $ S = \frac{1}{2} \sqrt{ |\vec{a}|^2 |\vec{b}|^2 - (\vec{a} \cdot \vec{b})^2} $
  - $ S = \frac{1}{2} | a_1b_2 - a_2b_1| $
- 面積比 → 一番小さい部分の辺の比を文字で置き、全体へと広げる
- 高さが変わらない → 面積一定

### 三角形でのベクトルの扱い
- 三角形 → $ \vec{AB} + \vec{BC} + \vec{CA} = \vec{0}$
- 重心 → $ \vec{OG} = \frac{1}{3}(\vec{OA}+\vec{OB}+\vec{OC}) $
- 内接円 → 各頂点から接点までの距離を文字でおく 
- 内心 → 辺の比から図形の性質
- 外心が基点の位置ベクトル → $|\vec{a}| = |\vec{b}| = |\vec{c}| = r$

## ベクトル ↔ 図形と方程式の相互変換
- 
  直線 | ベクトル方程式
  -|-
  2点 $\vec{a}, \vec{b}$ を通る | $\vec{p}=s\vec{a}+t\vec{b}　(s+t=1)$
  $\vec{a}$ を通り $\vec{d}$ に平行 | $\vec{p} = \vec{a} + t\vec{d}$
  法線ベクトル $\vec{n}$ に垂直な直線 | $\vec{n} \cdot \vec{AP} = 0$
-
  円 | ベクトル方程式
  -|-
  2点 $\vec{a}, \vec{b}$ を通る円 | $(\vec{p}-\vec{a})(\vec{p}-\vec{b}) = 0$
  $ \lvert l\vec{p}-m\vec{a}-n\vec{b} \rvert = 12$ | $\lvert \vec{p}-\frac{m}{l}\vec{a}-\frac{n}{l}\vec{b} \rvert = \frac{12}{l}$ の形に変形
  
- $ax+by+c = 0$ の法線ベクトル $\vec{n} = (a,b)$
- x,yの方程式の導出
  - 成分で演算
  - 求める座標を(x,y)とおき、2通りで表してから式に代入
- 2直線のなす角 → $\vec{n_1}, \vec{n_2}$ のなす角を考える
- 目的の形を無理やり作る
- 方向ベクトルを作る

## 斜行座標(点の動く範囲)
- 図を書く
1. $s+t=1$ にする( $1$ が特に大事)
  - $as+bt = c$ → $\frac{a}{c}s+\frac{b}{c}t = 1$
  - $s+t \leqq 1$

  $$
  \begin{align}

  s+t &= k 　とおく\\
  \frac{s}{k} + \frac{t}{k} &= 1 \\
  \\
  \vec{p} &= s\vec{a} + t\vec{b} \\
  \vec{p} &= \frac{s}{k}(k\vec{a}) + \frac{t}{k}(k\vec{b})

  \end{align}
  $$

  - $\vec{a'} = k\vec{a}, \vec{b'} = k\vec{b}, s' = \frac{s}{k}, t' = \frac{t}{k}$ とおきかえる
  
2. 係数から軌跡が分かる形にする
  - 直線形 $\vec{p} = s\vec{a} + t\vec{b} 　(s+t=1)$
  - 内分形 $\vec{p} = \frac{s\vec{a} + t\vec{b}}{t+s}$
  - 外分形 $\vec{p} = \frac{-s\vec{a} + t\vec{b}}{t-s}$

3. 文字固定(ある文字を定数として見る)して、1つ1つの文字を順番に見ていく



# 空間ベクトル

# 複素数平面
# 式と曲線