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


  var currentLoads = (memo.loads || 0)
  memo.loads = row.type === 'load' ? currentLoads + 1 : currentLoads

  var currentDisplays = (memo.displays || 0)
  memo.displays = row.type === 'display' ? currentDisplays + 1 : currentDisplays

  return memo
}


var calculations = [
  {title: 'Impressions', value: function(memo) {return memo.impressions}},
  {title: 'Loads', value: function(memo) {return memo.loads}},
  {title: 'Displays', value: function(memo) {return memo.displays}},
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
