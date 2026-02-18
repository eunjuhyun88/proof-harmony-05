import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SNAP = [0.16, 1, 0.3, 1] as const;

export default function AgentsLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 md:px-10 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 glow-acc pointer-events-none" />
        <div className="max-w-[1100px] mx-auto relative z-10">
          <motion.div className="font-mono text-xs text-muted-foreground tracking-widest mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>[ AGENT_VERIFICATION ]</motion.div>
          <motion.h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3 leading-tight" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: SNAP }}>
            에이전트 경제를 위한<br /><span className="text-accent">신뢰 인프라</span>
          </motion.h1>
          <motion.p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ease: SNAP }}>
            자율 에이전트에는 코드 이상의 것이 필요합니다. 책임질 수 있는 사람이 뒤에 있어야 합니다. HOOT은 에이전트 역량을 인간 신뢰와 연결합니다.
          </motion.p>
          <motion.div className="flex gap-3 flex-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <a href="#" className="px-6 py-3 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all">에이전트 등록</a>
            <a href="#" className="px-6 py-3 rounded-lg bg-secondary text-foreground text-sm border border-border hover:bg-secondary/80 transition-all">크레덴셜 받기</a>
          </motion.div>
        </div>
      </section>

      {/* Gap */}
      <section className="py-20 px-6 md:px-10 border-b border-border">
        <div className="max-w-[1100px] mx-auto">
          <motion.div className="font-mono text-xs text-destructive tracking-widest mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>[ CRITICAL_GAP ]</motion.div>
          <motion.h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
            일주일 만에 120만 개의 미검증 에이전트
          </motion.h2>
          <motion.p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            에이전트 경제는 신뢰 인프라보다 빠르게 성장하고 있습니다. 현재 솔루션은 신원, 보안, 피드백 중 하나만 검증합니다. 전체 그림이 아닙니다.
          </motion.p>
          <motion.div className="bg-card border-2 border-border rounded-xl p-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, ease: SNAP }}>
            <p className="text-sm font-bold uppercase tracking-tight">
              HOOT은 전체 스택을 검증합니다: 코드, 보안, 성능, 온체인 이력 — 그리고 그것을 만든 사람.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credential */}
      <section className="py-20 px-6 md:px-10 border-b border-border">
        <div className="max-w-[1100px] mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
            한 번 신뢰를 구축하세요. 어디서든 배포하세요.
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div className="bg-card border border-border rounded-xl overflow-hidden" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
              <div className="px-5 py-3 border-b border-border bg-secondary font-mono text-xs font-bold">AGENT_CREDENTIAL</div>
              <div className="p-5 space-y-4">
                <div className="font-mono text-[10px] font-bold text-muted-foreground tracking-widest">당신의 신뢰 → 에이전트의 신뢰</div>
                <div className="space-y-2">
                  {["코드 검증됨", "보안 스캔 완료", "성능 테스트 통과", "당신으로부터 신뢰 상속"].map((item, i) => (
                    <motion.div key={i} className="flex items-center gap-2 text-sm" initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.06, ease: SNAP }}>
                      <span className="text-hoot-green font-bold">✓</span> {item}
                    </motion.div>
                  ))}
                </div>
                <div className="border-t border-border pt-3 font-mono text-xs space-y-1">
                  <p className="font-bold">책임 있는 자율성.</p>
                  <p className="text-muted-foreground">에이전트 성공 → 당신의 신뢰 상승.</p>
                  <p className="text-muted-foreground">에이전트 실패 → 당신의 신뢰에 영향.</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-center" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, ease: SNAP }}>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                다른 에이전트와 서비스가 당신의 에이전트 뒤에 실제 실적을 가진 책임 있는 인간이 있음을 검증할 수 있습니다.
              </p>
              <div className="bg-secondary border border-border rounded-lg p-4 mb-4">
                <p className="text-sm font-bold uppercase tracking-tight">당신의 신뢰가 에이전트를 따라갑니다.</p>
              </div>
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="px-3 py-2 bg-secondary border-b border-border font-mono text-[10px] font-bold text-muted-foreground tracking-widest">TWO_TRACKS</div>
                <div className="p-3 border-b border-border flex justify-between items-start">
                  <div><div className="text-xs font-bold">TRACK A: 외부 에이전트</div><div className="font-mono text-[10px] text-muted-foreground">ERC-8004 기술 검증</div></div>
                  <span className="font-mono text-[10px] font-bold border border-border px-2 py-0.5 shrink-0">50–300 HOOTS</span>
                </div>
                <div className="p-3 flex justify-between items-start">
                  <div><div className="text-xs font-bold">TRACK B: 네이티브 에이전트</div><div className="font-mono text-[10px] text-muted-foreground">Hoot Browser 내장. 전체 신뢰 상속.</div></div>
                  <span className="font-mono text-[10px] font-bold border border-border px-2 py-0.5 shrink-0">포함</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-10 text-center">
        <motion.div className="bg-card border border-border rounded-xl p-6 max-w-lg mx-auto mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
          <p className="font-mono text-sm text-muted-foreground">
            ERC-8004에 30K+ 에이전트. <span className="text-destructive font-bold">검증된 것: 0개.</span> 첫 번째가 되세요.
          </p>
        </motion.div>
        <motion.div className="flex gap-3 justify-center flex-wrap" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <a href="#" className="px-8 py-3.5 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all">에이전트 등록</a>
          <Link to="/" className="px-8 py-3.5 rounded-lg bg-secondary text-foreground text-sm border border-border hover:bg-secondary/80 transition-all">브라우저 다운로드</Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
