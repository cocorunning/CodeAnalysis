import{_ as r,r as l,o as i,c as o,a as e,b as a,F as m,d as s,e as c}from"./app.92f8530e.js";const t={},u=e("h1",{id:"\u5728-centos-\u5B89\u88C5-mysql",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5728-centos-\u5B89\u88C5-mysql","aria-hidden":"true"},"#"),s(" \u5728 CentOS \u5B89\u88C5 MySQL")],-1),d=e("h2",{id:"\u6CE8\u610F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6CE8\u610F","aria-hidden":"true"},"#"),s(" \u6CE8\u610F")],-1),y=s("\u672C\u6587\u6863\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u9002\u7528\u4E8E\u6B63\u5F0F\u73AF\u5883\u90E8\u7F72\uFF0C\u6B63\u5F0F\u73AF\u5883\u5EFA\u8BAE\u4F7F\u7528\u4E13\u4E1A\u7684MySQL\u670D\u52A1\uFF08\u6BD4\u5982"),p={href:"https://cloud.tencent.com/product/cdb",target:"_blank",rel:"noopener noreferrer"},b=s("\u817E\u8BAF\u4E91\u7684MySQL\u4EA7\u54C1"),h=s("\uFF09"),v=c(`<h2 id="\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a> \u73AF\u5883</h2><p>CentOS 7.3 \u7248\u672C</p><h2 id="\u5B89\u88C5-mysql-yum\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-mysql-yum\u6E90" aria-hidden="true">#</a> \u5B89\u88C5 mysql yum\u6E90</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>wget https://repo.mysql.com//mysql57-community-release-el7-11.noarch.rpm
yum localinstall mysql57-community-release-el7-11.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u67E5\u770BMySQL\u7248\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum repolist all | grep mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql-cluster-7.5-community/x86_64   MySQL Cluster 7.5 Community    \u7981\u7528
mysql-cluster-7.5-community-source   MySQL Cluster 7.5 Community -  \u7981\u7528
mysql-cluster-7.6-community/x86_64   MySQL Cluster 7.6 Community    \u7981\u7528
mysql-cluster-7.6-community-source   MySQL Cluster 7.6 Community -  \u7981\u7528
!mysql-connectors-community/x86_64   MySQL Connectors Community     \u542F\u7528:    221
mysql-connectors-community-source    MySQL Connectors Community - S \u7981\u7528
!mysql-tools-community/x86_64        MySQL Tools Community          \u542F\u7528:    135
mysql-tools-community-source         MySQL Tools Community - Source \u7981\u7528
mysql-tools-preview/x86_64           MySQL Tools Preview            \u7981\u7528
mysql-tools-preview-source           MySQL Tools Preview - Source   \u7981\u7528
mysql55-community/x86_64             MySQL 5.5 Community Server     \u7981\u7528
mysql55-community-source             MySQL 5.5 Community Server - S \u7981\u7528
mysql56-community/x86_64             MySQL 5.6 Community Server     \u7981\u7528
mysql56-community-source             MySQL 5.6 Community Server - S \u7981\u7528
!mysql57-community/x86_64            MySQL 5.7 Community Server     \u542F\u7528:    544
mysql57-community-source             MySQL 5.7 Community Server - S \u7981\u7528
mysql80-community/x86_64             MySQL 8.0 Community Server     \u7981\u7528
mysql80-community-source             MySQL 8.0 Community Server - S \u7981\u7528
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5mysql" aria-hidden="true">#</a> \u5B89\u88C5MySQL</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum install mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>1.\u5982\u9047\u4EE5\u4E0B\u62A5\u9519\uFF0C\u53EF\u5C1D\u8BD5\u8FD0\u884C<code>yum install mysql-community-server --nogpgcheck</code>\u5B89\u88C5<br> Public key for mysql-community-libs-compat-5.7.37-1.el7.x86_64.rpm is not installed<br> Failing package is: mysql-community-libs-compat-5.7.37-1.el7.x86_64 GPG Keys are configured as: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql<br> 2.\u5982\u9047\u4EE5\u4E0B\u62A5\u9519\uFF0C\u53EF\u6267\u884C<code>yum module disable mysql</code>\u540E\u91CD\u8BD5\u5B89\u88C5<br> All matches were filtered out by modular filtering for argument: mysql-community-serve<br> Error: Unable to find a match: mysql-community-server</p></blockquote><h2 id="\u914D\u7F6Emysql\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Emysql\u670D\u52A1" aria-hidden="true">#</a> \u914D\u7F6EMySQL\u670D\u52A1</h2><p>\u5B89\u88C5\u597D\u7684MySQL\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u662F<code>/etc/my.cnf</code>\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8C03\u6574\uFF0C\u6BD4\u5982\u53EF\u4EE5\u8C03\u6574\uFF1A</p><ul><li>datadir\uFF1AMySQL\u5B58\u653E\u6570\u636E\u7684\u8DEF\u5F84\uFF0C\u5982\u679C\u6709\u989D\u5916\u6302\u8F7D\u78C1\u76D8\uFF0C\u53EF\u4EE5\u8003\u8651\u6307\u5411\u76F8\u5173\u8DEF\u5F84</li></ul><h2 id="\u542F\u52A8mysql\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8mysql\u670D\u52A1" aria-hidden="true">#</a> \u542F\u52A8MySQL\u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u786E\u8BA4MySQL\u6B63\u5E38\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl status mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u67E5\u770B\u751F\u6210 MySQL root\u7528\u6237\u4E34\u65F6\u5BC6\u7801\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>grep &#39;temporary password&#39; /var/log/mysqld.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u4FEE\u6539root\u7528\u6237\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539root\u7528\u6237\u5BC6\u7801" aria-hidden="true">#</a> \u4FEE\u6539root\u7528\u6237\u5BC6\u7801</h3><p>\u8FDE\u63A5MySQL\u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mysql -uroot -p
# \u8F93\u51FA\u4E0A\u8FF0\u67E5\u8BE2\u5230\u7684\u4E34\u65F6\u5BC6\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4FEE\u6539root\u7528\u6237\u7684\u5BC6\u7801\uFF08\u4E0B\u9762\u662F\u6539\u6210 <code>Password@2021</code>\uFF0C\u8FD9\u91CC\u6839\u636E\u81EA\u884C\u9700\u8981\u8FDB\u884C\u8C03\u6574\uFF09\uFF1A</p><div class="language-SQL ext-SQL line-numbers-mode"><pre class="language-SQL"><code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;Password@2021&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,26),g={href:"https://dev.mysql.com/doc/refman/5.7/en/linux-installation-yum-repo.html",target:"_blank",rel:"noopener noreferrer"},S=s("Installing MySQL on Linux Using the MySQL Yum Repository");function _(q,L){const n=l("ExternalLinkIcon");return i(),o(m,null,[u,d,e("p",null,[y,e("a",p,[b,a(n)]),h]),v,e("ul",null,[e("li",null,[e("a",g,[S,a(n)])])])],64)}var Q=r(t,[["render",_],["__file","install_mysql_on_centos.html.vue"]]);export{Q as default};
