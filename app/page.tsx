import { Metadata } from "next"
import { Button } from "components/Button/Button"

const showcase = [
  { title: "Retratos editoriales", tag: "Fotografía", year: "2024" },
  { title: "Campañas lifestyle", tag: "Video", year: "2025" },
  { title: "Eventos en vivo", tag: "Cobertura", year: "2024" },
  { title: "Brand films", tag: "Producción", year: "2025" },
]

const services = [
  {
    title: "Fotografía premium",
    description: "Dirección de arte, scouting y fotografía editorial para marcas que buscan historias visuales únicas.",
  },
  {
    title: "Video cinematográfico",
    description: "Guion, rodaje y edición con estética cinematográfica, pensado para campañas con impacto emocional.",
  },
  {
    title: "Postproducción creativa",
    description:
      "Color grading, motion graphics y sonido para entregar piezas listas para publicar en todos los canales.",
  },
]

const highlights = [
  { label: "Años creando historias", value: "8+" },
  { label: "Proyectos entregados", value: "120" },
  { label: "Formatos dominados", value: "12" },
]

export const metadata: Metadata = {
  title: "ACMedia — Fotografía & Video",
  description: "Portafolio de ACMedia, estudio creativo especializado en fotografía y video para marcas.",
}

export default function Web() {
  return (
    <main className="bg-[#f5f6fb] text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,164,255,0.35),_transparent_60%)]" />
        <div className="acmedia-pan absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.95),rgba(237,242,255,0.9),rgba(255,255,255,0.95))]" />
        <div className="relative mx-auto grid max-w-(--breakpoint-xl) gap-12 px-6 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs tracking-[0.4em] text-slate-600 uppercase shadow-sm">
              ACMedia Studio
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
            </span>
            <h1 className="text-4xl leading-tight font-semibold md:text-5xl lg:text-6xl">
              Fotografía y video con estética cinematográfica para marcas memorables.
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Somos un estudio creativo enfocado en capturar energía real: desde campañas lifestyle hasta documentales
              de marca. Creamos imágenes que se sienten vivas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#portafolio">Ver portafolio</Button>
              <Button intent="secondary" href="#contacto">
                Agenda una sesión
              </Button>
            </div>
            <div className="flex gap-8 pt-8">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-sm">
                  <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                  <p className="text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="acmedia-glow absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle,_rgba(129,164,255,0.35),_transparent_65%)] blur-2xl" />
            <div className="relative grid gap-6 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_60px_rgba(148,163,184,0.35)]">
              <div className="flex items-center justify-between text-xs tracking-[0.4em] text-slate-500 uppercase">
                <span>Behind the lens</span>
                <span>2025</span>
              </div>
              <div className="grid gap-4">
                <div className="acmedia-float h-48 rounded-2xl bg-[linear-gradient(135deg,#cfd9ff,#8eb3ff)] p-6">
                  <p className="text-lg font-semibold text-slate-900">Campaña nocturna</p>
                  <p className="text-sm text-slate-600">Neón, texturas urbanas y movimiento.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="acmedia-float h-28 rounded-2xl bg-[linear-gradient(135deg,#ffe3c4,#ffc6a0)] p-4">
                    <p className="text-sm font-semibold text-slate-900">Golden hour</p>
                    <p className="text-xs text-slate-600">Retratos cálidos.</p>
                  </div>
                  <div className="acmedia-float h-28 rounded-2xl bg-[linear-gradient(135deg,#b7f0e1,#6ddbbf)] p-4">
                    <p className="text-sm font-semibold text-slate-900">Backstage</p>
                    <p className="text-xs text-slate-600">Rodajes reales.</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Cada proyecto empieza con una historia. Nuestro equipo la transforma en visuales que hacen que la marca
                respire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-white py-16">
        <div className="mx-auto grid max-w-(--breakpoint-xl) gap-10 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm tracking-[0.3em] text-slate-400 uppercase">Servicios</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Diseñamos experiencias visuales de punta a punta.</h2>
            <p className="text-slate-600">
              Desde la preproducción hasta la entrega final, cada etapa está pensada para que tu marca tenga una
              presencia poderosa y coherente en todos los canales.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-2 hover:border-slate-300 hover:shadow-md"
              >
                <div className="mb-4 h-10 w-10 rounded-xl bg-slate-100 p-2">
                  <div className="acmedia-glow h-full w-full rounded-lg bg-slate-300/70" />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portafolio" className="py-16">
        <div className="mx-auto max-w-(--breakpoint-xl) px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm tracking-[0.3em] text-slate-400 uppercase">Portafolio</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Campañas que se sienten en movimiento.</h2>
            </div>
            <Button intent="secondary" href="#contacto">
              Solicitar propuesta
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {showcase.map((item, index) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(148,163,184,0.18),transparent)]" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between text-xs tracking-[0.35em] text-slate-500 uppercase">
                    <span>{item.tag}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-slate-600">
                    {index % 2 === 0
                      ? "Dirección creativa y estética documental con luces dinámicas y narrativa íntima."
                      : "Imágenes rápidas, textura analógica y composición minimalista para redes y medios."}
                  </p>
                  <div className="h-36 rounded-2xl bg-[linear-gradient(120deg,#d8e1ff,#f3f6ff,#c9dcff)] p-4">
                    <div className="acmedia-float h-full rounded-xl border border-white/60 bg-white/70 p-4">
                      <p className="text-xs text-slate-500">Preview</p>
                      <p className="text-sm font-semibold">Clip seleccionado</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-(--breakpoint-xl) px-6">
          <div className="grid gap-10 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm tracking-[0.3em] text-slate-400 uppercase">Metodología</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Una producción fluida, pensada para equipos ágiles.
              </h2>
              <p className="mt-4 text-slate-600">
                Organizamos cada rodaje con tableros, hojas de llamado y entregables claros. Trabajamos con tu equipo
                interno para que la narrativa se traduzca en assets listos para lanzar.
              </p>
            </div>
            <div className="grid gap-4">
              {["Moodboard y preproducción", "Rodaje en set o locación", "Edición, color y motion"].map((step) => (
                <div
                  key={step}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <p className="text-sm font-medium">{step}</p>
                  <span className="acmedia-glow h-3 w-3 rounded-full bg-emerald-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16">
        <div className="mx-auto max-w-(--breakpoint-xl) px-6">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(120deg,rgba(210,224,255,0.75),rgba(255,255,255,0.95))] p-10 shadow-sm">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(148,163,184,0.35),_transparent_60%)] blur-2xl" />
            <div className="relative space-y-6">
              <p className="text-sm tracking-[0.3em] text-slate-500 uppercase">ACMedia</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Hagamos que tu marca se vea y se sienta diferente.</h2>
              <p className="max-w-2xl text-slate-600">
                Agenda una sesión estratégica y recibe un plan visual con referencias creativas, tiempos y entregables.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="mailto:hola@acmedia.studio">Escríbenos</Button>
                <Button intent="secondary" href="tel:+525511223344">
                  Llamar ahora
                </Button>
              </div>
            </div>
          </div>
          <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
            <span>© 2025 ACMedia Studio</span>
            <div className="flex gap-6">
              <span>Instagram</span>
              <span>Vimeo</span>
              <span>Behance</span>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}
