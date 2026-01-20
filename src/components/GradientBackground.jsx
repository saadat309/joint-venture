import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <ShaderGradientCanvas
        style={{
          width: '100%',
          height: '100%',
        }}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="off"
          type="plane"
          wireframe={true}
          shader="positionMix"
          uTime={13.6}
          uSpeed={0}
          uStrength={0.5}
          uDensity={15.0}
          uFrequency={0}
          uAmplitude={0}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={0}
          rotationY={0}
          rotationZ={45}
          color1="#ffffff"
          color2="#f0f0f0"
          color3="#cccccc"
          reflection={0.5}

          // View (camera) props
          cAzimuthAngle={225}
          cPolarAngle={45}
          cDistance={4}
          cameraZoom={3.5}

          // Effect props
          lightType="3d"
          brightness={1.8}
          envPreset="city"
          grain="off"

          // Tool props
          toggleAxis={false}
          zoomOut={false}
          hoverState=""

          // Optional - if using transition features
          enableTransition={false}
        />
      </ShaderGradientCanvas>
    </div>
  )
}
