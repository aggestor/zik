import BlueButtons from '@/components/BlueButtons'
import TextBox from '@/components/TextBox'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col bg-white items-center justify-between p-24">
      <div className='w-1/2 rounded-lg border p-4 h-[70%]'>
        <TextBox name='name' label="Nom" placeholder="Votre nom"/>
        <TextBox name='middleName' label="Post nom" placeholder="Votre post nom"/>
        <TextBox name='lastName' label="Prenom" placeholder="Votre premom"/>
        <BlueButtons.BaseBlueButton text='Hello Base Button'/>
      </div>
    </main>
  )
}
