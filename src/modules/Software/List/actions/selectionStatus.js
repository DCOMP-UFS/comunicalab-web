module.exports = function selectionStatus(status) {
  if (status === 'Ok' || status === 'Livre' || status === 'Disponivel') {
    return 'equipStatusGreen';
  }
  if (
    status === 'Ocupado' ||
    status === 'Sem Rede' ||
    status === 'Problema H.W.' ||
    status === 'Em uso'
  ) {
    return 'equipStatusRed';
  }
  if (status === 'Espera') {
    return 'equipStatusYellow';
  }
  return 'statusError';
};
