'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Mail, Linkedin, CheckCircle2 } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[rgba(11,12,16,0.65)] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <img src="/MEZKENZ_logo_gray.jpg" alt="Mezkenz logo" className="h-10 w-10 object-contain grayscale" />
            <strong className="tracking-wider">MEZKENZ</strong>
          </a>
          <nav className="hidden gap-2 md:flex">
            <a className="rounded-xl px-3 py-2 text-zinc-300 hover:bg-white/5" href="#diensten">Diensten</a>
            <a className="rounded-xl px-3 py-2 text-zinc-300 hover:bg-white/5" href="#over">Over</a>
            <a className="rounded-xl px-3 py-2 text-zinc-300 hover:bg-white/5" href="#contact">Contact</a>
          </nav>
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-tr from-sky-500 to-sky-300 text-slate-900 font-bold">
              <a href="#contact">Plan een kennismaking</a>
            </Button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-10 pt-16 md:pt-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300">IT Teamleiderschap • Coaching • Teamopbouw</span>
            <h1 className="mt-3 text-4xl leading-tight md:text-5xl">Jouw partner in IT teamleiderschap en groei</h1>
            <p className="mt-3 max-w-xl text-lg text-zinc-300">
              Ik help bedrijven bij het bouwen, leiden en optimaliseren van IT‑teams. Van coaching van interne teamleads
              tot het outsourcen van complete IT‑teams — Mezkenz brengt structuur, snelheid en resultaat. We helpen tools
              succesvol in productie te brengen met focus op productiviteit én teammotivatie.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild className="bg-gradient-to-tr from-sky-500 to-sky-300 text-slate-900 font-bold">
                <a href="#contact" className="flex items-center gap-2">Plan een kennismaking <ArrowRight className="h-4 w-4"/></a>
              </Button>
              <Button asChild variant="outline" className="border-white/15 bg-white/5">
                <a href="#diensten">Bekijk diensten</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card>
              <CardHeader><CardTitle>Waarom Mezkenz?</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-3 text-zinc-300">
                  {[
                    "Teams vanaf nul opbouwen, rollen scherp zetten en hiring stroomlijnen.",
                    "Leiderschap en coaching die motivatie en eigenaarschap versterken.",
                    "Betere voorspelbaarheid: duidelijke ritmes, metrics en delivery.",
                    "Beschikbaar in 🇧🇪 en remote internationaal.",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-400"/> <span>{t}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="diensten" className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl">Diensten</h2>
          <p className="mt-1 text-zinc-300">Kies de ondersteuning die je vandaag sneller vooruit helpt.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <ServiceCard title="IT TeamLead Services" bullets={[
            "Tijdelijke of externe teamlead die structuur en tempo brengt.",
            "Roadmaps, ritme (scrum/kadans) en duidelijke verantwoordelijkheden.",
            "Focus op productiviteit én teammotivatie.",
          ]}/>
          <ServiceCard title="IT Coaching" bullets={[
            "1‑op‑1 begeleiding van (nieuwe) teamleads.",
            "Communicatie, feedback en stakeholdermanagement.",
            "Teamperformantie en groei.",
          ]}/>
          <ServiceCard title="Teamopbouw & Outsourcing" bullets={[
            "Advies en uitvoering bij samenstellen van teams.",
            "Outsourcingstrategie, partnerkeuze en governance.",
            "Kennisoverdracht en onboarding.",
          ]}/>
          <ServiceCard title="Projectassistentie" bullets={[
            "Implementatie en go‑live support voor nieuwe tools.",
            "Procesverbetering en documentatie.",
            "Tijdelijke versterking van teams.",
          ]}/>
        </div>
      </section>

      <section id="over" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Over Mezkenz</CardTitle></CardHeader>
            <CardContent className="text-zinc-300">
              Ik ben <b>[jouw naam]</b>, IT TeamLead met ervaring in het opbouwen en aansturen van teams.
              Ik combineer technische kennis met leiderschap en coaching, zodat organisaties niet alleen projecten
              opleveren, maar ook sterke teams bouwen die klaar zijn voor de toekomst.
              <p className="mt-3 text-zinc-200">Missie: duurzame IT‑teams die efficiënt, gemotiveerd en toekomstgericht werken.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Troeven</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-400"/>Teams from scratch: rollen, hiring, onboarding</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-400"/>Heldere metrics en ritme; betere voorspelbaarheid</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-400"/>Coaching‑aanpak die motiveert en eigenaarschap stimuleert</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl">Contact</h2>
          <p className="mt-1 text-zinc-300">Klaar om te sparren? Stuur een bericht of plan meteen een kennismaking.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          <Card className="md:col-span-3">
            <CardContent className="pt-6">
              <form action="mailto:info@mezkenz.be" method="post" encType="text/plain" className="grid gap-3 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-zinc-300">Naam</label>
                  <Input id="name" name="name" placeholder="Voornaam Achternaam" required />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1 block text-sm text-zinc-300">Bedrijf</label>
                  <Input id="company" name="company" placeholder="Bedrijfsnaam" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className="mb-1 block text-sm text-zinc-300">E‑mail</label>
                  <Input type="email" id="email" name="email" placeholder="jij@bedrijf.be" required />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="msg" className="mb-1 block text-sm text-zinc-300">Bericht</label>
                  <Textarea id="msg" name="message" placeholder="Waarmee kan ik helpen?" />
                </div>
                <div className="flex items-center gap-2">
                  <Button type="submit">Verstuur</Button>
                  <Button asChild variant="outline">
                    <a href="mailto:info@mezkenz.be" className="flex items-center gap-2"><Mail className="h-4 w-4"/>Of mail direct</a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-3">
            <Card>
              <CardHeader className="pb-2"><CardTitle>Bedrijfsgegevens</CardTitle></CardHeader>
              <CardContent className="text-zinc-300">
                <p>Mezkenz — België (remote internationaal)</p>
                <p>E‑mail: <a className="underline decoration-sky-400/50 underline-offset-2" href="mailto:info@mezkenz.be">info@mezkenz.be</a></p>
                <p>LinkedIn: <a className="inline-flex items-center gap-1 underline decoration-sky-400/50 underline-offset-2" href="#"><Linkedin className="h-4 w-4"/> Profiel</a></p>
                <p className="text-sm text-zinc-400 mt-2">KBO: [na inschrijving] · BTW: [na activatie]</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-zinc-400">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4">
          <small>© {new Date().getFullYear()} Mezkenz — Alle rechten voorbehouden</small>
          <small>Made with ❤️ for high‑performing teams</small>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <Card>
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent>
        <ul className="space-y-2 text-zinc-300">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-400"/>{b}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
