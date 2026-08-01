(function () {
    var data = window.WORKS_DATA;
    if (!data) {
        document.getElementById("blocks").innerHTML =
            '<p style="color:#9a9aa2">数据加载失败，请检查 data/works.js 是否存在。</p>';
        return;
    }

    const root = document.getElementById("blocks");
    const navLinks = document.getElementById("nav-links");

    // 顶部导航
    navLinks.innerHTML = "";
    data.blocks.forEach((b, i) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#block-" + (i + 1);
        a.textContent = b.title;
        li.appendChild(a);
        navLinks.appendChild(li);
    });

    // Hero
    if (data.profile) {
        if (data.profile.desc) document.getElementById("hero-desc").textContent = data.profile.desc;
        const tags = document.getElementById("hero-tags");
        (data.profile.tags || []).forEach((t) => {
            const span = document.createElement("span");
            span.textContent = t;
            tags.appendChild(span);
        });
    }
    if (data.footer) document.getElementById("footer-note").textContent = data.footer;

    // 作品块
    const allItems = [];
    data.blocks.forEach((b, bi) => {
        const sec = document.createElement("section");
        sec.className = "block";
        sec.id = "block-" + (bi + 1);

        const head = document.createElement("div");
        head.className = "block-head";
        const h = document.createElement("h2");
        h.className = "block-title";
        h.textContent = b.title;
        head.appendChild(h);
        if (b.desc) {
            const d = document.createElement("span");
            d.className = "block-desc";
            d.textContent = b.desc;
            head.appendChild(d);
        }
        sec.appendChild(head);

        const grid = document.createElement("div");
        grid.className = "grid";
        if (b.cols) grid.dataset.cols = String(b.cols);

        (b.items || []).forEach((it) => {
            const card = document.createElement("div");
            card.className = "card";
            card.dataset.bi = bi;

            const wrap = document.createElement("div");
            wrap.className = "card-img-wrap";
            if (it.ratio === "portrait") wrap.classList.add("portrait");
            else if (it.ratio === "wide") wrap.classList.add("wide");

            const img = document.createElement("img");
            img.className = "card-img";
            img.loading = "lazy";
            img.src = it.thumb || it.src;
            img.alt = it.title || "";
            wrap.appendChild(img);

            const info = document.createElement("div");
            info.className = "card-info";
            const t = document.createElement("div");
            t.className = "card-title";
            t.textContent = it.title || "";
            info.appendChild(t);
            if (it.meta) {
                const m = document.createElement("div");
                m.className = "card-meta";
                m.textContent = it.meta;
                info.appendChild(m);
            }

            card.appendChild(wrap);
            card.appendChild(info);
            card.addEventListener("click", () => openLightbox(data, allItems.indexOf(it)));
            grid.appendChild(card);
            allItems.push(it);
        });

        sec.appendChild(grid);
        root.appendChild(sec);
    });

    // 灯箱
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lb-img");
    const lbCap = document.getElementById("lb-caption");
    let current = 0;

    window.openLightbox = function (data, idx) {
        current = idx;
        show();
        lb.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    };

    function show() {
        const it = allItems[current];
        lbImg.src = it.src;
        lbCap.textContent = (it.title || "") + (it.meta ? " · " + it.meta : "");
    }

    function closeLb() {
        lb.classList.add("hidden");
        document.body.style.overflow = "";
    }

    function step(dir) {
        current = (current + dir + allItems.length) % allItems.length;
        show();
    }

    document.getElementById("lb-close").addEventListener("click", closeLb);
    document.getElementById("lb-prev").addEventListener("click", () => step(-1));
    document.getElementById("lb-next").addEventListener("click", () => step(1));
    lb.addEventListener("click", (e) => {
        if (e.target === lb) closeLb();
    });
    document.addEventListener("keydown", (e) => {
        if (lb.classList.contains("hidden")) return;
        if (e.key === "Escape") closeLb();
        if (e.key === "ArrowLeft") step(-1);
        if (e.key === "ArrowRight") step(1);
    });
})();
