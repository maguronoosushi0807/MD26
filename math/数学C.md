# 平面ベクトル

## 目次
- 基本計算
- 位置ベクトルを求める
  - 位置ベクトルの考え方
  - 一次独立の利用
  - 位置ベクトルを求める
- 量を求める
  - 大きさ
  - 平行
  - 内積
  - 面積
  - 三角形でのベクトルの扱い
- ベクトル ↔ 図形と方程式の相互変換
- 斜行座標(点の動く範囲)


## 基本計算
> 求値: 内積 \
> 証明: 内積以外
- 文字式と同様に方程式を解く
- 単位ベクトル → 大きさで割る
- ベクトルに別のベクトルの多項式を代入
- $ \overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA} $
- $ \overrightarrow{OH} = \overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC}$ のとき、 $ \overrightarrow{OH} - \overrightarrow{OA} = \overrightarrow{OB} + \overrightarrow{OC}$ より、 $ \overrightarrow{AH} = \overrightarrow{OB} + \overrightarrow{OC} $
- 小問ごとに必要な部分を抜き出した図を書くとわかりやすい

## 位置ベクトルを求める
### 位置ベクトルの考え方
- 位置ベクトル → 1つの点を基準に他の点のベクトルを表したもの
- 基点の置き方 → 点 $A, B, C, ...$ を表すのに必要な文字が減る点を基点に選ぶ
  - 基本的な場合 → 原点, 点A
  - $ \overrightarrow{AP}+\overrightarrow{BP}, 　\overrightarrow{AP}\cdot\overrightarrow{BP} $ など → $AB$ の中点 $M$
  - $k\overrightarrow{BC}$ など、変数を含む場合 → B, C のどちらかを基点に選ぶと計算しやすい
- ～の位置 → (左辺)と(右辺)を同じ基点の位置ベクトルで表す
- ～の軌跡 → 基本は位置と同じ考え方、$t, k$ などの変数は多項式から分離する

### 一次独立の利用 $( \vec{a} \not\parallel \vec{b},　\vec{a} \neq \vec{0},　 \vec{b} \neq \vec{0} )$
- $\vec{a}, \vec{b}$ が一次独立 → $\vec{p} = s\vec{a} + t\vec{b}$ となる $s,t$ はただ一通りある。
- $\vec{a},  \vec{b}$ を用いて表せ → まず $\vec{p} = s\vec{a} + t\vec{b}$ とおく(答えの形から考える)
- 係数比較を行う → 一次独立であるか確認

### 位置ベクトルを求める
**基本方針: $\vec{p} = s\vec{a} + t\vec{b}$ と表し、係数を決定**
- 手段1: 内積を用いて係数の関係式を作る
  - $\vec{p} \cdot (\vec{b} - \vec{a}) = 0 \\\\ (s\vec{a} + t\vec{b}) \cdot (\vec{b} - \vec{a}) = 0 \\\\ (\vec{a} \cdot \vec{b} - |\vec{a}|^2)s + (|\vec{b}|^2 - \vec{a} \cdot \vec{b}) t = 0$ <br> など
- 手段2: 2つの式の係数を比較する
  - 三角形内の交点の位置ベクトル
  - $\triangle{OAB}$ において、$\overrightarrow{OP} = p\overrightarrow{OA}, \overrightarrow{OQ} = q\overrightarrow{OB}$ のとき、$\overrightarrow{AQ}$ と $\overrightarrow{BP}$ の交点Rについて $\overrightarrow{OR}$ を下のように比でおく <br> $\begin{cases} AR:RQ = s:(1-s) \\\\ BR:RP = t:(1-t) \end{cases} \\\\ $ 分点の公式から $\overrightarrow{OR}$ を2種類で表す<br> $ \begin{cases} \overrightarrow{OR} = (1-s)\overrightarrow{OA}+s\overrightarrow{OQ} \\\\ \overrightarrow{OR} = (1-t)\overrightarrow{OB} + t\overrightarrow{OP} \end{cases} $ <br> $\begin{cases} \overrightarrow{OR} = (1-s)\overrightarrow{OA} + sq\overrightarrow{OB} \\\\ \overrightarrow{OR} = tp\overrightarrow{OA} + (1-t)\overrightarrow{OB} \end{cases}$ <br> これら2つの $\overrightarrow{OA}, \overrightarrow{OB}$ の係数を連立して求める <br> $\begin{cases} 1-s = tp \\\\ sq = 1-t \end{cases}$

- 手段3: 係数の特徴を利用する
  - 線分OA上 → $\overrightarrow{OP} = s\overrightarrow{OA}+t\overrightarrow{OB}　(t=0)$
  - 線分AB上 → $\overrightarrow{OP} = s\overrightarrow{OA}+t\overrightarrow{OB}　(s+t=1)$
  - 線分AB上 → $\overrightarrow{OP} = s\overrightarrow{OA}+(1-s)\overrightarrow{OB}$ (Bを通りABに平行な直線と見ることもできる)
  - 一直線上 → $ \overrightarrow{OP} = k\overrightarrow{OA} $
  - $ AP:PB = t:1-t $ に内分する点 → $ \overrightarrow{OP} = (1-t)\overrightarrow{OA} + t\overrightarrow{OB} $
  - 分点の公式
  - 変形して特定のベクトルにする <br> $\overrightarrow{OP} = s\overrightarrow{OA} + t\overrightarrow{OB}, 　\overrightarrow{OC} = c\overrightarrow{OA}$ のとき、 <br> $\overrightarrow{OP} = \frac{s}{c}(c\overrightarrow{OA}) + t\overrightarrow{OB} \\\\ \overrightarrow{OP} = \frac{s}{c}\overrightarrow{OC} + t\overrightarrow{OB} $など


## 量を求める
### 大きさ $|\vec{a}|$
- 基本的な場合 → 2乗する
- $|\vec{a} + \vec{b}|=2, |\vec{a} - \vec{b}|=3$ など条件が与えられ、 $|\vec{a}|, |\vec{b}|$ を求める場合 → $\vec{p} = \vec{a} + \vec{b}, \vec{q} = \vec{a} - \vec{b}$ などのように文字で置き、 $\vec{a}, \vec{b}$ を $\vec{p}, \vec{q}$ で表してから2乗する
- 成分で計算する
- 直線AB上の点をPとしたとき $|\overrightarrow{OP}|$ が最小となる点 → 点Oからの垂線との交点
  - 2変数関数の最大・最小 → まず1つの文字について平方完成、次にもう一つの文字も平方完成
- 辺の比が与えられた場合 → イコールの形に直し、2乗する

### 平行
- $\vec{a}(a_1, a_2),　\vec{b}(b_1, b_2)$ が平行
  - $\vec{b} = k\vec{a}$ となる $k$ が存在
  - $ a_1:b_1 = a_2:b_2 $
  - $ a_1 b_2 = a_2 b_1 $

### 内積 $\vec{a} \cdot \vec{b}$
- 内積
  - $ \vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}| cos\theta $
  - $ \vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}| \frac{|\overrightarrow{OA}|^2 + |\overrightarrow{OB}|^2 - | \overrightarrow{AB}|^2}{2|\overrightarrow{OA}||\overrightarrow{OB}|}$ (余弦定理の利用, ABを用いる場合に有効)
  - $ \vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2 $
- $|\overrightarrow{AB}|, |\vec{b} - \vec{a}|$ などが与えられている → 2乗して内積を取り出す
- 内積の最大・最小 → $ cos\theta $ 或いは $|\vec{a}|, |\vec{b}|$ の最大・最小
- なす角 
  - $$ cos\theta = \frac{ \vec{a} \cdot \vec{b} }{|\vec{a}| |\vec{b}|} $$
  - 図形の性質を利用する
  - 円周角の定理を利用する
  - どうしようもない場合 → 90°で決め打ち
- $\vec{a}, \vec{b}$ が垂直 → $ \vec{a} \cdot \vec{b} = 0 $

### 面積 $S$
- $\triangle{OAB}$ の面積S $(\vec{a} = \overrightarrow{OA}, \vec{b} = \overrightarrow{OB})$ 
  - $$ S = \frac{1}{2}|a||b|sin\theta $$
  - $$ S = \frac{1}{2} \sqrt{ |\vec{a}|^2 |\vec{b}|^2 - (\vec{a} \cdot \vec{b})^2} $$
  - $$ S = \frac{1}{2} | a_1b_2 - a_2b_1| $$
- 単純に求められない場合 → 面積比の問題として捉え直す
- 面積比 → 一番小さい部分の辺の比から面積を文字で置き、全体を求めていく (例: $AP:PB = 3:4$ のとき、$\triangle{OAP} : \triangle{OBP} = 3S:4S$ )
- 高さが変わらない → 面積一定

### 三角形でのベクトルの扱い
- 三角形 → $ \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA} = \overrightarrow{0}$
- 重心 → $ \overrightarrow{OG} = \frac{1}{3}(\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}) $
- 内接円 → 頂点 $A,B,C$ から内接円の接点までの距離を $x,y,z$ と文字でおく 
- 内心 → 辺の比から図形の性質
- 外心が基点の位置ベクトル → $|\vec{a}| = |\vec{b}| = |\vec{c}| = r$
- 三角形の形状 → まずは辺の長さ、次に角度を調べる
- 外心を求めよなど、計算がめんどくさくなりそうな場合 → まずは辺の比から三角形の形状を調べる。うまくいくと計算が楽になる
- 正三角形において、重心と垂心、外心は一致する

### 平行四辺形でのベクトルの扱い
- 向かい合う辺のベクトルは相等なベクトルになる
  - 平行四辺形ABCDにおいて、$\overrightarrow{AB} = \overrightarrow{DC},　\overrightarrow{AD} = \overrightarrow{BC}$

### 台形でのベクトルの扱い
- 台形ABCDにおいて、$2AB = CD$ のとき、ABの中点をMとすると、四角形ABMD は平行四辺形になる

## ベクトル ↔ 図形の相互変換
- 直線とベクトル方程式
  直線 | ベクトル方程式
  -|-
  2点 $\vec{a}, \vec{b}$ を通る　 | 　$\vec{p}=s\vec{a}+t\vec{b}　(s+t=1)$
  $\vec{a}$ を通り $\vec{d}$ に平行　 | 　$\vec{p} = \vec{a} + t\vec{d}$
  法線ベクトル $\vec{n}$ に垂直な直線　 | 　$\vec{n} \cdot \overrightarrow{AP} = 0$

- 円とベクトル方程式
  円 | ベクトル方程式
  -|-
  2点 $\vec{a}, \vec{b}$ を通る円　 | 　$(\vec{p}-\vec{a})(\vec{p}-\vec{b}) = 0$
  $ \lvert l\vec{p}-m\vec{a}-n\vec{b} \rvert = 12$　 | 　$\lvert \vec{p}-\frac{m}{l}\vec{a}-\frac{n}{l}\vec{b} \rvert = \frac{12}{l}$ の形に変形

- $ax+by+c = 0$ の法線ベクトル $\vec{n} = (a,b)$
- ベクトル方程式 を x,yの方程式にする → 媒介変数を消去し、成分で演算
- 点から直線へ下ろした垂線との交点 → 求める座標を $(p,q)$ とおき、内積 = 0 から2通りで表してから式に代入
- 2直線 $l_1, l_2$ のなす角 → $l_1, l_2$ の法線ベクトル$\vec{n_1}, \vec{n_2}$ のなす角を考える
- 方向ベクトルを作る

## 斜行座標(点の動く範囲)
- 図を書く
1. $s+t=1$ にする( $=1$ が特に大事)
  - $as+bt = c$ → $\frac{a}{c}s+\frac{b}{c}t = 1$
  - $s+t \leqq 1$

  - $ s+t = k $ とおく <br> $
  \frac{s}{k} + \frac{t}{k} = 1 \\\\
  \\\\
  \vec{p} = s\vec{a} + t\vec{b} \\\\
  \vec{p} = \frac{s}{k}(k\vec{a}) + \frac{t}{k}(k\vec{b})
  $

  - $\vec{a'} = k\vec{a}, \vec{b'} = k\vec{b}, s' = \frac{s}{k}, t' = \frac{t}{k}$ とおきかえる
  
2. 係数から軌跡が分かる形にする
  - 直線形 $\vec{p} = s\vec{a} + t\vec{b} 　(s+t=1)$
  - 内分形 $\vec{p} = \frac{s\vec{a} + t\vec{b}}{t+s}$
  - 外分形 $\vec{p} = \frac{-s\vec{a} + t\vec{b}}{t-s}$

3. 文字固定(ある文字を定数として見る)して、1つ1つの文字を順番に見ていく

- $\overrightarrow{AP} = s\overrightarrow{AB} + t\overrightarrow{AC}$ のとき、点Pが三角形ABCの内部にある → $s>0,　t>0,　s+t<1$
- 領域に関する条件が複雑な場合、一つ一つの条件について当てはまる領域を図示し、最後にそれらの共通部分を求める

  <br>
  <br>

# 空間ベクトル
> **ほとんど平面ベクトルと同じ**
## 基本計算
- 基本的な計算法則は平面ベクトルと同じ
- $ |\overrightarrow{OA}| = \sqrt{x^2+y^2+z^2}$
- 成分の比較
- ～対称 → ～成分以外の符号を反転させる
- 2つのベクトルに垂直なベクトル → 外積
  - $\vec{a} = (a_1, a_2, a_3), \vec{b} = (b_1, b_2, b_3)$ のときの外積: <br> $\vec{a}\times\vec{b} = (a_2b_3-a_3b_2, a_3b_1- a_1b_3, a_1b_2-a_2b_1)$
- 証明 → 座標の導入
- 体積比 → 辺の比
- 三角錐の体積 → 普通の公式
- 三角錐の体積 → $V = \frac{1}{6}|(\vec{a}\times\vec{b})\cdot\vec{c}|$
- 誘導に乗れるように適宜 $\overrightarrow{OP}$ を $\overrightarrow{PO}$ としたりする
- 平面について考える場合、その平面を先に書いてから点を乗せると図が書きやすくなる

## 位置ベクトルを求める
###  一次独立の利用 ( $ \vec{a}\neq\vec{0}, \vec{b}\neq\vec{0}, \vec{c}\neq\vec{0}, \vec{a}, \vec{b}, \vec{c}$ は同一平面上にない )
- $\vec{a}, \vec{b}, \vec{c}$ が一次独立 → $\vec{p} = s\vec{a} + t\vec{b} + u\vec{c}$ となる $s,t, u$ はただ一通りある。
- $ s\vec{a} + t\vec{b} + u\vec{c} = \vec{0}$ ならば、$ s=t=u=0$
- $\vec{a}, \vec{b}, \vec{c}$ を用いて表せ → まず $\vec{p} = s\vec{a} + t\vec{b} + u\vec{c}$ とおく(答えの形から考える)
- 係数比較を行う → 一次独立であるか確認
- 一直線上にない $A, B, C$ について、$P$ が平面ABC上にある → $\overrightarrow{AP} = s\overrightarrow{AB} + t\overrightarrow{AC}$ と表せる
  - 基点をOにする → $\overrightarrow{OP} = s\overrightarrow{OA} + t\overrightarrow{OB} + u\overrightarrow{OC} 　(s+t+u = 1)$
  - 平面ベクトルにおける～直線上の場合と同様に、この形に変形することで計算量を抑えることができる。
- 座標などの具体値が与えられた問題 → すべてを成分で計算することで計算量を抑えることができる

### その他の求め方
- 線と面の交点
- 平面ベクトルと同様の考え方ができる

## 直線の扱い
- 空間での直線 → $x,y,z$ 成分の方程式は複雑なためベクトルで考える
- $\vec{a}$ を通り $\vec{d}$ に平行なベクトル → $\vec{p} = \vec{a} + t\vec{d}$
  - 媒介変数 $t$ を消すと、x,y,zに関する3式がイコールで繋がった形になる
  - APを通る直線などをこの形で置く場合、$\vec{A}$ には点A,P のどちらを入れも構わない。
- 2点 $\vec{a}, \vec{b}$ を通る
  - $\vec{p} = \vec{a} + t(\vec{b} - \vec{a})$
  - $\vec{p} = (1-t)\vec{a} + t\vec{b}$
  - $\vec{p} = s\vec{a} + t\vec{b} 　(s+t=1)$
- 2つの面の交線 → 2式をxについて解き、x=(yの式)=(zの式) で表す
- 面への垂線 → 内積 = 0
- xy平面との交点 → z成分=0から媒介変数 $t$ の値を求める

## 平面の扱い
- 平面とベクトル方程式

  平面 | 方程式
  -|-
  $\vec{a}$ を通り $\vec{n}$ に垂直 | $(\vec{p}-\vec{a})\cdot\vec{n} = 0$
  3点 $A, B, C$ を通る | $\overrightarrow{AP} = s\overrightarrow{AB} + t\overrightarrow{AC}$
  法線 $(a,b,c)$ で $(l,m,n)$ を通る | $a(x-l)+b(y-m)+c(z-n) = 0$
- 平面の法線ベクトルを求める
  - 法線ベクトルを $\vec{n} = (a,b,c)$ とおき、$\vec{n}\cdot\overrightarrow{AB} = 0, \vec{n}\cdot\overrightarrow{AC} = 0$ より $\vec{n}$ を求める
  - 平面 $ax+by+cz+d = 0$ の法線 $\vec{n} = (a,b,c)$
- 点 $(x_1, y_1, z_1)$ と平面 $ax+by+cz+d=0$ の距離 $$ h = \frac{|ax_1+by_1+cz_1+d|}{\sqrt{a^2+b^2+c^2}} $$
- 面のなす角 → 法線のなす角
- 面が垂直 → なす角 = 90度 → 法線の内積 = 0
- 直線 $l$ に垂直な面 → $l$ の方向ベクトル = 面の法線ベクトル $\vec{n}$

## 量を求める
- 具体値の大きさの計算 → 成分でやると楽
- 平面の逆側 → AB上にPがあるとき、AP+PBが最小
- 直線と平面のなす角 → 方向ベクトルと法線ベクトルのなす角

## 球の扱い
- 球面の公式
  球の条件 | 方程式
  -|-
  $\vec{c}$ を中心とし、半径 $r$ の円 |  $\lvert \vec{p}-\vec{c} \rvert = r$
  $\vec{a}, \vec{b}$ を直径の両端とする球面 | $(\vec{p}-\vec{a})(\vec{p}-\vec{b}) = 0$
  $(a,b,c)$ を中心とし、半径 $r$ の円 | $(x-a)^2+(y-b)^2+(z-c)^2 = r^2$

- 三角錐 / 四面体 の内接球の半径 → 内接円の半径と同じ考え方で、半径を $r$ とおき、もとの三角錐を分割した、4つの三角錐の体積の和から導く






# 複素数平面
# 式と曲線