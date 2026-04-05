"use client";

export function MeshGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Green glow */}
      <div
        className="mesh-orb mesh-orb-1"
        style={{
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(88,204,2,0.1), transparent 70%)",
          top: "-15%",
          right: "-15%",
        }}
      />
      {/* Blue glow */}
      <div
        className="mesh-orb mesh-orb-2"
        style={{
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(28,176,246,0.07), transparent 70%)",
          bottom: "5%",
          left: "-10%",
        }}
      />
      {/* Purple glow */}
      <div
        className="mesh-orb mesh-orb-3"
        style={{
          width: "35vw",
          height: "35vw",
          background: "radial-gradient(circle, rgba(206,130,255,0.05), transparent 70%)",
          top: "30%",
          left: "40%",
        }}
      />
    </div>
  );
}
