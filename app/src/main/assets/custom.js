window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});(function() {
    // ===== 应用首页链接 =====
    var HOME_URL = 'https://www.kdocs.cn/wo/sl/v426OGCp?no_roaming=true';

    // ===== 工具函数：判断是否表单页面（用于右键菜单）=====
    function isFormPage() {
        if (!document.body) return false;
        return document.body.innerText.includes('金山文档');
    }

    // ===== 延迟添加悬浮按钮（所有页面）=====
    setTimeout(function() {
        function addFloatButtons() {
            // 防止重复添加
            if (document.getElementById('topBackBtn')) return;

            // 返回按钮（右下角，更靠下）
            var backBtn = document.createElement('div');
            backBtn.id = 'topBackBtn';
            backBtn.innerHTML = '← 返回';
            backBtn.style.cssText = 'position:fixed;bottom:8px;right:12px;z-index:999999;background:rgba(0,0,0,0.6);color:#fff;padding:6px 14px;border-radius:6px;font-size:13px;cursor:pointer;user-select:none;box-shadow:0 2px 8px rgba(0,0,0,0.3);';
            backBtn.onmouseover = function() { backBtn.style.background = 'rgba(0,0,0,0.85)'; };
            backBtn.onmouseout = function() { backBtn.style.background = 'rgba(0,0,0,0.6)'; };
            backBtn.onclick = function() {
                if (window.history.length > 1) {
                    window.history.back();
                } else {
                    window.location.href = HOME_URL;
                }
            };
            document.body.appendChild(backBtn);

            // 首页按钮（左下角，更靠下）
            var homeBtn = document.createElement('div');
            homeBtn.id = 'topHomeBtn';
            homeBtn.innerHTML = '🏠 首页';
            homeBtn.style.cssText = 'position:fixed;bottom:8px;left:12px;z-index:999999;background:rgba(22,119,255,0.85);color:#fff;padding:6px 14px;border-radius:6px;font-size:13px;cursor:pointer;user-select:none;box-shadow:0 2px 8px rgba(0,0,0,0.3);';
            homeBtn.onmouseover = function() { homeBtn.style.background = 'rgba(22,119,255,1)'; };
            homeBtn.onmouseout = function() { homeBtn.style.background = 'rgba(22,119,255,0.85)'; };
            homeBtn.onclick = function() {
                window.location.href = HOME_URL;
            };
            document.body.appendChild(homeBtn);
        }

        // 立即添加一次
        addFloatButtons();

        // 每2秒检查一次，防止被WPS重绘冲掉
        setInterval(function() {
            addFloatButtons();
        }, 2000);
    }, 4000); // 延迟4秒，等页面稳定

    // ===== 右键菜单（仅在表单页面启用）=====
    document.addEventListener('contextmenu', function(e) {
        if (!isFormPage()) return;
        e.preventDefault();

        var oldMenu = document.getElementById('customContextMenu');
        if (oldMenu) oldMenu.remove();

        var menu = document.createElement('div');
        menu.id = 'customContextMenu';
        menu.style.cssText = 'position:fixed;left:' + e.clientX + 'px;top:' + e.clientY + 'px;z-index:999999;background:#fff;border:1px solid #ccc;border-radius:6px;box-shadow:0 2px 12px rgba(0,0,0,0.2);padding:6px 0;min-width:140px;font-size:14px;';

        // 返回
        var backItem = document.createElement('div');
        backItem.innerHTML = '← 返回';
        backItem.style.cssText = 'padding:8px 16px;cursor:pointer;';
        backItem.onmouseover = function() { this.style.background = '#f0f0f0'; };
        backItem.onmouseout = function() { this.style.background = ''; };
        backItem.onclick = function() {
            menu.remove();
            if (window.history.length > 1) window.history.back();
            else window.location.href = HOME_URL;
        };
        menu.appendChild(backItem);

        // 关闭
        var closeItem = document.createElement('div');
        closeItem.innerHTML = '✕ 关闭';
        closeItem.style.cssText = 'padding:8px 16px;cursor:pointer;color:#e74c3c;';
        closeItem.onmouseover = function() { this.style.background = '#f0f0f0'; };
        closeItem.onmouseout = function() { this.style.background = ''; };
        closeItem.onclick = function() {
            menu.remove();
            window.close();
        };
        menu.appendChild(closeItem);

        document.body.appendChild(menu);
    });

    // 点击其他地方移除右键菜单
    document.addEventListener('click', function(e) {
        var menu = document.getElementById('customContextMenu');
        if (menu && !menu.contains(e.target)) menu.remove();
    });
})();