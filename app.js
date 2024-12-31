let selectedCard = null;
let selectedAmount = 0;

function selectCard(card) {
    selectedCard = card;
    alert(`选择了卡面：${card}`);
}

function selectAmount(amount) {
    selectedAmount = amount;
    alert(`选择了金额：¥${amount}`);
}

function goToPurchase() {
    if (!selectedCard || !selectedAmount) {
        alert('请先选择卡面和金额！');
        return;
    }
    localStorage.setItem('selectedCard', selectedCard);
    localStorage.setItem('selectedAmount', selectedAmount);
    window.location.href = 'purchase.html';
}

function payForCard() {
    const blessing = document.getElementById('blessing').value;
    if (!blessing) {
        alert('请输入祝福语！');
        return;
    }
    const cardData = {
        card: localStorage.getItem('selectedCard'),
        amount: localStorage.getItem('selectedAmount'),
        blessing
    };
    localStorage.setItem('giftCardData', JSON.stringify(cardData));
    alert('支付成功！');
    window.location.href = 'share.html';
}

function shareGiftCard() {
    const cardData = JSON.parse(localStorage.getItem('giftCardData'));
    document.getElementById('gift-card-details').innerText = `
        卡面：${cardData.card}, 金额：¥${cardData.amount}, 祝福语：${cardData.blessing}
    `;
    alert('分享成功！');
}

function claimGiftCard() {
    const cardData = JSON.parse(localStorage.getItem('giftCardData'));
    alert(`成功领取礼品卡：¥${cardData.amount}`);
}
