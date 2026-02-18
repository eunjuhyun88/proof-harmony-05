import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SNAP = [0.16, 1, 0.3, 1] as const;

const PIPELINE = [
  { num: "01", icon: "📸", title: "AI 사용 + 캡처", desc: "Hoot Browser로 AI를 평소처럼 사용. zkTLS가 TLS 세션을 자동 캡처." },
  { num: "02", icon: "🔐", title: "5-of-5 검증", desc: "150+ 노드 중 무작위 5개 Notary 노드가 FROST 서명으로 전원 합의." },
  { num: "03", icon: "📄", title: "PPAP NFT 발행", desc: "검증 완료 시 PPAP NFT가 온체인 발행. 소유권이 사용자에게 귀속." },
  { num: "04", icon: "⚗️", title: "학습 데이터 변환", desc: "OpenHoo Agent가 PPAP를 SFT/DPO/ORPO 포맷으로 자동 변환." },
  { num: "05", icon: "🤖", title: "원클릭 학습", desc: "\"학습 시작\" 버튼 하나. GPU 자동 감지, 모델 추천, LoRA 자동화." },
  { num: "06", icon: "💰", title: "거래 & 수익", desc: "DATA HUB에서 거래. Creator 60% 자동 분배. 파생 모델 로열티." },
];

const PHASES = [
  { phase: "Phase A", title: "Verified Capture", desc: "\"이 데이터는 진짜다\" — zkTLS + FROST로 암호학적 진위 증명.", color: "text-accent", bg: "bg-accent/5 border-accent/15" },
  { phase: "Phase B", title: "Learning Data", desc: "\"딸깍\" — 검증된 데이터를 원클릭으로 AI 학습에 활용.", color: "text-hoot-blue", bg: "bg-hoot-blue/5 border-hoot-blue/15" },
  { phase: "Phase C", title: "Market", desc: "\"내 데이터가 돈이 된다\" — DATA HUB. Creator 60% 자동 수익.", color: "text-hoot-purple", bg: "bg-hoot-purple/5 border-hoot-purple/15" },
];

export default function ProtocolLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 md:px-10 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 glow-acc pointer-events-none" />
        <div className="max-w-[1100px] mx-auto relative z-10">
          <motion.div className="font-mono text-xs text-accent tracking-widest mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: SNAP }}>
            Product Guide v1.0 · 2026-02-18
          </motion.div>
          <motion.h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3 leading-tight" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: SNAP }}>
            HOOT Protocol<br /><span className="text-accent italic">Product Guide</span>
          </motion.h1>
          <motion.p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ease: SNAP }}>
            전체 동작 원리부터 각 기능의 역할까지. 개발자·투자자·운영자 모두를 위한 레퍼런스.
          </motion.p>
          <motion.div className="flex gap-2 flex-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            {["Phase A — Verified Capture", "Phase B — Learning Data", "Phase C — Market", "Hoot Browser", "PPAP NFT", "HOOT Token"].map(t => (
              <span key={t} className="font-mono text-[10px] px-2 py-1 rounded bg-secondary border border-border text-muted-foreground">{t}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-20 px-6 md:px-10 border-b border-border">
        <div className="max-w-[1100px] mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
            전체 동작 흐름
          </motion.h2>
          <motion.p className="text-sm text-muted-foreground max-w-xl mb-10 leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            사용자가 AI를 쓰는 행위 자체를 검증 가능한 자산으로 변환하는 6단계 파이프라인.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-xl overflow-hidden mb-8">
            {PIPELINE.map((s, i) => (
              <motion.div key={s.num} className="bg-card p-5 hover:bg-secondary transition-colors" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, ease: SNAP }}>
                <div className="font-mono text-[9px] text-muted-foreground mb-2">{s.num}</div>
                <div className="text-xl mb-2">{s.icon}</div>
                <h4 className="text-xs font-semibold mb-1">{s.title}</h4>
                <p className="font-mono text-[10px] text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-hoot-blue/5 border border-hoot-blue/15 rounded-lg p-4 text-sm text-hoot-blue">
            <strong>핵심 루프:</strong> 사용자가 하는 일은 두 가지뿐 — ① Hoot Browser로 AI를 쓴다. ② 원할 때 "학습 시작"을 누른다.
          </div>

          <div className="grid md:grid-cols-3 gap-3 mt-6">
            {PHASES.map((p, i) => (
              <motion.div key={p.phase} className={`border rounded-xl p-5 ${p.bg}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, ease: SNAP }}>
                <div className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${p.color}`}>{p.phase}</div>
                <h4 className="text-sm font-bold mb-2">{p.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
            검증된 데이터.<br />신뢰할 수 있는 에이전트.<br /><span className="text-accent">HOOT 위에서.</span>
          </motion.h2>
          <motion.div className="flex gap-3 justify-center flex-wrap" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <a href="#" className="px-6 py-3 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all">개발자 문서</a>
            <a href="#" className="px-6 py-3 rounded-lg bg-secondary text-foreground text-sm border border-border hover:bg-secondary/80 transition-all">화이트페이퍼</a>
          </motion.div>
          <motion.div className="mt-8 flex flex-wrap gap-4 justify-center font-mono text-[10px] text-muted-foreground" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <span>NVIDIA_INCEPTION</span><span>·</span><span>GOOGLE_STARTUPS</span><span>·</span><span>ALCHEMY</span><span>·</span><span>ARBITRUM</span>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
