import Image from 'next/image'
import SectionReveal from '@/components/ui/SectionReveal'
import { CONTACT } from '@/lib/constants'

// Static placeholder images representing Forma Pasta's Instagram aesthetic
const instagramPosts = [
  {
    id: '1',
    image: '/images/food/food-1.jpg',
    alt: 'Hand-rolled fresh tagliatelle on a floured board',
    caption: 'Fresh tagliatelle, made this morning.',
  },
  {
    id: '2',
    image: '/images/food/food-2.jpg',
    alt: 'Pasta aglio e olio with fresh herbs',
    caption: 'Simple. Perfect.',
  },
  {
    id: '3',
    image: '/images/food/food-3.jpg',
    alt: 'Closeup of fresh pasta dough being shaped',
    caption: 'Orecchiette day.',
  },
  {
    id: '4',
    image: '/images/food/food-4.jpg',
    alt: 'Pasta class participants making fresh pasta',
    caption: 'Saturday class crew. 🍝',
  },
  {
    id: '5',
    image: '/images/food/food-5.jpg',
    alt: 'Jars of house-made pasta sauces at the market',
    caption: 'Take some home.',
  },
  {
    id: '6',
    image: '/images/food/food-6.jpg',
    alt: 'Rustic pasta dish plated with herbs and parmesan',
    caption: 'Friday dinner is ready.',
  },
]

export default function InstagramStrip() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-10">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-muted)] mb-2">
              Follow along
            </p>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-3xl md:text-4xl italic font-semibold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="Forma Pasta on Instagram"
            >
              {CONTACT.instagramHandle}
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group block"
                aria-label={`View ${post.caption} on Instagram`}
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <p className="opacity-0 group-hover:opacity-100 font-body text-xs text-white text-center px-2 transition-opacity duration-300">
                    {post.caption}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
