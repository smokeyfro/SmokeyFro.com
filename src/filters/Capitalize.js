export default string => {
    let array = string.split(' ')
    let capitalizeString = '';
    array.map(value => {
      capitalizeString += value[0].toUpperCase() + value.substr(1) + ' '
    })
    return capitalizeString.trim();
  }
  