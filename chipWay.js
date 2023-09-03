//Задача решена с помощью чата GPT, чтобы домашка не висела в несделаных.


function findMinCostPath(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    // Создаем двумерный массив для хранения минимальных стоимостей пути
    const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  
    // Инициализируем первую клетку
    dp[0][0] = grid[0][0];
  
    // Заполняем первую строку
    for (let j = 1; j < cols; j++) {
      dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
  
    // Заполняем первый столбец
    for (let i = 1; i < rows; i++) {
      dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
  
    // Заполняем остальные клетки
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  
    // Минимальная стоимость пути будет в правом нижнем углу
    return dp[rows - 1][cols - 1];
  }
  
  // Пример использования
  const grid = [
    [1, 3, 1],
    [1, 5, 5],
    [8, 2, 1],
  ];
  
  const minCost = findMinCostPath(grid);
  console.log("Минимальная стоимость пути:", minCost);
  