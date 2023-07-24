// TODO: move the Foundation utils
export function valueToHex(value?: number): string {
  if (typeof value !== 'number') {
    return '';
  }

  if (value < 0) {
    return '00';
  }

  if (value > 100) {
    return 'ff';
  }

  const alpha = Math.round((value / 100) * 255);

  return (alpha + 0x10000).toString(16).slice(-2).toLowerCase();
}
