import iconFacebook from '@/assets/icon-facebook.svg'
import iconInstagram from '@/assets/icon-instagram.svg'
import iconTwitter from '@/assets/icon-twitter.svg'
import iconYoutube from '@/assets/icon-youtube.svg'
import { StaticImageData } from 'next/image'

export const iconMap: Record<string, StaticImageData> = {
  instagram: iconInstagram,
  twitter: iconTwitter,
  youtube: iconYoutube,
  facebook: iconFacebook,
}
