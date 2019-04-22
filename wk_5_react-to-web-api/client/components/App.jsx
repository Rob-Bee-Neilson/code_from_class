import React from 'react'

import AddWidget from './AddWidget'
import WidgetList from './WidgetList'
import WidgetDetails from './WidgetDetails'
import ErrorMessage from './ErrorMessage'

import { getWidgets, deleteWidget as tellTheApiToDeleteTheWidget } from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      widgets: [],
      activeWidget: null,
      detailsVisible: false,
      addWidgetVisible: false
    }


    this.handleRefresh = this.handleRefresh.bind(this)
    this.refreshList = this.refreshList.bind(this)
    this.showDetails = this.showDetails.bind(this)
    this.hideDetails = this.hideDetails.bind(this)
    this.renderWidgets = this.renderWidgets.bind(this)
    this.showAddWidget = this.showAddWidget.bind(this)
    this.deleteWidgetAndRefreshList = this.deleteWidgetAndRefreshList.bind(this)
  }

  componentDidMount () {
    this.refreshList()
  }

  renderWidgets (err, widgets) {
    this.setState({
      error: err,
      widgets: widgets || []
    })
  }

  refreshList (err) {
    // console.log('this is now:', this)

    this.setState({
      error: err,
      addWidgetVisible: false
    })
    getWidgets(this.renderWidgets)
  }

  showAddWidget () {
    this.setState({
      addWidgetVisible: true
    })
  }

  showDetails (widget) {
    this.setState({
      activeWidget: widget,
      detailsVisible: true
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

  handleRefresh (e) {
    e.preventDefault()
    this.refreshList()
  }

  deleteWidgetAndRefreshList(widget) {
    tellTheApiToDeleteTheWidget(widget, () => this.refreshList())
  }

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />

        <h1>Widgets FTW!</h1>

        <WidgetList
          showDetails={this.showDetails}
          deleteWidget={this.deleteWidgetAndRefreshList}
          widgets={this.state.widgets} />

        <p>
          <a id='show-widget-link' href='#'
            onClick={this.showAddWidget}>Add widget</a>
        </p>

        {this.state.addWidgetVisible && <AddWidget
          finishAdd={this.refreshList} />}

        {this.state.detailsVisible && <WidgetDetails
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails}
          widget={this.state.activeWidget} />}

          <a href="/" onClick={this.handleRefresh}>Get the DATA!!!</a>
      </div>
    )
  }
}
