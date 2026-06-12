function fingerprint() {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36';
    const lang = 'en-GB';
    const resolution = '1920x1080';
    const tzOffset = -60;

    const source = [ua, lang, resolution, tzOffset].join('|');

    let hash = 0;
    for (let i = 0; i < source.length; i++) {
        hash = ((hash << 5) - hash) + source.charCodeAt(i);
        hash |= 0;
    }

    return 'fp_' + Math.abs(hash) + '_' + Date.now();
}

console.log(fingerprint());
