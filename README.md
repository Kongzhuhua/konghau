# konghau · 个人作品集网站

纯静态作品集站，域名 kong-hua.top。

## 目录结构

```
konghau/
├── index.html         # 页面骨架
├── css/style.css      # 样式
├── js/main.js         # 渲染逻辑（读 works.json）
├── data/works.js      # ★ 作品数据（改这里）
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

## 本地预览

直接双击打开 `index.html` 即可（用浏览器），数据用 JS 文件引入，无需本地服务器。

## 部署（之后再说）

域名已配 CNAME（kong-hua.top），可部署到 GitHub Pages / Vercel / 自己的服务器。
