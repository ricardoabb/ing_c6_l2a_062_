export default function Floor() {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -3, 0]} receiveShadow>
      <circleGeometry args={[4]} />
      <meshLambertMaterial  color={0x17304E}   />
    </mesh>
  )
}