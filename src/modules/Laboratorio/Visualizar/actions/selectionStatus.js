module.exports = function selectionStatus(status) {
    if (status === false) {
      return 'equipamentoStatusVerde';
    }
    if (status === true) {
      return 'equipamentoStatusVermelho';
    }
    //if (status === 'Reservado') {
    //  return 'equipamentoStatusAmarelo';
    //}
    return 'equipamentoStatusError';
  };
  