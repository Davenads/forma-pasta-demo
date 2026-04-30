import Hero from '@/components/sections/Hero'
import ThreePillars from '@/components/sections/ThreePillars'
import WeeklyPasta from '@/components/sections/WeeklyPasta'
import ClassesCallout from '@/components/sections/ClassesCallout'
import MarketCallout from '@/components/sections/MarketCallout'
import HoursSection from '@/components/sections/HoursSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import InstagramStrip from '@/components/sections/InstagramStrip'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreePillars />
      <WeeklyPasta />
      <ClassesCallout />
      <MarketCallout />
      <TestimonialsSection />
      <HoursSection />
      <InstagramStrip />
    </>
  )
}
