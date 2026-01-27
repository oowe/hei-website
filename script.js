// 滾動動畫效果 (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, .product-card, .feature-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// 返回頂部按鈕邏輯
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 模擬分類篩選效果
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // 這裡可以加入實際的過濾邏輯
        console.log(`篩選分類: ${btn.innerText}`);
    });
});

// 平滑捲動導覽
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 搜尋功能邏輯
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// 執行搜尋的函式
function performSearch() {
    const query = searchInput.value.trim(); // 取得輸入文字並去除空白
    if (query !== "") {
        // 構建蝦皮搜尋網址 (encodeURIComponent 是為了處理中文字元)
        const shopeeSearchUrl = `https://shopee.tw/search?keyword=${encodeURIComponent(query)}`;
        
        // 在新分頁開啟搜尋結果
        window.open(shopeeSearchUrl, '_blank');
    } else {
        alert("請輸入搜尋文字");
    }
}

// 監聽按鈕點擊事件
searchBtn.addEventListener('click', performSearch);

// 監聽鍵盤 Enter 事件 (讓使用者輸入完直接按 Enter 也能搜尋)
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});