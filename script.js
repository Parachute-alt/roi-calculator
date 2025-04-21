
function calculerROI() {
    let investissement = parseFloat(document.getElementById('investissement').value);
    let revenus = parseFloat(document.getElementById('revenus').value);
    
    if (isNaN(investissement) || isNaN(revenus) || investissement <= 0 || revenus <= 0) {
        alert("Please enter valid values for both investment and revenue.");
        return;
    }

    let roi = ((revenus - investissement) / investissement) * 100;
    let message = `<div><strong>Your ROI is ${roi.toFixed(2)}%</strong></div>`;
    let explanation = "";

    if (roi > 0) {
        explanation = `<div class="explication">This means your investment was profitable: not only did you recover your spending, but you also generated profits. <strong>This reflects a strong alignment between your offer and your target audience's expectations.</strong> Beyond the immediate return, you also gained visibility, improved brand recognition, and opened the door to future business opportunities.</div>`;
    } else if (roi === 0) {
        explanation = `<div class="explication">Your ROI is 0%. You recovered exactly what you invested.</div>`;
    } else {
        explanation = `<div class="explication">This means your investment has not yet generated financial returns. It may be worth reviewing your brand positioning, offer, or market fit. <strong>Despite this result, you have likely increased your visibility, enhanced brand awareness, and created future opportunities.</strong></div>`;
    }

    document.getElementById('resultat').innerHTML = message + explanation;
}
