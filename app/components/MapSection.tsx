import { MapPin, Leaf, Wifi, Shield, ArrowRight } from "lucide-react";

const POINTS = [
  {
    icon: MapPin,
    title: "Prime VI Location",
    desc: "Close to gyms, offline events and restaurants",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Design",
    desc: "Sustainable materials and energy-efficient lighting throughout",
  },
  {
    icon: Wifi,
    title: "Ultra-Fast Internet",
    desc: "Dedicated 1Gbps fibre with zero downtime guarantee",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    desc: "Biometric access, CCTV and on-site security personnel",
  },
];

export default function MapSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#CFE1F4]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center items-center gap-8">
            <div className="w-10 h-10 bg-d-accent rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
              <ArrowRight size={18} className="text-primary" />
            </div>

            {/* <MapPlaceholder /> */}
            <div className="w-full shadow-lg rounded-2xl overflow-hidden">
              {/* <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=6.5244,3.3792&z=15&output=embed"
            /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7347878065953!2d3.4174211999999997!3d6.428108700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8acd7c32d28f%3A0xe347383614f9c419!2s4%20Abagbon%20Cl%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1782124956277!5m2!1sen!2sng"
                width="100%"
                height="250"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col gap- lg:max-w-sm">
            {/* <div>
              <p className="text-xs font-bold uppercase tracking-widest text-highlight mb-2">
                Find Us
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                Perfectly positioned for success
              </h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Strategically located in Victoria Island, Lagos — the commercial
                heartbeat of Nigeria.
              </p>
            </div> */}

            <ul className="flex flex-col gap-4">
              {POINTS.map((pt) => (
                <li key={pt.title} className="flex items-start gap-4 font-mono">
                  <div className="w-10 h-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <pt.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm italic">
                      {pt.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{pt.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* <button className="w-fit px-6 py-3 bg-highlight text-white font-semibold rounded-full hover:bg-highlight/90 transition-colors text-sm shadow-md flex items-center gap-2">
              Get Directions <ArrowRight size={16} />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
