document.addEventListener('DOMContentLoaded', function() {
    const billingToggle = document.getElementById('billing-toggle');
    const currencySelect = document.getElementById('currency-select');
    const prices = {
        USD: {
            monthly: [9.99, 19.99, 49.99],
            annually: [99.99, 199.99, 499.99]
        },
        EUR: {
            monthly: [8.99, 17.99, 44.99],
            annually: [89.99, 179.99, 449.99]
        },
        GBP: {
            monthly: [7.99, 15.99, 39.99],
            annually: [79.99, 159.99, 399.99]
        },
        INR: {
            monthly: [699, 1299, 2999],
            annually: [6999, 12999, 29999]
        }
    };

    function updatePrices() {
        const isAnnual = billingToggle.checked;
        const currency = currencySelect.value;
        const planPrices = prices[currency][isAnnual ? 'annually' : 'monthly'];
        const priceElements = document.querySelectorAll('.pricing-card .price');

        priceElements.forEach((el, index) => {
            el.innerHTML = `${currencySelect.options[currencySelect.selectedIndex].text.split(' ')[0]}${planPrices[index].toFixed(2)}<span>${isAnnual ? '/year' : '/month'}</span>`;
        });
    }

    billingToggle.addEventListener('change', updatePrices);
    currencySelect.addEventListener('change', updatePrices);

    updatePrices();
});