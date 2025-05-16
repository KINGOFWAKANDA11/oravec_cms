import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'okyedwn1',       // ← z tvojho projektu
  dataset: 'production',       // ← väčšinou "production"
  apiVersion: '2023-01-01',    // môžeš použiť dnešný dátum
  useCdn: false,                // rýchle čítanie, vhodné na verejný web
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}