(function () {
    var data = window.NOTES_DATA;
    var root = document.getElementById("notes-root");
    if (!data) {
        root.innerHTML = '<p style="color:#9a9aa2">数据加载失败，请检查 data/notes.js 是否存在。</p>';
        return;
    }

    if (data.desc) document.getElementById("notes-desc").textContent = data.desc;
    if (data.footer) document.getElementById("notes-footer").textContent = data.footer;

    function el(tag, cls, text) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text != null) e.textContent = text;
        return e;
    }

    // ===== 笔记区 =====
    if (data.notes && data.notes.length) {
        var notesTitle = el("h2", "note-title");
        notesTitle.textContent = "学习笔记";
        root.appendChild(notesTitle);

        data.notes.forEach(function (sec) {
            var wrap = el("div", "note-section");

            var t = el("h3", "");
            t.textContent = sec.title;
            wrap.appendChild(t);

            if (sec.desc) wrap.appendChild(el("div", "note-desc", sec.desc));

            sec.items.forEach(function (it) {
                var card = el("div", "note-card");
                if (it.date) card.appendChild(el("div", "note-date", it.date));
                card.appendChild(el("h3", "", it.title));
                if (it.text) card.appendChild(el("div", "note-text", it.text));
                wrap.appendChild(card);
            });

            root.appendChild(wrap);
        });
    }

    // ===== 链接区 =====
    if (data.links && data.links.length) {
        var linksTitle = el("h2", "note-title");
        linksTitle.textContent = "链接导航";
        root.appendChild(linksTitle);

        data.links.forEach(function (sec) {
            var wrap = el("div", "note-section");

            var t = el("h3", "");
            t.textContent = sec.title;
            wrap.appendChild(t);

            if (sec.desc) wrap.appendChild(el("div", "note-desc", sec.desc));

            sec.items.forEach(function (it) {
                var card = el("div", "link-card");

                var left = el("div", "");
                var a = el("a", "link-title", it.title);
                a.href = it.url;
                a.target = "_blank";
                a.rel = "noopener noreferrer";
                left.appendChild(a);
                if (it.desc) left.appendChild(el("div", "link-desc", it.desc));
                if (it.tags && it.tags.length) {
                    var tags = el("div", "link-tags");
                    it.tags.forEach(function (tg) { tags.appendChild(el("span", "", tg)); });
                    left.appendChild(tags);
                }
                card.appendChild(left);

                var urlEl = el("div", "link-meta", it.url.replace(/^https?:\/\//, ""));
                card.appendChild(urlEl);

                wrap.appendChild(card);
            });

            root.appendChild(wrap);
        });
    }
})();
