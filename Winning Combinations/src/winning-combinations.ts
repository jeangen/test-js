type WinningCombinationsResult = [number, number[]][];

function call(lines: number[]): WinningCombinationsResult {
  const payingSymbols = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const wildSymbol = 0;

  const result: WinningCombinationsResult = [];

  for (let i = 0; i <= lines.length - 3; i++) {
    const symbol = lines[i];

    if (payingSymbols.includes(symbol) || symbol === wildSymbol) {
      const payLine: number[] = [i];
      let j = i + 1;

      while (
        j < lines.length &&
        (payingSymbols.includes(lines[j]) || lines[j] === wildSymbol)
      ) {
        payLine.push(j);
        j++;
      }

      if (payLine.length >= 3) {
        const uniqueSymbol = Array.from(new Set(payLine.map((index) => lines[index])));
        if (
          uniqueSymbol.length === 1 &&
          (payingSymbols.includes(uniqueSymbol[0]) || uniqueSymbol[0] === wildSymbol)
        ) {
          result.push([uniqueSymbol[0], payLine]);
        }
      }
    }
  }

  return result;
}

export const WinningCombinations = { call };
