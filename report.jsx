var React = require('react')
var ReactPivot = require('react-pivot')
var createReactClass = require('create-react-class')

var rows = require('./data.json')

var dimensions = [
  {value: 'date', title: 'Date'},
  {value: 'host', title: 'Host'}
]

var reduce = function(row, memo){
  var currentImpressions = (memo.impressions || 0)
  memo.impressions = row.type === 'impression' ? currentImpressions + 1 : currentImpressions

  return memo
}


var calculations = [
  {title: 'Impressions', value: function(memo) {return memo.impressions}}
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
        activeDimensions={['Date', 'Host']}
      />
    </div>
    )
  }
})
