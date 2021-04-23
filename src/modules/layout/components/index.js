// eslint-disable-next-line
import { React, style, fontNeuzeit, PropTypes } from '../dependencies.js' 

import GlobalContext from '../services/context'

import Body from "../components/Body"

const LayoutResolver = ({ children, data }) => {

  return (
    <GlobalContext.Consumer>
      { value => (
        <Body>
          
           {children}

        </Body>
      )}
    </GlobalContext.Consumer>
  )
}

LayoutResolver.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutResolver