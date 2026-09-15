window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});(function() {
    // ===== 应用首页链接 =====
    var HOME_URL = 'https://www.kdocs.cn/wo/sl/v426OGCp?no_roaming=true';

    // ===== 判断是否手机端 =====
    var isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

    // ===== 延迟添加悬浮按钮 =====
    setTimeout(function() {
        function addFloatButtons() {
            if (document.getElementById('topBackBtn')) return;

            // 手机端按钮更大，位置更高
            var btnPadding = isMobile ? '10px 22px' : '6px 14px';
            var btnFontSize = isMobile ? '16px' : '13px';
            var btnBottom = isMobile ? '40px' : '8px';
            var btnRadius = isMobile ? '10px' : '6px';

            // 返回按钮（右下角）
            var backBtn = document.createElement('div');
            backBtn.id = 'topBackBtn';
            backBtn.innerHTML = '← 返回';
            backBtn.style.cssText = 'position:fixed;bottom:' + btnBottom + ';right:14px;z-index:999999;background:rgba(0,0,0,0.65);color:#fff;padding:' + btnPadding + ';border-radius:' + btnRadius + ';font-size:' + btnFontSize + ';cursor:pointer;user-select:none;box-shadow:0 2px 8px rgba(0,0,0,0.3);';
            backBtn.onclick = function() {
                if (window.history.length > 1) {
                    window.history.back();
                } else {
                    window.location.href = HOME_URL;
                }
            };
            document.body.appendChild(backBtn);

            // 首页按钮（左下角）
            var homeBtn = document.createElement('div');
            homeBtn.id = 'topHomeBtn';
            homeBtn.innerHTML = '🏠 首页';
            homeBtn.style.cssText = 'position:fixed;bottom:' + btnBottom + ';left:14px;z-index:999999;background:rgba(22,119,255,0.9);color:#fff;padding:' + btnPadding + ';border-radius:' + btnRadius + ';font-size:' + btnFontSize + ';cursor:pointer;user-select:none;box-shadow:0 2px 8px rgba(0,0,0,0.3);';
            homeBtn.onclick = function() {
                window.location.href = HOME_URL;
            };
            document.body.appendChild(homeBtn);

            // 切换账号按钮（右下角上方）
            if (!document.getElementById('switchAccountBtn')) {
                var switchBtn = document.createElement('div');
                switchBtn.id = 'switchAccountBtn';
                switchBtn.innerHTML = '切换账号';
                switchBtn.style.cssText = 'position:fixed;bottom:' + (parseInt(btnBottom) + 70) + 'px;right:14px;z-index:999999;background:#1677ff;color:#fff;padding:' + btnPadding + ';border-radius:' + btnRadius + ';font-size:' + btnFontSize + ';cursor:pointer;user-select:none;box-shadow:0 2px 8px rgba(0,0,0,0.3);';
                switchBtn.onclick = function() {
                    document.cookie.split(";").forEach(function(c) {
                        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                    });
                    localStorage.clear();
                    sessionStorage.clear();
                    window.location.reload();
                };
                document.body.appendChild(switchBtn);
            }
        }

        addFloatButtons();
        setInterval(addFloatButtons, 2000);
    }, 4000);

    // ===== 修复输入框点击闪烁问题 =====
    document.addEventListener('click', function(e) {
        var target = e.target;
        if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
            setTimeout(function() {
                target.focus();
            }, 100);
        }
    }, true);

    // ===== 电脑端才启用右键菜单（手机端不需要）=====
    if (!isMobile) {
        function isFormPage() {
            if (!document.body) return false;
            return document.body.innerText.includes('金山文档');
        }
        document.addEventListener('contextmenu', function(e) {
            if (!isFormPage()) return;
            e.preventDefault();
            var oldMenu = document.getElementById('customContextMenu');
            if (oldMenu) oldMenu.remove();
            var menu = document.createElement('div');
            menu.id = 'customContextMenu';
            menu.style.cssText = 'position:fixed;left:' + e.clientX + 'px;top:' + e.clientY + 'px;z-index:999999;background:#fff;border:1px solid #ccc;border-radius:6px;box-shadow:0 2px 12px rgba(0,0,0,0.2);padding:6px 0;min-width:140px;font-size:14px;';
            var backItem = document.createElement('div');
            backItem.innerHTML = '← 返回';
            backItem.style.cssText = 'padding:8px 16px;cursor:pointer;';
            backItem.onclick = function() {
                menu.remove();
                if (window.history.length > 1) window.history.back();
                else window.location.href = HOME_URL;
            };
            menu.appendChild(backItem);
            var closeItem = document.createElement('div');
            closeItem.innerHTML = '✕ 关闭';
            closeItem.style.cssText = 'padding:8px 16px;cursor:pointer;color:#e74c3c;';
            closeItem.onclick = function() {
                menu.remove();
                window.close();
            };
            menu.appendChild(closeItem);
            document.body.appendChild(menu);
        });
        document.addEventListener('click', function(e) {
            var menu = document.getElementById('customContextMenu');
            if (menu && !menu.contains(e.target)) menu.remove();
        });
    }
})();