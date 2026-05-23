document.addEventListener('DOMContentLoaded', () => {
    // Balance visibility toggle
    const toggleVisibilityBtn = document.querySelector('.toggle-visibility');
    const balanceAmount = document.querySelector('.balance-amount');
    const balanceChange = document.querySelector('.balance-change');
    let balanceVisible = true;

    toggleVisibilityBtn.addEventListener('click', () => {
        balanceVisible = !balanceVisible;

        if (balanceVisible) {
            balanceAmount.textContent = '$4,290.00';
            balanceChange.textContent = '+$124.50 за месяц';
            toggleVisibilityBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            `;
        } else {
            balanceAmount.textContent = '••••••';
            balanceChange.textContent = '••••••';
            toggleVisibilityBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
            `;
        }
    });

    // Chart period buttons
    const periodBtns = document.querySelectorAll('.period-btn');
    periodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            periodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateChart(btn.textContent);
        });
    });

    // Chart rendering
    const canvas = document.getElementById('chart');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = 200;
        updateChart('Месяц');
    }

    function updateChart(period) {
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        // Sample data based on period
        let data;
        if (period === 'Неделя') {
            data = [1200, 1800, 1500, 2200, 1900, 2400, 2100];
        } else if (period === 'Месяц') {
            data = [1500, 1800, 2200, 1900, 2400, 2100, 2600, 2300, 2800, 2500, 2900, 2700];
        } else {
            data = [15000, 18000, 22000, 19000, 24000, 21000, 26000, 23000, 28000, 25000, 29000, 27000];
        }

        const maxValue = Math.max(...data);
        const padding = 20;
        const chartHeight = height - padding * 2;
        const chartWidth = width - padding * 2;
        const barWidth = chartWidth / data.length;

        // Draw bars
        data.forEach((value, index) => {
            const barHeight = (value / maxValue) * chartHeight;
            const x = padding + index * barWidth + barWidth * 0.2;
            const y = height - padding - barHeight;
            const barActualWidth = barWidth * 0.6;

            // Gradient for bars
            const gradient = ctx.createLinearGradient(0, y, 0, height - padding);
            gradient.addColorStop(0, '#6366f1');
            gradient.addColorStop(1, '#8b5cf6');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.roundRect(x, y, barActualWidth, barHeight, 4);
            ctx.fill();
        });
    }

    // Polyfill for roundRect if not available
    if (!CanvasRenderingContext2D.prototype.roundRect) {
        CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
            this.moveTo(x + radius, y);
            this.lineTo(x + width - radius, y);
            this.quadraticCurveTo(x + width, y, x + width, y + radius);
            this.lineTo(x + width, y + height - radius);
            this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            this.lineTo(x + radius, y + height);
            this.quadraticCurveTo(x, y + height, x, y + height - radius);
            this.lineTo(x, y + radius);
            this.quadraticCurveTo(x, y, x + radius, y);
            this.closePath();
        };
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Bottom navigation
    const navBtns = document.querySelectorAll('.nav-btn:not(.add-btn)');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Add button
    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', () => {
        alert('Добавить новую транзакцию');
    });

    // Transaction items click
    const transactionItems = document.querySelectorAll('.transaction-item');
    transactionItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('.transaction-title').textContent;
            const amount = item.querySelector('.transaction-amount').textContent;
            const date = item.querySelector('.transaction-date').textContent;
            alert(`${title}\n${amount}\n${date}`);
        });
    });

    // View all transactions
    const viewAllBtn = document.querySelector('.view-all');
    viewAllBtn.addEventListener('click', () => {
        alert('Показать все транзакции');
    });

    // Notification button
    const notificationBtn = document.querySelector('.notification-btn');
    notificationBtn.addEventListener('click', () => {
        alert('У вас 3 новых уведомления');
    });

    // Stat cards animation on load
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Transaction items animation on load
    transactionItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 200 + 50 * index);
    });
});
