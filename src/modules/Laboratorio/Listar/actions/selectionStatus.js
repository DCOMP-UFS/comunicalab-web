export default function selectionStatus(isInUse) {
  if (isInUse === false) {
    return 'laboratorioStatusVerde';
  } else return 'laboratorioStatusVermelho';
  //if (status === 'Reservado') {
  //  return 'laboratorioStatusAmarelo';
  //}
}
