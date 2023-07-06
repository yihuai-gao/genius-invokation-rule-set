# 信息可见性

## 信息对双方牌手的可见性
在七圣召唤中，大部分场面信息对双方牌手均可见，包括角色、角色状态、出战状态、召唤物、支援区，以及这些对象各自的状态。双方牌手所进行的操作也对双方牌手均可见。但以下信息仅对我方可见：

- 手牌仅对我方可见。对手只知道我方手牌的数量，不知道我方的手牌，而且不知道我方抓到手牌的次序，无法对我方手牌抓到后的动向进行跟踪与回溯（注1）。
  - 进行【元素调和】时，对手知道我方进行了【元素调和】，但不知道所使用的手牌及其次序。
  - 选择并替换手牌时（包括游戏开始替换初始手牌，以及使用「草与智慧」时），对手知道替换的手牌数量，但不知道具体所替换的手牌及其次序（待验证）
- 元素骰仅对我方可见。对手只知道我方元素骰的数量，不知道我方投掷出、使用、调和的元素骰具体类型，以及通过「卯师傅」、「参量质变仪」等方式获得的随机元素骰类型。
  
## 随机事件结果的可见性
绝大多数情况下，在执行产生随机效果的操作前，双方均不知道该操作将要产生的随机结果。但以下情况除外：
- 伤害预览会按照随机事件结果显示。如果此操作中产生的伤害与随机结果有关，则我方可以在执行操作前通过伤害预览读出将要产生的随机结果。例如，拥有“轰轰火花”状态的纯水精灵·洛蒂娅使用“纯水幻造”随机召唤1种纯水幻形。如果受到的伤害值为1，则说明此操作将召唤「纯水幻形·蛙」。如果受到的伤害值为2，则说明此操作将召唤「纯水幻形·花鼠」或「纯水幻形·飞鸢」。

## 备注
- 注1：3.4版本修改。此前对方摸到、使用、调和、替换的手牌会显示其在对手手牌中的次序。由于手牌按ID排序，可以获知对方料理牌数量、装备牌数量等信息，可以对对方手牌抓到后的动向进行跟踪。3.4版本后，无论对方摸到、使用、调和、替换的手牌在第几张，动画效果均一样。