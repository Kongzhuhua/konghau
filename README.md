# konghau · 个人网站

纯静态个人站，域名 kong-hua.top。包含两个页面：

- **index.html** — 作品集（电商产品图后期）
- **notes.html** — 笔记与链接导航

## 目录结构

```
konghau/
├── index.html         # 作品集页
├── notes.html         # 笔记/导航页
├── css/style.css      # 样式
├── js/main.js         # 作品集渲染（读 works.js）
├── js/notes.js        # 笔记/导航渲染（读 notes.js）
├── data/works.js      # ★ 作品数据（改这里）
├── data/notes.js      # ★ 笔记/导航数据（改这里）
└── img/               # ★ 作品图片（放这里）
    ├── black/   黑底产品图
    ├── white/   白底产品图
    ├── sku/     SKU 主图
    ├── effect/  效果图
    ├── detail/  详情页
    └── brand/   品牌系列
```

## 如何添加作品

1. **放图片**：把图片放进对应的 `img/分类/` 目录（如 `img/black/`）。
   建议：图片压缩到最长边 1400px 以内、JPG 质量 80 左右，网页加载快。

2. **改数据**：打开 `data/works.js`，找到对应分块的 `items` 数组（它现在是 `[]`），在里面加一条：

```json
{
  "src": "img/black/我的作品.jpg",
  "thumb": "img/black/我的作品.jpg",
  "title": "产品名",
  "meta": "备注/分类信息",
  "ratio": "square"
}
```

字段说明：
- `src` — 灯箱大图路径（必填）
- `thumb` — 缩略图路径（可选，不填则用 src）
- `title` — 作品标题（可选）
- `meta` — 副标题/备注（可选）
- `ratio` — 卡片宽高比：`square`(1:1) / `portrait`(3:4) / `wide`(4:3)，不填默认 square

3. **新增分块**：复制任意一个 `{...}` 块，改 `id`、`title`、`desc`，放进 `blocks` 数组即可。`cols` 控制每行几张（2 或 3）。改完保存刷新浏览器即可。

## 如何添加笔记/链接

打开 `data/notes.js`：

- **加笔记**：在 `notes` 数组里找到合适的分区，往该分区的 `items` 里加一条：
  `{ "date": "2026-08-01", "title": "标题", "text": "笔记正文（纯文本，支持换行）" }`
- **加链接**：在 `links` 数组里找到合适的分区，往 `items` 里加一条：
  `{ "title": "名字", "url": "https://...", "desc": "一句话描述", "tags": ["标签1", "标签2"] }`
- **新增分区**：复制一个分区对象，改 `id`、`title`、`desc` 即可。想加"标题/分区说明"级别的分组，在对应 section 外层再加一层对象即可。

## 本地预览

直接双击打开 `index.html` 或 `notes.html` 即可（用浏览器），数据用 JS 文件引入，无需本地服务器。
