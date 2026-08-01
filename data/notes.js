window.NOTES_DATA = {
  "desc": "学习笔记与常用链接导航，自己整理自己看。",
  "footer": "© 2026 空华 · kong-hua.top",
  "notes": [
    {
      "id": "comfyui",
      "title": "ComfyUI 学习",
      "desc": "工作流与节点相关的学习笔记",
      "items": [
        {
          "date": "2026-08-01",
          "title": "宫格拼图节点",
          "text": "ImageGridComposite 节点：图1~图9 可选输入，列数 auto/2/3/4，三种缩放模式（等比留边/铺满裁切/拉伸铺满），不完整组可保留或丢弃。"
        },
        {
          "date": "2026-08-01",
          "title": "批量处理断点续跑",
          "text": "BatchImageIterator 支持失败自动回退重跑，状态存在 states.json，换目录也不丢进度。"
        }
      ]
    },
    {
      "id": "work",
      "title": "工作流水线",
      "desc": "电商产品图流程的经验记录",
      "items": [
        {
          "date": "2026-08-01",
          "title": "标准出图流程",
          "text": "原图 → 抠图/修图 → 黑底图 + 白底图 → SKU 编号图 → 效果图 → 详情页（中/英）。一个产品约 100 个文件。"
        }
      ]
    }
  ],
  "links": [
    {
      "id": "tools",
      "title": "常用工具",
      "desc": "工具与平台",
      "items": [
        {
          "title": "ComfyUI",
          "url": "https://github.com/comfyanonymous/ComfyUI",
          "desc": "本地 AI 出图工作流平台",
          "tags": ["AI", "出图"]
        },
        {
          "title": "DeepSeek",
          "url": "https://platform.deepseek.com",
          "desc": "LLM API，文本生成/提示词",
          "tags": ["AI", "API"]
        }
      ]
    },
    {
      "id": "learn",
      "title": "学习参考",
      "desc": "教程与灵感",
      "items": [
        {
          "title": "GitHub",
          "url": "https://github.com",
          "desc": "代码托管与开源社区",
          "tags": ["社区"]
        }
      ]
    }
  ]
};
