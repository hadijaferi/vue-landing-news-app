export default function generateKey(pre = "k", scale = 1) {
    return `${pre}_${Math.floor(Math.random() * scale * 0x10000).toString(16)}`;
}
