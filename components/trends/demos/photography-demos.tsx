"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ═══════════════════════════════════════════════════════
   1. Photography Style Comparison
   Side-by-side: staged corporate vs authentic 2026 style
   ═══════════════════════════════════════════════════════ */
export function PhotographyStyleComparison() {
  const [era, setEra] = useState<"corporate" | "authentic">("corporate");

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setEra("corporate")}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            era === "corporate" ? "bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30" : "bg-white/5 text-fg-muted hover:bg-white/10"
          }`}
        >
          2020 Corporate
        </button>
        <button
          onClick={() => setEra("authentic")}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            era === "authentic" ? "bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30" : "bg-white/5 text-fg-muted hover:bg-white/10"
          }`}
        >
          2026 Authentic
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={era}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="col-span-2 grid grid-cols-2 gap-4"
          >
            {era === "corporate" ? (
              <>
                <PhotoCard
                  gradient="linear-gradient(135deg, #E8F0FE, #D4E4FC)"
                  label="Hero Banner"
                  description="Clean gradient, centered, corporate blue"
                >
                  <CorporateHero />
                </PhotoCard>
                <PhotoCard
                  gradient="linear-gradient(135deg, #F0F0F0, #E8E8E8)"
                  label="Team Photo"
                  description="Studio lighting, uniform poses, staged"
                >
                  <CorporateTeam />
                </PhotoCard>
              </>
            ) : (
              <>
                <PhotoCard
                  gradient="linear-gradient(135deg, #F5EDE3, #E8D5C4)"
                  label="Hero Banner"
                  description="Warm grain, asymmetric, natural light"
                >
                  <AuthenticHero />
                </PhotoCard>
                <PhotoCard
                  gradient="linear-gradient(135deg, #E8E0D8, #D8CFC4)"
                  label="Team Photo"
                  description="Candid moments, environmental, unposed"
                >
                  <AuthenticTeam />
                </PhotoCard>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bg-white/[0.03] border border-border rounded-lg p-4">
        <p className="text-xs text-fg-muted">
          {era === "corporate"
            ? "The 2020 standard: blue gradients, centered composition, stock-photo energy, uniform team photos. Professional but interchangeable — any brand could use these images."
            : "The 2026 standard: warm tones, film grain, asymmetric composition, candid moments. These images could only belong to one brand. The imperfection IS the brand signal."
          }
        </p>
      </div>
    </div>
  );
}

function PhotoCard({ gradient, label, description, children }: {
  gradient: string;
  label: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <div className="h-36 relative" style={{ background: gradient }}>
        {children}
      </div>
      <div className="p-3 bg-bg-card">
        <div className="text-xs font-medium text-fg">{label}</div>
        <div className="text-[10px] text-fg-muted">{description}</div>
      </div>
    </div>
  );
}

/* Corporate hero: centered, blue, sanitized */
function CorporateHero() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 rounded-full bg-[#4285F4]/20 mx-auto flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#4285F4]/40" />
        </div>
        <div className="w-24 h-2 rounded-full bg-[#333]/20 mx-auto" />
        <div className="w-16 h-1.5 rounded-full bg-[#333]/10 mx-auto" />
        <div className="w-20 h-6 rounded-full bg-[#4285F4] mx-auto mt-2" />
      </div>
    </div>
  );
}

/* Corporate team: uniform grid of faces */
function CorporateTeam() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-3 p-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-[#666]/20 border-2 border-white/40" />
          <div className="w-8 h-1 rounded-full bg-[#333]/15" />
        </div>
      ))}
    </div>
  );
}

/* Authentic hero: warm, offset, textured */
function AuthenticHero() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Film grain overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none z-10">
        <filter id="authGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#authGrain)" />
      </svg>

      {/* Asymmetric layout */}
      <div className="absolute left-4 top-4 space-y-1.5 z-20">
        <div className="w-20 h-2.5 rounded-sm bg-[#2D2016]/70" />
        <div className="w-14 h-1.5 rounded-sm bg-[#2D2016]/40" />
      </div>

      {/* Off-center visual element */}
      <motion.div
        animate={{ rotate: [0, 1, -1, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-6 bottom-4 w-20 h-24 rounded-lg bg-[#C4956A]/30 border border-[#C4956A]/20"
        style={{ transform: "rotate(-3deg)" }}
      />
      <div className="absolute right-10 bottom-8 w-16 h-20 rounded-lg bg-[#A67B5B]/40 border border-[#A67B5B]/20" style={{ transform: "rotate(2deg)" }} />
    </div>
  );
}

/* Authentic team: candid, environmental */
function AuthenticTeam() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grain */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none z-10">
        <filter id="teamGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" seed="5" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#teamGrain)" />
      </svg>

      {/* Scattered, overlapping photos — not a grid */}
      <div className="absolute left-3 top-3 w-14 h-18 rounded-lg bg-[#8B7355]/30 border border-[#8B7355]/20 z-20" style={{ transform: "rotate(-5deg)" }}>
        <div className="w-8 h-8 rounded-full bg-[#A0896C]/40 mx-auto mt-2" />
      </div>
      <div className="absolute left-14 top-6 w-16 h-20 rounded-lg bg-[#7A8B6F]/25 border border-[#7A8B6F]/20 z-30" style={{ transform: "rotate(3deg)" }}>
        <div className="w-9 h-9 rounded-full bg-[#6B8060]/35 mx-auto mt-2.5" />
      </div>
      <div className="absolute right-8 top-2 w-14 h-16 rounded-lg bg-[#8B7A6B]/30 border border-[#8B7A6B]/20 z-20" style={{ transform: "rotate(-2deg)" }}>
        <div className="w-7 h-7 rounded-full bg-[#9E8C7A]/40 mx-auto mt-2" />
      </div>
      <div className="absolute right-3 bottom-2 w-12 h-14 rounded-lg bg-[#6B7B8B]/25 border border-[#6B7B8B]/20 z-10" style={{ transform: "rotate(6deg)" }}>
        <div className="w-6 h-6 rounded-full bg-[#5A6B7A]/35 mx-auto mt-1.5" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   2. Color Grading & Film Look Demo
   Show how photography post-processing has shifted
   ═══════════════════════════════════════════════════════ */
export function ColorGradingDemo() {
  const [grade, setGrade] = useState<"raw" | "warm" | "editorial" | "desaturated">("raw");

  const grades = [
    { key: "raw" as const, label: "Clean Digital", description: "High saturation, sharp, clinical" },
    { key: "warm" as const, label: "Warm Film", description: "Lifted blacks, amber highlights, analog feel" },
    { key: "editorial" as const, label: "Editorial", description: "High contrast, muted midtones, dramatic" },
    { key: "desaturated" as const, label: "Muted Natural", description: "Low saturation, soft tones, organic" },
  ];

  const getFilter = (g: string) => {
    switch (g) {
      case "raw": return "saturate(1.2) contrast(1.05)";
      case "warm": return "sepia(0.25) saturate(1.1) brightness(1.05) contrast(0.95)";
      case "editorial": return "contrast(1.3) saturate(0.8) brightness(0.95)";
      case "desaturated": return "saturate(0.5) contrast(0.9) brightness(1.05)";
      default: return "none";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {grades.map((g) => (
          <button
            key={g.key}
            onClick={() => setGrade(g.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              grade === g.key
                ? "bg-rose-500/20 text-rose-400 ring-1 ring-rose-500/30"
                : "bg-white/5 text-fg-muted hover:bg-white/10"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="relative h-52 rounded-xl overflow-hidden border border-border">
        {/* Base photo — simulated with gradient landscape */}
        <motion.div
          className="absolute inset-0"
          style={{ filter: getFilter(grade) }}
          animate={{ filter: getFilter(grade) }}
          transition={{ duration: 0.6 }}
        >
          {/* Sky */}
          <div className="absolute inset-x-0 top-0 h-[55%]" style={{
            background: "linear-gradient(180deg, #6BA4D9 0%, #A8C8E8 60%, #E8D5B8 100%)",
          }} />
          {/* Mountains */}
          <svg className="absolute bottom-0 w-full h-[60%]" viewBox="0 0 400 150" preserveAspectRatio="none">
            <path d="M0,80 L60,40 L120,70 L180,25 L240,55 L300,35 L360,60 L400,45 L400,150 L0,150Z" fill="#5A7B5A" opacity="0.7" />
            <path d="M0,100 L80,70 L140,90 L200,60 L260,80 L320,65 L400,85 L400,150 L0,150Z" fill="#4A6B4A" opacity="0.85" />
            <path d="M0,120 L50,105 L120,115 L180,100 L250,112 L340,105 L400,115 L400,150 L0,150Z" fill="#3A5A3A" />
          </svg>
          {/* Sun */}
          <div className="absolute top-8 right-16 w-12 h-12 rounded-full bg-[#FFE4B5] opacity-80 blur-sm" />
        </motion.div>

        {/* Film grain for warm/editorial/desaturated */}
        {grade !== "raw" && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ opacity: grade === "warm" ? 0.2 : grade === "editorial" ? 0.12 : 0.25 }}>
            <filter id={`gradeGrain-${grade}`}>
              <feTurbulence type="fractalNoise" baseFrequency={grade === "editorial" ? "0.5" : "0.7"} numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter={`url(#gradeGrain-${grade})`} />
          </svg>
        )}

        {/* Lifted blacks overlay for warm look */}
        {grade === "warm" && (
          <div className="absolute inset-0 z-5" style={{ background: "rgba(40, 30, 15, 0.08)" }} />
        )}

        {/* Info badge */}
        <div className="absolute bottom-3 right-3 z-20 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm">
          <div className="text-[10px] text-white/90 font-medium">{grades.find((g) => g.key === grade)?.label}</div>
          <div className="text-[9px] text-white/50">{grades.find((g) => g.key === grade)?.description}</div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   3. Brand Visual Universe Demo
   How top brands create distinctive visual identities
   ═══════════════════════════════════════════════════════ */
export function BrandVisualUniverse() {
  const [brand, setBrand] = useState<"stripe" | "notion" | "linear" | "apple">("stripe");

  const brands = [
    { key: "stripe" as const, label: "Stripe", color: "#635BFF" },
    { key: "notion" as const, label: "Notion", color: "#E8DACE" },
    { key: "linear" as const, label: "Linear", color: "#5E6AD2" },
    { key: "apple" as const, label: "Apple", color: "#FFFFFF" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {brands.map((b) => (
          <button
            key={b.key}
            onClick={() => setBrand(b.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              brand === b.key
                ? "ring-1"
                : "bg-white/5 text-fg-muted hover:bg-white/10"
            }`}
            style={brand === b.key ? {
              backgroundColor: b.color + "20",
              color: b.key === "notion" ? "#8B7A6B" : b.key === "apple" ? "#ffffff" : b.color,
              borderColor: b.color + "40",
              boxShadow: `0 0 0 1px ${b.color}40`,
            } : undefined}
          >
            {b.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={brand}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {brand === "stripe" && <StripeUniverse />}
          {brand === "notion" && <NotionUniverse />}
          {brand === "linear" && <LinearUniverse />}
          {brand === "apple" && <AppleUniverse />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function StripeUniverse() {
  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <div className="h-48 relative" style={{ background: "linear-gradient(135deg, #0A2540 0%, #1B3A5C 50%, #425B76 100%)" }}>
        {/* Floating gradient orbs — Stripe's signature */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-40 h-40 rounded-full opacity-30 blur-2xl"
          style={{ background: "#635BFF", top: -20, right: -20 }}
        />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-32 h-32 rounded-full opacity-20 blur-2xl"
          style={{ background: "#80E9FF", bottom: -10, left: 20 }}
        />
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute w-24 h-24 rounded-full opacity-25 blur-xl"
          style={{ background: "#FF6B6B", top: 20, left: "40%" }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center p-8 z-10">
          <div>
            <div className="text-white/40 text-[10px] tracking-widest uppercase mb-2">Stripe&apos;s Visual Language</div>
            <div className="text-white text-lg font-medium mb-1">Precision meets warmth</div>
            <div className="text-white/50 text-xs max-w-[260px]">Gradient orbs, dark foundations, technical typography. Every shadow and glow is calculated to convey financial trust with modern energy.</div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-bg-card">
        <div className="flex gap-3 items-start">
          <div className="flex gap-1.5">
            {["#635BFF", "#0A2540", "#80E9FF", "#FF6B6B", "#00D4AA"].map((c) => (
              <div key={c} className="w-5 h-5 rounded-md border border-white/10" style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="text-[10px] text-fg-muted flex-1">5-color system. Dark foundations + luminous accents. The gradient orbs are Stripe's most distinctive asset — no competitor can replicate them without looking derivative.</div>
        </div>
      </div>
    </div>
  );
}

function NotionUniverse() {
  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <div className="h-48 relative" style={{ background: "#FFFFFF" }}>
        {/* Warm, analog aesthetic */}
        <svg className="absolute inset-0 w-full h-full opacity-8 pointer-events-none">
          <filter id="notionTexture">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#notionTexture)" opacity="0.06" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center gap-6 p-6 z-10">
          {/* Notion's hand-drawn style illustration */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md border-2 border-[#37352F] flex items-center justify-center text-sm">📝</div>
              <div className="w-20 h-2 rounded bg-[#37352F]/20" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md border-2 border-[#37352F] flex items-center justify-center text-sm">📊</div>
              <div className="w-16 h-2 rounded bg-[#37352F]/15" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md border-2 border-[#37352F] flex items-center justify-center text-sm">🎨</div>
              <div className="w-24 h-2 rounded bg-[#37352F]/10" />
            </div>
          </div>

          <div className="text-right">
            <div className="text-[#37352F]/40 text-[10px] tracking-widest uppercase mb-2">Notion&apos;s Visual Language</div>
            <div className="text-[#37352F] text-lg font-serif mb-1">Nostalgic warmth</div>
            <div className="text-[#37352F]/50 text-xs max-w-[200px]">Sepia tones, hand-drawn doodles, serif typography. Feels like a notebook, not software.</div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-bg-card">
        <div className="flex gap-3 items-start">
          <div className="flex gap-1.5">
            {["#37352F", "#F7F6F3", "#E8DACE", "#EB5757", "#2F80ED"].map((c) => (
              <div key={c} className="w-5 h-5 rounded-md border border-white/10" style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="text-[10px] text-fg-muted flex-1">Near-black text on warm off-white. The beige undertone distinguishes Notion from every other productivity tool. It feels human.</div>
        </div>
      </div>
    </div>
  );
}

function LinearUniverse() {
  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <div className="h-48 relative overflow-hidden" style={{ background: "#101014" }}>
        {/* Subtle purple glow */}
        <div className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#5E6AD2", top: "-30%", left: "30%" }} />

        {/* Grid lines — Linear's signature */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(8)].map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 24 + 12} x2="100%" y2={i * 24 + 12} stroke="#5E6AD2" strokeWidth="0.5" />
          ))}
          {[...Array(16)].map((_, i) => (
            <line key={`v-${i}`} x1={i * 32} y1="0" x2={i * 32} y2="100%" stroke="#5E6AD2" strokeWidth="0.5" />
          ))}
        </svg>

        <div className="absolute inset-0 flex items-center p-8 z-10">
          <div>
            <div className="text-white/30 text-[10px] tracking-widest uppercase mb-2">Linear&apos;s Visual Language</div>
            <div className="text-white text-lg font-medium mb-1">Monochrome precision</div>
            <div className="text-white/40 text-xs max-w-[260px]">Near-black backgrounds, minimal color, grid discipline. The absence of decoration IS the design statement. Every pixel is deliberate.</div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-bg-card">
        <div className="flex gap-3 items-start">
          <div className="flex gap-1.5">
            {["#101014", "#5E6AD2", "#F2F2F2", "#EF4444", "#8B5CF6"].map((c) => (
              <div key={c} className="w-5 h-5 rounded-md border border-white/10" style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="text-[10px] text-fg-muted flex-1">Purple as brand accent in a monochrome world. Red only for destructive actions. This constraint creates instant recognition — you know it&apos;s Linear in 100ms.</div>
        </div>
      </div>
    </div>
  );
}

function AppleUniverse() {
  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <div className="h-48 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #000000 0%, #1A1A1A 100%)" }}>
        {/* Product spotlight */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Dramatic spotlight from above */}
          <div className="absolute w-48 h-32 rounded-full opacity-10 blur-2xl" style={{ background: "#FFFFFF", top: "-20%" }} />

          {/* Simulated product silhouette */}
          <div className="relative">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-28 h-20 rounded-2xl bg-gradient-to-b from-[#333] to-[#1A1A1A] border border-[#444] shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent" />
              <div className="absolute inset-2 rounded-xl bg-[#0A0A0A] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#666]" />
              </div>
            </motion.div>
            {/* Reflection */}
            <div className="w-28 h-8 mx-auto mt-1 rounded-2xl bg-gradient-to-b from-[#222]/30 to-transparent blur-sm" style={{ transform: "scaleY(-0.3)" }} />
          </div>
        </div>

        {/* Text */}
        <div className="absolute bottom-4 left-0 right-0 text-center z-10">
          <div className="text-white/30 text-[10px] tracking-widest uppercase mb-1">Apple&apos;s Visual Language</div>
          <div className="text-white text-lg font-light tracking-tight">Theatrical restraint</div>
        </div>
      </div>
      <div className="p-4 bg-bg-card">
        <div className="flex gap-3 items-start">
          <div className="flex gap-1.5">
            {["#000000", "#FFFFFF", "#0071E3", "#F5F5F7", "#1D1D1F"].map((c) => (
              <div key={c} className="w-5 h-5 rounded-md border border-white/10" style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="text-[10px] text-fg-muted flex-1">Three colors. Black for product drama, white for content, blue for interaction. Photography is the only expression — every shadow, reflection, and highlight is choreographed.</div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   4. Product Photography Styling Demo
   Context vs clinical product shots
   ═══════════════════════════════════════════════════════ */
export function ProductPhotoStyling() {
  const [mode, setMode] = useState<"clinical" | "lifestyle" | "editorial">("clinical");

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(["clinical", "lifestyle", "editorial"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all capitalize ${
              mode === m ? "bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/30" : "bg-white/5 text-fg-muted hover:bg-white/10"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-52 rounded-xl overflow-hidden border border-border relative"
        >
          {mode === "clinical" && (
            <div className="absolute inset-0 bg-white flex items-center justify-center">
              {/* Product on white — e-commerce standard */}
              <div className="w-24 h-32 rounded-xl bg-gradient-to-b from-[#E8E8E8] to-[#D0D0D0] shadow-lg relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/30 to-transparent" />
                <div className="absolute bottom-2 left-0 right-0 text-center text-[8px] text-[#999]">Product Name</div>
              </div>
              <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-[#f0f0f0] text-[10px] text-[#666]">
                White background. No context. Functional but forgettable.
              </div>
            </div>
          )}

          {mode === "lifestyle" && (
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #F5EDE3, #E8D5C4)" }}>
              {/* Film grain */}
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none z-10">
                <filter id="lifestyleGrain">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#lifestyleGrain)" />
              </svg>

              {/* Product in context */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 p-6 z-20">
                {/* Coffee mug (prop) */}
                <div className="w-10 h-12 rounded-b-lg bg-[#C4956A]/40 border border-[#C4956A]/30 relative">
                  <div className="absolute -right-2 top-2 w-3 h-5 rounded-r-full border-r-2 border-t-2 border-b-2 border-[#C4956A]/30" />
                </div>

                {/* Product */}
                <motion.div
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="w-20 h-28 rounded-xl bg-gradient-to-b from-[#D4B896] to-[#C4A882] shadow-xl relative"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent" />
                </motion.div>

                {/* Plant (prop) */}
                <div className="w-8 h-14 relative">
                  <div className="absolute bottom-0 w-6 h-6 rounded-md bg-[#A67B5B]/40 mx-auto left-1" />
                  <div className="absolute bottom-4 left-2 w-4 h-8 rounded-full bg-[#81B29A]/50" style={{ transform: "rotate(-10deg)" }} />
                  <div className="absolute bottom-6 left-3 w-3 h-6 rounded-full bg-[#6B9080]/40" style={{ transform: "rotate(15deg)" }} />
                </div>
              </div>

              <div className="absolute bottom-3 left-3 z-30 px-2 py-1 rounded bg-[#2D2016]/60 text-[10px] text-white/80">
                In context. Props tell a story. The product has a life.
              </div>
            </div>
          )}

          {mode === "editorial" && (
            <div className="absolute inset-0" style={{ background: "#0A0A0A" }}>
              {/* Dramatic lighting on product */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Spotlight */}
                <div className="absolute w-40 h-40 rounded-full blur-3xl opacity-15" style={{ background: "#FFD4B2", top: "-20%", left: "30%" }} />

                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative"
                >
                  <div className="w-24 h-32 rounded-xl bg-gradient-to-b from-[#333] to-[#1A1A1A] shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                  </div>
                  {/* Dramatic shadow */}
                  <div className="absolute -bottom-4 left-2 right-2 h-6 rounded-full bg-black/30 blur-md" />
                </motion.div>
              </div>

              <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-white/10 text-[10px] text-white/60">
                Editorial. Dramatic lighting. The product is the hero.
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
