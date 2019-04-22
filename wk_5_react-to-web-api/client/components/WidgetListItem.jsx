import React from 'react'

export default function WidgetListItem (props) {
  console.log('WidgetListItem props', props)
  // { widget, showDetails, deleteWidget }
  
  // Option 1
  // const widget = props.widget
  // const showDetails = props.showDetails
  // const deleteWidget = props.deleteWidget

  // Option 2 - Destructuring
  const { widget, showDetails, deleteWidget } = props

  // Option 3 - Destructuring in args
  // export default function WidgetListItem ({ widget, showDetails, deleteWidget }) {

  // function thisThing() {

  // }

  // const obj = {
  //   one: 1,
  //   two: 2,
  //   f: thisThing
  // }

  return (
    <div className='widget-list-item'>
      {`${widget.name} `}
      <a href='#' onClick={() => showDetails(widget)}>details</a>
      <button onClick={() => deleteWidget(widget)}>X</button>
    </div>
  )
}
