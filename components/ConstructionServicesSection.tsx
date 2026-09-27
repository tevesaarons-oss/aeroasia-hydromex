import { Mail } from "lucide-react";
import { CONTACT, SOCIAL } from "@/lib/data";
import { FacebookIcon, WhatsAppIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";

export function ConstructionServicesSection() {
  return (
    <section id="construction-services" aria-labelledby="construction-heading" className="scroll-mt-24 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-navy-2/30 p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-silver/80">
              Construction Services
            </p>
            <div className="mt-3 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <h2 id="construction-heading" className="text-display text-xl font-semibold text-clean sm:text-2xl">
                  J’NER CEPADA CONSTRUCTION
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-silver/90">
                  For construction service inquiries, contact {CONTACT.name} to
                  discuss your requirements. Please identify J’NER CEPADA
                  CONSTRUCTION in your message.
                </p>
                <p className="mt-2 max-w-2xl text-xs leading-relaxed text-silver/70">
                  Aeroasia’s wastewater projects and engineering credentials on
                  this site belong to Aeroasia-Hydromex. They are not presented
                  as J’NER’s project portfolio or credentials.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: SOCIAL.facebookUrl, label: "Facebook / Messenger", icon: FacebookIcon },
                  { href: SOCIAL.whatsappUrl, label: "WhatsApp", icon: WhatsAppIcon },
                  { href: `${SOCIAL.emailUrl}?subject=${encodeURIComponent("J’NER CEPADA CONSTRUCTION inquiry")}`, label: "Email Nequi", icon: Mail },
                ].map(({ href, label, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs text-clean transition-colors hover:border-cyan/40 hover:text-cyan">
                    <Icon className="size-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
