import React from 'react'

function listItem(color, index) {
  return <li key={index}>{color}</li>
}

export default function ColorList (props) {
  return <ul>
    {props.colors.map (listItem) }
  </ul>
}

// export default function ColorList (props) {
//   return <ul>
//     {props.colors.map ((color, index) => <li key={index}>{color}</li>) }
//   </ul>
// }
