import React from "react";

// Example logos/assets (you may swap with provided same-assets image URLs as needed)
const logoUrl = "https://ext.same-assets.com/3223569771/2013423445.png";

// Colors matching Hupu style
const accentRed = "#bd191c";
const borderGray = "#eaeaeb";
const bgLight = "#faf9f9";
const darkText = "#3f4146";

function NavBar() {
  return (
    <header className="w-full bg-white border-b" style={{ borderColor: borderGray }}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo and menu */}
        <div className="flex items-center gap-6">
          <img src={logoUrl} alt="虎扑 Logo" className="h-8" />
          <ul className="flex gap-5 text-[16px] font-medium">
            <li className="text-[rgb(189,25,28)] cursor-pointer">首页</li>
            <li className="hover:text-[rgb(189,25,28)] cursor-pointer">NBA</li>
            <li className="hover:text-[rgb(189,25,28)] cursor-pointer">CBA</li>
            <li className="hover:text-[rgb(189,25,28)] cursor-pointer">足球</li>
            <li className="hover:text-[rgb(189,25,28)] cursor-pointer">步行街</li>
            <li className="hover:text-[rgb(189,25,28)] cursor-pointer">社区</li>
            <li className="hover:text-[rgb(189,25,28)] cursor-pointer">电竞</li>
            <li className="hover:text-[rgb(189,25,28)] cursor-pointer">影视</li>
            <li className="hover:text-[rgb(189,25,28)] cursor-pointer">游戏中心</li>
          </ul>
        </div>
        <div className="flex gap-3 items-center text-[#999] text-[13px]">
          <span className="hover:text-[rgb(189,25,28)] cursor-pointer">登录</span>
          <span className="hover:text-[rgb(189,25,28)] cursor-pointer">注册</span>
        </div>
      </nav>
    </header>
  );
}

function Scoreboard() {
  // Demo teams, structure mirrors screenshot
  return (
    <section className="w-full bg-white border-b border-[#eaeaeb]">
      <div
        className="max-w-6xl mx-auto py-2 px-4 grid grid-cols-6 gap-1 text-center text-sm"
        style={{ color: darkText }}
      >
        {/* Repeat for demo: Real teams and scores come from data */}
        <div>
          <div className="font-bold">NBA</div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span>76人</span>
            <span className="text-[rgb(189,25,28)]">80</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>雷霆</span>
            <span className="text-[#999]">131</span>
          </div>
        </div>
        <div>
          <div className="font-bold">CBA</div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span>广东</span>
            <span className="text-[rgb(189,25,28)]">102</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>北京</span>
            <span className="text-[#999]">99</span>
          </div>
        </div>
        <div>
          <div className="font-bold">足球</div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span>曼联</span>
            <span className="text-[rgb(189,25,28)]">2</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>利物浦</span>
            <span className="text-[#999]">1</span>
          </div>
        </div>
        <div>
          <div className="font-bold">电竞</div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span>队伍A</span>
            <span className="text-[rgb(189,25,28)]">3</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>队伍B</span>
            <span className="text-[#999]">0</span>
          </div>
        </div>
        <div>
          <div className="font-bold">步行街</div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span>话题1</span>
            <span className="text-[rgb(189,25,28)]">热</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>话题2</span>
            <span className="text-[#999]">冷</span>
          </div>
        </div>
        <div>
          <div className="font-bold">影视</div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span>电影A</span>
            <span className="text-[rgb(189,25,28)]">9.5</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>电影B</span>
            <span className="text-[#999]">8.7</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsCard({
  img,
  headline,
  summary,
  tag,
}: {
  img: string;
  headline: string;
  summary: string;
  tag: string;
}) {
  return (
    <article
      className="flex gap-3 bg-white p-3 rounded-lg border mb-3"
      style={{ borderColor: borderGray }}
    >
      <img src={img} alt="" className="w-28 h-20 object-cover rounded" />
      <div>
        <div className="font-bold text-base" style={{ color: darkText }}>
          {headline}
        </div>
        <div className="text-sm text-[#6e6e73] mb-1">{summary}</div>
        <span className="text-xs text-[rgb(189,25,28)] font-semibold">{tag}</span>
      </div>
    </article>
  );
}

function NewsFeed() {
  // Example cards; images should be replaced with same-assets or real ones
  return (
    <div>
      <NewsCard
        img="https://ext.same-assets.com/3223569771/3041827957.png"
        headline="[流言板]上海小将保李水杜媒曝本赛季个人荣获积分组：新秀赛季"
        summary="相关内容…"
        tag="CBA专栏"
      />
      <NewsCard
        img="https://ext.same-assets.com/3223569771/3849169747.png"
        headline="[流言板]陈盈骏半场9投5中，三分3投2中，得到15分1篮板3助攻2抢断"
        summary="精彩比赛回顾"
        tag="篮球新闻"
      />
      <NewsCard
        img="https://ext.same-assets.com/3223569771/1234567890.png"
        headline="最新电竞赛事回顾"
        summary="精彩赛事，精彩瞬间"
        tag="电竞资讯"
      />
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="w-80 ml-6">
      <div
        className="bg-white p-4 rounded-lg border mb-4"
        style={{ borderColor: borderGray }}
      >
        <h3 className="font-bold mb-2" style={{ color: darkText }}>
          热门话题
        </h3>
        <ul className="list-disc list-inside text-sm text-[#6e6e73]">
          <li>NBA季后赛</li>
          <li>CBA总决赛</li>
          <li>足球世界杯</li>
          <li>电竞春季赛</li>
          <li>影视新片推荐</li>
        </ul>
      </div>
      <div
        className="bg-white p-4 rounded-lg border"
        style={{ borderColor: borderGray }}
      >
        <h3 className="font-bold mb-2" style={{ color: darkText }}>
          广告位
        </h3>
        <div className="h-32 bg-gray-200 flex items-center justify-center rounded text-gray-500">
          广告内容
        </div>
      </div>
    </aside>
  );
}

function Footer() {
  return (
    <footer
      className="w-full bg-white border-t py-4 text-center text-xs text-[#999]"
      style={{ borderColor: borderGray }}
    >
      &copy; 2024 虎扑科技 版权所有
    </footer>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <Scoreboard />
      <main
        className="max-w-6xl mx-auto py-6 px-4 flex gap-6"
        style={{ backgroundColor: bgLight }}
      >
        <section className="flex-1">
          <NewsFeed />
        </section>
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
