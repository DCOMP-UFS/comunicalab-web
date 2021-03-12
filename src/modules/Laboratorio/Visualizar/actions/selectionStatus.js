export default function selectionStatus(isInUse) {
  if (isInUse === false) {
    return 'equipamentoStatusVerde';
  } else return 'equipamentoStatusVermelho';
  //if (status === 'Reservado') {
  //  return 'equipamentoStatusAmarelo';
  //}
}
