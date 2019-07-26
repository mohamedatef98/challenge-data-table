var React = require('react')
var ReactPivot = require('react-pivot')
var createReactClass = require('create-react-class')

var rows = require('./data.json')

var dimensions = [
  {value: 'date', title: 'Date'},
  {value: 'host', title: 'Host'}
]

var reduce = function(row, memo){


  return memo
}


var calculations = [

]

module.exports = createReactClass({
  render () {
    return (
    <div>
      <h1>Report</h1>
      <ReactPivot 
        rows={rows}
        dimensions={dimensions}
        reduce={reduce}
        calculations={calculations}
        activeDimensions={[]}
      />
    </div>
    )
  }
})
