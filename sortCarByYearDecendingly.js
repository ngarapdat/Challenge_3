function sortCarByYearDescendingly(cars) {
  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // Algoritma Bubble Sort untuk mengurutkan mobil berdasarkan tahun (year) secara descending
  const n = result.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j].year < result[j + 1].year) {
        // Tukar elemen jika tahun lebih kecil (descending)
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}
