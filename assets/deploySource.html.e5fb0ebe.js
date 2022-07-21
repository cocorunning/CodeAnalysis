import{_ as e,e as a}from"./app.92f8530e.js";const r={},s=a(`<h1 id="vm-\u90E8\u7F72\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#vm-\u90E8\u7F72\u6587\u6863" aria-hidden="true">#</a> VM \u90E8\u7F72\u6587\u6863</h1><h2 id="\u524D\u7F6E\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u6761\u4EF6" aria-hidden="true">#</a> \u524D\u7F6E\u6761\u4EF6</h2><ol><li><p>Linux \u73AF\u5883</p></li><li><p>\u7CFB\u7EDF\u5DF2\u5B89\u88C5 nginx</p></li><li><p>TCA Server \u670D\u52A1\u5DF2\u90E8\u7F72\u5B8C\u6BD5\uFF0C\u5177\u5907\u540E\u7AEF\u670D\u52A1\u5730\u5740</p></li></ol><h2 id="\u90E8\u7F72\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u6B65\u9AA4" aria-hidden="true">#</a> \u90E8\u7F72\u6B65\u9AA4</h2><ol><li><p><strong>\u8FDB\u5165\u524D\u7AEF\u90E8\u7F72\u6E90\u7801\u76EE\u5F55</strong></p><p>\u8FDB\u5165web\u670D\u52A1\u76EE\u5F55\uFF0C\u5E76\u5207\u6362\u81F3<code>tca-deploy-source</code>\u76EE\u5F55\uFF0C\u5C06\u5176\u89C6\u4E3A\u5DE5\u4F5C\u76EE\u5F55\uFF08\u5047\u8BBE\u5DE5\u4F5C\u76EE\u5F55\u4E3A <code>/data/CodeAnalysis/web/tca-deploy-source</code>\uFF09</p></li><li><p><strong>\u90E8\u7F72/\u66F4\u65B0\u524D\u7AEF\u670D\u52A1</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u90E8\u7F72\u3001\u66F4\u65B0\u90FD\u4F7F\u7528\u6B64\u547D\u4EE4
sh ./scripts/deploy.sh init -d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5177\u4F53\u8BF7\u67E5\u9605\u90E8\u7F72\u811A\u672C\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u4E1A\u52A1\u8C03\u6574\u914D\u7F6E\u3002</p></li><li><p><strong>\u989D\u5916\u8BF4\u660E</strong></p><p><code>tca-deploy-source/scripts/config.sh</code> \u5DF2\u914D\u7F6E\u9ED8\u8BA4\u73AF\u5883\u53D8\u91CF\uFF0C\u7528\u6237\u53EF\u6839\u636E\u9700\u8981\u8C03\u6574\u73AF\u5883\u53D8\u91CF\u518D\u90E8\u7F72\u524D\u7AEF\u670D\u52A1\uFF0C\u5177\u4F53\u53EF\u67E5\u9605\u811A\u672C\u5185\u5BB9\u3002</p></li></ol>`,5);function i(n,d){return s}var c=e(r,[["render",i],["__file","deploySource.html.vue"]]);export{c as default};
