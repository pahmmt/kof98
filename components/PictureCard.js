import { useEffect, useRef, useState } from 'react'

export default function PictureCard({ pictureSrc, frameSrc, title, className = '' }) {
  const canvasRef = useRef(null)
  const [base64Img, setBase64Img] = useState(null)

  function openBase64InNewTab(data, mimeType) {
    var byteCharacters = atob(data)
    var byteNumbers = new Array(byteCharacters.length)
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    var byteArray = new Uint8Array(byteNumbers)
    var file = new Blob([byteArray], { type: mimeType + ';base64' })
    var fileURL = URL.createObjectURL(file)
    window.open(fileURL)
  }

  const openImageNewTab = () => {
    if (base64Img) {
      console.log(base64Img)
      openBase64InNewTab(base64Img, 'image/png')
    }
  }

  useEffect(() => {
    const drawImage = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d', {
        willReadFrequently: true,
      })
      const img = new Image()
      img.src = pictureSrc
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0, img.width, img.height)
        const imageData = ctx.getImageData(0, 0, img.width, img.height)
        const data = new Uint8ClampedArray(imageData.data.buffer)
        for (var y = 0; y < canvas.height; y++) {
          for (var x = 0; x < canvas.width; x++) {
            if (x < 11 || x >= 356 || y < 43 || y >= 507) {
              var i = (y * canvas.width + x) * 4
              data[i + 3] = 0 // alpha = 0
            }
          }
        }
        ctx.putImageData(new ImageData(data, img.width, img.height), 0, 0)
        if (frameSrc && title) {
          const frame = new Image()
          frame.src = frameSrc
          frame.onload = () => {
            ctx.drawImage(frame, -5, 5, frame.width, frame.height)
            ctx.font = 'italic bold 20px "Segoe UI", sans-serif'
            ctx.fillStyle = 'white'
            ctx.strokeStyle = 'black'
            ctx.lineWidth = 4
            ctx.lineJoin = 'round'
            ctx.miterLimit = 2.5
            ctx.textBaseline = 'middle'
            const textWidth = ctx.measureText(title).width
            const x = (canvas.width - textWidth + 28) / 2
            const y = 36
            ctx.strokeText(title, x, y)
            ctx.fillText(title, x, y)
            setBase64Img(canvas.toDataURL().split(';base64,')[1])
          }
          frame.onerror = () => {
            console.error('Error loading frame image')
          }
        } else {
          setBase64Img(canvas.toDataURL('png').split(';base64,')[1])
        }
      }
      img.onerror = () => {
        console.error('Error loading image')
      }
    }
    drawImage()
  }, [pictureSrc, frameSrc, title])

  return (
    <div className={className}>
      <canvas
        ref={canvasRef}
        width="371"
        height="520"
        className="w-full cursor-pointer"
        onClick={openImageNewTab}
      />
    </div>
  )
}
