export function validateInput(data) {
    const str = data.trim().split(',');
    let part1 = str[0];
    let part2 = str[1];
    if (!part2) return false;
    part1 = part1.replace('[', '').trim();
    part2 = part2.replace(']', '').trim();
    if (Number.isNaN(Number(part1)) || Number.isNaN(Number(part2))) return false;
    if (Math.abs(Number(part1)) > 90) return false;
    if (Math.abs(Number(part2)) > 180) return false;
    return { latitude: +`${part1}`, longitude: +`${part2}` };
  }
  