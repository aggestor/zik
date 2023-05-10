import BlueButtons from '@/components/BlueButtons'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col bg-white items-center justify-between p-24">
     <BlueButtons.SmallBlueButton text='Hello world'/>
     <BlueButtons.BaseBlueButton text='Hello Base Button'/>
    </main>
  )
}
