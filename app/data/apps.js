// data/apps.js

export const apps = [
  // 日常
  { name: "微信", url: "https://pc.weixin.qq.com/", category: "日常", fallbackIcon: "/apps/weixin.png" },
  { name: "QQ", url: "https://im.qq.com/index/#downloadAnchor", category: "日常", fallbackIcon: "/apps/qq.png" },
  { name: "谷歌浏览器", url: "https://www.google.cn/chrome/", category: "日常", fallbackIcon: "/apps/chrome.svg" },
  { name: "Steam", url: "https://store.steampowered.com/about/", category: "日常", fallbackIcon: "/apps/steam.png" },
  { name: "B站", url: "https://app.bilibili.com/?spm_id_from=333.1007.0.0", category: "日常", fallbackIcon: "/apps/bilibili.png" },
  { name: "夸克", url: "https://www.quark.cn/?entry=sem_pinzhuanbingsempckk", category: "日常", fallbackIcon: "/apps/夸克.png" },

  // 音乐软件
  { name: "QQ音乐", url: "https://y.qq.com/download/download.html", category: "音乐软件", fallbackIcon: "/apps/qqmusic.png" },
  { name: "网易云音乐", url: "https://music.163.com/#/download", category: "音乐软件", fallbackIcon: "/apps/网易云音乐.jpg" },
  { name: "酷狗音乐", url: "https://download.kugou.com/", category: "音乐软件", fallbackIcon: "/apps/酷狗.png" },



  // 必备小插件
  { name: "Free Download Manager", url: "https://www.freedownloadmanager.org/zh/", category: "必备小插件", fallbackIcon: "/apps/FreeDownloadManager.png" },
  { name: "WinSCP", url: "https://winscp.net/eng/download.php", category: "必备小插件", fallbackIcon: "/apps/WinSCP.png" },
  { name: "7-Zip", url: "https://www.7-zip.org/download.html", category: "必备小插件", fallbackIcon: "/apps/7-Zip.png" },
  { name: "PotPlayer", url: "https://potplayer.info/download/", category: "必备小插件", fallbackIcon: "/apps/PotPlayer.png" },

  // 工作
  { name: "飞书", url: "https://www.feishu.cn/download", category: "工作", fallbackIcon: "/apps/feishu.png" },
  { name: "WPS2019", url: "https://www.wps.cn/product/wps2019", category: "工作", fallbackIcon: "/apps/wps.png" },
  { name: "WPS", url: "https://platform.wps.cn/", category: "工作", fallbackIcon: "/apps/wps.png" },
  { name: "腾讯会议", url: "https://meeting.tencent.com/download/", category: "工作", fallbackIcon: "/apps/tengxunhuiyi.png" },
  { name: "ToDesk", url: "https://www.todesk.com/download.html", category: "工作", fallbackIcon: "/apps/todesk.png" },
  { name: "向日葵", url: "https://sunlogin.oray.com/download", category: "工作", fallbackIcon: "/apps/xiangrikui.png" },
  { name: "百度网盘", url: "https://pan.baidu.com/download", category: "工作", fallbackIcon: "/apps/baiduwangpan.png" },
  { name: "Obsidian", url: "https://obsidian.md/download", category: "工作", fallbackIcon: "/apps/Obsidian.png" },
  { name: "企业微信", url: "https://work.weixin.qq.com/#indexDownload", category: "工作", fallbackIcon: "/apps/qiyeweixin.png" },

  // 专业课
  { name: "uniapp", url: "https://uniapp.dcloud.net.cn/", category: "专业课", fallbackIcon: "/apps/HBuilderX.png" },
  { name: "VSCode", url: "https://code.visualstudio.com/", category: "专业课", fallbackIcon: "/apps/vscode.png" },
  { name: "JetBrains全家桶", url: "https://www.jetbrains.com/products.html", category: "专业课", fallbackIcon: "/apps/JetBrains.png" },
  { name: "Apifox", url: "https://www.apifox.cn/download", category: "专业课", fallbackIcon: "/apps/apifox.png" },
  { name: "MobaXterm", url: "https://mobaxterm.mobatek.net/download-home-edition.html", category: "专业课", fallbackIcon: "/apps/MobaXterm.png" },
  { name: "微信开发者工具", url: "https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html", category: "专业课", fallbackIcon: "/apps/default.png" },
  { name: "Docker", url: "https://www.docker.com/products/docker-desktop/", category: "专业课", fallbackIcon: "/apps/docker.png" },
  { name: "Trae国际版", url: "https://www.trae.ai/download", category: "专业课", fallbackIcon: "/apps/trae.png" }, // 无Trae官网，ToDesk类似远控
  { name: "Trae国内版", url: "https://www.trae.cn/ide/download", category: "专业课", fallbackIcon: "/apps/trae.png" },
  { name: "VMware", url: "https://customerconnect.vmware.com/en/downloads", category: "专业课", fallbackIcon: "/apps/default.png" },
  { name: "Git", url: "https://git-scm.com/downloads", category: "专业课", fallbackIcon: "/apps/git.png" },
  { name: "Node.js", url: "https://nodejs.org/zh-cn/download/", category: "专业课", fallbackIcon: "/apps/nodejs.png" },
  { name: "Python", url: "https://www.python.org/downloads/", category: "专业课", fallbackIcon: "/apps/python.png" },
  { name: "JDK", url: "https://www.oracle.com/java/technologies/downloads/", category: "专业课", fallbackIcon: "/apps/jdk.png" },
  { name: "MySQL", url: "https://dev.mysql.com/downloads/installer/", category: "专业课", fallbackIcon: "/apps/mysql.png" },
  { name: "WezTerm", url: "https://wezfurlong.org/wezterm/", category: "专业课", fallbackIcon: "/apps/WezTerm.png" },
  { name: "GODOT", url: "https://godotengine.org/download/", category: "专业课", fallbackIcon: "/apps/godot.svg" },

  // 学校上课要用的
  { name: "学习通", url: "https://apps.chaoxing.com/c:\Users\jerry\Downloads\学习通.png/", category: "学校学习", fallbackIcon: "/apps/学习通.png" },
  { name: "oms监考系统", url: "https://oms.pintia.cn/download-oms-client?tab=downloads", category: "学校学习", fallbackIcon: "/apps/oms考试系统.ico" },


  // 平板投屏
  { name: "Parsec VDisplay", url: "https://parsec.app/downloads", category: "平板投屏", fallbackIcon: "/apps/ParsecVDisplay.png" },
  { name: "Moonlight", url: "https://moonlight-stream.org/", category: "平板投屏", fallbackIcon: "/apps/Moonlight.png" },
  { name: "ZeroTier", url: "https://www.zerotier.com/download/", category: "平板投屏", fallbackIcon: "/apps/ZeroTier.png" },

  // 电脑小插件
  { name: "图吧工具箱", url: "https://www.tbtool.cn/", category: "电脑小插件", fallbackIcon: "/apps/tubagongjuxiang.png" },
  { name: "Nvidia驱动", url: "https://www.nvidia.cn/Download/index.aspx", category: "电脑小插件", fallbackIcon: "/apps/Nvidia.png" },
  { name: "微信输入法", url: "https://z.weixin.qq.com/", category: "电脑小插件", fallbackIcon: "/apps/weixinshurufa.png" },
  { name: "哈哈", url: "https://totorocloud.net", category: "电脑小插件", fallbackIcon: "/apps/cat.jpg" },

  // 剪视频用的道具
  { name: "剪映", url: "https://lv.ulikecam.com/", category: "剪视频", fallbackIcon: "/apps/jianying.png" },
  { name: "直播伴侣", url: "https://streamingtool.douyin.com/", category: "剪视频", fallbackIcon: "/apps/直播伴侣.png" }, // 推荐OBS
  { name: "OBS", url: "https://obsproject.com/zh-cn/download", category: "剪视频", fallbackIcon: "/apps/obs.png" },
];
