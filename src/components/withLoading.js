import React from 'react'
import Loading from 'react-loading-components'; // my fav loading
import PropTypes from 'prop-types'

const withLoading = C => {
  return ({ isLoading, ...props }) => {
    if(!isLoading) {
      return <C { ...props } />
    }

    return <Loading type='tail_spin' fill='#f00'/>
  }
}

withLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default withLoading
