import React from 'react'

import WidgetListItem from './WidgetListItem'

export default function WidgetList (props) {
  console.log('WidgetList props', props)
  return (
    <div className='widget-list'>
      <h2>List</h2>
      {props.widgets.map(widget => {
        return <WidgetListItem
          key={widget.id}
          widget={widget}
          hideDetails={props.hideDetails}
          showDetails={props.showDetails}
          deleteWidget={props.deleteWidget} />
      })}
    </div>
  )
}
