import React from 'react'

export function ComponenteFilhos(props) {
    return React.Children.map(props.Children, filho => {
        return React.cloneElement(filho, {...props })
    })
}