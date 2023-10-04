import Image from 'next/image'
import { Button } from '../components/ui/button'
import { Ghost } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <p className= 'text-3xl font-bold text-indigo-500'> 
        Hello Discord Clone
        </p>
        <Button variant='test'>
          Click me
          </Button>
    </div>
  )
}
