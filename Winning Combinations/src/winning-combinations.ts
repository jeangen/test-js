// Define the type for the result of winning combinations.
type WinningCombinationsResult = [number, number[]][];

// Function to identify winning combinations in a given array of symbols.
function call(lines: number[]): WinningCombinationsResult {
  // Define the paying symbols and the wild symbol.
  const payingSymbols = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const wildSymbol = 0;

  // Initialize an array to store the winning combinations.
  const result: WinningCombinationsResult = [];

  // Iterate through the array to check for winning combinations.
  for (let i = 0; i <= lines.length - 3; i++) {
    // Get the symbol at the current position.
    const symbol = lines[i];

    // Check if the symbol is a paying symbol or the wild symbol.
    if (payingSymbols.includes(symbol) || symbol === wildSymbol) {
      // Initialize an array to store the positions of the pay line.
      const payLine: number[] = [i];
      let j = i + 1;

      // Continue checking for symbols in the pay line.
      while (
        j < lines.length &&
        (payingSymbols.includes(lines[j]) || lines[j] === wildSymbol)
      ) {
        // Add the position to the pay line array.
        payLine.push(j);
        j++;
      }

      // Check if the pay line has at least 3 symbols.
      if (payLine.length >= 3) {
        // Get the unique symbol at the starting position of the pay line.
        const uniqueSymbol = lines[payLine[0]];

        // Check if the unique symbol is a paying symbol or the wild symbol.
        if (
          payingSymbols.includes(uniqueSymbol) ||
          uniqueSymbol === wildSymbol
        ) {
          // Add the winning combination to the result array.
          result.push([uniqueSymbol, payLine]);
        }
      }
    }
  }

  // Return the array of winning combinations.
  return result;
}

// Export the function as part of the WinningCombinations object.
export const WinningCombinations = { call };
