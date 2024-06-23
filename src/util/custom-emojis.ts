export default function replaceEmojis(content: string): string {
    let newContent = content;

    const emojis = {
        '💀': '☠',
        '😂': '☺',
        '😭': '☹',
        '👍': ':thumbs_up:',
        '🖐️': ':wave:',
        '🤝': ':handshake:',
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(emojis)) {
        newContent = newContent.replace(key, value);
    }

    const emojiRegex = /<a?(:[^:]+:)\d+>/g;

    return newContent.replaceAll(emojiRegex, '$1');
}