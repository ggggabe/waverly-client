import React from 'react'


export default ({ scene, sceneProps }) => {
  const Scene = scene
  const props = sceneProps || {}

  return (
    <div className="content container">
      <Scene {...sceneProps} />
    </div>
  )
}