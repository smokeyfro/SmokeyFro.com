export default string => {
  let array = string.split(' ')
  let lowerCaseString = '';
  array.map(value => {
    lowerCaseString += value[0].toLowerCase() + value.substr(1) + ' '
  })
  return lowerCaseString.trim();
}
  