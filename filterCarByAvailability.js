function filterCarByAvailability(cars) {
  // Tempat penampungan hasil
  const result = [];

  // Loop melalui setiap mobil dalam array
  for (const car of cars) {
    // Periksa apakah mobil tersedia (available === true)
    if (car.available === true) {
      // Jika mobil tersedia, tambahkan ke hasil
      result.push(car);
    }
  }

  return result;
}
