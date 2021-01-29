module.exports = function selectionStatus(status) {
  if (status === false) {
    return 'laboratorioStatusVerde';
  }
  if (status === true) {
    return 'laboratorioStatusVermelho';
  }
  //if (status === 'Reservado') {
  //  return 'laboratorioStatusAmarelo';
  //}
  return 'laboratorioStatusError';
};
