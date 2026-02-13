import { ScrollReveal } from "@/components/hoot/ScrollReveal";
import { BrowserDemo } from "@/components/hoot/BrowserDemo";
import { Navbar } from "@/components/hoot/Navbar";
import { Footer } from "@/components/hoot/Footer";
import { Link } from "react-router-dom";

const PARTNERS = ["NVIDIA", "0G Labs", "Arbitrum", "Base", "Alchemy", "Google", "AppWorks", "Seedify"];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[0.95] mb-6 max-w-4xl">
              AI를 쓰면,<br />
              <span className="italic text-primary">검증된 데이터</span>가<br />
              만들어집니다.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
              AI 사용 데이터를 암호학적으로 증명하고, 품질을 평가하고, 수익을 창출하는 프로토콜.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/browser"
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors"
              >
                브라우저 체험하기
              </Link>
              <a
                href="#"
                className="px-8 py-3.5 border border-border text-foreground rounded-xl font-bold text-sm hover:bg-secondary transition-colors"
              >
                Whitepaper 읽기
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-6 items-center">
                {PARTNERS.map((p) => (
                  <span key={p} className="text-sm font-semibold text-muted-foreground/50 tracking-wide">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HOW IT WORKS — 3 simple steps ── */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-16 text-center">
              어떻게 <span className="italic text-primary">작동하나요?</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "AI를 평소처럼 사용",
                desc: "Hoot 브라우저에서 ChatGPT, Claude, Gemini를 하나의 사이드바로 사용하세요.",
                icon: "💬",
              },
              {
                step: "02",
                title: "자동으로 데이터 검증",
                desc: "zkTLS가 약 6초 만에 AI 대화를 암호학적으로 증명합니다. 비용 $0.013.",
                icon: "🔐",
              },
              {
                step: "03",
                title: "수익 창출",
                desc: "검증된 데이터는 온체인 자산(PPAP)이 됩니다. 판매 시 수익의 60%를 받습니다.",
                icon: "💰",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-card border border-border rounded-2xl p-8 h-full relative overflow-hidden group hover:border-primary/30 transition-colors">
                  <div className="text-4xl mb-5">{item.icon}</div>
                  <div className="text-xs font-bold text-primary tracking-[0.15em] mb-2">{item.step}</div>
                  <h3 className="font-display text-2xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BROWSER DEMO — Centerpiece ── */}
      <section className="py-24 px-6 md:px-12 border-t border-border bg-card">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                한 번의 명령,<br />
                <span className="italic text-primary">세 개의 AI</span>,<br />
                검증된 결과.
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                실제 오케스트레이션을 확인하세요. 하나의 질문으로 세 가지 스킬이 작동하고, PPAP가 전체 과정을 기록합니다.
              </p>
            </div>
          </ScrollReveal>
          <BrowserDemo />
        </div>
      </section>

      {/* ── WHY IT MATTERS — Simple crisis cards ── */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 text-center">
              왜 <span className="italic text-destructive">지금</span> 필요한가?
            </h2>
            <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
              AI 산업은 세 가지 위기에 동시에 직면해 있습니다.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "데이터 고갈",
                stat: "2026–2028",
                statLabel: "고품질 데이터 소진 예상",
                desc: "AI 학습용 인간 데이터가 고갈되고 있습니다. Reddit 라이선스만 $203M — 하지만 원작자 수익은 $0.",
              },
              {
                num: "02",
                title: "모델 붕괴",
                stat: "~50%",
                statLabel: "5세대 AI 품질 손실",
                desc: "AI가 AI 생성물로 학습하면 품질이 비가역적으로 하락합니다. 웹 텍스트의 ~60%가 이미 합성입니다.",
              },
              {
                num: "03",
                title: "에이전트 신뢰 공백",
                stat: "1.2M",
                statLabel: "1주 만에 등록된 가짜 에이전트",
                desc: "에이전트가 신뢰 검증 없이 작동합니다. Moltbook은 1주 만에 120만 개의 위조 에이전트를 증명했습니다.",
              },
            ].map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-destructive/30 transition-colors">
                  <span className="text-xs font-bold text-destructive bg-destructive/10 px-2.5 py-1 rounded-lg">
                    CRISIS {c.num}
                  </span>
                  <h3 className="font-display text-2xl text-foreground mt-4 mb-2">{c.title}</h3>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-foreground">{c.stat}</div>
                    <div className="text-xs text-muted-foreground">{c.statLabel}</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF STACK — Visual, not table ── */}
      <section className="py-24 px-6 md:px-12 border-t border-border bg-card">
        <div className="max-w-[900px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              5단계 <span className="italic text-primary">증명 스택</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-12">
              약 6초 · $0.013 · 위조 확률 2⁻¹²⁸
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                { step: "01", label: "캡처", tech: "zkTLS" },
                { step: "02", label: "검증", tech: "FROST 5-of-5" },
                { step: "03", label: "점수화", tech: "CQS" },
                { step: "04", label: "등록", tech: "ERC-721" },
                { step: "05", label: "거래", tech: "DATA HUB" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-background border border-border rounded-xl px-5 py-4 text-center min-w-[100px]">
                    <div className="text-xs font-bold text-primary mb-1">{s.step}</div>
                    <div className="text-sm font-bold text-foreground">{s.label}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{s.tech}</div>
                  </div>
                  {i < 4 && <span className="text-muted-foreground/30 text-lg hidden md:block">→</span>}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TRACTION ── */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-[900px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12">
              이미 <span className="italic text-primary">시작</span>되었습니다
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: "400K+", label: "유저" },
              { value: "80%", label: "일간 리텐션" },
              { value: "$22.5K", label: "B2B 매출" },
              { value: "8+", label: "글로벌 파트너" },
            ].map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="text-3xl font-bold text-foreground mb-1">{t.value}</div>
                  <div className="text-xs text-muted-foreground">{t.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 px-6 md:px-12 border-t border-border bg-foreground">
        <div className="max-w-[900px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-5xl md:text-7xl text-background mb-8">
              ENTER THE<br />
              <span className="italic">HOOT ECOSYSTEM</span>
            </h2>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                to="/browser"
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors"
              >
                브라우저 다운로드
              </Link>
              <a
                href="#"
                className="px-8 py-3.5 border border-background/20 text-background rounded-xl font-bold text-sm hover:bg-background/10 transition-colors"
              >
                문서 읽기
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
