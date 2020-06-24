import React from 'react'

export const transparentize = (number, string) => {
  string = string.replace('#', '');
  let r = parseInt(string.length === 3 ? string.slice(0, 1).repeat(2) : string.slice(0, 2), 16)
  let g = parseInt(string.length === 3 ? string.slice(1, 2).repeat(2) : string.slice(2, 4), 16)
  let b = parseInt(string.length === 3 ? string.slice(2, 3).repeat(2) : string.slice(4, 6), 16)

  if ( number ) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + number + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}
