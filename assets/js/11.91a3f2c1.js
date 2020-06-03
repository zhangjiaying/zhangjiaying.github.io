(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{364:function(s,a,t){"use strict";t.r(a);var e=t(43),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"需要的依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需要的依赖"}},[s._v("#")]),s._v(" 需要的依赖")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y pkg-config libxml2 libxml2-dev  openssl libssl-dev sqlite3 libsqlite3-dev libcurl4-openssl-dev libonig-dev ibpng-dev libzip-dev\n")])])]),t("h2",{attrs:{id:"下载并解压安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载并解压安装包"}},[s._v("#")]),s._v(" 下载并解压安装包")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://www.php.net/distributions/php-7.4.6.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf php-7.4.6.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" php-7.4.6\n")])])]),t("h2",{attrs:{id:"根据需求配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据需求配置"}},[s._v("#")]),s._v(" 根据需求配置")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/php7 --with-curl --with-mysqli --with-openssl --with-pdo-mysql --enable-fpm --enable-bcmath --enable-xml --enable-gd --with-zip --enable-mbstring --enable-sockets\n")])])]),t("blockquote",[t("p",[s._v("配置可选输入 "),t("code",[s._v("./configure --help")]),s._v(" 查看")])]),s._v(" "),t("p",[s._v("然后")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("编译过程中如果遇到内存不足的情况下，请参考 "),t("a",{attrs:{href:"https://huaien.co/technology/no-enough-memory-to-make-php/",target:"_blank",rel:"noopener noreferrer"}},[s._v("链接"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"复制配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制配置文件"}},[s._v("#")]),s._v(" 复制配置文件")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/php7/etc/php-fpm.conf.default /usr/local/php7/etc/php-fpm.conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/php7/etc/php-fpm.d/www.conf.default /usr/local/php7/etc/php-fpm.d/www.conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" php.ini-production /usr/local/php7/etc/php.ini\n")])])]),t("h2",{attrs:{id:"添加环境变量，编辑-etc-profile，文件末尾添加一行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加环境变量，编辑-etc-profile，文件末尾添加一行"}},[s._v("#")]),s._v(" 添加环境变量，编辑 /etc/profile，文件末尾添加一行:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/php7/bin:/usr/local/php7/sbin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])])]),t("h2",{attrs:{id:"使之生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使之生效"}},[s._v("#")]),s._v(" 使之生效")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])])]),t("h2",{attrs:{id:"将php添加到sudo环境变量，编辑-etc-sudoers文件中的-defaults-secure-path，后面加上php路径："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将php添加到sudo环境变量，编辑-etc-sudoers文件中的-defaults-secure-path，后面加上php路径："}},[s._v("#")]),s._v(" 将php添加到sudo环境变量，编辑 "),t("code",[s._v("/etc/sudoers")]),s._v("文件中的 "),t("code",[s._v("Defaults secure_path")]),s._v("，后面加上PHP路径：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("/usr/local/php7/bin:/usr/local/php7/sbin:\n")])])]),t("h2",{attrs:{id:"启动-php-fpm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-php-fpm"}},[s._v("#")]),s._v(" 启动 php-fpm")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" php-fpm\n")])])]),t("blockquote",[t("p",[s._v("如果提示找不到用户组"),t("code",[s._v("nobody")]),s._v("的gid,创建nobody用户组:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" nobody\n")])])])]),s._v(" "),t("h2",{attrs:{id:"加入到系统服务-在php的解压目录下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加入到系统服务-在php的解压目录下"}},[s._v("#")]),s._v(" 加入到系统服务,在PHP的解压目录下")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" init.d.php-fpm /etc/init.d/php-fpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /etc/init.d/php-fpm\n")])])]),t("h2",{attrs:{id:"一些命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些命令"}},[s._v("#")]),s._v(" 一些命令")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("php-fpm启动命令：sudo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" php-fpm start\n\nphp-fpm停止命令：sudo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" php-fpm stop\n\nphp-fpm重启命令：sudo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" php-fpm restart\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);