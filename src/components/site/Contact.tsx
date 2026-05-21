import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ease = [0.4, 0, 0.2, 1] as const;

const contacts = [
  // { icon: MapPin, title: "Our Office", body: "1280 Market Street, Suite 400\nSan Francisco, CA 94102" },
  // { icon: Phone, title: "Call Us Anytime", body: "77559 01707" },
  { icon: Mail, title: "Email Us", body: "binaryvisionai@gmail.com" },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-background">
      <div className="container-x">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's build something <span className="text-gradient-brand">remarkable</span> together.</>}
          description="Tell us about your project and we'll get back to you within one business day."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-2 space-y-5">
            {contacts.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="flex gap-5 p-6 rounded-2xl bg-surface ring-1 ring-border"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="font-semibold text-heading">{c.title}</div>
                  <div className="text-sm text-body whitespace-pre-line mt-1">{c.body}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-3 bg-surface rounded-3xl p-8 md:p-10 ring-1 ring-border"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your Name" type="text" placeholder="John Carter" />
              <Field label="Email Address" type="email" placeholder="you@company.com" />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-semibold text-heading mb-2">Service Interested In</label>
              <select className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-heading focus:outline-none focus:ring-2 focus:ring-primary-glow transition">
                <option>Web & Mobile Development</option>
                <option>E-Commerce Solutions</option>
                <option>API & Backend Integration</option>
                <option>Digital Transformation and Performance</option>
              </select>
            </div>
            <div className="mt-5">
              <label className="block text-sm font-semibold text-heading mb-2">Your Message</label>
              <textarea rows={5} placeholder="Tell us about your project..." className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-heading focus:outline-none focus:ring-2 focus:ring-primary-glow transition resize-none" />
            </div>
            <button type="submit" className="btn-gradient mt-7">
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-12 rounded-3xl overflow-hidden ring-1 ring-border h-80 md:h-[420px] relative"
        >
          <iframe
            title="Office location"
            // src="https://www.openstreetmap.org/export/embed.html?bbox=-122.43%2C37.77%2C-122.39%2C37.79&amp;layer=mapnik"
            src="https://www.google.com/maps?q=Dr,+Rafael+Pereira+Rd,+Comba,+Madgaon,+Goa+403601,+India&output=embed"
            className="absolute inset-0 w-full h-full grayscale-[20%]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-heading mb-2">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-heading placeholder:text-body/60 focus:outline-none focus:ring-2 focus:ring-primary-glow transition" />
    </div>
  );
}
