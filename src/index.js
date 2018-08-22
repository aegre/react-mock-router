
import React from 'react'
import PropTypes from 'prop-types'

const noop = () => {}

const MockRouterContext = React.createContext({
  router: {
    route: {
      location: '',
      match: {
        url: '',
        params: {},
        path: ''
      },
      history: {
        path: '',
        createHref: noop,
        push: noop,
        replace: noop
      }

    }
  }

})

export default class MockRouter extends React.Component {
  render () {
    const routerValue =
      {
        router: {
          route: {
            location: this.props.location,
            match: {
              url: this.props.url,
              params: this.props.params,
              path: this.props.path
            }
          },
          history: {
            path: this.props.path,
            createHref: this.props.createHref,
            push: this.props.push,
            replace: this.props.replace
          }
        }
      }

    return (
      <MockRouterContext.Provider value={routerValue} >
        {React.Children.only(this.props.children)}
      </MockRouterContext.Provider>
    )
  }
}

MockRouter.childContextTypes = {
  router: PropTypes.object
}

MockRouter.defaultProps = {
  url: '',
  location: '',
  params: {},
  path: '',
  createHref: noop,
  push: noop,
  replace: noop
}
