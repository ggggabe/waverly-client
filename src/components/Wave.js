import React, { useRef, useEffect } from 'react'
import SimplexNoise from 'simplex-noise'

export const Wave = ({
  spacing,
  amplitude
}) => {
  const canvasRef = useRef(null)
  const [amplitude1, amplitude2] = amplitude
  const noise = new SimplexNoise(Math.random())

  let t = 0

  useEffect(() => {
    const canvas = canvasRef.current

    Object.assign(canvas, {
      width: canvas.offsetWidth,
      height: canvas.offsetHeight
    })

    const { width, height } = canvas
    const columns = width / spacing.x

    const wave = (x, y, height) =>
      (Math.sin(x / 10) * amplitude1) + (height / spacing.y / 2) + (noise.noise2D((t / 100) + x / 20, 1) * amplitude2)

    let requestId
    const render = () => {
      const c = canvas.getContext("2d")
      c.clearRect(0, 0, width, height)
      c.fillStyle = '#ffffff'

      for (let i = 0;i < columns;i++) {
        for (let j = 0;j < wave(i, j, height);j++) {
          c.fillRect(i * spacing.x, height - (j * spacing.y), 2, 2)
        }
      }

      t++
      requestId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(requestId)
    }
  }, [canvasRef, t, amplitude1, amplitude2, spacing, noise])

  return <canvas id="wave" ref={canvasRef}></canvas>
}
