import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AchievementMetrics from '@/components/sections/AchievementMetrics'
import CareerTimeline from '@/components/sections/CareerTimeline'
import WhatIDoSection from '@/components/sections/WhatIDoSection'
import EducationCertPreview from '@/components/sections/EducationCertPreview'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark">
      <Navbar />
      <HeroSection />
      <AchievementMetrics />
      <CareerTimeline />
      <WhatIDoSection />
      <EducationCertPreview />
    </main>
  )
} 