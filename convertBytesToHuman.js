/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  if (isNaN(bytes) || bytes < 0 || !isFinite(bytes)){
    return false;
  } else if (bytes >= 1024*1024*1024){
    return parseFloat((bytes / (1024*1024*1024)).toFixed(2)) + ' GB'
  } else if (bytes >= 1024*1024){
    return parseFloat((bytes / (1024*1024)).toFixed(2)) + ' MB'
  } else if (bytes >= 1024){
    return parseFloat((bytes / 1024).toFixed(2)) + ' KB'
  } else {
    return bytes.toString() + ' B'
  }
}
