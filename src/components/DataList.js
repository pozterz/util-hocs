import React from 'react'
import withLoading from './withLoading'

const DataList = ({
  propsToDataList
}) => {
  return (
    <div>
      I'm List with { propsToDataList }
    </div>
  )
}

export default withLoading(DataList)
