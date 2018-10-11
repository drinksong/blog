(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{172:function(t,e,r){"use strict";r.r(e);var s=r(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("看个例子吧：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("mkdir, touch都是系统自带的程序，一般在/bin或者/usr/bin目录下。for, do, done是sh脚本语言的关键字。")]),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("shell是指一种应用程序，这个应用程序提供了一个界面，用户通过这个界面访问操作系统内核的服务。Ken Thompson的sh是第一种Unix Shell，Windows Explorer是一个典型的图形界面Shell。")]),t._v(" "),r("p",[t._v("shell脚本（shell script），是一种为shell编写的脚本程序。业界所说的shell通常都是指shell脚本，但读者朋友要知道，shell和shell script是两个不同的概念。由于习惯的原因，简洁起见，本文出现的“shell编程”都是指shell脚本编程，不是指开发shell自身（如Windows Explorer扩展开发）。")]),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("shell编程跟java、php编程一样，只要有一个能编写代码的文本编辑器和一个能解释执行的脚本解释器就可以了。")]),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("当前主流的操作系统都支持shell编程，本文档所述的shell编程是指Linux下的shell，讲的基本都是POSIX标准下的功能，所以，也适用于Unix及BSD（如Mac OS）。")]),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("Linux默认安装就带了shell解释器。")]),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("Mac OS不仅带了sh、bash这两个最基础的解释器，还内置了ksh、csh、zsh等不常用的解释器。")]),t._v(" "),t._m(10),t._v(" "),r("p",[t._v("windows出厂时没有内置shell解释器，需要自行安装，为了同时能用grep, awk, curl等工具，最好装一个cygwin或者mingw来模拟linux环境。")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.cygwin.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("cygwin"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.mingw.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("mingw"),r("OutboundLink")],1)])]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("即Bourne shell，POSIX（Portable Operating System Interface）标准的shell解释器，它的二进制文件路径通常是/bin/sh，由Bell Labs开发。")]),t._v(" "),r("p",[t._v("本文讲的是sh，如果你使用其它语言用作shell编程，请自行参考相应语言的文档。")]),t._v(" "),t._m(13),t._v(" "),r("p",[t._v("Bash是Bourne shell的替代品，属GNU Project，二进制文件路径通常是/bin/bash。业界通常混用bash、sh、和shell，比如你会经常在招聘运维工程师的文案中见到：熟悉Linux Bash编程，精通Shell编程。")]),t._v(" "),r("p",[t._v("在CentOS里，/bin/sh是一个指向/bin/bash的符号链接:")]),t._v(" "),t._m(14),t._v(" "),r("p",[t._v("但在Mac OS上不是，/bin/sh和/bin/bash是两个不同的文件，尽管它们的大小只相差100字节左右:")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),r("p",[t._v("理论上讲，只要一门语言提供了解释器（而不仅是编译器），这门语言就可以胜任脚本编程，常见的解释型语言都是可以用作脚本编程的，如：Perl、Tcl、Python、PHP、Ruby。Perl是最老牌的脚本编程语言了，Python这些年也成了一些linux发行版的预置解释器。")]),t._v(" "),r("p",[t._v("编译型语言，只要有解释器，也可以用作脚本编程，如C shell是内置的（/bin/csh），Java有第三方解释器Jshell，Ada有收费的解释器AdaScript。")]),t._v(" "),r("p",[t._v("如下是一个PHP Shell Script示例（假设文件名叫test.php）：")]),t._v(" "),t._m(17),t._v(" "),r("p",[t._v("执行：")]),t._v(" "),t._m(18),t._v(" "),r("p",[t._v("或者：")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),r("p",[t._v("如果你已经掌握了一门编程语言（如PHP、Python、Java、JavaScript），建议你就直接使用这门语言编写脚本程序，虽然某些地方会有点啰嗦，但你能利用在这门语言领域里的经验（单元测试、单步调试、IDE、第三方类库）。")]),t._v(" "),r("p",[t._v("新增的学习成本很小，只要学会怎么使用shell解释器（Jshell、AdaScript）就可以了。")]),t._v(" "),t._m(22),t._v(" "),r("p",[t._v("如果你觉得自己熟悉的语言（如Java、C）写shell脚本实在太啰嗦，你只是想做一些备份文件、安装软件、下载数据之类的事情，学着使用sh，bash会是一个好主意。")]),t._v(" "),r("p",[t._v("shell只定义了一个非常简单的编程语言，所以，如果你的脚本程序复杂度较高，或者要操作的数据结构比较复杂，那么还是应该使用Python、Perl这样的脚本语言，或者是你本来就已经很擅长的高级语言。因为sh和bash在这方面很弱，比如说：")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),r("p",[t._v("如果你的脚本是提供给别的用户使用，使用sh或者bash，你的脚本将具有最好的环境兼容性，perl很早就是linux标配了，python这些年也成了一些linux发行版的标配，至于mac os，它默认安装了perl、python、ruby、php、java等主流编程语言。")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),r("p",[t._v("打开文本编辑器，新建一个文件，扩展名为sh（sh代表shell），扩展名并不影响脚本执行，见名知意就好，如果你用php写shell 脚本，扩展名就用php好了。")]),t._v(" "),r("p",[t._v("输入一些代码，第一行一般是这样：")]),t._v(" "),t._m(27),t._v(" "),r("p",[t._v("“#!”是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行。")]),t._v(" "),t._m(28),t._v(" "),r("p",[t._v("运行Shell脚本有两种方法：")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),r("p",[t._v("注意，一定要写成./test.sh，而不是test.sh，运行其它二进制的程序也一样，直接写test.sh，linux系统会去PATH里寻找有没有叫test.sh的，而只有/bin, /sbin, /usr/bin，/usr/sbin等在PATH里，你的当前目录通常不在PATH里，所以写成test.sh是会找不到命令的，要用./test.sh告诉系统说，就在当前目录找。")]),t._v(" "),r("p",[t._v("通过这种方式运行bash脚本，第一行一定要写对，好让系统查找到正确的解释器。")]),t._v(" "),r("p",[t._v('这里的"系统"，其实就是shell这个应用程序（想象一下Windows Explorer），但我故意写成系统，是方便理解，既然这个系统就是指shell，那么一个使用/bin/sh作为解释器的脚本是不是可以省去第一行呢？是的。')]),t._v(" "),t._m(31),t._v(" "),r("p",[t._v("这种运行方式是，直接运行解释器，其参数就是shell脚本的文件名，如：")]),t._v(" "),t._m(32),t._v(" "),r("p",[t._v("这种方式运行的脚本，不需要在第一行指定解释器信息，写了也没用。")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),r("p",[t._v("定义变量时，变量名不加美元符号（$），如：")]),t._v(" "),t._m(35),t._v(" "),r("p",[t._v("注意，变量名和等号之间不能有空格，这可能和你熟悉的所有编程语言都不一样。")]),t._v(" "),r("p",[t._v("除了显式地直接赋值，还可以用语句给变量赋值，如：")]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),r("p",[t._v("使用一个定义过的变量，只要在变量名前面加美元符号即可，如：")]),t._v(" "),t._m(38),t._v(" "),r("p",[t._v("变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界，比如下面这种情况：")]),t._v(" "),t._m(39),t._v(" "),r("p",[t._v('如果不给skill变量加花括号，写成echo "I am good at $skillScript"，解释器就会把$skillScript当成一个变量（其值为空），代码执行结果就不是我们期望的样子了。')]),t._v(" "),r("p",[t._v("推荐给所有变量加上花括号，这是个好的编程习惯。IntelliJ IDEA编写shell script时，IDE就会提示加花括号。")]),t._v(" "),t._m(40),t._v(" "),r("p",[t._v("已定义的变量，可以被重新定义，如：")]),t._v(" "),t._m(41),t._v(" "),r("p",[t._v('这样写是合法的，但注意，第二次赋值的时候不能写$your_name="alibaba"，使用变量的时候才加美元符。')]),t._v(" "),t._m(42),t._v(" "),r("p",[t._v("以“#”开头的行就是注释，会被解释器忽略。")]),t._v(" "),t._m(43),t._v(" "),r("p",[t._v("sh里没有多行注释，只能每一行加一个#号。就像这样：")]),t._v(" "),t._m(44),t._v(" "),r("p",[t._v("如果在开发过程中，遇到大段的代码需要临时注释起来，过一会儿又取消注释，怎么办呢？每一行加个#符号太费力了，可以把这一段要注释的代码用一对花括号括起来，定义成一个函数，没有地方调用这个函数，这块代码就不会执行，达到了和注释一样的效果。")]),t._v(" "),t._m(45),t._v(" "),r("p",[t._v("字符串是shell编程中最常用最有用的数据类型（除了数字和字符串，也没啥其它类型好用了，哈哈），字符串可以用单引号，也可以用双引号，也可以不用引号。单双引号的区别跟PHP类似。")]),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),r("p",[t._v("单引号字符串的限制：")]),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),t._m(57),t._v(" "),t._m(58),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),t._m(61),t._v(" "),r("p",[t._v("参见本文档末尾的参考资料中"),r("a",{attrs:{href:"http://tldp.org/LDP/abs/html/string-manipulation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Advanced Bash-Scripting Guid Chapter 10.1"),r("OutboundLink")],1)]),t._v(" "),t._m(62),t._v(" "),t._m(63),t._v(" "),t._m(64),t._v(" "),t._m(65),t._v(" "),r("p",[t._v("和Java、PHP等语言不一样，sh的流程控制不可为空，如：")]),t._v(" "),t._m(66),t._v(" "),r("p",[t._v("在sh/bash里可不能这么写，如果else分支没有语句执行，就不要写这个else。")]),t._v(" "),r("p",[t._v("还要注意，sh里的if [ $foo -eq 0 ]，这个方括号跟Java/PHP里if后面的圆括号大不相同，它是一个可执行程序（和ls, grep一样），想不到吧？在CentOS上，它在/usr/bin目录下：")]),t._v(" "),t._m(67),t._v(" "),r("p",[t._v("正因为方括号在这里是一个可执行程序，方括号后面必须加空格，不能写成if [$foo -eq 0]")]),t._v(" "),t._m(68),t._v(" "),t._m(69),t._v(" "),t._m(70),t._v(" "),r("p",[t._v("写成一行（适用于终端命令提示符）：")]),t._v(" "),t._m(71),t._v(" "),r("p",[t._v("末尾的fi就是if倒过来拼写，后面还会遇到类似的")]),t._v(" "),t._m(72),t._v(" "),t._m(73),t._v(" "),t._m(74),t._v(" "),t._m(75),t._v(" "),t._m(76),t._v(" "),t._m(77),t._v(" "),r("p",[t._v("在开篇的示例里演示过了：")]),t._v(" "),t._m(78),t._v(" "),r("p",[t._v("写成一行：")]),t._v(" "),t._m(79),t._v(" "),t._m(80),t._v(" "),t._m(81),t._v(" "),t._m(82),t._v(" "),t._m(83),t._v(" "),t._m(84),t._v(" "),t._m(85),t._v(" "),r("p",[t._v("或者")]),t._v(" "),t._m(86),t._v(" "),r("p",[t._v("或者")]),t._v(" "),t._m(87),t._v(" "),t._m(88),t._v(" "),t._m(89),t._v(" "),t._m(90),t._v(" "),t._m(91),t._v(" "),r("p",[t._v("case的语法和C family语言差别很大，它需要一个esac（就是case反过来）作为结束标记，每个case分支用右圆括号，用两个分号表示break")]),t._v(" "),t._m(92),t._v(" "),t._m(93),t._v(" "),t._m(94),t._v(" "),t._m(95),t._v(" "),r("p",[t._v("可以使用source和.关键字，如：")]),t._v(" "),t._m(96),t._v(" "),r("p",[t._v("在bash里，source和.是等效的，他们都是读入function.sh的内容并执行其内容（类似PHP里的include），为了更好的可移植性，推荐使用第二种写法。")]),t._v(" "),r("p",[t._v("包含一个文件和执行一个文件一样，也要写这个文件的路径，不能光写文件名，比如上述例子中:")]),t._v(" "),t._m(97),t._v(" "),r("p",[t._v("不可以写作：")]),t._v(" "),t._m(98),t._v(" "),r("p",[t._v("如果function.sh是用户传入的参数，如何获得它的绝对路径呢？方法是：")]),t._v(" "),t._m(99),t._v(" "),t._m(100),t._v(" "),t._m(101),t._v(" "),t._m(102),t._v(" "),t._m(103),t._v(" "),t._m(104),t._v(" "),t._m(105),t._v(" "),r("p",[t._v("sh脚本结合系统命令便有了强大的威力，在字符处理领域，有grep、awk、sed三剑客，grep负责找出特定的行，awk能将行拆分成多个字段，sed则可以实现更新插入删除等写操作。")]),t._v(" "),t._m(106),t._v(" "),r("p",[t._v("查看进程列表")]),t._v(" "),t._m(107),t._v(" "),t._m(108),t._v(" "),t._m(109),t._v(" "),t._m(110),t._v(" "),t._m(111),t._v(" "),t._m(112),t._v(" "),t._m(113),t._v(" "),t._m(114),t._v(" "),t._m(115),t._v(" "),t._m(116),t._v(" "),t._m(117),t._v(" "),t._m(118),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://tldp.org/LDP/abs/html/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Advanced Bash-Scripting Guide"),r("OutboundLink")],1),t._v("，非常详细，非常易读，大量example，既可以当入门教材，也可以当做工具书查阅")]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.tutorialspoint.com/unix/unix-shell.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unix Shell Programming"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://bash.cyberciti.biz/guide/Main_Page",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux Shell Scripting Tutorial - A Beginner's handbook"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"什么是shell脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是shell脚本","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是Shell脚本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("#!/bin/sh\ncd ~\nmkdir shell_tut\ncd shell_tut\n\nfor ((i=0; i<10; i++)); do\n\ttouch test_$i.txt\ndone\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"示例解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例解释","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例解释")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("第1行：指定脚本解释器，这里是用/bin/sh做解释器的")]),t._v(" "),r("li",[t._v("第2行：切换到当前用户的home目录")]),t._v(" "),r("li",[t._v("第3行：创建一个目录shell_tut")]),t._v(" "),r("li",[t._v("第4行：切换到shell_tut目录")]),t._v(" "),r("li",[t._v("第5行：循环条件，一共循环10次")]),t._v(" "),r("li",[t._v("第6行：创建一个test_0…9.txt文件")]),t._v(" "),r("li",[t._v("第7行：循环体结束")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"shell和shell脚本的概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell和shell脚本的概念","aria-hidden":"true"}},[this._v("#")]),this._v(" shell和shell脚本的概念")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"os"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#os","aria-hidden":"true"}},[this._v("#")]),this._v(" OS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"mac-os"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac-os","aria-hidden":"true"}},[this._v("#")]),this._v(" Mac OS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"windows上的模拟器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows上的模拟器","aria-hidden":"true"}},[this._v("#")]),this._v(" Windows上的模拟器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"脚本解释器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本解释器","aria-hidden":"true"}},[this._v("#")]),this._v(" 脚本解释器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"sh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sh","aria-hidden":"true"}},[this._v("#")]),this._v(" sh")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"bash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bash","aria-hidden":"true"}},[this._v("#")]),this._v(" bash")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("[root@centosraw ~]# ls -l /bin/*sh\n-rwxr-xr-x. 1 root root 903272 Feb 22 05:09 /bin/bash\n-rwxr-xr-x. 1 root root 106216 Oct 17  2012 /bin/dash\nlrwxrwxrwx. 1 root root      4 Mar 22 10:22 /bin/sh -> bash\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("iMac:~ wuxiao$ ls -l /bin/*sh\n-r-xr-xr-x  1 root  wheel  1371648  6 Nov 16:52 /bin/bash\n-rwxr-xr-x  2 root  wheel   772992  6 Nov 16:52 /bin/csh\n-r-xr-xr-x  1 root  wheel  2180736  6 Nov 16:52 /bin/ksh\n-r-xr-xr-x  1 root  wheel  1371712  6 Nov 16:52 /bin/sh\n-rwxr-xr-x  2 root  wheel   772992  6 Nov 16:52 /bin/tcsh\n-rwxr-xr-x  1 root  wheel  1103984  6 Nov 16:52 /bin/zsh\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"高级编程语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级编程语言","aria-hidden":"true"}},[this._v("#")]),this._v(" 高级编程语言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('#!/usr/bin/php\n<?php\nfor ($i=0; $i < 10; $i++)\n        echo $i . "\\n";\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("/usr/bin/php test.php\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("chmod +x test.php\n./test.php\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"如何选择shell编程语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何选择shell编程语言","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何选择shell编程语言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"熟悉-vs-陌生"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#熟悉-vs-陌生","aria-hidden":"true"}},[this._v("#")]),this._v(" 熟悉 vs 陌生")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"简单-vs-高级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单-vs-高级","aria-hidden":"true"}},[this._v("#")]),this._v(" 简单 vs 高级")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("它的函数只能返回字串，无法返回数组")]),this._v(" "),e("li",[this._v("它不支持面向对象，你无法实现一些优雅的设计模式")]),this._v(" "),e("li",[this._v("它是解释型的，一边解释一边执行，连PHP那种预编译都不是，如果你的脚本包含错误(例如调用了不存在的函数)，只要没执行到这一行，就不会报错")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"环境兼容性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境兼容性","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境兼容性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"第一个shell脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一个shell脚本","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一个shell脚本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"编写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写","aria-hidden":"true"}},[this._v("#")]),this._v(" 编写")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("#!/bin/bash\n#!/usr/bin/php\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行","aria-hidden":"true"}},[this._v("#")]),this._v(" 运行")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"作为可执行程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作为可执行程序","aria-hidden":"true"}},[this._v("#")]),this._v(" 作为可执行程序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("chmod +x test.sh\n./test.sh\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"作为解释器参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作为解释器参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 作为解释器参数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("/bin/sh test.sh\n/bin/php test.php\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"定义变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 定义变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('your_name="qinjx"\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("for file in `ls /etc`\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"使用变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('your_name="qinjx"\necho $your_name\necho ${your_name}\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('for skill in Ada Coffe Action Java; do\n\techo "I am good at ${skill}Script"\ndone\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"重定义变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重定义变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 重定义变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('your_name="qinjx"\necho $your_name\n\nyour_name="alibaba"\necho $your_name\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注释","aria-hidden":"true"}},[this._v("#")]),this._v(" 注释")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"多行注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多行注释","aria-hidden":"true"}},[this._v("#")]),this._v(" 多行注释")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("#--------------------------------------------\n# 这是一个自动打ipa的脚本，基于webfrogs的ipa-build书写：https://github.com/webfrogs/xcode_shell/blob/master/ipa-build\n\n# 功能：自动为etao ios app打包，产出物为14个渠道的ipa包\n# 特色：全自动打包，不需要输入任何参数\n#--------------------------------------------\n\n##### 用户配置区 开始 #####\n#\n#\n# 项目根目录，推荐将此脚本放在项目的根目录，这里就不用改了\n# 应用名，确保和Xcode里Product下的target_name.app名字一致\n#\n##### 用户配置区 结束  #####\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串","aria-hidden":"true"}},[this._v("#")]),this._v(" 字符串")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"单引号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单引号","aria-hidden":"true"}},[this._v("#")]),this._v(" 单引号")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("str='this is a string'\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的")]),this._v(" "),e("li",[this._v("单引号字串中不能出现单引号（对单引号使用转义符后也不行）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"双引号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双引号","aria-hidden":"true"}},[this._v("#")]),this._v(" 双引号")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('your_name=\'qinjx\'\nstr="Hello, I know your are \\"$your_name\\"! \\n"\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("双引号里可以有变量")]),this._v(" "),e("li",[this._v("双引号里可以出现转义字符")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"字符串操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 字符串操作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"拼接字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拼接字符串","aria-hidden":"true"}},[this._v("#")]),this._v(" 拼接字符串")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('your_name="qinjx"\ngreeting="hello, "$your_name" !"\ngreeting_1="hello, ${your_name} !"\n\necho $greeting $greeting_1\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"获取字符串长度："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取字符串长度：","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取字符串长度：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('string="abcd"\necho ${#string} #输出：4\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"提取子字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提取子字符串","aria-hidden":"true"}},[this._v("#")]),this._v(" 提取子字符串")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('string="alibaba is a great company"\necho ${string:1:4} #输出：liba\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"查找子字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查找子字符串","aria-hidden":"true"}},[this._v("#")]),this._v(" 查找子字符串")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('string="alibaba is a great company"\necho `expr index "$string" is`#输出：3，这个语句的意思是：找出字母i在这名话中的位置，要在linux下运行，mac下会报错\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"更多"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多","aria-hidden":"true"}},[this._v("#")]),this._v(" 更多")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组","aria-hidden":"true"}},[this._v("#")]),this._v(" 数组")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"管道"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#管道","aria-hidden":"true"}},[this._v("#")]),this._v(" 管道")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"条件判断"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#条件判断","aria-hidden":"true"}},[this._v("#")]),this._v(" 条件判断")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"流程控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程控制","aria-hidden":"true"}},[this._v("#")]),this._v(" 流程控制")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('<?php\nif (isset($_GET["q"])) {\n\tsearch(q);\n}\nelse {\n\t//do nothing\n}\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("ll /usr/bin/[\n-rwxr-xr-x. 1 root root 33408 6月  22 2012 /usr/bin/[\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"if-else"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if-else","aria-hidden":"true"}},[this._v("#")]),this._v(" if else")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"if"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if","aria-hidden":"true"}},[this._v("#")]),this._v(" if")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("if condition\nthen\n\tcommand1 \n\tcommand2\n\t...\n\tcommandN \nfi\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("if `ps -ef | grep ssh`;  then echo hello; fi\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"if-else-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if-else-2","aria-hidden":"true"}},[this._v("#")]),this._v(" if else")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("if condition\nthen\n\tcommand1 \n\tcommand2\n\t...\n\tcommandN\nelse\n\tcommand\nfi\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"if-else-if-else"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if-else-if-else","aria-hidden":"true"}},[this._v("#")]),this._v(" if else-if else")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("if condition1\nthen\n\tcommand1\nelif condition2\n\tcommand2\nelse\n\tcommandN\nfi\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"for-while"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-while","aria-hidden":"true"}},[this._v("#")]),this._v(" for while")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"for"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for","aria-hidden":"true"}},[this._v("#")]),this._v(" for")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("for var in item1 item2 ... itemN\ndo\n\tcommand1\n\tcommand2\n\t...\n\tcommandN\ndone\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("for var in item1 item2 ... itemN; do command1; command2… done;\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"c风格的for"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c风格的for","aria-hidden":"true"}},[this._v("#")]),this._v(" C风格的for")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("for (( EXP1; EXP2; EXP3 ))\ndo\n\tcommand1\n\tcommand2\n\tcommand3\ndone\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"while"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#while","aria-hidden":"true"}},[this._v("#")]),this._v(" while")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("while condition\ndo\n\tcommand\ndone\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"无限循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无限循环","aria-hidden":"true"}},[this._v("#")]),this._v(" 无限循环")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("while :\ndo\n\tcommand\ndone\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("while true\ndo\n\tcommand\ndone\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("for (( ; ; ))\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"until"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#until","aria-hidden":"true"}},[this._v("#")]),this._v(" until")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("until condition\ndo\n\tcommand\ndone\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"case"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#case","aria-hidden":"true"}},[this._v("#")]),this._v(" case")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('case "${opt}" in\n\t"Install-Puppet-Server" )\n\t\tinstall_master $1\n\t\texit\n\t;;\n\n\t"Install-Puppet-Client" )\n\t\tinstall_client $1\n\t\texit\n\t;;\n\n\t"Config-Puppet-Server" )\n\t\tconfig_puppet_master\n\t\texit\n\t;;\n\n\t"Config-Puppet-Client" )\n\t\tconfig_puppet_client\n\t\texit\n\t;;\n\n\t"Exit" )\n\t\texit\n\t;;\n\n\t* ) echo "Bad option, please choose again"\nesac\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[this._v("#")]),this._v(" 定义")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调用","aria-hidden":"true"}},[this._v("#")]),this._v(" 调用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"文件包含"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件包含","aria-hidden":"true"}},[this._v("#")]),this._v(" 文件包含")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("source ./function.sh\n. ./function.sh\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v(". ./function.sh\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v(". function.sh\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("real_path=`readlink -f $1`#$1是用户输入的参数，如function.sh\n. $real_path\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"用户输入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户输入","aria-hidden":"true"}},[this._v("#")]),this._v(" 用户输入")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"执行脚本时传入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行脚本时传入","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行脚本时传入")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"脚本运行中输入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本运行中输入","aria-hidden":"true"}},[this._v("#")]),this._v(" 脚本运行中输入")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"select菜单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select菜单","aria-hidden":"true"}},[this._v("#")]),this._v(" select菜单")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"stdin和stdout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stdin和stdout","aria-hidden":"true"}},[this._v("#")]),this._v(" stdin和stdout")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"常用的命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用的命令")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"ps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ps","aria-hidden":"true"}},[this._v("#")]),this._v(" ps")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"grep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grep","aria-hidden":"true"}},[this._v("#")]),this._v(" grep")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"排除grep自身"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排除grep自身","aria-hidden":"true"}},[this._v("#")]),this._v(" 排除grep自身")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"查找与target相邻的结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查找与target相邻的结果","aria-hidden":"true"}},[this._v("#")]),this._v(" 查找与target相邻的结果")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"awk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#awk","aria-hidden":"true"}},[this._v("#")]),this._v(" awk")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"sed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sed","aria-hidden":"true"}},[this._v("#")]),this._v(" sed")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"插入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插入","aria-hidden":"true"}},[this._v("#")]),this._v(" 插入")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"替换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#替换","aria-hidden":"true"}},[this._v("#")]),this._v(" 替换")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除","aria-hidden":"true"}},[this._v("#")]),this._v(" 删除")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"xargs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xargs","aria-hidden":"true"}},[this._v("#")]),this._v(" xargs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"curl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#curl","aria-hidden":"true"}},[this._v("#")]),this._v(" curl")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"综合案例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#综合案例","aria-hidden":"true"}},[this._v("#")]),this._v(" 综合案例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);i.options.__file="shell-tut.md";e.default=i.exports}}]);