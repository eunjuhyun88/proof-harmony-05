import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { BrowserDemo } from "@/components/hoot/BrowserDemo";
import { motion } from "framer-motion";
import { useState } from "react";

const SNAP = [0.16, 1, 0.3, 1] as const;

/* ── Stagger helper ── */
function Stagger({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}
function SItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: SNAP } } }}>
      {children}
    </motion.div>
  );
}

/* ═══ HERO ═══ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-10 pt-20 pb-20 overflow-hidden">
      <div className="absolute inset-0 glow-hero pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Eyebrow */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs text-accent tracking-wider mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ease: SNAP }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-hoot-green animate-pulse-dot" />
          퍼블릭 베타 준비 중 · 2026
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: SNAP }}
        >
          AI를 쓸수록
        </motion.h1>
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: SNAP }}
        >
          <span className="text-accent">자산이 쌓인다</span>
        </motion.h1>
        <motion.div
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-foreground/15"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.12)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: SNAP }}
        >
          HOOT PROTOCOL
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto mt-6 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, ease: SNAP }}
        >
          지금까지 당신의 AI 대화는 <strong className="text-foreground">AI 회사의 자산</strong>이 됐습니다.
          <br />
          HOOT은 그 구조를 바꿉니다. 같은 대화가 <strong className="text-foreground">당신의 소유물</strong>이 됩니다.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex gap-3 justify-center flex-wrap mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, ease: SNAP }}
        >
          <button
            onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-lg bg-accent text-white font-semibold text-sm tracking-tight hover:bg-accent/90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
          >
            작동 방식 보기
          </button>
          <button
            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-lg bg-secondary text-foreground font-medium text-sm border border-border hover:bg-secondary/80 transition-all"
          >
            자주 묻는 질문
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex gap-12 justify-center flex-wrap pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, ease: SNAP }}
        >
          {[
            { val: "10억", label: "총 토큰 발행량" },
            { val: "60%", label: "데이터 판매 수익 귀속" },
            { val: "4가지", label: "데이터 라이선스 유형" },
            { val: "0원", label: "사용자 초기 비용" },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.06, ease: SNAP }}
            >
              <div className="font-mono text-2xl font-medium text-foreground tracking-tight">{s.val}</div>
              <div className="font-mono text-[10px] text-muted-foreground mt-1 uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, ease: SNAP }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-border to-transparent animate-scroll-line" />
        <span className="font-mono text-[9px] text-muted-foreground tracking-widest uppercase">스크롤</span>
      </motion.div>
    </section>
  );
}

/* ═══ HOW IT WORKS ═══ */
const FLOW_STEPS = [
  { num: "01", icon: "🌐", title: "Hoot Browser 설치", desc: "Chromium 기반 브라우저를 설치하고 지갑을 연결합니다. 기존 Chrome 사용자라면 5분이면 됩니다.", tag: "무료 · 오픈소스", tagColor: "text-accent bg-accent/10" },
  { num: "02", icon: "💬", title: "평소처럼 AI 사용", desc: "ChatGPT, Claude, Gemini 등을 평소처럼 사용합니다. 브라우저가 자동으로 대화를 암호화해서 기록합니다.", tag: "자동 수집", tagColor: "text-hoot-green bg-hoot-green/10" },
  { num: "03", icon: "🔐", title: "PPAP로 검증", desc: "분산 노드들이 대화가 실제 인간이 작성했음을 암호학적으로 증명합니다. 내용은 공개되지 않습니다.", tag: "ZK 증명", tagColor: "text-hoot-purple bg-hoot-purple/10" },
  { num: "04", icon: "💰", title: "데이터 판매 & 수익", desc: "DATA HUB에 올리면 AI 기업들이 구매합니다. 판매액의 60%가 자동으로 내 지갑에 들어옵니다.", tag: "수익 60%", tagColor: "text-hoot-gold bg-hoot-gold/10" },
];

function HowItWorksSection() {
  return (
    <section id="how" className="py-24 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <motion.span
          className="font-mono text-xs text-accent tracking-widest uppercase block mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          작동 방식
        </motion.span>
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: SNAP }}
        >
          4단계로 끝납니다
        </motion.h2>
        <motion.p
          className="text-base text-muted-foreground max-w-lg mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, ease: SNAP }}
        >
          복잡한 설정 없이, 평소처럼 AI를 사용하세요. HOOT이 나머지를 처리합니다.
        </motion.p>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden" delay={0.1}>
          {FLOW_STEPS.map((s) => (
            <SItem key={s.num}>
              <div className="bg-card p-6 h-full hover:bg-secondary transition-colors">
                <span className="font-mono text-xs text-muted-foreground">{s.num}</span>
                <div className="text-3xl mt-4 mb-3">{s.icon}</div>
                <h3 className="text-base font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                <span className={`font-mono text-[10px] px-2 py-1 rounded ${s.tagColor}`}>{s.tag}</span>
              </div>
            </SItem>
          ))}
        </Stagger>

        {/* Highlight box */}
        <motion.div
          className="mt-10 bg-card border border-border rounded-2xl p-7 flex items-start gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, ease: SNAP }}
        >
          <div className="text-3xl shrink-0">🦉</div>
          <div>
            <h4 className="text-base font-bold mb-2">Use AI. Train AI. Own AI.</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              HOOT의 핵심 철학입니다. AI를 사용하는 행위 자체가 데이터를 만들고, 그 데이터로 AI를 학습시키며, 그 AI의 소유권을 당신이 갖습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ PPAP ═══ */
function PPAPSection() {
  return (
    <section id="ppap" className="py-24 px-6 md:px-10 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        <motion.span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          핵심 기술
        </motion.span>
        <motion.h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
          PPAP란 무엇인가
        </motion.h2>
        <motion.p className="text-base text-muted-foreground max-w-xl mb-14 leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, ease: SNAP }}>
          Proof of Personal AI Participation. 당신이 직접 AI와 대화했다는 사실을 암호학적으로 증명하는 기술입니다.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Why needed */}
          <motion.div className="bg-card border border-border rounded-2xl p-6 border-t-2 border-t-accent" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
            <h3 className="text-base font-bold mb-2">🔐 왜 필요한가</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">AI 학습 데이터 시장에서 가장 큰 문제는 "이 데이터가 진짜 인간이 만든 것인가?"입니다.</p>
            <div className="space-y-2">
              {[
                { n: "1", t: "zkTLS로 TLS 세션 키 분할", d: "브라우저와 검증 노드 사이에 세션 키를 분할합니다." },
                { n: "2", t: "VRF 기반 무작위 노드 선정", d: "150+ 노드 중 5개를 무작위로 선정합니다." },
                { n: "3", t: "FROST 5-of-5 전원 합의", d: "5개 노드 전원이 서명해야만 통과합니다." },
                { n: "4", t: "PPAP NFT 발행 (4계층)", d: "검증 완료 시 온체인 NFT로 발행됩니다." },
              ].map((step) => (
                <div key={step.n} className="flex gap-3 items-start p-3 bg-secondary rounded-lg">
                  <div className="w-5 h-5 rounded-full border border-accent/40 text-accent flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">{step.n}</div>
                  <div>
                    <div className="text-xs font-semibold">{step.t}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{step.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quality score */}
          <motion.div className="bg-card border border-border rounded-2xl p-6 border-t-2 border-t-hoot-green" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, ease: SNAP }}>
            <h3 className="text-base font-bold mb-2">📊 품질 점수 (CQS)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">모든 데이터에 0-100점의 품질 점수가 붙습니다. 높은 점수 = 높은 가격.</p>
            <div className="space-y-2">
              {[
                { n: "40%", t: "복잡성 (Complexity)", d: "멀티스텝 추론이 포함된 심층 대화일수록 높습니다." },
                { n: "40%", t: "학습 유용성 (Learning Utility)", d: "수정, 재시도, 피드백이 많을수록 높습니다." },
                { n: "10%", t: "다양성 (Multilingual)", d: "여러 언어나 주제를 포함할수록 높습니다." },
                { n: "10%", t: "정확성 (Accuracy)", d: "사실에 기반한 정확한 정보일수록 높습니다." },
              ].map((step) => (
                <div key={step.t} className="flex gap-3 items-start p-3 bg-secondary rounded-lg">
                  <div className="w-5 h-5 rounded-full border border-hoot-green/40 text-hoot-green flex items-center justify-center font-mono text-[9px] shrink-0 mt-0.5">{step.n}</div>
                  <div>
                    <div className="text-xs font-semibold">{step.t}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{step.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══ MARKETPLACE / LICENSE ═══ */
const LICENSES = [
  { badge: "RAG", mult: "×1", name: "검색 참조용", desc: "AI가 검색 참고 자료로만 사용합니다.", color: "text-muted-foreground" },
  { badge: "SFT", mult: "×3", name: "파인튜닝용", desc: "AI를 내 데이터로 파인튜닝합니다.", color: "text-hoot-blue" },
  { badge: "Pre-Train", mult: "×10", name: "사전학습용", desc: "AI를 처음부터 학습시키는 기초 데이터.", color: "text-hoot-purple" },
  { badge: "Exclusive", mult: "×100", name: "독점 사용", desc: "구매자만 독점으로 사용합니다.", color: "text-hoot-gold" },
];

function MarketSection() {
  return (
    <section id="market" className="py-24 px-6 md:px-10 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        <motion.span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>마켓플레이스</motion.span>
        <motion.h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
          데이터를 파는 4가지 방법
        </motion.h2>
        <motion.p className="text-base text-muted-foreground max-w-lg mb-14 leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, ease: SNAP }}>
          용도와 독점 여부에 따라 4가지 라이선스 중 선택합니다.
        </motion.p>

        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-2" delay={0.1}>
          {LICENSES.map((l) => (
            <SItem key={l.badge}>
              <div className="bg-card border border-border rounded-xl p-5 hover:bg-secondary transition-colors h-full">
                <span className={`font-mono text-[10px] px-2 py-1 rounded ${l.color} bg-current/10`}>{l.badge}</span>
                <div className={`font-mono text-2xl font-medium mt-3 mb-2 ${l.color}`}>{l.mult}</div>
                <h4 className="text-sm font-semibold mb-2">{l.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{l.desc}</p>
              </div>
            </SItem>
          ))}
        </Stagger>

        {/* Revenue split */}
        <motion.div
          className="mt-8 bg-card border border-border rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, ease: SNAP }}
        >
          <h4 className="text-base font-bold mb-4">💸 수익 배분 구조</h4>
          <div className="flex h-3 rounded overflow-hidden gap-px mb-5">
            <div className="bg-accent" style={{ width: '60%' }} />
            <div className="bg-hoot-green" style={{ width: '25%' }} />
            <div className="bg-muted-foreground/40" style={{ width: '9.375%' }} />
            <div className="bg-destructive" style={{ width: '5.625%' }} />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[
              { pct: "60%", label: "데이터 생산자 (나)", color: "text-accent" },
              { pct: "25%", label: "검증 노드", color: "text-hoot-green" },
              { pct: "9.375%", label: "프로토콜 운영", color: "text-muted-foreground" },
              { pct: "5.625%", label: "영구 소각 🔥", color: "text-destructive" },
            ].map((r) => (
              <div key={r.label}>
                <div className={`font-mono text-xl font-medium ${r.color}`}>{r.pct}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ BIG QUOTE ═══ */
function QuoteSection() {
  return (
    <section className="relative border-t border-b border-border py-20 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 glow-acc pointer-events-none" />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: SNAP }}
      >
        <p className="text-2xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-snug">
          AI를 쓰면 AI 회사가 이득을 봅니다.
          <br />
          <span className="text-accent">HOOT에서는 당신이 이득을 봅니다.</span>
        </p>
        <p className="font-mono text-xs text-muted-foreground mt-4 tracking-widest">Use AI · Train AI · Own AI</p>
      </motion.div>
    </section>
  );
}

/* ═══ PERSONAS ═══ */
const PERSONAS = [
  { icon: "🧑‍💻", who: "AI를 매일 쓰는 개발자 · 직장인 · 전문직", how: "지금 하던 대로 Hoot Browser로 AI를 씁니다. 따로 할 일이 없습니다. 쌓인 데이터를 DATA HUB에 올려놓으면 AI 회사들이 사갑니다.", tag: "쓸수록 자산이 쌓인다", tagColor: "text-accent bg-accent/10", border: "border-t-accent" },
  { icon: "🏢", who: "AI를 학습시키거나 개발하는 기업", how: "DATA HUB에서 원하는 도메인의 검증된 데이터를 구매합니다. 암호학적 증명이 포함되어 있어 법적 리스크 없이 사용합니다.", tag: "검증된 데이터를 빠르게", tagColor: "text-hoot-green bg-hoot-green/10", border: "border-t-hoot-green" },
  { icon: "⚙️", who: "블록체인 노드 운영에 관심 있는 참여자", how: "HOOT 노드를 운영하며 PPAP 검증에 참여합니다. 검증할 때마다 수수료를 받습니다. 신뢰를 담보로 수익을 얻는 구조.", tag: "검증 참여로 수익 창출", tagColor: "text-hoot-gold bg-hoot-gold/10", border: "border-t-hoot-gold" },
];

function PersonaSection() {
  return (
    <section className="py-24 px-6 md:px-10 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        <motion.span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>사용자 유형</motion.span>
        <motion.h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
          나한테 맞는 사용법
        </motion.h2>
        <motion.p className="text-base text-muted-foreground mb-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          쓰는 방식에 따라 얻는 것이 다릅니다.
        </motion.p>

        <Stagger className="grid md:grid-cols-3 gap-4" delay={0.1}>
          {PERSONAS.map((p) => (
            <SItem key={p.who}>
              <div className={`bg-card border border-border ${p.border} border-t-2 rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform`}>
                <div className="text-3xl mb-4">{p.icon}</div>
                <h4 className="text-sm font-bold mb-3">{p.who}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.how}</p>
                <span className={`font-mono text-[10px] px-2 py-1 rounded ${p.tagColor}`}>{p.tag}</span>
              </div>
            </SItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ═══ TOKEN ═══ */
function TokenSection() {
  return (
    <section id="token" className="py-24 px-6 md:px-10 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        <motion.span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>HOOT 토큰</motion.span>
        <motion.h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
          생태계의 연료
        </motion.h2>
        <motion.p className="text-base text-muted-foreground max-w-lg mb-14 leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, ease: SNAP }}>
          총 10억 개 발행, 추가 발행 없음. 거래마다 소각이 일어나 시간이 지날수록 유통량이 줄어듭니다.
        </motion.p>

        <Stagger className="grid md:grid-cols-3 gap-4 mb-8" delay={0.1}>
          {[
            { icon: "💰", title: "결제 수단", desc: "DATA HUB에서 PPAP 데이터를 구매하거나 Model Marketplace에서 AI 모델을 구매할 때 HOOT으로 결제합니다.", highlight: "데이터 & 모델 구매" },
            { icon: "🏛️", title: "노드 스테이킹", desc: "검증 노드를 운영하려면 125,000 HOOT을 예치해야 합니다. 정직한 운영엔 보상, 부정 행위엔 몰수.", highlight: "125,000 HOOT 예치" },
            { icon: "🗳️", title: "거버넌스 투표", desc: "HOOT 보유자는 프로토콜의 주요 결정에 투표할 수 있습니다. 수수료 비율, 새로운 기능, 정책 변경.", highlight: "커뮤니티 거버넌스" },
          ].map((t) => (
            <SItem key={t.title}>
              <div className="bg-card border border-border rounded-xl p-6 h-full">
                <div className="text-2xl mb-3">{t.icon}</div>
                <h4 className="text-sm font-bold mb-2">{t.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{t.desc}</p>
                <span className="font-mono text-[10px] px-2 py-1 rounded bg-accent/10 text-accent">{t.highlight}</span>
              </div>
            </SItem>
          ))}
        </Stagger>

        {/* Distribution */}
        <motion.div className="bg-card border border-border rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
          <h4 className="text-base font-bold mb-4">📊 토큰 분배 구조 (총 10억 HOOT)</h4>
          <div className="flex h-2.5 rounded overflow-hidden gap-px mb-4">
            <div className="bg-accent" style={{ width: '30%' }} />
            <div className="bg-hoot-green" style={{ width: '20%' }} />
            <div className="bg-hoot-gold" style={{ width: '15%' }} />
            <div className="bg-hoot-purple" style={{ width: '15%' }} />
            <div className="bg-hoot-teal" style={{ width: '12%' }} />
            <div className="bg-muted-foreground/40" style={{ width: '8%' }} />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { dot: "bg-accent", label: "에코시스템 리워드", pct: "30%" },
              { dot: "bg-hoot-green", label: "팀 & 어드바이저", pct: "20%" },
              { dot: "bg-hoot-gold", label: "프리세일", pct: "15%" },
              { dot: "bg-hoot-purple", label: "프라이빗 세일", pct: "15%" },
              { dot: "bg-hoot-teal", label: "재단 & R&D", pct: "12%" },
              { dot: "bg-muted-foreground/40", label: "유동성 공급", pct: "8%" },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-sm shrink-0 ${d.dot}`} />
                <div>
                  <div className="text-xs text-muted-foreground">{d.label}</div>
                  <div className="font-mono text-[10px] text-muted-foreground/60">{d.pct}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ DEMO ═══ */
function DemoSection() {
  return (
    <section className="py-24 px-6 md:px-10 border-t border-border relative">
      <div className="absolute inset-0 dot-grid-sparse opacity-30 pointer-events-none" />
      <div className="max-w-[1100px] mx-auto relative z-10">
        <motion.span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>라이브 데모</motion.span>
        <motion.h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
          이렇게 동작합니다
        </motion.h2>
        <motion.p className="text-base text-muted-foreground max-w-lg mb-10 leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, ease: SNAP }}>
          실제 오케스트레이션을 관찰하세요 — 모든 상호작용이 어떻게 암호학적으로 당신의 것이 되는지.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, ease: SNAP }}>
          <BrowserDemo />
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ FAQ ═══ */
const FAQS = [
  { q: "내 대화 내용이 다 공개되는 건가요?", a: "아닙니다. 대화의 내용은 암호화되어 보호됩니다. 검증 노드는 \"이 데이터가 진짜인지\"만 확인하고, 내용을 읽지는 못합니다. DATA HUB에서 판매하기로 결정하기 전까지 누구도 당신의 대화를 볼 수 없습니다." },
  { q: "AI를 하루에 몇 번 써야 수익이 생기나요?", a: "정해진 기준은 없습니다. 하루 평균 AI 대화 10건을 한 달 유지하면 괜찮은 수준의 PPAP가 쌓입니다. 중요한 건 양보다 질입니다. 단순한 질문보다 깊이 있는 대화가 훨씬 높은 점수를 받습니다." },
  { q: "블록체인이나 암호화폐를 몰라도 쓸 수 있나요?", a: "네. 일반 사용자 입장에서는 지갑 연결 한 번 외에 블록체인 지식이 필요 없습니다. 보상은 자동으로 내 지갑에 들어오고, 데이터 등록도 버튼 클릭입니다." },
  { q: "ChatGPT, Claude 외에 다른 AI도 되나요?", a: "네. Gemini, Perplexity 등 HTTPS로 통신하는 AI 서비스는 원칙적으로 모두 지원됩니다. 지원 서비스 목록은 계속 확장될 예정입니다." },
  { q: "Hoot Browser는 지금 당장 쓸 수 있나요?", a: "2026년 상반기 기준으로 퍼블릭 베타 준비 중입니다. 현재는 초기 테스터 모집 단계이며, 노드 프리세일 참여자는 우선 접근권을 받게 됩니다." },
  { q: "내 AI 모델을 만들 수도 있나요?", a: "네. 쌓인 PPAP 데이터로 나만의 AI 모델을 파인튜닝할 수 있습니다. 완성된 모델은 NFT로 블록체인에 등록되어 내 소유물이 됩니다. 모델을 기반으로 누군가 새로운 AI를 만들면 로열티가 자동으로 지급됩니다." },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 md:px-10 border-t border-border">
      <div className="max-w-[760px] mx-auto">
        <motion.span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>자주 묻는 질문</motion.span>
        <motion.h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: SNAP }}>
          궁금한 것들
        </motion.h2>

        <div className="space-y-1">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, ease: SNAP }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-secondary transition-colors"
              >
                <span className="text-sm font-semibold pr-4">
                  <span className="text-accent mr-2">Q.</span>
                  {faq.q}
                </span>
                <span className={`w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-muted-foreground font-mono text-base shrink-0 transition-transform ${open === i ? 'rotate-45 bg-accent/15 text-accent' : ''}`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-60 pb-4' : 'max-h-0'}`}>
                <div className="px-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ CTA ═══ */
function CTASection() {
  return (
    <section id="cta" className="relative py-20 px-6 text-center border-t border-border overflow-hidden">
      <div className="absolute inset-0 glow-acc pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: SNAP }}
        >
          HOOT 생태계에
          <br />
          <span className="text-accent">참여하세요</span>
        </motion.h2>
        <motion.div
          className="flex gap-3 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, ease: SNAP }}
        >
          <a href="#" className="px-8 py-3.5 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30">
            브라우저 다운로드
          </a>
          <a href="#" className="px-8 py-3.5 rounded-lg bg-secondary text-foreground font-medium text-sm border border-border hover:bg-secondary/80 transition-all">
            문서 읽기
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ MAIN PAGE ═══ */
export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <PPAPSection />
      <DemoSection />
      <MarketSection />
      <QuoteSection />
      <PersonaSection />
      <TokenSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
