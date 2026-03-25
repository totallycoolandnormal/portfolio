"use client";

export function MeshGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Electric violet */}
      <div
        className="mesh-orb mesh-orb-1"
        style={{
          width: "45vw",
          height: "45vw",
          background: "radial-gradient(circle, rgba(108,99,255,0.12), transparent 70%)",
          top: "-10%",
          right: "-10%",
        }}
      />
      {/* Hot pink */}
      <div
        className="mesh-orb mesh-orb-2"
        style={{
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(255,99,132,0.08), transparent 70%)",
          bottom: "10%",
          left: "-5%",
        }}
      />
      {/* Cyan */}
      <div
        className="mesh-orb mesh-orb-3"
        style={{
          width: "35vw",
          height: "35vw",
          background: "radial-gradient(circle, rgba(0,210,255,0.06), transparent 70%)",
          top: "40%",
          left: "30%",
        }}
      />
    </div>
  );
}
